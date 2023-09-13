import { HeroeConFoto } from '@/components/Heroe/HeroeConFoto'
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'




import { Carrusel } from '@/components/Carrusel'
import { Acordion } from '@/components/QuienesSomos/Acordion'
import { Organigrama } from '@/components/QuienesSomos/Organigrama'



export default async function QuienesSomos() {


    return (
        <main>
            <section className="py-5 text-center container">
                <br />

                <Carrusel
                    pictures={[
                        "/images/quienesSomos/1.jpg",
                        "/images/quienesSomos/2.jpg",
                        "/images/quienesSomos/3.jpg",
                    ]}
                />
                <br />
                <HeroeConFoto
                    title={"Presidente Junta Directiva"}
                    content={"La CAMARA DE COMERCIO E INDUSTRIAS DE ATLANTIDA cumplió todo lo que prometió. ¡El rol de nuestra institución es activo y comprometido con nuestra región! "}
                    image={"/images/quienesSomos/4.jpg"}
                    links={[{
                        title: "Lic. Jose Leonardo Lanza",
                        href: "#"
                    }]}
                    width='350px'
                    height='350px'
                />

                <br />
                <div className="row">
                    <div className="col-lg-12">
                        <Acordion />
                    </div>


                    <div className="col-lg-12">
                        <br />
                        <HeroeSinFoto title={"Junta Directiva"} content={"Camara de Comercio e Industrias de Honduras"} />
                    </div>
                    <div className="col-lg-12">
                        <br />
                        <Organigrama />
                    </div>



                </div>
            </section>
        </main>
    )
}

