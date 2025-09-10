
"use client";

const LINKS = [
    { id: "top", label: "Top" },
    { id: "greeting", label: "ごあいさつ" },
    { id: "news", label: "お知らせ" },
    { id: "membership", label: "入会案内" },
    { id: "events", label: "年間行事" },
    { id: "contact", label: "お問い合わせ" },
];

export default function StickyLinksBar() {
    return (
    <div className="py-3 my-3 backdrop-blur-md bg-white/40 rounded-full">
        <nav className="justify-self-center whitespace-nowrap px-8">
            {LINKS.filter((l) => l.id !== "top").map((l) => (
            <a
                key={l.id}
                href={`#${l.id}`}
                className="mx-2"
            >
                {l.label}
            </a>
            ))}
        </nav>
    </div>
    );
}