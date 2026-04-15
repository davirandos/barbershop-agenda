import { HomePage } from "@/components/layout/HomePage";
import { Servicos } from "@/components/layout/Servicos";
import { Localizacao } from "@/components/layout/Localizacao";
import { Chame } from "@/components/layout/Chame";

export default function Home() {
  return (
    <>
      <section id="inicio">
        <HomePage></HomePage>
      </section>

      <section id="servicos-agenda">
        <Servicos></Servicos>
      </section>

      <section id="local">
        <Localizacao></Localizacao>
      </section>

      <section id="Chame">
        <Chame></Chame>
      </section>
    </>
  );
}
