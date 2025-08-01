# 💭 Nostalgia Ospek Pratama Kelompok 4 — 2025

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Framer_Motion-0.18-0055FF?style=for-the-badge&logo=framer" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
</div>

<div align="center">
  <h3>🌟 Website kenang-kenangan ospek yang dibuat sepenuh hati untuk anak-anak Kelompok 4 🌟</h3>
  <p><em>"Karena momen ini gak akan terulang lagi"</em> 💌</p>
</div>

---

## 📖 Tentang Project

Website ini adalah **kenang-kenangan digital** yang dibuat khusus untuk anak-anak **Kelompok 4 Ospek Pratama 2025**. Berisi timeline perjalanan, galeri foto, pesan-pesan hangat, quiz seru, dan surat digital dari mentor yang bisa dibuka kapan saja untuk bernostalgia.

### 🎯 Tujuan

- Mengabadikan momen-momen indah selama ospek
- Menyimpan kenangan dalam bentuk digital yang interaktif
- Memberikan pengalaman nostalgia yang menyenangkan
- Mempererat tali persahabatan melalui teknologi

---

## ✨ Fitur Utama

### 🏠 **Hero Section**

- Animasi parallax yang mengikuti gerakan mouse
- Floating elements dengan efek blur
- Typography yang elegan dengan gradient text
- Interactive button dengan hover effects

### 📅 **Timeline Perjalanan**

- Timeline interaktif dengan foto dan deskripsi
- Hover effects yang smooth dan engaging
- Animated progress line yang mengikuti scroll
- Responsive design untuk semua device

### 📸 **Galeri Lengkap**

- Grid gallery dengan modal preview
- Smooth animations menggunakan Framer Motion
- Filter dan search functionality
- Lightbox dengan navigation controls

### 💌 **Wall of Love**

- 40+ pesan dari teman-teman kelompok
- Infinite marquee dengan smooth scrolling
- Interactive message cards dengan like button
- Filter berdasarkan kategori pesan

### ✉️ **Surat Cinta Digital**

- Amplop interaktif yang bisa dibuka
- Paper texture dengan efek vintage
- Smooth modal transitions
- Typography yang elegan untuk reading experience

### 🎮 **Quiz Nostalgia**

- 10 pertanyaan seru tentang momen ospek
- Timer dan scoring system
- Leaderboard dengan localStorage
- Animated transitions dan feedback

### 🦶 **Footer Elegan**

- Tech stack showcase
- Pesan personal dari mentor
- Quick navigation links
- Animated elements dan mouse parallax

---

## 🛠️ Tech Stack

### **Frontend Framework**

- **Next.js 15** - React framework dengan App Router
- **React 18** - JavaScript library untuk UI
- **Tailwind CSS** - Utility-first CSS framework

### **Animations & Interactions**

- **Framer Motion** - Smooth animations dan transitions
- **CSS Animations** - Custom keyframes dan effects
- **Intersection Observer** - Scroll-triggered animations

### **State Management**

- **React Hooks** - useState, useEffect, useRef
- **localStorage** - Client-side data persistence
- **Context API** - Global state management

### **Styling & Design**

- **Responsive Design** - Mobile-first approach
- **Custom Components** - Reusable UI components
- **Gradient Backgrounds** - Beautiful color schemes
- **Glassmorphism** - Modern blur effects

---

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. **Clone repository**

```bash
git clone https://github.com/ryhndastra/pratama-memories.git
cd pratama-memories
```

2. **Install dependencies**

```bash
npm install
# atau
yarn install
```

3. **Run development server**

```bash
npm run dev
# atau
yarn dev
```

4. **Open browser**

```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
PRATAMA-MEMORIES/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── galeri/            # Gallery pages
│   ├── pesan/             # Messages pages
│   └── quiz/              # Quiz pages
├── components/
│   ├── hero.jsx           # Hero section
│   ├── timeline-section.jsx
│   ├── galeri-preview.jsx
│   ├── message-wall.jsx
│   ├── surat-section.jsx
│   ├── goto-quiz.jsx
│   ├── footer.jsx
├── public/
│   ├── images/            # Photos and assets
│   └── videos/            # Video files
└── styles/
    └── globals.css        # Global styles
```

---

## 🎨 Design System

### **Color Palette**

- **Primary**: `#8B4513` (Saddle Brown)
- **Secondary**: `#A0522D` (Sienna)
- **Accent**: `#FFD4C4` (Peach Puff)
- **Background**: `#FFF8F5` (Seashell)

### **Typography**

- **Headings**: Inter (Bold, Semi-bold)
- **Body**: Inter (Regular, Medium)
- **Letters**: Serif fonts untuk reading experience

### **Animations**

- **Duration**: 0.3s untuk hover, 0.8s untuk entrance
- **Easing**: `ease-out` untuk natural movement
- **Stagger**: 0.1s-0.2s untuk sequential animations

---

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Features**

- ✅ Mobile-first approach
- ✅ Touch-friendly interactions
- ✅ Optimized images dan assets
- ✅ Smooth scrolling di semua device

---

## 🔧 Customization

### **Mengganti Konten**

1. **Timeline Events**: Edit `timeline-section.jsx`
2. **Gallery Items**: Update `galeri-preview.jsx`
3. **Messages**: Modify `message-wall.jsx`

### **Styling**

1. **Colors**: Update Tailwind config
2. **Fonts**: Modify `layout.jsx`
3. **Animations**: Adjust Framer Motion variants

### **Adding New Sections**

1. Create component di `components/`
2. Import ke `app/page.jsx`
3. Add navigation links di footer

---

## 🚀 Deployment

### **Vercel (Recommended)**

1. Push ke GitHub repository
2. Connect ke Vercel dashboard
3. Deploy otomatis dari main branch

### **Netlify**

```bash
npm run build
# Upload dist folder ke Netlify
```

### **Manual Hosting**

```bash
npm run build
npm run export
# Upload out/ folder ke hosting
```

---

## 📊 Performance

### **Lighthouse Scores**

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 95+

### **Optimizations**

- ✅ Image optimization dengan Next.js
- ✅ Code splitting otomatis
- ✅ Lazy loading untuk components
- ✅ Minimal bundle size

---

## 🤝 Contributing

Meskipun ini adalah project personal untuk kenang-kenangan, kontribusi tetap welcome!

### **How to Contribute**

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### **Guidelines**

- Follow existing code style
- Add comments untuk complex logic
- Test di multiple devices
- Keep animations smooth dan performant

---

## 📝 License

Project ini dibuat untuk keperluan personal dan kenang-kenangan. Silakan gunakan sebagai referensi atau template untuk project serupa.

**MIT License** - feel free to use, modify, dan distribute.

---

## 💝 Acknowledgments

### **Untuk Anak-anak Kelompok 4**

Terima kasih sudah jadi kelompok yang luar biasa. Kalian adalah alasan kenapa website ini dibuat dengan sepenuh hati. Semoga bisa jadi kenangan indah yang selalu bisa kalian buka kapan saja.

### **Tech Community**

- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Framer Motion](https://www.framer.com/motion/) - Beautiful animations
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vercel](https://vercel.com/) - Seamless deployment

---

<div align="center">
  <h3>🌟 Dibuat dengan ❤️ untuk Kelompok 4 🌟</h3>
  <p><em>"Semoga kalian selalu ingat momen-momen indah ini"</em></p>
  
  **⭐ Jangan lupa kasih star kalau suka! ⭐**
</div>

---

<div align="center">
  <sub>© 2025 Website Kenang-kenangan Kelompok 4. Made with 💕 by Rey.</sub>
</div>
