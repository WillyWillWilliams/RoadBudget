"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, destination, budget }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrorMsg(data.error ?? "Une erreur est survenue.");
        setStatus("error");
        return;
      }

      setStatus("done");
    } catch {
      setErrorMsg("Impossible de contacter le serveur. Réessaie.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-success">
        C&apos;est noté. On t&apos;écrit dès que ton itinéraire est prêt à
        être généré.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="destination">Destination envisagée</label>
        <input
          id="destination"
          type="text"
          placeholder="Ex. Portugal, Écosse, Pyrénées..."
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="field-row">
        <div>
          <label htmlFor="budget">Budget total</label>
          <input
            id="budget"
            type="text"
            placeholder="Ex. 600€"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Ton email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="toi@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {status === "error" && <div className="form-error">{errorMsg}</div>}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Envoi..." : "Recevoir mon itinéraire"}
      </button>

      <p className="form-note">
        Pas de spam. Un email quand ton road trip est prêt, rien d&apos;autre.
      </p>
    </form>
  );
}
