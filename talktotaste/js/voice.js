// ===== TalkToTaste - Voice Engine =====
// Developed by Akanksha Bursu

class VoiceEngine {
  constructor() {
    this.recognition = null;
    this.synthesis = window.speechSynthesis;
    this.isListening = false;
    this.language = 'en-IN';
    this.onCommand = null;
    this.onStatusChange = null;
    this.init();
  }

  init() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Speech Recognition not supported in this browser.');
      return;
    }
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.lang = this.language;

    this.recognition.onresult = (e) => {
      const transcript = e.results[e.results.length - 1][0].transcript.trim().toLowerCase();
      console.log('[Voice]', transcript);
      this.processCommand(transcript);
    };

    this.recognition.onend = () => {
      if (this.isListening) {
        this.recognition.start(); // restart on end
      }
    };

    this.recognition.onerror = (e) => {
      if (e.error !== 'no-speech') {
        console.error('[Voice Error]', e.error);
      }
    };
  }

  processCommand(text) {
    const commands = this.getCommandMap();
    for (const [pattern, action] of Object.entries(commands)) {
      if (text.includes(pattern)) {
        action(text);
        return;
      }
    }
    // Pass raw text to external handler
    if (this.onCommand) this.onCommand(text);
  }

  getCommandMap() {
    return {
      // Navigation
      'home': () => { window.location.href = 'index.html'; },
      'मुख्य पृष्ठ': () => { window.location.href = 'index.html'; },
      'recipes': () => { window.location.href = 'recipes.html'; },
      'रेसिपी दिखाओ': () => { window.location.href = 'recipes.html'; },
      'profile': () => { window.location.href = 'profile.html'; },
      'प्रोफाइल': () => { window.location.href = 'profile.html'; },

      // Theme
      'dark mode': () => { document.body.setAttribute('data-theme','dark'); localStorage.setItem('theme','dark'); this.speak('Dark mode activated.'); },
      'डार्क मोड': () => { document.body.setAttribute('data-theme','dark'); localStorage.setItem('theme','dark'); this.speak('डार्क मोड चालू हो गया।'); },
      'light mode': () => { document.body.removeAttribute('data-theme'); localStorage.setItem('theme','light'); this.speak('Light mode activated.'); },

      // Language
      'hindi': () => { this.setLanguage('hi-IN'); this.speak('अब हिंदी में बोल रहा हूं।'); },
      'हिंदी में': () => { this.setLanguage('hi-IN'); this.speak('ठीक है, हिंदी में बोलते हैं।'); },
      'english': () => { this.setLanguage('en-IN'); this.speak('Switching to English.'); },
    };
  }

  setLanguage(lang) {
    this.language = lang;
    if (this.recognition) this.recognition.lang = lang;
  }

  start() {
    if (!this.recognition) {
      showToast('Voice not supported in this browser. Try Chrome.');
      return;
    }
    if (!this.isListening) {
      this.isListening = true;
      this.recognition.start();
      if (this.onStatusChange) this.onStatusChange(true);
    }
  }

  stop() {
    this.isListening = false;
    if (this.recognition) this.recognition.stop();
    if (this.onStatusChange) this.onStatusChange(false);
  }

  toggle() {
    if (this.isListening) this.stop();
    else this.start();
  }

  speak(text) {
    if (!this.synthesis) return;
    this.synthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = this.language;
    utt.rate = 0.95;
    utt.pitch = 1.0;
    this.synthesis.speak(utt);
  }
}

// Global voice engine instance
const voice = new VoiceEngine();
