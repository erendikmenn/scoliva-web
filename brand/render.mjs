import { mkdir, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { Resvg } = require("@resvg/resvg-js");

const root = path.dirname(fileURLToPath(import.meta.url));
const desktop = "/Users/mehmeterendikmen/Desktop/Scoliva-marka";
const ink = "#0a1410";
const cream = "#f3eee3";
const paper = "#f8f4eb";
const gold = "#d4ae5a";

const fonts = [
  "/System/Library/Fonts/Supplemental/Iowan Old Style.ttc",
  "/System/Library/Fonts/Supplemental/Georgia.ttf",
  "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
];

const quill = (feather = cream, shaft = ink) => `
  <g transform="rotate(-36 32 33)">
    <path fill="${feather}" d="M32 7.2C40.2 12.4 47.2 21.6 46.2 32.2C45.4 41.2 39.8 48.2 32 52.4C24.2 48.2 18.6 41.2 17.8 32.2C17.2 26.4 18.6 21.2 22.2 16.8L16.8 24.6L25.2 20.4L21.2 14.2C24.4 10.2 28.2 7.8 32 7.2Z"/>
    <path d="M32 14.5V48.2" stroke="${shaft}" stroke-width="0.7" stroke-linecap="round" opacity="0.22"/>
    <path fill="${gold}" d="M27.6 51.4L32 50.8L36.4 51.4C37.4 53.2 36.6 56.6 32 61.4C27.4 56.6 26.6 53.2 27.6 51.4Z"/>
    <circle cx="32" cy="53.15" r="1.15" fill="${ink}"/>
    <path d="M32 54.3V60.1" stroke="${ink}" stroke-width="0.7" stroke-linecap="round"/>
  </g>
`;

const mark = (size = 64) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="${ink}"/>
    ${quill()}
  </svg>
`;

function svgDoc(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
}

function png(svg, width) {
  return new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    font: { fontFiles: fonts, loadSystemFonts: true, defaultFontFamily: "Iowan Old Style" },
    background: "rgba(0,0,0,0)",
  })
    .render()
    .asPng();
}

async function out(rel, svg, width) {
  const abs = path.join(desktop, rel);
  await mkdir(path.dirname(abs), { recursive: true });
  await writeFile(abs, png(svg, width));
  console.log(rel);
}

const mark64 = mark(64);

await mkdir(path.join(desktop, "svg"), { recursive: true });
await copyFile(path.join(root, "svg/isaret.svg"), path.join(desktop, "svg/isaret.svg"));
await copyFile(path.join(root, "svg/quill.svg"), path.join(desktop, "svg/quill.svg"));

await out("isaret/isaret-1024.png", mark64, 1024);
await out("isaret/isaret-512.png", mark64, 512);
await out("isaret/isaret-256.png", mark64, 256);
await out("isaret/isaret-128.png", mark64, 128);
await out("favicon/apple-touch-180.png", mark64, 180);
await out("favicon/favicon-32.png", mark64, 32);

const pp = svgDoc(
  800,
  800,
  `<rect width="800" height="800" fill="${paper}"/>
   <g transform="translate(160 160) scale(7.5)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>`,
);
await out("linkedin/profil-800.png", pp, 800);
await out("linkedin/profil-400.png", pp, 400);
await out("instagram/profil-1080.png", pp, 1080);
await out("x-twitter/profil-400.png", pp, 400);

const banner = svgDoc(
  1584,
  396,
  `<rect width="1584" height="396" fill="${paper}"/>
   <g opacity="0.07" transform="translate(1120 -40) scale(7.2)">${quill(ink, ink)}</g>
   <g transform="translate(430 114) scale(2.6)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="626" y="188" fill="${ink}" font-family="Iowan Old Style, Georgia, serif" font-size="72">Scoliva</text>
   <text x="630" y="236" fill="${ink}" fill-opacity="0.48" font-family="Iowan Old Style, Georgia, serif" font-size="22">Her sınav için kişisel öğrenme.</text>`,
);
await out("linkedin/kapak-1584x396.png", banner, 1584);

const xHeader = svgDoc(
  1500,
  500,
  `<rect width="1500" height="500" fill="${paper}"/>
   <g opacity="0.07" transform="translate(1040 -20) scale(8.2)">${quill(ink, ink)}</g>
   <g transform="translate(80 154) scale(3)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="304" y="248" fill="${ink}" font-family="Iowan Old Style, Georgia, serif" font-size="84">Scoliva</text>
   <text x="308" y="300" fill="${ink}" fill-opacity="0.48" font-family="Iowan Old Style, Georgia, serif" font-size="24">Personalized learning, for every exam.</text>`,
);
await out("x-twitter/kapak-1500x500.png", xHeader, 1500);

const fb = svgDoc(
  1640,
  664,
  `<rect width="1640" height="664" fill="${paper}"/>
   <g opacity="0.07" transform="translate(1120 20) scale(9)">${quill(ink, ink)}</g>
   <g transform="translate(96 214) scale(3.6)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="360" y="340" fill="${ink}" font-family="Iowan Old Style, Georgia, serif" font-size="92">Scoliva</text>
   <text x="364" y="400" fill="${ink}" fill-opacity="0.48" font-family="Iowan Old Style, Georgia, serif" font-size="26">Her sınav için kişisel öğrenme.</text>`,
);
await out("facebook/kapak-1640x664.png", fb, 1640);

