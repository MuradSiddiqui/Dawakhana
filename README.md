# Mufeed e aam Dawakhana - Healthcare Clinic Website

A modern, responsive single-page website for Mufeed e aam Dawakhana, built with Next.js 15 and Tailwind CSS. The site features a clean, professional design with Arabic/Urdu text support and comprehensive clinic information.

## 🌟 Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and shadows
- **Multilingual Support**: Arabic, Urdu, and English text with proper RTL support
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, sitemap, and robots.txt
- **Static Export**: Ready for deployment on Vercel, Netlify, or any static hosting
- **WhatsApp Integration**: Direct WhatsApp contact functionality
- **Google Maps**: Embedded maps for each clinic branch
- **Contact Forms**: Email integration with mailto functionality

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Static Site Generation (SSG)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd Dawakhana
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory ready for deployment.

## 📁 Project Structure

```
Dawakhana/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page composition
│   ├── globals.css         # Global styles
│   ├── robots.ts           # SEO robots.txt
│   ├── sitemap.ts          # SEO sitemap
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Header.tsx          # Sticky navigation header
│   ├── Hero.tsx            # Hero section with Arabic text
│   ├── About.tsx           # About Us and Founder sections
│   ├── BranchesGrid.tsx    # Branch cards grid
│   ├── BranchCard.tsx      # Individual branch card
│   ├── TimingsAndMaps.tsx  # Timings and maps container
│   ├── BranchSection.tsx   # Individual branch details
│   ├── Contact.tsx         # Contact form and details
│   ├── Footer.tsx          # Site footer
│   └── NavLink.tsx         # Navigation link component
├── data/
│   ├── branches.ts         # Branch information and hours
│   └── contact.ts          # Contact details
└── public/
    ├── favicon.ico         # Site favicon
    ├── logo.png            # Clinic logo
    └── images/
        └── branches/       # Branch images
```


## 📄 License

This project is built for Mufeed e aam Dawakhana. All rights reserved.

## 🤝 Support

For technical support or customization requests, contact the development team.

---

**Built with ❤️ for Mufeed e aam Dawakhana**