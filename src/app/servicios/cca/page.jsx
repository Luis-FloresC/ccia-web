import { Carrusel } from "@/components/Carrusel";
import { HeroeConFoto } from "@/components/Heroe/HeroeConFoto";
import { SplitterCCA } from "@/components/Servicios/CCA/SpliterCCA";

export default async function CCA() {
  return (
    <main>
      <section className="text-center container">
        <br />

        <div className="row">
          <div className="col-md-12">
            <Carrusel
              pictures={[
                "/images/CCI/banner.jpg",
              ]}
            />
          </div>
          
          <div className="col-md-12">
          <br />
          <br />
            <HeroeConFoto
              title={"DESCARGABLES"}
              content={""}
              image={"/images/CCI/6.jpg"}
              tipoFondo="solid"
              links={[
                {
                  title: "Reglamento del CCA",
                  href: "https://cciahn.org/downloads/reglamento-de-cca.pdf",
                },
                {
                  title: "Ley de CCA",
                  href: "https://cciahn.org/downloads/ley-de-cca.pdf",
                },
              ]}
            />
          </div>
        </div>
        <br />
        <br />
        <SplitterCCA />
      </section>
    </main>
  );
}
