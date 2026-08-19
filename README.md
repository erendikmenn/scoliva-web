# Scoliva

[scoliva.ai](https://scoliva.ai) tanıtım sitesi.

- İletişim: [hello@scoliva.ai](mailto:hello@scoliva.ai)
- LinkedIn: [scoliva-ai](https://www.linkedin.com/company/scoliva-ai/)

## Yerel

```bash
npm install
npm run dev
```

## Yayın (Cloudflare Pages)

```bash
npm run deploy
```

Statik dışa aktarım `out/` altına yazılır; Wrangler `scoliva-web` Pages projesine yükler. Apex ve `www` `scoliva-web.pages.dev` CNAME’ine bağlanır.
