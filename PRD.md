# Product Requirements Document
## Personal Portfolio — Renewable Energy Engineer
**Version:** 1.0.0  
**Status:** Pre-development  
**Owner:** Rifqi Adrianto  
**Last updated:** June 2026
---

## 1. Overview
### Problem Statement
Sebagai fresh graduate di bidang Renewable Energy Engineering, visibility online adalah hambatan utama dalam mencari kerja pertama. Recruiter di sektor energi belum terbiasa mencari kandidat lewat portofolio website — sebagian besar masih bergantung pada LinkedIn dan CV. Website ini harus mengubah kebiasaan itu menjadi bukti nyata bahwa kandidat ini berbeda dari yang lain.

### Goal
Membangun personal portfolio website yang menjadi **central hub** untuk personal branding — satu URL yang bisa dikirim ke recruiter, dosen pembimbing, atau perusahaan mana pun di sektor energi, yang langsung menunjukkan siapa kamu, apa yang kamu bisa, dan mengapa kamu layak dipertimbangkan.

### Target Audience
- **Primary:** HR & hiring manager di perusahaan energi (oil & gas, PLTS, PLTA, geothermal, startup cleantech)
- **Secondary:** Akademisi, dosen, peneliti yang bisa membuka peluang kolaborasi riset
- **Tertiary:** Siapapun di sektor energi yang relevan — NGO, pemerintah, konsultan

---

## 2. Design Direction
### Visual Identity
Mengambil referensi dari desain bold/expressive (Gambar 3 & 4) dengan sentuhan profesional dari referensi agensi (Gambar 2). Bukan desain "engineer yang membosankan" — melainkan desain yang menunjukkan bahwa kandidat ini punya estetika dan kepribadian yang kuat.

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
- **Body:** Inter — clean, readable, professional
- **Mono:** JetBrains Mono — untuk data teknis, angka, label

**Signature Element:**
Teks hero yang sangat besar (oversized display type) yang overflow/clip di edge layar, dikombinasikan dengan accent color `#C7EF66` sebagai underline atau highlight — terinspirasi dari gambar 3 & 4. Ini yang membuat halaman ini langsung diingat.

