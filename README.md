### 프로젝트 폴더 생성 및 초기화

> vite, vite-plugin-ssr 같이 설치

> react 엔터

[vite-plugin-ssr](https://vite-plugin-ssr.com/)

```bash
npm init vite-plugin-ssr@latest

    Need to install the following packages:
      create-vite-plugin-ssr@0.0.296
    Ok to proceed? (y) // y 엔터
    ? Project name: » vite-ssr-project // 프로젝트 이름 적고 엔터

    Scaffolding project in C:\__work\project-01\vite-ssr-project...
    ? Select a boilerplate: ...
      vue
      vue-ts
    > react // react 엔터
      react-ts

cd my-react-project
npm install
npm run dev
```

#### tailwind.css / PostCSS 설치

[Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

[PostCSS config](https://tailwindcss.com/docs/using-with-preprocessors#nesting)

```bash
npm install -D tailwindcss postcss autoprefixer
npm install -D postcss-import
npm install postcss-nesting
```

### gsap 설치

```bash
npm install gsap
```

### 폴더 용도

> 자세한 내용은 주석 참고

- doctype 설명 : /renderer/\_default.page.server.jsx
- routes & layout : /renderer/PageShell.jsx
- sub pages(script, styles) : /pages/##/##.page.jsx
- 중복되는 기능들 모음집(?) : pages/components/##.jsx
- tailwind.css 모음 : /styles/index.css

page file 접미사

- page.js: Node.js뿐만 아니라 브라우저에서 실행
- page.client.js: 브라우저에서만 실행
- page.server.js: Node.js에서만 실행
- page.route.js: 페이지의 Route String 또는 Route Function을 정의

모든 페이지에 기본 적용
/renderer/\_default.page.client.js
/renderer/\_default.page.server.js
