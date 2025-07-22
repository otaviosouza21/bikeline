"use server";
import { cookies } from "next/headers";
import apiError from "../errors/apiError";

export async function postLead(
  state:
    | { errors: string[]; msg_success: string; success: boolean }
    | undefined,
  formData: FormData
): Promise<{ errors: string[]; msg_success: string; success: boolean }> {
  try {
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;
    const dt_nascimento = formData.get("dt_nascimento") as string;
    const sendForm = (await cookies()).get("sendForm");

    if (!nome || !email || !telefone || !dt_nascimento) {
      return {
        errors: ["Todos os campos do formualrio são obrigatorios."],
        msg_success: "",
        success: false,
      };
    }

    if (sendForm) {
      return {
        errors: ["Voce já liberou o seu desconto uma vez"],
        msg_success: "",
        success: false,
      };
    }

    const url = "http://api.bikeline.com.br/lead";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        telefone,
        dt_nascimento,
      }),
    });

    if (response.ok) {
      (await cookies()).set("sendForm", "true");
      return {
        success: true,
        errors: [],
        msg_success: "Cupom Liberado com sucesso.",
      };
    } else {
      // tenta ler erros detalhados da API (se existir)
      const data = await response.json().catch(() => null);
      const errors = data?.message
        ? Array.isArray(data.message)
          ? data.message
          : [data.message]
        : ["Erro ao cadastrar lead."];

      return {
        success: false,
        errors,
        msg_success: "",
      };
    }
  } catch (error) {
    apiError(error);
    return {
      success: false,
      errors: ["Ocorreu um erro inesperado, tente novamente."],
      msg_success: "",
    };
  }
}
