import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "bootswatch/dist/litera/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Inicio - Cámara de Comercio e Industrias de Atlántida",
  description: "Sitio web de la Cámara de Comercio e Industrias de Atlántida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>

        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  )
}
