window.CONFERENCE_THEMES = {
  sec: {
    background: '#0A1B3D',
    backgroundSecondary: '#071433',
    panel: '#122A5C',
    panelSecondary: '#193569',
    hairline: '#26417E',
    text: '#F5F7FB',
    textDim: '#AEBBDE',
    textFaint: '#6C7EAE',
    accent: '#F2C230',
    accentDim: '#4A3E17',
    accentRgb: '242,194,48',
    displayFont: "'Raleway', sans-serif",
    bodyFont: "'Raleway', -apple-system, BlinkMacSystemFont, sans-serif"
  },

  'big-ten': {
    background: '#0088CE',
    backgroundSecondary: '#00639B',
    panel: '#00243A',
    panelSecondary: '#00304C',
    hairline: 'rgba(255,255,255,0.28)',
    text: '#FFFFFF',
    textDim: '#D6ECF8',
    textFaint: '#8FC3E0',
    accent: '#FFFFFF',
    accentDim: '#00151F',
    accentRgb: '255,255,255',
    displayFont: "'League Spartan', sans-serif",
    bodyFont: "'League Spartan', -apple-system, BlinkMacSystemFont, sans-serif"
  }
};

/* Shared UI refinements for every conference pool. */
(function installSharedSurvivorUiRefinements(){
  const style = document.createElement('style');
  style.textContent = `
    .grid-wrap{
      overflow:auto;
      max-height:calc(100vh - 220px);
      max-height:calc(100dvh - 220px);
      overscroll-behavior:contain;
      -webkit-overflow-scrolling:touch;
    }

    .name-cell .team-dot[style*="--tc:#5d636e"],
    .card[style*="--tc:#5d636e"] .avatar{
      visibility:hidden;
    }
  `;
  document.head.appendChild(style);

  function addRulesPaymentLine(){
    const banner = document.querySelector('#rulesPanel .current-pick-banner');
    if(!banner || banner.dataset.paymentLineAdded === 'true') return;

    banner.insertAdjacentHTML(
      'beforeend',
      '<br><span class="rules-payment">Venmo @elliott-pollack $25 to play</span>'
    );
    banner.dataset.paymentLineAdded = 'true';
  }

  document.addEventListener('DOMContentLoaded', () => {
    addRulesPaymentLine();

    const observer = new MutationObserver(addRulesPaymentLine);
    observer.observe(document.body, { childList:true, subtree:true });
  });
})();
