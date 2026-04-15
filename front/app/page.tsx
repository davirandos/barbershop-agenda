import { HomePage } from "@/components/layout/HomePage";
import { Servicos } from "@/components/layout/Servicos";

export default function Home() {
  return (
    <>
      <section className="inicio">
        <HomePage></HomePage>
      </section>

      <section className="servicos-agenda">
        <Servicos></Servicos>
      </section>
    </>
  );
}
