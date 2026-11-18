import { useMemo, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import { resources, STAGES, type Stage } from "../data/resources";

const tabs: Array<"Todo" | Stage> = ["Todo", ...STAGES];

export default function Catalog({ initialStage }: { initialStage: string }) {
  const [stage, setStage] = useState<(typeof tabs)[number]>(tabs.find((t) => t === initialStage) ?? "Todo");
  const [query, setQuery] = useState("");
  const [onlyFree, setOnlyFree] = useState(false);

  const visible = useMemo(
    () =>
      resources.filter(
        (r) =>
          (stage === "Todo" || r.stage === stage) &&
          (!onlyFree || r.plan === "Gratis") &&
          `${r.title} ${r.description}`.toLowerCase().includes(query.toLowerCase())
      ),
    [stage, query, onlyFree]
  );

  return (
    <section className="wrap block">
      <h1 className="page-title">Catálogo de recursos</h1>
      <div className="controls">
        <nav className="tabs" aria-label="Etapa">
          {tabs.map((t, i) => (
            <button key={t} className={t === stage ? "tab active" : "tab"} onClick={() => setStage(t)}>
              {i > 0 && <span className="n">{i}</span>}
              {t}
            </button>
          ))}
        </nav>
        <div className="filters">
          <input type="search" placeholder="Buscar un recurso" aria-label="Buscar un recurso" value={query} onChange={(e) => setQuery(e.target.value)} />
          <label><input type="checkbox" checked={onlyFree} onChange={(e) => setOnlyFree(e.target.checked)} /> Solo gratis</label>
        </div>
      </div>
      <div className="grid">
        {visible.map((r) => <ResourceCard key={r.id} resource={r} />)}
      </div>
      {visible.length === 0 && <p className="empty">No hay recursos con esos filtros. Prueba otra palabra o elige Todo.</p>}
    </section>
  );
}
