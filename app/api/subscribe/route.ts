import { NextResponse } from "next/server";

// TODO (Phase 1) : remplacer ce stub par une écriture réelle dans Supabase
// (table `waitlist`), + validation d'email plus stricte, + rate limiting
// par IP pour éviter les abus (voir section 20 de l'analyse).

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string") {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 }
    );
  }

  const email = body.email.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Adresse email invalide." },
      { status: 400 }
    );
  }

  // Pour l'instant : log serveur uniquement (visible dans les logs Vercel).
  // C'est volontairement minimal tant que la phase de validation n'a pas
  // confirmé la demande (voir section 13 de l'analyse).
  console.log("[waitlist] nouvelle inscription:", {
    email,
    destination: body.destination ?? null,
    budget: body.budget ?? null,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
