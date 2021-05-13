import './style.scss';
import { listLanguages, highlight } from 'highlight.js';
import { Tooltip } from 'bootstrap';

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);

tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl);
});

const languageSelect = document.getElementById('language-select');
const allLanguages = listLanguages();

allLanguages.forEach((lang) => {
  const option = document.createElement('option');
  option.value = lang;
  option.innerText = lang;
  if (lang === 'plaintext') {
    option.selected = true;
  }
  languageSelect.appendChild(option);
});

const allStyles = ['default', 'github', 'vs', 'xcode'];
const styleSelect = document.getElementById('style-select');
allStyles.forEach((style) => {
  const option = document.createElement('option');
  option.value = style;
  option.innerText = style;
  styleSelect.appendChild(option);
});

let sourceCode = localStorage.getItem('code') || '';
let language = localStorage.getItem('language') || 'plaintext';
let style = localStorage.getItem('style') || 'default';

document.getElementById('source-code').value = sourceCode;
document.getElementById('language-select').value = language;
document.getElementById('style-select').value = style;
document.getElementById('highlight').className = `${style}-style`;

document.getElementById('source-code').onchange = (e) => {
  sourceCode = e.target.value;
  localStorage.setItem('code', sourceCode);
};

document.getElementById('language-select').onchange = (e) => {
  language = e.target.value;
  localStorage.setItem('language', language);
};

document.getElementById('style-select').onchange = (e) => {
  style = e.target.value;
  document.getElementById('highlight').className = `${style}-style`;
  localStorage.setItem('style', style);
};

document.getElementById('highlight-btn').onclick = () => {
  if (!sourceCode) {
    document.getElementById('highlight').innerHTML = '';
    return;
  }

  const highlightCode = highlight(sourceCode, {
    language,
  });

  const title = document.createElement('h5');
  title.innerHTML = 'Result:';
  const highlightCodePre = document.createElement('pre');
  highlightCodePre.className = `hljs`;
  highlightCodePre.innerHTML = `<code>${highlightCode.value}</code>`;
  document.getElementById('highlight').innerHTML = '';
  document.getElementById('highlight').appendChild(title);
  document.getElementById('highlight').appendChild(highlightCodePre);
};
