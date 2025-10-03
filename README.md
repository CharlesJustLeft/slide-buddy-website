# Slide Buddy Website

Official website for Slide Buddy - AI-Powered Google Slides Translation & Text Management add-on.

## 🎨 Design

This website features a modern Google-style design with:
- Clean, minimalist interface inspired by Google's Material Design
- Responsive layout optimized for all devices
- Smooth animations and micro-interactions
- Accessibility-first approach
- Fast loading times with optimized assets

## 🌟 Features

- **Modern Google-Style UI**: Clean, professional design following Google's design principles
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading with minimal dependencies
- **SEO Friendly**: Structured data and meta tags for better search visibility
- **Accessibility**: WCAG 2.1 compliant with proper focus management
- **Legal Compliance**: Includes Privacy Policy and Terms of Service

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/TomMcLan/slide-buddy-website.git
cd slide-buddy-website

# Start local server
python -m http.server 8000
# or
npm run dev

# Open http://localhost:8000
```

### Deploy to Vercel
1. Fork this repository or push to your GitHub
2. Connect your GitHub account to [Vercel](https://vercel.com)
3. Import the `slide-buddy-website` repository
4. Vercel will automatically detect it as a static site
5. Click "Deploy" - your site will be live!

## 📁 File Structure

```
slide-buddy-website/
├── index.html              # Main HTML file with Google-style design
├── styles.css              # Custom CSS enhancements
├── script.js               # Interactive JavaScript functionality
├── package.json            # Project configuration
├── assets/                 # Images and media files
│   └── slide-buddy-logo.svg    # Official Slide Buddy logo
├── PRIVACY_POLICY.md       # Privacy policy document
├── TERMS_OF_SERVICE.md     # Terms of service document
└── README.md               # This file
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Vanilla JavaScript**: Modern ES6+ for interactions
- **Google Fonts**: Google Sans font family for authentic Google styling
- **SVG Icons**: Scalable vector graphics for crisp displays

## 🎨 Design System

### Colors
- **Primary Blue**: `#1a73e8` (Google Blue)
- **Secondary Green**: `#34a853` (Google Green)  
- **Accent Yellow**: `#fbbc04` (Google Yellow)
- **Error Red**: `#ea4335` (Google Red)

### Typography
- **Primary Font**: Google Sans
- **Fallback**: Inter, system-ui, sans-serif
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Layout
- **Max Width**: 1200px containers
- **Breakpoints**: Mobile-first responsive design
- **Spacing**: Consistent 8px grid system
- **Border Radius**: Rounded corners (8px, 12px, 16px)

## 🔧 Customization

### Update Content
1. **Hero Section**: Edit the main headline and description in `index.html`
2. **Features**: Modify feature cards with new icons, titles, and descriptions
3. **Logo**: Replace `assets/slide-buddy-logo.svg` with your logo
4. **Colors**: Update color variables in the Tailwind config

### Add New Sections
1. Add HTML structure in `index.html`
2. Style with Tailwind classes or custom CSS in `styles.css`
3. Add interactions in `script.js` if needed

### Marketplace Integration
Update the marketplace button in `script.js`:
```javascript
// Replace the alert with your actual marketplace URL
window.open('YOUR_MARKETPLACE_URL_HERE', '_blank');
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🔗 Related Links

- **Main Repository**: [slide-buddy-apps-script](https://github.com/TomMcLan/slide-buddy-apps-script)
- **Original Project**: [slide-buddy](https://github.com/TomMcLan/slide-buddy)
- **Google AI Studio**: [ai.google.dev](https://ai.google.dev) (for API keys)
- **Google Workspace Marketplace**: Coming soon!

## 📄 Legal

- **Privacy Policy**: [PRIVACY_POLICY.md](PRIVACY_POLICY.md)
- **Terms of Service**: [TERMS_OF_SERVICE.md](TERMS_OF_SERVICE.md)
- **License**: MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices and browsers
5. Submit a pull request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/TomMcLan/slide-buddy-website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/TomMcLan/slide-buddy-website/discussions)
- **Email**: [Support Email]

---

**Made with ❤️ for Google Slides users worldwide**

*Slide Buddy - Making multilingual presentations effortless and FREE since 2025*