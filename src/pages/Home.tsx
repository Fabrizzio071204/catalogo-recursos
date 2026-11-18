import ResourceCard from "../components/ResourceCard";
import { resources, STAGES, STAGE_INFO, PREMIUM_PRICE } from "../data/resources";

export default function Home() {
  const free = resources.filter((r) => r.plan === "Gratis");
  return (
    <>
      <section className="wrap hero">
        <div>
          <h1>Cuéntame sobre ti.</h1>
          <p className="lead">
            Es la pregunta que más estudiantes temen en su primera entrevista. Aquí encuentras guías, plantillas y simulacros para responderla con seguridad, aunque aún no tengas experiencia.
          </p>
          <div className="actions">
            <a className="btn big" href="#/catalogo">Empezar gratis</a>
            <a className="link" href="#/premium">Ver plan Premium</a>
          </div>
        </div>
        <aside className="method" aria-label="Cómo se responde">
          <p className="bubble">Cuéntame sobre ti.</p>
          <ol>
            <li><strong>Quién soy</strong>Tu carrera, tu ciclo y lo que te mueve.</li>
            <li><strong>Qué hice</strong>Un proyecto, curso o actividad que lo demuestre.</li>
            <li><strong>Qué busco</strong>La práctica o el primer trabajo al que aspiras.</li>
          </ol>
          <p className="cap">La guía gratuita te enseña a armar cada parte.</p>
        </aside>
      </section>

      <section className="wrap block">
        <h2 className="section">Tu ruta, paso a paso</h2>
        <div className="steps">
          {STAGES.map((s, i) => (
            <a key={s} className="step" href={`#/catalogo/${encodeURIComponent(s)}`}>
              <span className="n">{i + 1}</span>
              <h3>{s}</h3>
              <p>{STAGE_INFO[s]}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="wrap block">
        <div className="head">
          <h2 className="section">Para empezar hoy</h2>
          <a className="link" href="#/catalogo">Ver todo el catálogo</a>
        </div>
        <div className="grid">
          {free.map((r) => <ResourceCard key={r.id} resource={r} />)}
        </div>
      </section>

      <section className="band">
        <div className="wrap two">
          <h2>Cuando quieras ir más a fondo, Premium: {PREMIUM_PRICE}</h2>
          <div><a className="btn light big" href="#/premium">Conocer Premium</a></div>
        </div>
      </section>
    </>
  );
}
