/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /*! autoprofixer: off*/
      backgroundImage: {
        "GUET-logo": "url('/images/logo/Guet-logo.webp')",
        "IST-logo": "url('/images/logo/IST-logo.webp')",
        "user-logo": "url('/images/logo/Crino.jpg')",
        "building-outline": "url('/images/background/building-outline.webp')",
        "list-banner": "url('/images/background/list-banner.webp')",
        "login-bg": "url('/images/background/login-bg.webp')",
        "list-bg": "url('/images/background/footbg.jpg.webp')",
        "pic-bg": "url('/images/background/picture-bg.webp')",
        "notice-bg": "url('/images/background/notice-bg.webp')",
        "icon-schedule": "url('/images/icon/schedule.png')",
        "icon-course": "url('/images/icon/course.png')",
        "icon-share": "url('/images/icon/share.png')",
        "icon-setting": "url('/images/icon/setting.png')",
      },
      /*! autoprofixer: on*/
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
