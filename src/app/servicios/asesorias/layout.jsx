import '../../globals.css'
import { Inter } from 'next/font/google'

import "bootswatch/dist/litera/bootstrap.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Asesorias - Cámara de Comercio e Industrias de Atlántida",
  description: "Sitio web de la Cámara de Comercio e Industrias de Atlántida",
};

export default function AsesoriasLayout({ children }) {
  return (
   <div>{children}</div>
  )
}