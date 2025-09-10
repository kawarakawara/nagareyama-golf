import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // x-www-form-urlencoded で送っている前提
    const formData = await req.formData();
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");

  // 簡易バリデーション
    if (!name || !email || !subject || !message) {
    return NextResponse.json({ ok: false, error: "required" }, { status: 400 });
    }

    try {
    // Resend API（直接叩く簡易版）
    const html = `
        <h2>お問い合わせ</h2>
        <p><b>お名前:</b> ${name}</p>
        <p><b>メール:</b> ${email}</p>
        <p><b>電話:</b> ${phone}</p>
        <p><b>種別:</b> ${subject}</p>
        <p><b>本文:</b><br/>${message.replace(/\n/g,"<br/>")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        from: "no-reply@あなたの認証済みドメイン", // 例: no-reply@yourdomain.com
        to: process.env.MAIL_TO,
        subject: `お問い合わせ: ${subject}`,
        html,
        reply_to: email,
        }),
    });

    if (!res.ok) {
        const body = await res.text();
        console.error("Resend error:", body);
        return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
    } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
    }
}
