### 조건

- SSR, Seo 최적화, PHP
- Next.js (X)

### vite에서 SSR

[vite 도움말](https://ko.vitejs.dev/guide/ssr.html)

[plugin/tools](https://github.com/vitejs/awesome-vite#ssr)

### 프로젝트 폴더 생성 및 초기화

[vite-plugin-ssr](https://vite-plugin-ssr.com/)

```bash
npm init vite-plugin-ssr@latest
cd my-react-project
npm install
npm run dev
```

#### tailwind.css / PostCSS

[Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

[PostCSS config](https://tailwindcss.com/docs/using-with-preprocessors#nesting)

```bash
npm install -D tailwindcss postcss autoprefixer
npm install -D postcss-import
npm install postcss-nesting

```

```js
// tailwind.config.js
export default {
  content: [
    "./renderer/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  // 그 외 커스텀
};

// postcss.config.js
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",

    // 필요한 구문 사용

    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 폴더 용도

> 자세한 내용은 주석 참고

- doctype 설명 : /renderer/\_default.page.server.jsx
- routes & layout : /renderer/PageShell.jsx
- sub pages(script, styles) : /pages/##/##.page.jsx
- 중복되는 기능들 모음집(?) : pages/components/##.jsx
- tailwind.css 모음 : /styles/index.css

### gsap

`npm install gsap`

> 🛢 gsap 이 안됨..ㅠㅠㅠㅠㅠ
