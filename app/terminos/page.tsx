import Link from "next/link";

export const metadata = {
  title: "PIKUDO | Terminos y condiciones",
};

export default function TermsPage() {
  return (
    <div className="page legal-page">
      <div className="bg-glow"></div>
      <div className="bg-grid"></div>

      <header className="page-header">
        <Link className="back" href="/">
          ? Volver
        </Link>
        <h1 className="logo small">PIKUDO</h1>
        <p className="page-title">Terminos y condiciones</p>
      </header>

      <main className="legal">
        <section>
          <h2>1. Uso del servicio</h2>
          <p>
            PIKUDO es una app social para crear salas y completar retos. Al
            usarla aceptas estas condiciones y te comprometes a respetar a otros
            usuarios.
          </p>
        </section>
        <section>
          <h2>2. Edad minima</h2>
          <p>Debes tener al menos 14 anos o la edad minima legal de tu pais.</p>
        </section>
        <section>
          <h2>3. Contenido generado por usuarios</h2>
          <p>
            Eres responsable del contenido que subes. No se permite contenido
            ilegal, violento, sexual o que vulnere derechos de terceros.
          </p>
        </section>
        <section>
          <h2>4. Moderacion</h2>
          <p>
            Podemos eliminar contenido o restringir cuentas que incumplan estas
            reglas para proteger la comunidad.
          </p>
        </section>
        <section>
          <h2>5. Disponibilidad</h2>
          <p>
            El servicio puede sufrir interrupciones por mantenimiento o mejoras.
          </p>
        </section>
        <section>
          <h2>6. Cambios</h2>
          <p>
            Podemos actualizar estos terminos. La fecha de la ultima version se
            indica abajo.
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
