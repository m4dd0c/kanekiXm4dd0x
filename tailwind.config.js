/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("/src/assets/images/pngs/hero.png")',
        bloodImg: 'url("/src/assets/images/pngs/blood.png")',
        rize: 'url("/src/assets/images/pngs/rize.png")',
        c1: 'url("/src/assets/images/project/giphy01.gif")',
        c2: 'url("/src/assets/images/project/giphy02.gif")',
        c3: 'url("/src/assets/images/project/giphy03.gif")',
        c4: 'url("/src/assets/images/project/giphy04.gif")',
        haise: 'url("/src/assets/images/pngs/contact.png")',
        kaneki: 'url("/src/assets/images/pngs/kaneki_footer.png")',
        testimonial: 'url("/src/assets/images/pngs/testimonial.png")',
      },
    },
    plugins: [],
  },
};
