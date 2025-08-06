import translations from './locales/generalEmail.json'; // JSON instead of YAML

let currentLang = 'fi';

export function t(key, vars = {}) {
  let value = translations[currentLang];
  key.split('.').forEach(k => {
    value = value ? value[k] : undefined;
  });

  if (!value) return key;

  Object.keys(vars).forEach(varKey => {
    value = value.replace(new RegExp(`{${varKey}}`, 'g'), vars[varKey]);
  });

  return value;
}