**Tone:**
Bold, direct, dan confident — bukan humble atau akademis. Copy ditulis dari perspektif "ini yang saya bisa lakukan untuk Anda", bukan "saya adalah mahasiswa yang ingin belajar."

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
- Nama lengkap: ‘Fahrosi Nur Arif’ dalam display type yang sangat besar (oversized, bold)
- Role/tagline: `Building Sustainable Energy Solutions -` dengan accent color highlight
- CTA primer: `Download CV` → open PDF di tab baru
- Ambient background: dark navy (`#11358B`) dengan subtle animated gradient atau geometric energy-themed element
**Contoh copy:**
```
### 4.2 About Section
**Tujuan:** Establish credibility dan kepribadian dalam format yang tidak membosankan.
**Elemen wajib:**
- Foto profil (optional: dengan treatment warna yang sesuai palette)
- Paragraf singkat: I'm Fahrosi Nur Arif, a Renewable Energy Engineering graduate from the State Polytechnic of Jember, driven by a passion for advancing sustainable energy solutions. My experience spans hydrogen energy research, bioenergy systems, industrial energy analysis, and engineering project management, supported by hands-on industry experience and academic research. I strive to develop practical, data-driven solutions that accelerate the transition toward a cleaner, more sustainable energy future.
- Bukan daftar bullet — gunakan prose yang manusiawi

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
- Judul project : Data Logger Systems for real-time Monitoring 
- Tag kategori Instrumentation
- Deskripsi singkat: Designed and developed a microcontroller-based data logger to automate real-time voltage monitoring of an HHO generator. The system addressed the limitations of manual measurements by providing continuous, accurate, and reliable data acquisition for performance evaluation and experimental analysis. 
- Tech/tools yang digunakan : 
C/C++
Microsoft Excel
Arduino IDE
Arduino Uno
Voltage Sensor Module
SD Card Module

- Link: GitHub / laporan PDF/demo (jika ada)
- Thumbnail/preview image (wajib — card tanpa gambar terlihat kosong)

- Judul project : Recycling Heat Pyrolyzer for Biomass Waste Conversion  
- Tag kategori : Bioenergy | Biomass | Thermal Engineering 
- Deskripsi singkat: Led the development of a heat-based pyrolysis system designed to improve thermal efficiency in converting coconut shell biomass into biochar. The project addressed heat loss in conventional pyrolysis systems by implementing a heat recycling concept to achieve a more stable reactor temperature and enhance production performance. 
- Tech/tools yang digunakan : 
AutoCAD
Project Management
Microsoft Excel


- Link: GitHub / laporan PDF / demo (jika ada)
- Thumbnail/preview image (wajib — card tanpa gambar terlihat kosong)

- Judul project : Biogas Potential Mapping Using GIS 
- Tag kategori : Biogas | GIS | Data Analysis
- Deskripsi singkat: Developed a GIS-based biogas potential map to identify high-priority regions for renewable energy development in West Sumatra. The project transformed livestock population data into spatial insights, supporting data-driven planning for sustainable biogas utilization. 
- Tech/tools yang digunakan : 
QGIS 3.14
Geographic Information System (GIS)
Microsoft Excel



- Link: GitHub / laporan PDF / demo (jika ada)
- Thumbnail/preview image (wajib — card tanpa gambar terlihat kosong)

- Judul project : Automatic Temperature Monitoring & Control System 
- Tag kategori : Instrumentation | Automation 
- Deskripsi singkat: Developed an Arduino-based automatic temperature monitoring and control system capable of measuring, displaying, and regulating temperature in real time. The project addressed the need for accurate and automated temperature control while providing live data visualization for improved monitoring and analysis.  
- Tech/tools yang digunakan : 
Arduino Uno
DS18B20 Temperature Sensor
Omron MY2N Relay
Arduino IDE
Visual Studio
C/C++
LCD 16×2

- Link: GitHub / laporan PDF / demo (jika ada)
- Thumbnail/preview image (wajib — card tanpa gambar terlihat kosong)

- Judul project : Solar Panel-Based Building Design 
- Tag kategori : Solar Energy | CAD Design | Sustainable Building 
- Deskripsi singkat: Designed a conceptual building integrated with rooftop photovoltaic (PV) systems to demonstrate the application of renewable energy in modern building design. The project focused on optimizing solar panel placement while incorporating practical architectural and engineering principles to support energy-efficient infrastructure. 
- Tech/tools yang digunakan : 
AutoCAD
Technical Drawing
Building Design
Photovoltaic (PV) System Concept

- Link: GitHub / laporan PDF / demo (jika ada)
- Thumbnail/preview image (wajib — card tanpa gambar terlihat kosong)

- Judul project : Small-Scale Biogas Installation for Livestock Waste Utilization  
- Tag kategori : Bioenergy | Waste-to-Energy | Renewable Energy  
- Deskripsi singkat: Designed and implemented a small-scale biogas installation to convert cattle manure from the Politeknik Negeri Jember livestock farm into renewable cooking fuel. The project addressed livestock waste management issues by utilizing an affordable biodigester system with an inner tube gas holder, reducing environmental impact while producing clean and sustainable energy. 
- Tech/tools yang digunakan : 
Biogas Digester
Renewable Energy System
Waste-to-Energy Technology

- Link: GitHub / laporan PDF / demo (jika ada)
- Thumbnail/preview image (wajib — card tanpa gambar terlihat kosong)

- Judul project : Coffee Husk Biomass Briquette Production  
- Tag kategori : Bioenergy | Biomass | Waste-to-Energy 
- Deskripsi singkat: Developed biomass briquettes from coffee husk waste to transform agricultural by-products into a renewable and marketable solid fuel. The project addressed the issue of coffee processing waste by converting it into an eco-friendly energy source with added economic value, supporting sustainable waste management and the circular economy. 
- Tech/tools yang digunakan : 

- Link: GitHub / laporan PDF / demo (jika ada)
- Thumbnail/preview image (wajib — card tanpa gambar terlihat kosong)

- Judul project : Digital Avometer Development Using Arduino   
- Tag kategori : Instrumentation | Electrical Measurement 
- Deskripsi singkat: Designed and developed a digital avometer capable of measuring voltage and current using Arduino Uno, INA219, and voltage sensors. The project addressed the need for an affordable and reliable electrical measurement device by validating its performance against a commercial digital multimeter.  
- Tech/tools yang digunakan : 
Arduino IDE
C/C++
Electrical Circuit Design

- Link: GitHub / laporan PDF / demo (jika ada)
- Thumbnail/preview image (wajib — card tanpa gambar terlihat kosong)

**Filter/kategori:** Tambahkan filter tab sederhana jika proyek lebih dari 5.

---

### 4.5 Experience Section
**Tujuan:** Menunjukkan track record — magang, organisasi, riset, lomba, atau KKN sekalipun.
**Format:** Timeline vertikal, bukan tabel.

**Elemen per entry:**
- Engineer Intern – Process & Quality Control 
- PT Madubaru PG–PS Madukismo, Yogyakarta
- Jul 2025 – Nov 2025 
- Achieved 89.73% fermentation efficiency, demonstrating effective process evaluation through mass balance and yield analysis.
- Contributed to consistent alcohol product quality by minimizing process deviations across fermentation and distillation operations.
- Delivered reliable production data that supported operational monitoring and quality assurance throughout the production cycle.

- Creative Team & Bujang Ganong Talent 
- LUMUT Student Activity Unit
- Sep 2024 – Nov 2025 
- Successfully delivered one of LUMUT's largest annual cultural events with 150+ attendees through effective creative planning and execution.
- Increased audience engagement by developing the Dewi Songgo Langit exhibition concept and integrating live artistic performances.
- Strengthened cross-functional collaboration among performers, artists, and organizing committees to ensure seamless event execution.

- Event Coordinator, Master of Ceremony & Talent
- APLIKASI Event – LUMUT Student Activity Unit 
- May 2024 – Jun 2024 
- Successfully coordinated an orientation event attended by 100+ participants, ensuring smooth execution from preparation through completion.
- Demonstrated leadership by managing three strategic roles simultaneously while maintaining event quality and participant satisfaction.
- Enhanced participant engagement through effective event facilitation and dynamic public speaking.

- Public Relations Volunteer – Public Speaker Division 
- State Polytechnic of Jember  
- Oct 2022 – Oct 2023  
- Represented the State Polytechnic of Jember in educational outreach programs, strengthening institutional engagement with prospective students.
- Featured on the official POLIJE YouTube channel as an educational presenter, expanding the institution's public outreach initiatives.

---

### 4.6 Contact Section
**Tujuan:** Membuat recruiter bisa menghubungi kamu dengan friction sesedikit mungkin.

**Elemen wajib:**
- Headline yang direct: `Let's Work Together and Create Something Great!’
- Form sederhana: Fahrosi Nur Arif, fahrosinurr@gmail.com, Pesan — kirim via email (gunakan Resend atau Formspree untuk serverless)
- Link alternatif: Email langsung (fahrosinurr@gmail.com), LinkedIn (https://www.linkedin.com/in/fahrosinur)

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
- [ ] Setup design tokens in `globals.css`
- [ ] Install and configure Framer Motion
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

*PRD ini adalah living document. Update setiap kali ada perubahan scope atau keputusan teknis yang signifikan.*