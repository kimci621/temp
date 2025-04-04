/**
 * Tailwind CSS конфигурация
 *
 * Настройка темизации, шрифтов, и CSS переменных для приложения
 */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[class="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fill: {
          'white': 'var(--fill-white)',
          'lightBg': 'var(--fill-light-bg)',
          'darkBg': 'var(--fill-dark-bg)',
          'darkFill': 'var(--fill-dark-fill)',
          'darkFillTag': 'var(--fill-dark-fill-tag)',
          'lightFillTag': 'var(--fill-light-fill-tag)',
          'LightGray': 'var(--fill-light-gray)'
        },
        border: {
          'dark': 'var(--border-dark)',
          'light': 'var(--border-light)',
          'greenLight': 'var(--border-green-light)',
        },
        active: {
          'ultraDark': 'var(--active-ultra-dark)',
          'dark': 'var(--active-dark)',
          'gradient': 'var(--active-gradient)',
          'green': 'var(--active-green)',
          'greenLight': 'var(--active-green-light)',
          'greenUltraLight': 'var(--active-green-ultra-light)',
        },
        text: {
          'light': 'var(--text-light)',
          'dark': 'var(--text-dark)',
          'darkGray': 'var(--text-dark-gray)',
          'lightGray': 'var(--text-light-gray)',
        }
      },
      borderRadius: {
        lg: "24px",
        md: "16px",
        sm: "12px",
      },
      fontFamily: {
        manrope: ['var(--main-font)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;