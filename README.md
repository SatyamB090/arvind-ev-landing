# Arvind EV Landing Page

A modern, responsive landing page for Arvind EV, featuring electric vehicles and their specifications. This project is built with HTML, CSS, and JavaScript, designed to match the Figma design exactly.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, modern design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Performance Optimized**: Lazy loading, debounced scroll events, and optimized animations
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📁 Project Structure

```
arvind-ev-landing/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── images/             # Image assets from Figma
│   ├── scooter1-473ae0.png
│   ├── scooter2-473ae0.png
│   ├── scooter3-65bd7a.png
│   ├── scooter4-3746a2.png
│   ├── scooter5-25b155.png
│   ├── scooter6-25b155.png
│   ├── scooter7-25b155.png
│   ├── scooter8-25b155.png
│   ├── hero-bg-6128a2.png
│   ├── gift-box.png
│   ├── offer1.png
│   ├── offer2-252a25.png
│   ├── offer3-164843.png
│   ├── offer4-650e3d.png
│   └── offer5-a7d2e5.png
└── README.md           # Project documentation
```

## 🎨 Design Features

### Hero Section
- Gradient background with grid pattern overlay
- Animated customer avatars
- Call-to-action buttons with hover effects
- Video frame with play button
- Price badge with pulse animation

### Navigation
- Fixed navigation bar with blur effect
- Smooth scroll to sections
- Hide/show on scroll
- Responsive menu

### Launch Section
- Horizontal scrolling cards
- Product specifications with icons
- Offer badges and pricing
- Interactive hover effects

### Scrolling Text
- Continuous horizontal scroll animation
- Decorative elements
- "PICK YOUR ELECTRIC" branding

### Top Models Section
- High-speed and budget-friendly categories
- Feature badges with tooltips
- Detailed specifications
- Pricing options (EMI and full price)

### Offers Section
- Gradient background with gift box
- Offer gallery with hover effects
- Call-to-action elements

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Inter and Montserrat typography
- **Figma Integration**: Direct design implementation

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Local web server (optional, for development)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd arvind-ev-landing
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the website**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

- **Desktop**: 1920px and above
- **Laptop**: 1200px - 1919px
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Breakpoints
- `@media (max-width: 1200px)`: Tablet and smaller devices
- `@media (max-width: 768px)`: Mobile devices

## 🎯 Key Features Implementation

### Smooth Scrolling
```javascript
// Navigation links with smooth scroll
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
```

### Intersection Observer Animations
```javascript
// Animate elements when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
```

### Parallax Effects
```javascript
// Hero section parallax
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    heroBackground.style.transform = `translateY(${rate}px)`;
});
```

## 🎨 Color Palette

Based on the Figma design:

- **Primary Blue**: `#205BE6`
- **Dark Text**: `#111123`
- **Light Text**: `#66667A`
- **Background**: `#F1F4F5`
- **White**: `#FFFFFF`
- **Footer**: `#8B8B9F`

## 📊 Performance Optimizations

1. **Lazy Loading**: Images load only when needed
2. **Debounced Events**: Scroll events are optimized
3. **CSS Transitions**: Hardware-accelerated animations
4. **Minimal JavaScript**: Efficient event handling
5. **Optimized Images**: Compressed and properly sized

## 🔧 Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #205BE6;
    --dark-text: #111123;
    --light-text: #66667A;
    --background: #F1F4F5;
}
```

### Content
- Update text content in `index.html`
- Replace images in the `images/` folder
- Modify specifications and pricing

### Animations
- Adjust animation durations in `script.js`
- Modify CSS transitions in `styles.css`

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 License

This project is created for Arvind EV. All rights reserved.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about this landing page, please contact the development team.

---

**Built with ❤️ for Arvind EV**