# Product Requirements Document
## Personal Portfolio — Renewable Energy Engineer

**Version:** 1.0.0  
**Status:** Pre-development  
**Owner:** RifqiAdrianto  
**Last updated:** June 2026

---

## 1. Overview

### Problem Statement
Sebagai fresh graduate di bidang Renewable Energy Engineering, visibility online adalah hambatan utama dalam mencari kerja pertama. Recruiter di sektor energi belum terbiasa mencari kandidat lewat portfolio website — sebagian besar masih bergantung pada LinkedIn dan CV. Website ini harus mengubah kebiasaan itu: menjadi bukti nyata bahwa kandidat ini berbeda dari yang lain.

### Goal
Membangun personal portfolio website yang menjadi **central hub** untuk personal branding — satu URL yang bisa dikirim ke recruiter, dosen pembimbing, atau perusahaan manapun di sektor energi, yang langsung menunjukkan siapa kamu, apa yang kamu bisa, dan mengapa kamu layak dipertimbangkan.

### Target Audience
- **Primary:** HR & hiring manager di perusahaan energi (oil & gas, PLTS, PLTA, geothermal, startup cleantech)
- **Secondary:** Akademisi, dosen, peneliti yang bisa membuka peluang kolaborasi riset
- **Tertiary:** Siapapun di sektor energi yang relevan — NGO, pemerintah, konsultan

---

## 2. Design Direction

### Visual Identity
Mengambil referensi dari desain bold/expressive (gambar 3 & 4) dengan sentuhan profesional dari referensi agency (gambar 2). Bukan desain "engineer yang membosankan" — melainkan desain yang menunjukkan bahwa kandidat ini punya estetika dan kepribadian yang kuat.

**Color Palette:**

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-primary` | `#11358B` | Background utama, elemen dominan |
| `--color-accent` | `#C7EF66` | CTA, highlight, signature element |
| `--color-mid` | `#6192FC` | Gradient, card, secondary element |
| `--color-surface` | `#EFF0F4` | Background section terang, teks di atas dark bg |
| `--color-dark` | `#0A0F1E` | Background section gelap, depth |

**Typography:**
- **Display:** Space Grotesk (Bold/ExtraBold) — untuk headline besar, ekspresif, tidak generik
- **Body:** Inter — clean, readable, profesional
- **Mono:** JetBrains Mono — untuk data teknis, angka, label

**Signature Element:**
Teks hero yang sangat besar (oversized display type) yang overflow/clip di edge layar, dikombinasikan dengan accent color `#C7EF66` sebagai underline atau highlight — terinspirasi dari gambar 3 & 4. Ini yang membuat halaman ini langsung diingat.

**Tone:**
Bold, direct, dan confident — bukan humble atau akademis. Copy ditulis dari perspektif "ini yang saya bisa lakukan untuk Anda," bukan "saya adalah mahasiswa yang ingin belajar."

---

## 3. Tech Stack

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSG untuk SEO, familiar dari React, Vercel-ready |
| Language | **TypeScript** | Strict mode, hindari bug di production |
| Styling | **Tailwind CSS v3** | Utility-first, konsisten dengan design tokens |
| Animation | **Framer Motion** | Scroll-triggered reveal, hover micro-interaction |
| Font | **Google Fonts** (Space Grotesk + Inter + JetBrains Mono) | Free, variable fonts |
| Icons | **Lucide React** | Ringan, konsisten |
| Package Manager | **pnpm** | Lebih cepat dari npm |
| Deployment | **Vercel** | Free tier, optimal untuk Next.js, custom domain support |
| Version Control | **GitHub** | Source of truth, integrasi langsung ke Vercel |

---

## 4. Sections & Content Requirements

### 4.1 Hero Section
**Tujuan:** Immediate impression dalam 3 detik pertama.

**Elemen wajib:**
- Nama lengkap dalam display type yang sangat besar (oversized, bold)
- Role/tagline: `Renewable Energy Engineer` dengan accent color highlight
- Sub-tagline: 1 kalimat value proposition (bukan deskripsi diri)
- CTA primer: `View My Work` → scroll ke Projects
- CTA sekunder: `Download CV` → open PDF di tab baru
- Ambient background: dark navy (`#11358B`) dengan subtle animated gradient atau geometric energy-themed element

**Contoh copy:**
```
Fahrosi Nur Arif
Building the Infrastructure
for a Cleaner Grid.

Renewable Energy Engineer — focused on solar systems,
energy modeling, and sustainable power solutions.

[Download CV]
```

---

### 4.2 About Section
**Tujuan:** Establish credibility dan kepribadian dalam format yang tidak membosankan.

**Elemen wajib:**
- Foto profil (optional: dengan treatment warna yang sesuai palette)
- Paragraf singkat: siapa kamu, dari mana, fokus riset/keahlian
- 3-4 "stat cards" dengan angka konkret: tahun studi, jumlah project, GPA (jika relevan), atau fakta unik lainnya
- Bukan daftar bullet — gunakan prose yang manusiawi

**Contoh copy:**
```
I'm a Renewable Energy Engineering graduate from [Universitas],
with a focus on photovoltaic system design and energy simulation.
I believe the energy transition won't happen by itself — it needs
engineers who can build real solutions, not just write reports.
```

---

### 4.3 Skills Section
**Tujuan:** Menunjukkan technical depth tanpa terasa seperti daftar belanja.

