import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ResourceDetail from "./pages/ResourceDetail";
import Premium from "./pages/Premium";


function useRoute(): string {
  const read = () => window.location.hash.replace(/^#\/?/, "");
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export default function App() {
  const route = useRoute();
  const [section, param = ""] = route.split("/");

  let page = <Home />;
  if (section === "catalogo") page = <Catalog key={route} initialStage={decodeURIComponent(param)} />;
  if (section === "recurso") page = <ResourceDetail id={Number(param)} />;
  if (section === "premium") page = <Premium />;

  const nav = (href: string, name: string, label: string) => (
    <a href={href} className={section === name ? "active" : ""}>{label}</a>
  );

  return (
    <>
      <header className="wrap top">
        <a className="brand" href="#/">Nombre del proyecto</a>
        <nav className="menu">
          {nav("#/", "", "Inicio")}
          {nav("#/catalogo", "catalogo", "Catálogo")}
          {nav("#/premium", "premium", "Premium")}
        </nav>
        <a className="btn small" href="#/premium">Lista de espera</a>
      </header>
      <main>{page}</main>
      <footer className="wrap foot">Demo del proyecto en proceso zopa me olvide preguntarte el nombre del proyecto que decidieron XD por fa agreguenlo.</footer>
    </>
  );
}