const postInk = svgDoc(
  1200,
  1200,
  `<rect width="1200" height="1200" fill="${ink}"/>
   <g transform="translate(96 96) scale(1.7)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="96" y="520" fill="${cream}" font-family="Iowan Old Style, Georgia, serif" font-size="72">Her sınav için</text>
   <text x="96" y="610" fill="${gold}" font-family="Iowan Old Style, Georgia, serif" font-style="italic" font-size="72">kişisel öğrenme.</text>
   <text x="96" y="1080" fill="${cream}" fill-opacity="0.5" font-family="Iowan Old Style, Georgia, serif" font-size="28">scoliva.ai</text>`,
);
await out("linkedin/post-ink-1200.png", postInk, 1200);
await out("instagram/post-ink-1080.png", postInk, 1080);

const postPaper = svgDoc(
  1200,
  1200,
  `<rect width="1200" height="1200" fill="${paper}"/>
   <g transform="translate(96 96) scale(1.7)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="96" y="500" fill="${ink}" font-family="Iowan Old Style, Georgia, serif" font-size="64">Seni tanırız.</text>
   <text x="96" y="580" fill="${ink}" font-family="Iowan Old Style, Georgia, serif" font-size="64">Sistem sana</text>
   <text x="96" y="660" fill="${ink}" font-family="Iowan Old Style, Georgia, serif" font-size="64">göre kurulur.</text>
   <text x="96" y="1080" fill="${ink}" fill-opacity="0.45" font-family="Iowan Old Style, Georgia, serif" font-size="28">scoliva.ai</text>`,
);
await out("linkedin/post-paper-1200.png", postPaper, 1200);
await out("instagram/post-paper-1080.png", postPaper, 1080);

const postBlank = svgDoc(
  1200,
  1200,
  `<rect width="1200" height="1200" fill="${paper}"/>
   <rect x="64" y="64" width="1072" height="1072" rx="36" fill="none" stroke="${ink}" stroke-opacity="0.08" stroke-width="2"/>
   <g transform="translate(96 96) scale(1.4)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="96" y="560" fill="${ink}" fill-opacity="0.22" font-family="Iowan Old Style, Georgia, serif" font-size="48">Başlığı buraya yaz</text>
   <text x="96" y="1080" fill="${ink}" fill-opacity="0.4" font-family="Iowan Old Style, Georgia, serif" font-size="26">scoliva.ai</text>`,
);
await out("linkedin/post-bos-1200.png", postBlank, 1200);

const story = svgDoc(
  1080,
  1920,
  `<rect width="1080" height="1920" fill="${ink}"/>
   <g transform="translate(390 640) scale(4.7)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="540" y="1100" text-anchor="middle" fill="${cream}" font-family="Iowan Old Style, Georgia, serif" font-size="72">Scoliva</text>
   <text x="540" y="1170" text-anchor="middle" fill="${gold}" font-family="Iowan Old Style, Georgia, serif" font-size="28">her sınav için kişisel öğrenme</text>
   <text x="540" y="1780" text-anchor="middle" fill="${cream}" fill-opacity="0.4" font-family="Iowan Old Style, Georgia, serif" font-size="24">scoliva.ai</text>`,
);
await out("instagram/hikaye-1080x1920.png", story, 1080);
await out("linkedin/hikaye-1080x1920.png", story, 1080);

const og = svgDoc(
  1200,
  630,
  `<rect width="1200" height="630" fill="${paper}"/>
   <g opacity="0.08" transform="translate(760 -30) scale(8.5)">${quill(ink, ink)}</g>
   <g transform="translate(80 185) scale(3.4)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="332" y="300" fill="${ink}" font-family="Iowan Old Style, Georgia, serif" font-size="72">Scoliva</text>
   <text x="336" y="356" fill="${ink}" fill-opacity="0.5" font-family="Iowan Old Style, Georgia, serif" font-size="26">Her sınav için kişisel öğrenme.</text>
   <text x="80" y="560" fill="${ink}" fill-opacity="0.35" font-family="Iowan Old Style, Georgia, serif" font-size="22">scoliva.ai</text>`,
);
await out("genel/og-1200x630.png", og, 1200);
await out("linkedin/link-onizleme-1200x627.png", og, 1200);

const wordmark = svgDoc(
  720,
  160,
  `<rect width="720" height="160" fill="${paper}"/>
   <g transform="translate(16 16) scale(2)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="172" y="104" fill="${ink}" font-family="Iowan Old Style, Georgia, serif" font-size="64">Scoliva</text>`,
);
await out("isaret/wordmark-paper.png", wordmark, 720);

const wordmarkInk = svgDoc(
  720,
  160,
  `<rect width="720" height="160" fill="${ink}"/>
   <g transform="translate(16 16) scale(2)">${mark64.replace(/<\/?svg[^>]*>/g, "")}</g>
   <text x="172" y="104" fill="${cream}" font-family="Iowan Old Style, Georgia, serif" font-size="64">Scoliva</text>`,
);
await out("isaret/wordmark-ink.png", wordmarkInk, 720);

const readme = `Scoliva marka kiti
==================

İşaret: kuş tüyü + dolma kalem ucu
Renkler: mürekkep #0a1410 · krem #f3eee3 · kâğıt #f8f4eb · altın #d4ae5a

SVG (ölçeklenebilir, asıl kaynak)
- svg/isaret.svg     kare işaret
- svg/quill.svg      sadece tüy (arkasız)

LinkedIn
- linkedin/profil-800.png          profil foto (daireye kırpılır)
- linkedin/kapak-1584x396.png      kapak / arka plan
- linkedin/post-ink-1200.png       koyu paylaşım
- linkedin/post-paper-1200.png     açık paylaşım
- linkedin/post-bos-1200.png       üzerine yazılacak boş kare
- linkedin/link-onizleme-1200x627.png  link önizleme
- linkedin/hikaye-1080x1920.png    dikey / hikaye

Instagram / X / Facebook / genel klasörlerinde aynı dil.

Site ve sekme için isaret/ ve favicon/ kullan.
`;

await writeFile(path.join(desktop, "OKU.txt"), readme);
console.log("done", desktop);
