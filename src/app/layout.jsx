import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

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
 <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>

      </head>
      <body className={inter.className}>

        <Navigation />

        {children}

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous" async ></script>

        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js" async
        ></script>
        <Footer />
      </body>
    </html>
  )
}
