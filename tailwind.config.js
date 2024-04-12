/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "GUET-logo": "url('./src/assets/logo/Guet-logo.webp')",
        "IST-logo": "url('./src/assets/logo/IST-logo.webp')",
        "building-outline": "url('./src/assets/background/building-outline.webp')",
        "login-bg": "url('./src/assets/background/login-bg.webp')",
        "user-logo": "url('./src/assets/logo/Crino.jpg')",
        "icon-schedule": "url('./src/assets/icon/schedule.png')",
        "icon-course": "url('./src/assets/icon/course.png')",
        "icon-share": "url('./src/assets/icon/share.png')",
        "icon-setting": "url('./src/assets/icon/setting.png')",
      },
      colors: {
        "ist-blue-900": "rgb(2,97,165)",
        "ist-blue-800": "rgb(0,117,181)",
        "ist-blue-700": "rgb(1,136,202)",
        "ist-blue-600": "rgb(14,149,207)",
        "ist-blue-500": "rgb(69,165,215)",
        "ist-blue-400": "rgb(124,182,220)",
        "ist-blue-300": "rgb(167,202,230)",
        "ist-blue-200": "rgb(199,221,235)"
      },
      minWidth: {
        "1024px": "1024px",
        "720px": "720px",
        "470px": "470px"
      }
    },
  },
  plugins: [],
};
