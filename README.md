# 🍲 TalkToTaste — Voice Controlled Cooking Assistant

> Your AI-powered voice-first smart kitchen assistant for authentic Indian cooking. Cook hands-free with step-by-step voice guidance in Hindi and English.

**Developed by Akanksha Bursu**

---

## 📌 Project Overview

TalkToTaste is a voice-first web application that helps users cook authentic Indian recipes completely hands-free. Using browser-based Web Speech API, users can navigate recipes, set timers, and track pressure cooker whistles — all with simple voice commands in Hindi or English.

---

## ✨ Features

- 🎙️ **Voice Control** — Navigate recipes hands-free with intuitive voice commands
- ⏱️ **Smart Timers** — Set multiple cooking timers by voice
- 🫧 **Whistle Tracker** — Automatically track pressure cooker whistles
- 🌐 **Bilingual Support** — Full Hindi and English support
- 🍛 **90+ Recipes** — Authentic Indian recipes with step-by-step instructions
- ♿ **Accessible Design** — Built for elderly, beginners, and visually impaired users
- 🌙 **Dark Mode** — Switch themes by voice command
- ❤️ **Save Favorites** — Build a personal recipe collection

---

## 🗂️ Project Structure

```
talktotaste/
├── index.html              # Home / Landing page
├── recipes.html            # Recipe listing page
├── recipe-detail.html      # Single recipe + voice cooking mode
├── profile.html            # User profile & favorites
├── login.html              # Login / Sign up page
├── css/
│   ├── style.css           # Global styles & design system
│   ├── home.css            # Landing page styles
│   ├── recipes.css         # Recipe grid styles
│   └── cooking.css         # Cooking mode styles
├── js/
│   ├── voice.js            # Web Speech API voice engine
│   ├── timer.js            # Smart timer management
│   ├── whistle.js          # Pressure cooker whistle tracker
│   ├── recipes.js          # Recipe data & search logic
│   ├── navigation.js       # Voice-based page navigation
│   └── app.js              # Main app initialization
├── pages/
│   └── admin.html          # Admin dashboard
├── assets/
│   └── logo.svg            # TalkToTaste logo
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- A modern browser (Chrome recommended for best Web Speech API support)
- No installation required — runs directly in the browser

### Run Locally

```bash
# Clone the repository
git clone https://github.com/akanksha-bursu/talktotaste.git

# Navigate into the project
cd talktotaste

# Open in browser (use Live Server or similar)
open index.html
```

Or simply open `index.html` in your browser.

---

## 🎙️ Voice Commands

### Cooking Controls
| English | हिंदी |
|---------|-------|
| Start cooking | पकाना शुरू करो |
| Next step | अगला स्टेप |
| Previous step | पिछला स्टेप |
| Repeat step | वापस |
| Set timer for 5 minutes | 5 मिनट का टाइमर |
| Add 1 whistle | एक सीटी हो गई |
| Stop / Pause | रुको / बस करो |

### Navigation
| English | हिंदी |
|---------|-------|
| Go to Home | मुख्य पृष्ठ |
| Show Recipes | रेसिपी दिखाओ |
| Open Profile | प्रोफाइल दिखाओ |
| Switch to Dark Mode | डार्क मोड लगाओ |
| Speak in Hindi | हिंदी में बोलो |

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Structure & semantics |
| CSS3 | Styling, animations, dark mode |
| Vanilla JavaScript | Core app logic |
| Web Speech API | Voice recognition & synthesis |
| LocalStorage | Favorites & user preferences |

---

## 📱 Browser Support

| Browser | Voice Support |
|---------|--------------|
| Chrome (Desktop) | ✅ Full support |
| Chrome (Android) | ✅ Full support |
| Safari (iOS) | ⚠️ Partial support |
| Firefox | ❌ Limited |
| Edge | ✅ Full support |

> **Note:** Chrome is recommended for the best voice experience.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Developer

**Developed by Akanksha Bursu**

Made with ❤️ for Indian Food Lovers
