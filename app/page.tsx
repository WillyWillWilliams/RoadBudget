import EmailForm from "@/components/EmailForm";
import { site, exampleTrip } from "@/lib/content";

export default function Home() {
  const maxAmount = Math.max(...exampleTrip.breakdown.map((b) => b.amount));

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow-route">
            <span className="dash" />
            {site.name}
          </div>
          <h1>{site.tagline}</h1>
          <p className="hero-sub">{site.subtagline}</p>
          <div className="hero-actions">
            <a href="#form" className="btn-primary">
              Recevoir mon itinéraire
            </a>
            <a href="#exemple" className="btn-ghost">
              Voir un exemple réel
            </a>
          </div>
        </div>
        <div className="road-line" />
      </header>

      <section className="container">
        <h2 className="section-title">Comment ça marche</h2>
        <p className="section-lede">
          Trois étapes, aucune surprise sur le budget une fois sur la route.
        </p>

        <div className="steps">
          <div className="step">
            <span className="step-num">1</span>
            <h3>Tu donnes le cadre</h3>
            <p>
              Zone géographique, dates, nombre de voyageurs, et surtout : ton
              budget total. C&apos;est la contrainte qui pilote tout le
              reste.
            </p>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <h3>On construit l&apos;itinéraire</h3>
            <p>
              Étapes cohérentes géographiquement, temps de route réalistes,
              activités et logements choisis pour rentrer dans l&apos;enveloppe.
            </p>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <h3>Tu pars avec ton carnet</h3>
            <p>
              Un itinéraire jour par jour, avec le budget détaillé par poste,
              exportable en PDF pour la route.
            </p>
          </div>
        </div>
      </section>

      <section className="container" id="exemple">
        <h2 className="section-title">Un exemple réel</h2>
        <p className="section-lede">
          Voici à quoi ressemble un itinéraire construit avec {site.name} —
          pas une maquette, un vrai plan jour par jour.
        </p>

        <div className="example-panel">
          <div className="example-left">
            <h3>{exampleTrip.destination}</h3>
            <p className="example-meta">
              {exampleTrip.duration} · {exampleTrip.travelers} personnes ·
              budget {exampleTrip.budget}€ · {exampleTrip.style}
            </p>

            <div className="budget-bars">
              {exampleTrip.breakdown.map((item) => (
                <div className="budget-row" key={item.label}>
                  <span>{item.label}</span>
                  <div className="budget-track">
                    <div
                      className="budget-fill"
                      style={{
                        width: `${(item.amount / maxAmount) * 100}%`,
                      }}
                    />
                  </div>
                  <span>{item.amount}€</span>
                </div>
              ))}
            </div>
          </div>

          <div className="example-right">
            {exampleTrip.days.map((day) => (
              <div className="day-preview" key={day.day}>
                <div className="day-preview-head">
                  <span>Jour {day.day}</span>
                  <span>{day.drive}</span>
                </div>
                <h4>{day.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" id="form">
        <div className="form-panel">
          <div className="form-copy">
            <h3>Sois parmi les premiers</h3>
            <p>
              On construit encore les itinéraires à la main pour l&apos;instant,
              le temps de vérifier qu&apos;ils sont vraiment utiles avant
              d&apos;automatiser. Laisse ta destination et ton budget, on te
              prépare le tien.
            </p>
          </div>
          <EmailForm />
        </div>
      </section>

      <footer className="container">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Fait pour la route, pas pour l&apos;algorithme.</span>
      </footer>
    </>
  );
}
