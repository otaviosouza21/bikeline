import Descount from "@/Components/Form/Descount/Descount";
import { Form } from "@/Components/Form/Form";

export default function Cupom() {
  return (
    <section className="grid grid-cols-2 mt-10">
      <Descount />
      <Form />
    </section>
  );
}
