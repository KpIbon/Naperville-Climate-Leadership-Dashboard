import type { Config } from 'tailwindcss';
const config: Config = { darkMode: 'class', content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { colors: { moss: '#246a57', coral: '#d78a50', mint: '#e6f2ea' }, fontFamily: { display: ['var(--font-space)', 'sans-serif'], sans: ['var(--font-inter)', 'sans-serif'] } } }, plugins: [] };
export default config;
