# Dr. Noor Ul An Bandey - Professional Portfolio

A modern, responsive portfolio website showcasing Dr. Noor's medical expertise, research publications, and professional journey. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Static Site**: No server dependencies - perfect for GitHub Pages
- **Fast Loading**: Optimized performance with static data
- **Accessible**: Built with accessibility best practices
- **Professional Sections**:
  - Hero section with contact information
  - About section with personal story and values
  - Skills showcase with visual progress indicators
  - Education timeline with academic achievements
  - Professional experience with detailed responsibilities
  - Research publications with impact descriptions
  - Certifications and professional development
  - Contact form and social links

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Build Tool**: Vite for fast development and building
- **Deployment**: GitHub Pages with GitHub Actions
- **Icons**: Lucide React for consistent iconography
- **Animations**: GSAP and Framer Motion for smooth transitions

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── data/             # Static portfolio data
│   │   ├── hooks/            # Custom React hooks
│   │   ├── pages/            # Page components
│   │   └── lib/              # Utility functions
│   └── public/               # Static assets
├── .github/workflows/        # GitHub Actions for deployment
└── attached_assets/          # Resume and image files
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dr-noor-portfolio.git
   cd dr-noor-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Fork or clone this repository**

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Configure deployment**
   - The `.github/workflows/deploy.yml` file handles automatic deployment
   - Every push to the `main` branch will trigger a new deployment

4. **Access your live site**
   - Your portfolio will be available at: `https://yourusername.github.io/repository-name`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Upload the dist/ folder contents to your hosting provider
```

## 📝 Customization

### Updating Portfolio Content

All portfolio data is stored in `client/src/data/portfolio-data.ts`. You can easily update:

- **Personal Information**: Name, title, contact details
- **Education**: Degrees, institutions, dates
- **Experience**: Job titles, responsibilities, dates
- **Skills**: Technical and soft skills with proficiency levels
- **Publications**: Research papers and publications
- **Certifications**: Professional certifications and training

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Add the component to `client/src/pages/home.tsx`
3. Update the navigation if needed

### Styling Customization

- **Colors**: Modify the Tailwind configuration in `tailwind.config.ts`
- **Fonts**: Update font imports in `client/src/index.css`
- **Animations**: Customize GSAP animations in `client/src/hooks/use-gsap-animations.ts`

## 📱 Features Breakdown

### Hero Section
- Professional headshot with animated border
- Contact information with styled badges
- Call-to-action buttons for resume download and contact
- Key achievements highlighted in cards
- Academic goals and MPH focus areas

### Skills Section
- Categorized skills (Clinical, Research, Technical, Interpersonal)
- Visual progress bars showing proficiency levels
- Interactive hover effects and animations
- Key highlights and certifications

### Experience Timeline
- Professional timeline with alternating layout
- Detailed job responsibilities and achievements
- Type-specific styling (Professional, Internship, Volunteer)
- Location and duration information
- Impact highlights for each role

### Publications
- Research papers with detailed descriptions
- Contribution highlights and impact statements
- Journal information and publication dates
- Type categorization (Case Study, Research, Review)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking

### Code Quality

The project includes:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for consistent styling

## 📄 Resume Integration

The portfolio includes automatic resume download functionality:

1. Place your resume PDF in `client/public/assets/`
2. Name it `Dr_Noor_Ul_An_Bandey_Resume.pdf`
3. The download button will automatically serve this file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📧 Contact

For questions about this portfolio template or customization:

- **Email**: noorulanbandey@gmail.com
- **LinkedIn**: [Dr. Noor Ul An Bandey](https://www.linkedin.com/in/noorbandey/)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for academic and professional excellence**

Perfect for medical professionals, researchers, and MPH program applicants looking to create a compelling online presence. 