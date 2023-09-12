import { Contactos } from "./contactos";
import { Copyright } from "./copyright";

export function Footer() {
  return (
    <footer
      className="container-fluid p-2 sticky-bottom"
      style={{
        backgroundColor: "#0086CD",
      }}
    >
      <div className="d-flex flex-wrap justify-content-between align-items-center py-2 my-2 border-top text-white ">
        <Contactos />

        <Copyright />
      </div>
    </footer>
  );
}
