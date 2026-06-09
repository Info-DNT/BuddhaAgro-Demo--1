/**
 * js/shared.js
 * State Management, Event Handling, and Active Toggle Styling
 */

// Initialize Language State on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang');
  window.currentLang = savedLang || 'en';

  // Initial render
  window.translateStaticHtml(window.currentLang);
  updateToggleButtonsUI(window.currentLang);
});

// Global Function to Switch Language
window.switchLanguage = function(lang) {
  if (lang !== 'en' && lang !== 'hi') return;

  window.currentLang = lang;
  localStorage.setItem('preferredLang', lang);

  // Update standard elements
  window.translateStaticHtml(lang);

  // Update switcher styling
  updateToggleButtonsUI(lang);

  // Dispatch custom event so dynamic elements (like charts or graphs) can redraw if listening
  const event = new CustomEvent('languageChanged', { detail: { language: lang } });
  window.dispatchEvent(event);
};

// Styling handler for the language toggles
function updateToggleButtonsUI(activeLang) {
  const enButtons = document.querySelectorAll('.lang-btn-en');
  const hiButtons = document.querySelectorAll('.lang-btn-hi');

  // Tailwind style classes for selected & default states
  const activeClasses = ['bg-primary-container', 'text-white', 'shadow-sm'];
  const inactiveClasses = ['text-stone-600', 'dark:text-stone-400', 'hover:text-teal-800', 'dark:hover:text-teal-200'];

  enButtons.forEach(btn => {
    if (activeLang === 'en') {
      btn.classList.add(...activeClasses);
      btn.classList.remove(...inactiveClasses);
    } else {
      btn.classList.remove(...activeClasses);
      btn.classList.add(...inactiveClasses);
    }
  });

  hiButtons.forEach(btn => {
    if (activeLang === 'hi') {
      btn.classList.add(...activeClasses);
      btn.classList.remove(...inactiveClasses);
    } else {
      btn.classList.remove(...activeClasses);
      btn.classList.add(...inactiveClasses);
    }
  });
}
