import Link from "next/link";

export const metadata = {
  title: "PIKUDO | Politica de privacidad",
};

export default function PrivacyPage() {
  return (
    <div className="page legal-page">
      <div className="bg-glow"></div>
      <div className="bg-grid"></div>

      <header className="page-header">
        <Link className="back" href="/">
          ? Volver
        </Link>
        <h1 className="logo small">PIKUDO</h1>
        <p className="page-title">Politica de privacidad</p>
      </header>

      <main className="legal">
        <section>
          <h2>1. Datos que recopilamos</h2>
          <ul>
            <li>Nickname y codigo de sala.</li>
            <li>Contenido multimedia que subes (foto o video).</li>
            <li>Identificador de dispositivo para mantener la sesion.</li>
          </ul>
        </section>
        <section>
          <h2>2. Para que usamos los datos</h2>
          <ul>
            <li>Crear partidas y mostrar resultados.</li>
            <li>Guardar tus retos y puntuaciones.</li>
            <li>Evitar abuso y mejorar la experiencia.</li>
          </ul>
        </section>
        <section>
          <h2>3. Comparticion</h2>
          <p>
            No vendemos tus datos. Solo se comparten con proveedores tecnicos
            necesarios para el servicio.
          </p>
        </section>
        <section>
          <h2>4. Retencion</h2>
          <p>
            Conservamos los datos mientras la sala exista o mientras sea
            necesario para el funcionamiento del juego.
          </p>
        </section>
        <section>
          <h2>5. Tus derechos</h2>
          <p>
            Puedes solicitar acceso, rectificacion o eliminacion escribiendo a
            soporte@pikudogame.com.
          </p>
        </section>
        <section>
          <h2>6. Seguridad</h2>
          <p>
            Aplicamos medidas de seguridad razonables para proteger la
            informacion.
          </p>
        </section>
        <p className="legal-meta">Ultima actualizacion: 21/01/2026</p>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <Link href="/terminos">Terminos</Link>
          <Link href="/privacidad">Privacidad</Link>
          <a href="mailto:soporte@pikudogame.com">Contacto</a>
        </div>
        <span>PIKUDO ? 2026</span>
      </footer>
    </div>
  );
}
