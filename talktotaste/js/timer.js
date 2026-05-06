// ===== TalkToTaste - Smart Timer Manager =====
// Developed by Akanksha Bursu

class TimerManager {
  constructor() {
    this.timers = {};
    this.nextId = 1;
  }

  start(seconds, label = 'Timer', onComplete) {
    const id = this.nextId++;
    let remaining = seconds;

    const tick = () => {
      remaining--;
      if (this.timers[id] && this.timers[id].onTick) {
        this.timers[id].onTick(remaining);
      }
      if (remaining <= 0) {
        clearInterval(this.timers[id].interval);
        delete this.timers[id];
        showToast(`⏰ ${label} complete!`);
        voice.speak(`${label} is done!`);
        if (onComplete) onComplete();
      }
    };

    const interval = setInterval(tick, 1000);
    this.timers[id] = { interval, remaining, label, onTick: null };
    return id;
  }

  setTickHandler(id, fn) {
    if (this.timers[id]) this.timers[id].onTick = fn;
  }

  cancel(id) {
    if (this.timers[id]) {
      clearInterval(this.timers[id].interval);
      delete this.timers[id];
    }
  }

  cancelAll() {
    Object.keys(this.timers).forEach(id => this.cancel(id));
  }

  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }
}

// Whistle Tracker
class WhistleTracker {
  constructor() {
    this.count = 0;
    this.target = 0;
    this.onUpdate = null;
  }

  setTarget(n) {
    this.target = n;
    this.count = 0;
    if (this.onUpdate) this.onUpdate(this.count, this.target);
  }

  addWhistle() {
    this.count++;
    if (this.onUpdate) this.onUpdate(this.count, this.target);
    if (this.count >= this.target && this.target > 0) {
      showToast(`🎉 ${this.count} whistles done! Turn off the gas.`);
      voice.speak(`${this.count} whistles complete. Please turn off the gas.`);
    } else {
      voice.speak(`${this.count} whistle noted. ${this.target - this.count} more to go.`);
    }
    return this.count;
  }

  reset() {
    this.count = 0;
    this.target = 0;
    if (this.onUpdate) this.onUpdate(0, 0);
  }
}

// Toast helper
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// Apply saved theme on load
(function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') document.body.setAttribute('data-theme', 'dark');
})();

const timerManager = new TimerManager();
const whistleTracker = new WhistleTracker();
