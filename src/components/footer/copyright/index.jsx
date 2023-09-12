import "./index.css";

export function Copyright() {
  return (
    <div className="text-center">
      Copyright 2021-{`${new Date().getFullYear()}`} ©{" "}
      <b>
        <a
          href="https://www.cciahn.com"
          className="copy"
          target="_blank"
          rel="noreferrer"
        >
          Cámara de Comercio e Industrias de Atlántida
        </a>
      </b>
    </div>
  );
}
