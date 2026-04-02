import { NextResponse } from "next/server";

type LeadPayload = {
  full_name?: string;
  work_email?: string;
  company_name?: string;
  website_url?: string;
  need?: string;
  business_type?: string;
  main_challenge?: string;
  extra_context?: string;
  source?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (
      !body.full_name?.trim() ||
      !body.work_email?.trim() ||
      !body.company_name?.trim() ||
      !body.need?.trim() ||
      !body.business_type?.trim() ||
      !body.main_challenge?.trim()
    ) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        { ok: false, error: "No se configuró GOOGLE_APPS_SCRIPT_URL." },
        { status: 500 }
      );
    }

    const payload: LeadPayload = {
      full_name: body.full_name.trim(),
      work_email: body.work_email.trim(),
      company_name: body.company_name.trim(),
      website_url: body.website_url?.trim() || "",
      need: body.need.trim(),
      business_type: body.business_type.trim(),
      main_challenge: body.main_challenge.trim(),
      extra_context: body.extra_context?.trim() || "",
      source: "northstar-studio",
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const text = await response.text();

    let result: { ok?: boolean; error?: string } = {};
    try {
      result = JSON.parse(text);
    } catch {
      result = { ok: false, error: "Respuesta inválida del Apps Script." };
    }

    if (!response.ok || !result.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: result.error || "No se pudo guardar el lead.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Error inesperado.",
      },
      { status: 500 }
    );
  }
}