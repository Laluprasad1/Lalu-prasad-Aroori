# 🚀 Lalu Prasad Aroori - Portfolio Website

A modern, responsive portfolio website built with Next.js, Three.js, and Framer Motion, showcasing my journey as an AI/ML enthusiast, cloud computing specialist, and web developer.

## 🌟 Live Demo

Visit my portfolio: ([**Live Website**](https://lalu-prasad-aroori.vercel.app/)) *(Deploy to get live URL)*

## 📸 Preview

![Portfolio Preview](./public/portfolio-preview.png) *(Add a screenshot of your portfolio)*

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🎭 3D Animations**: Interactive Three.js 3D elements in hero section
- **⚡ Performance Optimized**: Built with Next.js for fast loading
- **🎬 Smooth Animations**: Powered by Framer Motion
- **📧 Contact Form**: Functional contact modal for easy communication
- **📄 Resume Download**: Direct resume download functionality
- **🎯 SEO Optimized**: Meta tags and structured data for better visibility

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Deployment**: Vercel *(recommended)*

## 📂 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Hero3D.tsx        # 3D hero section
│   ├── Skills.tsx        # Skills showcase
│   ├── Projects.tsx      # Projects gallery
│   ├── Experience.tsx    # Experience timeline
│   ├── Footer.tsx        # Site footer
│   └── ContactModal.tsx  # Contact form modal
├── lib/                  # Utility functions and data
│   ├── portfolio-data.ts # Portfolio content data
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── profile-image.jpg # Profile photo
│   └── *.pdf            # Resume file
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Laluprasad1/Lalu-prasad-Aroori.git
   cd Lalu-prasad-Aroori
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Edit `lib/portfolio-data.ts` to update:

- Personal details (name, title, contact info)
- Skills and expertise levels
- Project showcases with descriptions
- Experience and certifications
- Social media links

### Profile Image

Replace `public/profile-image.jpg` with your photo (recommended: 400x400px, square format)

### Resume

Replace `public/Lalu prasad_Aroori.pdf` with your resume file

### Styling

- Colors: Update `tailwind.config.ts` for theme colors
- Fonts: Modify `app/layout.tsx` for font changes
- Animations: Customize in individual component files

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (already done ✅)

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings

### Alternative Deployment Options

- **Netlify**: Drag and drop `npm run build` output
- **GitHub Pages**: Enable in repository settings
- **Railway**: Connect GitHub repository

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for Google's performance metrics
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle optimization

## 🎯 Sections

1. **Hero**: Profile image, name, title with 3D animations
2. **Skills**: Interactive skill bars with categories
3. **Projects**: Featured projects with modal details
4. **Experience**: Timeline of internships and certifications
5. **Contact**: Modal form for direct communication
6. **Footer**: Social links and additional information

## 🔧 Environment Variables

Create `.env.local` for any environment-specific configurations:

```env
# Add any required environment variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

I'm **Lalu Prasad Aroori**, an AI/ML enthusiast passionate about cloud computing and web development. I love creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications.

### 🔗 Connect With Me

- **LinkedIn**: [lalu-prasad-aroori](https://www.linkedin.com/in/lalu-prasad-aroori)
- **GitHub**: [Laluprasad1](https://github.com/Laluprasad1)
- **Email**: [aroorilaluprasad@gmail.com](mailto:aroorilaluprasad@gmail.com)

---

⭐ **If you found this portfolio helpful, please give it a star!**

Made with ❤️ by [Lalu Prasad Aroori](https://github.com/Laluprasad1)
