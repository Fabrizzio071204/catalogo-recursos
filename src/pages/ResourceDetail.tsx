import ResourceCard from "../components/ResourceCard";
import { resources, INCLUDES, PREMIUM_PRICE } from "../data/resources";

export default function ResourceDetail({ id }: { id: number }) {
  const r = resources.find((x) => x.id === id);
  if (!r) {
    return (
      <section className="wrap block">
        <h1 className="page-title">No encontramos ese recurso</h1>
        <a className="link" href="#/catalogo">Volver al catálogo</a>
      </section>
    );
  }
  const premium = r.plan === "Premium";
  const related = resources.filter((x) => x.stage === r.stage && x.id !== r.id);

  return (
    <section className="wrap block">
      <a className="link" href="#/catalogo">Volver al catálogo</a>
      <div className="detail">
        <div>
          <p className="kicker">{r.stage}</p>
          <h1 className="page-title">{r.title}</h1>
          <p className="lead">{r.description}</p>
          <h2 className="section small">Qué incluye</h2>
          <ul className="checks">
            {INCLUDES[r.type].map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <aside className="side">
          <p className="meta"><span>{r.type}</span><span>{r.minutes} min</span></p>
          <p className="price">{premium ? PREMIUM_PRICE : "Gratis"}</p>
          {premium ? (
            <>
              <p>Este recurso es parte del plan Premium.</p>
              <a className="btn big" href="#/premium">Unirme a la lista de espera</a>
            </>
          ) : (
            <p className="demo">Vista previa (demo): aquí se mostraría el contenido completo del recurso.</p>
          )}
        </aside>
      </div>
      {related.length > 0 && (
        <>
          <h2 className="section">Más de esta etapa</h2>
          <div className="grid">{related.map((x) => <ResourceCard key={x.id} resource={x} />)}</div>
        </>
      )}
    </section>
  );
}
