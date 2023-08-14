# Vite

[VITE 공식 사이트](https://vitejs-kr.github.io/guide/)

## npm 설치

```
npm create vite@latest
npx degit user/project my-project
cd my-project

npm install
npm run dev

// 필요한 플러그인 설치
npm add -D 플러그인명
```

## 폴더 구조

```
- node_modules/ // 이 폴더에는 프로젝트를 실행하는 데 필요한 종속 항목이 포함되어 있습니다. 이러한 종속성은 npm 또는 yarn과 같은 패키지 관리자를 사용하여 설치됩니다.
- public/ // 이 폴더에는 출력 디렉터리의 루트에 복사되는 정적 자산이 포함되어 있습니다. 여기에는 이미지, 글꼴 또는 애플리케이션에서 사용할 수 있게 하려는 기타 파일이 포함될 수 있습니다.
- src/ // 이 폴더에는 애플리케이션의 소스 코드가 포함되어 있습니다. Vue.js 구성 요소, JavaScript 모듈 및 기타 코드를 작성하는 곳입니다.
  ├ main.js // Vue.js 앱을 가져오고 마운트하는 애플리케이션의 진입점입니다. 여기에서 Vue.js 앱을 가져오고 DOM 요소 및 기타 초기화 로직에 마운트합니다.
  ├ index.html // 애플리케이션의 기본 HTML 파일.
- package.json // 이 파일에는 이름, 버전 및 종속성과 같은 프로젝트에 대한 메타데이터가 포함되어 있습니다. 또한 이 파일을 사용하여 npm run dev와 같이 명령줄에서 실행할 수 있는 스크립트를 정의하여 개발 서버를 시작할 수 있습니다.
- vite.config.js // 이 파일에는 Vite에 대한 구성이 포함되어 있습니다. 이 파일을 사용하여 사용할 플러그인 지정 또는 개발 서버 구성과 같은 Vite의 동작을 사용자 정의할 수 있습니다.
```

## vite.config.js 설정

```javascript
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import { PAGE } from "./src/js/title.js"; // meta title 설정

export default defineConfig({
  server: {
    host: true, // 192.168.0.194 ip
    port: 5000,
    open: true,
  },
  preview: {
    host: true,
    port: 4001,
    strictPort: true,
    open: true,
    // ㄴ 배포 모드인 경우에만 open을 true로 지정.
    // MODE 값은 vite dev 실행이면 development,
    // vite build 실행이면 production으로 자동으로 지정됨.
  },

  /* 경로 설정 */
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },

  // scss, type script, jsx를 기본으로 인식한다고 하는데 잘 모르겠음
  css: {
    preprocessorOptions: {
      sass: {
        implementation: require("sass"),
        // additionalData: `@import "src/styles/global.scss";`,
      },
    },
  },

  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"), // html include
      context(pagePath) {
        const regex = /\/pages\/([^/]+)\/index\.html$/;
        const match = pagePath.match(regex);
        const pageKey = match ? match[1] : "";
        const pages = PAGE.find(
          (p) => p.path === pagePath || p.path === pageKey
        );
        console.log("path: ", pages.path);
        // console.log("pagePath: ", pagePath);
        // console.log("data: ", pages.data);
        return {
          ...pages.data,
          title: pages.title || pages.data.h2Title || "error",
        };
      },
    }),
    vue(),
  ],

  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      /**
       * 특정 패턴(HTML 및 SCSS 파일)과 일치하는 파일 경로 목록을 검색한 다음
       * 해당 경로를 절대 경로에 매핑, 확인된 경로는 롤업 번들러의 입력 파일로 사용.
       */
      input: require("fast-glob")
        .sync([
          "*.html",
          "./src/pages/**/*.html",
          "./src/*.js",
          "!dist",
          "!node_modules",
        ])
        .map((entry) => resolve(__dirname, entry)),

      output: {
        chunkFileNames: "assets/js/[name].[hash].js",
        entryFileNames: "assets/js/[name].[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(jpe?g|png|gif|svg)$/.test(name ?? "")) {
            console.log(name);
            return "assets/img/[name].[hash][extname]";
          }
          if (/\.scss$/.test(name ?? "")) {
            return "assets/scss/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        },
      },
    },
  },
});
```

- `plugins` : Vite와 함께 사용할 플러그인 배열입니다. 이 예제에서는 vite-plugin-pug 플러그인을 사용하여 Pug 템플릿을 지원하고 vite-plugin-style-import 플러그인을 사용하여 부트스트랩과 같은 외부 라이브러리에서 SCSS 스타일을 가져올 수 있습니다.
- `build` : 빌드 프로세스에 대한 구성 옵션입니다. 여기에서는 대상을 esnext로 설정하고 출력 디렉토리를 dist로 설정하고 소스 맵을 활성화합니다.
- `server` : 개발 서버에 대한 구성 옵션입니다. 여기에서는 포트를 3000으로 설정하고 서버가 시작될 때 브라우저를 자동으로 엽니다.
- `resolve` : 모듈 가져오기를 해결하기 위한 구성 옵션입니다. 여기서는 src 디렉토리의 별칭을 설정합니다.
- `optimizeDeps` : 빌드 프로세스 중 종속성을 최적화하기 위한 구성 옵션입니다. 여기에는 일반적으로 사용되는 몇 가지 라이브러리가 포함되어 있습니다.
- `css` : CSS 사전 처리를 위한 구성 옵션입니다. 여기에서는 SCSS를 사용하고 일부 추가 데이터를 포함합니다.
- `esbuild` : ESBuild 번들러의 구성 옵션입니다. 여기에서는 Preact를 JSX 라이브러리로 설정하고 축소를 활성화하고 ES2019를 대상으로 합니다.
- `define` : 전역 상수를 정의하기 위한 구성 옵션입니다. 여기서는 몇 가지 환경 변수와 패키지 메타데이터를 정의합니다.

## npm 명령어

```
npm run build // 배포용 빌드 작업을 수행
npm run dev // 개발 서버를 실행
npm run preview // 로컬에서 배포용 빌드에 대한 프리뷰 서버를 실행
```

## 특이점?

> 모듈로 사용해야 함

```javascript
<script type="module" src="sub004.js"></script>
```
