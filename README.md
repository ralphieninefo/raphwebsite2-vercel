# Vercel Platform Demo – Raphaël Sirvent

This project was created to showcase key Vercel-native features in the context of a Senior CSM interview. It demonstrates how customers leverage Next.js and Vercel to solve performance, deployment, and security challenges.

---

## 🔧 Features Demonstrated

### ⚡ Edge vs Serverless Functions
- Real-time latency comparison using `/api/hello` (Serverless) vs `/api/hello-edge` (Edge).
- Caching added to Edge Function using `Cache-Control` to reflect realistic PoP performance.

### 📄 Static File Hosting
- Resume PDF delivered via Vercel's global CDN from `public/resume.pdf`.

### 🔐 Edge Middleware Firewall
- Blocks traffic from China (`CN`) and North Korea (`KP`).
- Detects and blocks bots/scrapers using user-agent inspection (`curl`, `wget`, etc.).

### 🚀 Incremental Static Regeneration (ISR)
- Dynamic blog page at `/posts/hello-world`.
- Uses `getStaticProps` with `revalidate: 10` for background regeneration.

### 🎯 Clean Navigation
- Nav links cleaned up to highlight relevant routes.
- Pages organized for clarity and interview flow.

---

## 🧪 How to Test

- **Latency test:** Click “Edge vs Serverless” in nav → compare button response times.
- **ISR test:** Visit `/posts/hello-world`, note the timestamp, refresh after 10s.
- **Firewall test:**
  - Run: `curl -A "curl/7.77.0" https://your-vercel-url`
  - OR: Use Vercel's geo testing for CN/KP access
- **Static asset:** Open `/resume.pdf` in browser

---

## 🧠 Why This Project Matters

Customers deploying on Vercel care about:
- Fast performance globally 🌍
- Safe access controls 🔐
- Scalable content delivery without rebuilds 🧱

This demo shows how I would guide those customers post-deployment using native platform tools — no extra infrastructure required.

---

## 🛠 Built With
- [Next.js](https://nextjs.org/)
- [Vercel Edge Middleware](https://vercel.com/docs/middleware)
- [Vercel Functions](https://vercel.com/docs/functions)