**Elemen wajib:**
- Grouping berdasarkan kategori, bukan daftar flat:
  - **Energy Systems:** PV System Design, Load Analysis, Grid Integration, HOMER Pro, PVsyst
  - **Engineering Tools:** AutoCAD, MATLAB/Simulink, Python (energy modeling)
  - **Data & Analysis:** Excel (advanced), Power BI, data visualization
  - **Soft Skills / Lainnya:** Project documentation, technical writing, field survey
- Visual: bisa berupa tag/badge, horizontal bar, atau card grid — bukan progress bar persentase (tidak akurat dan terkesan generik)

---

### 4.4 Projects Section
**Tujuan:** Bukti konkret kemampuan — ini section paling penting untuk recruiter.

**Elemen wajib per project card:**
- Judul project
- Tag kategori (Solar / Wind / Energy Audit / Simulation / dll)
- Deskripsi singkat: masalah yang diselesaikan, bukan proses yang dilakukan
- Tech/tools yang digunakan
- Link: GitHub / laporan PDF / demo (jika ada)
- Thumbnail/preview image (wajib — card tanpa gambar terlihat kosong)

**Minimal 3 project untuk launch.** Jika belum ada project publik, gunakan project tugas kuliah atau skripsi dengan framing yang profesional.

**Filter/kategori:** Tambahkan filter tab sederhana jika project lebih dari 5.

---

### 4.5 Experience Section
**Tujuan:** Menunjukkan track record — magang, organisasi, riset, lomba, atau KKN sekalipun.

**Format:** Timeline vertikal, bukan tabel.

**Elemen per entry:**
- Role / posisi
- Organisasi / institusi
- Periode (bulan + tahun)
- 2-3 bullet poin achievement (bukan tugas — achievement)

**Scope:** Masukkan semua yang relevan: magang, asisten laboratorium, organisasi teknis, kompetisi, KKN jika ada output konkret.

---

### 4.6 Contact Section
**Tujuan:** Membuat recruiter bisa menghubungi kamu dengan friction sesedikit mungkin.

**Elemen wajib:**
- Headline yang direct: `Let's Work Together` atau `Open to Opportunities`
- Form sederhana: Nama, Email, Pesan — kirim via email (gunakan Resend atau Formspree untuk serverless)
- Link alternatif: Email langsung, LinkedIn, GitHub
- Lokasi: `Indonesia` (tidak perlu detail kota)

---

## 5. Non-Functional Requirements

### Performance
- Lighthouse score ≥ 90 untuk Performance, Accessibility, SEO
- First Contentful Paint < 1.5 detik
- Semua gambar wajib pakai `next/image` dengan format WebP

### SEO
- Metadata lengkap: title, description, og:image, twitter:card
- Nama lengkap sebagai primary keyword di title tag
- Structured data (JSON-LD) untuk Person schema

### Accessibility
- Semua gambar punya alt text
- Keyboard navigable
- Color contrast ratio ≥ 4.5:1 untuk teks
- Respect `prefers-reduced-motion`

### Responsiveness
- Mobile-first
- Breakpoint: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Semua section tested di iPhone SE (375px) dan Desktop 1440px

---

## 6. Project Structure (Next.js App Router)

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, font loading, metadata
│   ├── page.tsx            # Homepage (semua section)
│   └── api/
│       └── contact/
│           └── route.ts    # API endpoint untuk contact form
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Navbar.tsx
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       └── Footer.tsx
├── data/
│   ├── projects.ts         # Data project (hardcoded, bukan CMS)
│   ├── skills.ts
│   └── experience.ts
├── public/
│   ├── cv.pdf
│   └── images/
├── styles/
│   └── globals.css         # CSS variables, base styles
└── CLAUDE.md               # Instruksi untuk AI assistant
```

---

## 7. Development Phases

### Phase 1 — Foundation (Week 1)
- [ ] Init Next.js + TypeScript + Tailwind
- [ ] Setup design tokens di `globals.css`
- [ ] Install dan configure Framer Motion
- [ ] Navbar + Footer component
- [ ] Hero section (full implementation)

### Phase 2 — Core Sections (Week 2)
- [ ] About section
- [ ] Skills section
- [ ] Projects section + data layer
- [ ] Experience section

### Phase 3 — Polish & Launch (Week 3)
- [ ] Contact section + form integration
- [ ] Animasi scroll-triggered di semua section
- [ ] SEO metadata + structured data
- [ ] Performance audit (Lighthouse)
- [ ] Deploy ke Vercel + custom domain (opsional)

---

## 8. Out of Scope (v1.0)

- Blog / artikel
- CMS (Sanity, Contentlayer) — data hardcoded dulu di Phase 1
- Dark mode toggle — dark by default, tidak perlu toggle
- Multi-bahasa (EN/ID)
- Analytics (tambahkan di v1.1 jika diperlukan)

---

## 9. Catatan untuk GitHub Copilot

CLAUDE.md yang sudah ada dirancang untuk **Claude Code**, bukan Copilot. Untuk Copilot, gunakan pendekatan ini:

- Buka file yang relevan sebelum minta Copilot generate kode
- Tulis comment yang spesifik sebagai "prompt" inline:
  ```tsx
  // Hero section: dark navy background (#11358B), oversized display text
  // with accent green (#C7EF66) highlight, Framer Motion fade-in on load
  ```
- Gunakan Copilot Chat (bukan inline) untuk task yang lebih kompleks
- CLAUDE.md masih berguna sebagai **referensi manual** saat kamu buka Copilot Chat dan paste kontennya sebagai konteks

---

*PRD ini adalah living document. Update setiap kali ada perubahan scope atau keputusan teknis yang signifikan.*