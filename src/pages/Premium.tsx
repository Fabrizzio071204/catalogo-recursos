import { useState, type FormEvent } from "react";
import { PREMIUM_PRICE } from "../data/resources";

export default function Premium() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const join = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <section className="wrap block two-col">
      <div>
        <h1 className="page-title">Plan Premium</h1>
        <p className="price">{PREMIUM_PRICE}</p>
        <p className="lead">Todo lo del plan gratuito, con más profundidad para que llegues preparado a tu entrevista.</p>
        <ul className="checks">
          <li>Guías completas con respuestas modelo</li>
          <li>Simulacros con comentarios de especialistas</li>
          <li>Plantillas para contar tus proyectos académicos</li>
        </ul>
      </div>
      <form className="panel" onSubmit={join}>
        <h2>Únete a la lista de espera</h2>
        <label htmlFor="mail">Deja tu correo universitario y te avisamos cuando abra.</label>
        <input id="mail" type="email" required placeholder="tucorreo@universidad.edu.pe" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn big" type="submit">Unirme</button>
        {sent && <p className="ok">Listo, quedaste en la lista. (Demo: el correo no se guarda.)</p>}
      </form>
    </section>
  );
}
