import '../../globals.css'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "OLA - Cámara de Comercio e Industrias de Atlántida",
  description: "Sitio web de la Cámara de Comercio e Industrias de Atlántida",
};

export default function OlaLayout({ children }) {
  return (
   <div>{children}</div>
  )
}
