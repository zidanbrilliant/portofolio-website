````md
# AI/ML Engineer & Data Scientist Portfolio (Monochrome)

Website portfolio pribadi untuk menampilkan profil, pengalaman, dan proyek sebagai **AI/ML Engineer** dan **Data Scientist**. Desain mengusung **monochrome aesthetic** (hitam/putih/abu), tipografi **Montserrat** (heading) + **Poppins** (body), animasi halus, dan **visualisasi skill memakai chart/graph**.

---

## ✨ Highlights

- **Monochrome premium UI** (black/white/gray) dengan layout modern & minimal.
- **Responsive** (mobile-first) + aksesibilitas (semantic HTML + ARIA).
- **Smooth animations** (scroll reveal, hover micro-interactions).
- **Skills showcase berbasis charts**:
  - Radar/Bar chart untuk kategori skill (ML, Data, Backend, DevOps, dll).
  - Timeline/stacked chart untuk fokus pengalaman/skill.
- **Project case-study cards**: Problem → Approach → Tech → Impact/Metrics → Links.
- **Sticky navbar** + smooth scrolling + active section highlight.
- **Dark/Light toggle** (keduanya tetap monochrome).
- Ikon sosial: **GitHub, LinkedIn, Resume (PDF), Gmail/Email**.
- Tombol **Download Resume** terhubung ke `public/resume.pdf`.

---

## 🧱 Tech Stack

> Sesuaikan dengan implementasi yang kamu generate (umumnya ini paling ideal).

- **Framework**: Next.js / React
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (atau CSS + IntersectionObserver)
- **Charts**: Recharts / Chart.js / ECharts
- **Icons**: Lucide / Font Awesome / Simple Icons

---

## 🚀 Running Locally

### 1) Install dependencies
```bash
npm install
# atau
yarn
# atau
pnpm install
````

### 2) Start development server

```bash
npm run dev
```

Buka browser di:

* `http://localhost:3000` (Next.js)
* `http://localhost:5173` (Vite) — jika pakai Vite

---

## 🏗️ Build (Production)

```bash
npm run build
npm run start
```

Jika pakai Vite:

```bash
npm run build
npm run preview
```

---

## ⚙️ Content Configuration (Edit cepat)

Semua konten utama sebaiknya disimpan di satu file config, misalnya:

* `src/content/content.json` atau `src/content/content.ts`

Yang bisa kamu edit tanpa ubah layout:

* Profil (nama, headline, summary)
* Social links (GitHub/LinkedIn/Email/Resume)
* Skill levels (untuk chart)
* Projects (deskripsi + metrics + links)
* Experience timeline
* Education & certifications
* Contact info

> Kalau proyekmu belum pakai file config, buat 1 file config agar update konten jadi mudah.

---

## 📄 Resume

Letakkan CV terbaru kamu di:

* `public/resume.pdf`

Nantinya tombol **Resume / Download Resume** otomatis mengarah ke file ini.

---

## 🌐 Deployment

### Vercel (Next.js)

1. Push repo ke GitHub
2. Import project di Vercel
3. Build command: `npm run build`
4. Deploy ✅

### Netlify (Vite / React)

* Build command: `npm run build`
* Publish directory: `dist`

---

## ✅ Checklist Sebelum Publish

* [ ] Semua link sosial valid (GitHub, LinkedIn, Email).
* [ ] `public/resume.pdf` tersedia dan bisa di-download.
* [ ] Project cards punya **impact metrics** (akurasi, latency, cost saving, dsb).
* [ ] Charts tampil benar di mobile.
* [ ] Meta tags & OG image sudah diisi.
* [ ] Lighthouse score bagus (Performance, Accessibility, SEO).

---

## 📬 Contact

* Email: `zidanbrilliant@gmail.com`
* LinkedIn: `https://linkedin.com/in/zidanbrilliant`
* GitHub: `https://github.com/zidanbrilliant`

---

© 2026 Muhammad Zidan Brilliant. All rights reserved.

