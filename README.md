# TripGuide - AI Travel Companion

A comprehensive trip planning application built with React, TypeScript, and Tailwind CSS. Plan your perfect journey with intelligent route optimization, budget tracking, weather updates, and curated travel guides.

![TripGuide Screenshot](https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg)

## ✨ Features

- **🗺️ Smart Trip Planning** - AI-powered itinerary generation with optimized routes
- **💰 Budget Tracking** - Real-time expense monitoring and budget management
- **🌤️ Weather Integration** - Live weather updates for your destinations
- **🏨 Accommodation Finder** - Curated hotels, homestays, and resorts
- **📚 Travel Guides** - Expert insights and local knowledge from experienced travelers
- **🧭 Explore Destinations** - Discover trending and featured destinations across India
- **📱 Mobile Responsive** - Optimized for all devices and screen sizes
- **🎨 Modern UI/UX** - Beautiful, intuitive interface with smooth animations

## 🚀 Live Demo

[View Live Demo](https://your-deployed-app-url.com) *(Deploy and add your URL here)*

## 📱 Mobile Access

### Option 1: Local Development
1. Start the development server: `npm run dev`
2. Find your computer's IP address:
   - **Windows**: `ipconfig` in Command Prompt
   - **Mac/Linux**: `ifconfig` or `ip addr` in Terminal
3. Connect your phone to the same WiFi network
4. Open browser on phone and go to: `http://YOUR_IP_ADDRESS:5173`

### Option 2: Deploy to Hosting
Deploy to platforms like Netlify, Vercel, or GitHub Pages for permanent mobile access.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint
- **Development**: Hot Module Replacement (HMR)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

### Required Software:

1. **Node.js** (LTS version recommended)
   - Download: https://nodejs.org/
   - Includes npm (Node Package Manager)
   - Verify installation: `node --version` and `npm --version`

2. **Visual Studio Code** (Recommended)
   - Download: https://code.visualstudio.com/
   - Best support for React and TypeScript development

3. **Git** (Optional but recommended)
   - Download: https://git-scm.com/
   - For version control and repository management

### System Requirements:
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 2GB free space
- **OS**: Windows 10+, macOS 10.14+, or Linux

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/tripguide.git
cd tripguide
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🎨 VS Code Extensions (Recommended)

Install these extensions for the best development experience:

### Essential Extensions:
- **ES7+ React/Redux/React-Native snippets** - React code snippets
- **TypeScript Importer** - Auto import for TypeScript
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **Prettier - Code formatter** - Code formatting
- **ESLint** - Code linting and error detection

### Helpful Extensions:
- **Auto Rename Tag** - Rename paired HTML/JSX tags
- **Bracket Pair Colorizer** - Color matching brackets
- **GitLens** - Enhanced Git capabilities
- **Thunder Client** - API testing
- **Live Server** - Preview HTML files

## 🏗️ Project Structure

```
tripguide/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── TripPlanner.tsx
│   │   ├── RouteDisplay.tsx
│   │   ├── BudgetTracker.tsx
│   │   ├── WeatherInfo.tsx
│   │   ├── AccommodationList.tsx
│   │   ├── MyTrips.tsx
│   │   ├── Explore.tsx
│   │   ├── Profile.tsx
│   │   └── TravelGuides.tsx
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md             # Project documentation
```

## 🎯 Key Components

### 🗺️ Trip Planner
- Interactive form for destination, budget, and travel preferences
- Transportation mode selection (Bus, Train, Car)
- Dynamic itinerary generation

### 💰 Budget Tracker
- Real-time expense tracking
- Visual budget progress indicators
- Category-wise expense management
- Budget alerts and warnings

### 🌤️ Weather Info
- Current location and destination weather
- Temperature, humidity, and wind speed
- Travel advisories based on weather conditions

### 🏨 Accommodations
- Filtered accommodation listings
- Hotels, homestays, and resorts
- Ratings, amenities, and pricing information

### 📚 Travel Guides
- Expert travel articles and guides
- Category-based filtering
- Featured and trending content

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Accessibility**: WCAG compliant design patterns
- **Performance**: Optimized for fast loading and smooth interactions

## 🚀 Deployment Options

### Free Hosting Platforms:

1. **Netlify**
   - Drag and drop deployment
   - Automatic builds from Git
   - Custom domains available

2. **Vercel**
   - GitHub integration
   - Automatic deployments
   - Edge network optimization

3. **GitHub Pages**
   - Free static hosting
   - Direct repository integration
   - Custom domain support

4. **Firebase Hosting**
   - Google's hosting service
   - Global CDN
   - SSL certificates included

### Deployment Steps:
1. Build the project: `npm run build`
2. Upload the `dist` folder to your chosen platform
3. Configure custom domain (optional)
4. Access your app from anywhere!

## 🔮 Future Enhancements

- [ ] **Real API Integration** - Weather, maps, and booking APIs
- [ ] **User Authentication** - Login/signup functionality
- [ ] **Database Integration** - Save trips and user preferences
- [ ] **PWA Features** - Offline support and push notifications
- [ ] **Payment Integration** - Direct booking and payment processing
- [ ] **Social Features** - Share trips and reviews
- [ ] **Multi-language Support** - Internationalization
- [ ] **Advanced Analytics** - Trip insights and recommendations

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines:
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Write descriptive commit messages
- Test on multiple screen sizes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- **Pexels** - High-quality stock photos
- **Lucide** - Beautiful icon library
- **Tailwind CSS** - Utility-first CSS framework
- **React Team** - Amazing JavaScript library
- **Vite** - Lightning-fast build tool

## 📞 Support

If you have any questions or need help:

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/tripguide/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/tripguide/discussions)

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/tripguide?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/tripguide?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/tripguide)
![GitHub license](https://img.shields.io/github/license/yourusername/tripguide)

---

**Made with ❤️ for travelers by travelers**

*Happy Traveling! 🌍✈️*