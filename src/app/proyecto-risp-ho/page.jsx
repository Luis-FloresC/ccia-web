import { HeroeConFoto } from '@/components/Heroe/HeroeConFoto'
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'




import { Carrusel } from '@/components/Carrusel'
import { Acordion } from '@/components/QuienesSomos/Acordion'
import { Organigrama } from '@/components/QuienesSomos/Organigrama'
import { ContentTabViewProyectoRISP_HO } from '@/components/ProyectoRISP-HO/ContentTabView'
import GaleriaModerna from '@/components/Galeria/GaleriaModerna'
import { getImages } from '@/services/ProyectoRISP_HO_Services'



export default async function ProyectoRISPHO() {

    const imaagesProyecto = await getImages();

    return (
        <main>
            <section className=" text-center container">
                <Carrusel
                    pictures={[
                        "/images/RISP-HO/2.jpg",
                        "/images/RISP-HO/3.jpg",
                        "/images/RISP-HO/4.jpg",
                       
                    ]}
                />

                <br />
                <br />
                <ContentTabViewProyectoRISP_HO />
                <br />
                <GaleriaModerna data={imaagesProyecto} />

            </section>
        </main>
    )
}

