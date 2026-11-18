import type { Resource } from "../data/resources";

export default function ResourceCard({ resource }: { resource: Resource }) {
  const premium = resource.plan === "Premium";
  return (
    <article className={premium ? "card premium" : "card"}>
      <div className="meta">
        <span>{resource.type}</span>
        <span>{resource.minutes} min</span>
        <span className="plan">
          {premium && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
          )}
          {resource.plan}
        </span>
      </div>
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>
      <a className="btn ghost" href={`#/recurso/${resource.id}`}>Ver recurso</a>
    </article>
  );
}
