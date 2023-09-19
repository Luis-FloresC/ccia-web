import { Carrusel } from "@/components/Carrusel";
import { HeroeConFoto } from "@/components/Heroe/HeroeConFoto";
import { HeroeSinFoto } from "@/components/Heroe/HeroeSinFoto";
import { SplitterCCA } from "@/components/Servicios/CCA/SpliterCCA";

export default async function CCA() {
  return (
    <main>
      <section className="text-center container">
        <br />

        <div className="row">
          <div className="col-md-12">
            <Carrusel pictures={["/images/CCI/banner.jpg"]} />
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
        <div className="row">
          <div className="col-md-12">
            <SplitterCCA />
          </div>
          <div className="col-md-12">
            <br />
            <HeroeSinFoto
              title={"Ventajas de la Conciliación"}
              content={"Centro de Conciliacion y Arbitraje"}
            />
          </div>
          <div className="col-md-12">
            <br />
            <img
              src="/images/CCI/7.jpg"
              height={"500px"}
              width={"500px"}
              className="img-fluid m-2"
              alt="ventajas"
            />
          </div>
        </div>
      </section>
      <section className="container-fluid m-2"></section>
    </main>
  );
}
