# Slide Buddy Website

Official website for Slide Buddy - AI-Powered Google Slides Translation & Text Management add-on.

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Video Demo Section**: Ready placeholder for demo video upload
- **Google Workspace Marketplace Integration**: Ready for marketplace link
- **SEO Optimized**: Meta tags and structured content for better search visibility

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
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
├── assets/             # Images and videos (create this folder)
│   ├── slide-buddy-logo.png    # Add your logo here
│   └── slide-buddy-demo.mp4    # Add your demo video here
└── README.md           # This file
```

## 🛠️ Customization

### 1. Add Your Logo
- Add your logo image to `assets/slide-buddy-logo.png`
- Update the image references in `index.html` if needed

### 2. Add Demo Video
- Upload your demo video to `assets/slide-buddy-demo.mp4`
- Replace the video placeholder in `index.html` with:
```html
<video controls poster="assets/demo-thumbnail.jpg">
    <source src="assets/slide-buddy-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

### 3. Update Marketplace Link
- Once your add-on is published, update the marketplace URL in `script.js`:
```javascript
// Replace this line:
alert('Google Workspace Marketplace link will be added once your add-on is published!');

// With this:
window.open('YOUR_ACTUAL_MARKETPLACE_URL', '_blank');
```

## 🎨 Design Features

- **Hero Section**: Eye-catching gradient background with key value propositions
- **Feature Cards**: Highlight main capabilities with icons and descriptions
- **Pricing Section**: Emphasizes the free model with transparent API costs
- **Setup Guide**: Simple 4-step installation process
- **Responsive Grid**: Adapts beautifully to mobile, tablet, and desktop

## 📊 Based on Content

This website is built from the comprehensive [APP_STORE_DESCRIPTION.md](https://github.com/TomMcLan/slide-buddy-apps-script) which includes:
- Context-aware translation capabilities
- 30+ language support
- Lightning-fast performance metrics
- Smart find & replace functionality
- Privacy and security features
- Cost transparency and tracking

## 🔗 Related Links

- **Main Repository**: [slide-buddy-apps-script](https://github.com/TomMcLan/slide-buddy-apps-script)
- **Original Project**: [slide-buddy](https://github.com/TomMcLan/slide-buddy)
- **Google AI Studio**: [ai.google.dev](https://ai.google.dev) (for API keys)

## 📄 License

MIT License - See LICENSE file for details

---

**Ready to make multilingual presentations effortless and FREE?** 🚀

Deploy this website and start promoting your Slide Buddy add-on!
