import { Carrusel } from "@/components/Carrusel";
import { HeroeConFoto } from "@/components/Heroe/HeroeConFoto";
import { SplitterCCA } from "@/components/Servicios/CCA/SpliterCCA";

export default async function CCA() {
  return (
    <main>
      <section className="py-5 text-center container">
        <br />

        <div className="row">
          <div className="col-md-12">
            <Carrusel
              pictures={[
                "/images/CCI/1.jpg",
                "/images/CCI/2.jpg",
                "/images/CCI/3.jpg",
                "/images/CCI/4.jpg",
                "/images/CCI/5.jpg",
              ]}
            />
          </div>
          
          <div className="col-md-12">
          <br />
          <br />
            <HeroeConFoto
              title={"DESCARGABLES"}
              content={""}
              image={"/images/inicio/Cards/2.jpg"}
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
