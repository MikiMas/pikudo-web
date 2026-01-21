import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <div className="bg-glow"></div>
      <div className="bg-grid"></div>

      <header className="hero">
        <nav className="nav">
          <span className="pill">Juego social por retos</span>
          <div className="nav-links">
            <Link href="/terminos">Terminos</Link>
            <Link href="/privacidad">Privacidad</Link>
          </div>
        </nav>

        <h1 className="logo">PIKUDO</h1>
        <p className="tagline">
          Crea una sala, comparte el codigo y compite en retos de foto o video.
          Aqui tienes todo lo legal, claro y directo.
        </p>

        <div className="cta-row">
          <Link className="cta" href="/terminos">
            Terminos y condiciones
          </Link>
          <Link className="cta ghost" href="/privacidad">
            Politica de privacidad
          </Link>
        </div>
      </header>

      <main className="cards">
        <section className="card">
          <h2>Transparencia</h2>
          <p>
            Explicamos que datos se guardan, por que y cuanto tiempo. Sin letras
            pequenas ni tecnicismos.
          </p>
        </section>
        <section className="card">
          <h2>Seguridad</h2>
          <p>
            Las imagenes y videos se almacenan con acceso controlado y las
            sesiones se gestionan de forma segura.
          </p>
        </section>
        <section className="card">
          <h2>Control</h2>
          <p>
            Puedes solicitar la eliminacion de tu informacion o tus contenidos.
          </p>
        </section>
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
