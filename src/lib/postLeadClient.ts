// lib/postLeadClient.ts
export async function postLeadClient(data: {
  nome: string;
  email: string;
  telefone: string;
  dt_nascimento: string;
}): Promise<{ errors: string[]; msg_success: string; success: boolean }> {
  try {
    const { nome, email, telefone, dt_nascimento } = data;

    // Validação de campos obrigatórios
    if (!nome?.trim() || !email?.trim() || !telefone?.trim() || !dt_nascimento?.trim()) {
      return {
        errors: ["Todos os campos do formulário são obrigatórios."],
        msg_success: "",
        success: false,
      };
    }

    // Verifica se já enviou (apenas no cliente)
    if (typeof window !== 'undefined' && localStorage.getItem("sendForm") === "true") {
      return {
        errors: ["Você já liberou o seu desconto uma vez"],
        msg_success: "",
        success: false,
      };
    }

    // ✅ Requisição com configurações corretas para o CORS
    const response = await fetch("https://api.bikeline.com.br/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // Removido qualquer header desnecessário
      },
      // ⚠️ NÃO incluir credentials já que o backend está com credentials: false
      body: JSON.stringify({
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        telefone: telefone.trim(),
        dt_nascimento: dt_nascimento.trim(),
      }),
    });

    // Verificar se a resposta é JSON válido
    let responseData;
    const contentType = response.headers.get("content-type");
    
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      // Se não for JSON, trata como texto
      const textResponse = await response.text();
      console.warn('Resposta não é JSON:', textResponse);
      responseData = null;
    }

    if (response.ok) {
      // Salva no localStorage apenas no cliente
      if (typeof window !== 'undefined') {
        localStorage.setItem("sendForm", "true");
      }
      
      return {
        success: true,
        errors: [],
        msg_success: responseData?.message || "Cupom liberado com sucesso.",
      };
    } else {
      // Tratamento de erro baseado na resposta
      const errors = responseData?.message
        ? Array.isArray(responseData.message)
          ? responseData.message
          : [responseData.message]
        : [`Erro ${response.status}: ${response.statusText || 'Erro ao cadastrar lead'}`];
      
      return {
        success: false,
        errors,
        msg_success: "",
      };
    }
  } catch (error) {
    console.error('Erro na conexão com API:', error);
    
    // Tratamento específico para diferentes tipos de erro
    if (error instanceof TypeError) {
      if (error.message.includes('fetch')) {
        return {
          success: false,
          errors: ["Erro de conexão. Verifique sua internet e tente novamente."],
          msg_success: "",
        };
      }
      if (error.message.includes('CORS')) {
        return {
          success: false,
          errors: ["Erro de configuração. Tente recarregar a página."],
          msg_success: "",
        };
      }
    }

    return {
      success: false,
      errors: ["Ocorreu um erro inesperado, tente novamente."],
      msg_success: "",
    };
  }
}

// 🔧 Função auxiliar para testar a conectividade com a API
export async function testApiConnection(): Promise<boolean> {
  try {
    const response = await fetch("https://api.bikeline.com.br/health", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });
    return response.ok;
  } catch {
    return false;
  }
}

// 🛠️ Versão com retry automático (opcional)
export async function postLeadClientWithRetry(
  data: {
    nome: string;
    email: string;
    telefone: string;
    dt_nascimento: string;
  },
  maxRetries: number = 2
): Promise<{ errors: string[]; msg_success: string; success: boolean }> {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    try {
      const result = await postLeadClient(data);
      
      // Se teve sucesso ou erro de validação, retorna imediatamente
      if (result.success || result.errors.some(error => 
        error.includes("obrigatórios") || 
        error.includes("já liberou")
      )) {
        return result;
      }
      
      // Se é erro de rede e não é a última tentativa, tenta novamente
      if (attempt <= maxRetries) {
        console.log(`Tentativa ${attempt} falhou, tentando novamente...`);
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt)); // Delay progressivo
        continue;
      }
      
      return result;
    } catch (error) {
      lastError = error;
      if (attempt <= maxRetries) {
        console.log(`Tentativa ${attempt} falhou com erro:`, error);
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        continue;
      }
    }
  }
  
  return {
    success: false,
    errors: ["Não foi possível conectar com o servidor após várias tentativas."],
    msg_success: "",
  };
}