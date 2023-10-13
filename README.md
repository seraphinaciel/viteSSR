### 9.14.

```javascript
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {});

// 2
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.saveStyles(".mobile, .desktop");
ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {},

  "(max-width: 799px)": function () {},

  all: function () {},
});
```

### 9.7.

- 이미지 webp

```html
<picture>
  <source srcset="(webp이미지파일).webp" type="image/webp" />
  <source srcset="(webp가 나오지 않을때 보여줄 이미지파일).jpg" type="image/jpeg" />
  <img src="(srcSet을 지원하지 않는 ie를 위한 이미지파일).jpg" />
</picture>

<img
  sizes="(max-width: 768px) 200px, 360px"
  srcset="(이미지 주소) 200w, (이미지 주소)360w, (이미지주소) "
  src="(srcset을 지원하지 않는 ie대비용 주소)"
  alt="thumbnail"
/>

<picture>
  <source media="(min-width:800px)" srcset="/images/partner1.webp" type="image/webp" />
  <source srcset="/images/char2.jpg" type="image/jpeg" />
  <img src="/images/char3.jpg" />
</picture>
<!-- css : pixel-ratio-->
```

### 8.24.

**상현 선임님 작업**

- color... 이름은 figma의 토큰명과 일치시킴.
- font... 일단 heading-1, body-1로...
- text 컴포넌트... element 통째로 받는 것도 가능하고, 문자열만 넣는 것도 가능하고, br이 필요한 문단인 경우엔 문자열로 된 배열로 넣으면 됨.

main에 사용하신 text 컴포넌트가 오류로 잡혀서 그 부분만 수정했고,
index 페이지에 들어가시면 컬러칩 보이실거예요.

### 8.18.

https://webstoryboy.github.io/gsap2023/gsap13.html

- 컴포넌트들 간략하게라도 만들어두기
- 짜깁기는 나중에

### 8.17.

- main 상단, 폰트까지

### 8.16.

- main coding start(video)

### 8.14.

- add to custom cursor, video

### 8.11.

- 아이콘(얘도 스크롤) + marquee 같이 되는거 만들어야 함
- 만들어 둔 거 옮기기

### 8.10.

- 아이콘(얘도 스크롤) + marquee 같이 되는거 만들어야 함
- 만들어 둔 거 옮기기

### 23.8.9

- 기본 페이지 : max-width:2560px or 100%
- detail : 디자인팀 정리 예정
  태블릿 / 모바일에 떼두리 있던거 다 빼고 심플하게
  kv 제외 컨텐츠들만 max-width:1920px
  영상 삽입했을 때는 어딘가는 잘릴텐데 높이가 고정
  hero 영역 kv만 잘릴꺼 고민

page file 접미사

- page.js: Node.js뿐만 아니라 브라우저에서 실행
- page.client.js: 브라우저에서만 실행
- page.server.js: Node.js에서만 실행
- page.route.js: 페이지의 Route String 또는 Route Function을 정의

모든 페이지에 기본 적용
/renderer/\_default.page.client.js
/renderer/\_default.page.server.js

### gsap 속기..?

- x: 100 transform: translateX(100px)
- y: 100 transform: translateY(100px)
- xPercent: -50 transform: translateX(-50%)
- yPercent: -50 transform: translateY(-50%)
- rotation: 360 transform: rotate(360deg) Rotate (degrees)
- scale: 2 transform: scale(2, 2)
- transformOrigin: "0% 100%" transform-origin: 0% 100%;
- rotationX: 360 transform: rotateX(360deg)
- rotationY: 360 transform: rotateY(360deg)
- skewX: 45 transform: skewX(45deg)
- skewY: 45 transform: skewY(45deg)
- scaleX: 2 transform: scaleX(2)
- scaleY: 2 transform: scaleY(2)

- x: 200, // px(기본)
- x: "+=200" // relative values
- x: '40vw', // GSAP가 구문 분석할 수 있도록 다른 단위의 문자열을 전달
- x: () => window.innerWidth / 2, // 함수 값을 계산

- rotation: 360 // degrees
- rotation: "1.25rad" // radians

변환/불투명도 사용 추천(필터, 그림자는 랜더링 시 cpu 부하)

### SVG attributes

```javascript
gsap.to(".svgBox", {
  duration: 2,
  x: 100, //  viewBox="0 0 100 100"
  // viewBox="min-x min-y width height"(px가 아닌 SVG 단위를 사용하고 SVG viewBox의 너비는 100단위)
  xPercent: -100,
  // 또는 대상 SVG 속성
  attr: {
    fill: "red",
    rx: 50,
  },
});
```

### 특수 속성

[더보기](https://greensock.com/docs/v3/GSAP/Tween#special-properties)

[stagger](https://greensock.com/docs/v3/Staggers)

```javascript
gsap.to(".box", {
  .
  .
  .
  // 생략
  duration: 2, // 애니메이션 지속 시간
  repeat: -1, // 반복 횟수, -1(무한), 2(3번)
  yoyo: true, // 요요
  delay: 1, // 해당 애니메이션 시작을 1만큼 지연
  repeatDelay : 1, // repeat 반복 시작을 1만큼 추가 지연
  ease: "power1.in", // in(느리게 시작 → 더 빨리 종료), out(빠르게 시작 → 더 느리게 종료), inOut(자동차 가속/감속, 느리게 시작/종료)
  stagger : 0.1, // .box가 애니메이션을 시작하는 사이의 0.1초
  stagger : { // 세부 조절
    amount: 1, // 모든 스태거 사이에 분할되는 총 시간(초). 각 트윈 사이에 시간 지정
    each: 0.1, // 하위 트윈의 시작 시간 사이의 시간(초). 스태거 간에 분할할 총 시간을 지정
    from: "center", // 스태거가 발산되는 어레이 위치. 가까울수록 더 빨리 시작.
    grid: "auto", // 자동으로 행/열 계산. 반응형 레이아웃에 적합.
  },
});
```

### Timelines

[more](https://greensock.com/get-started-2)

```javascript
// create a timeline
let tl = gsap.timeline();

// add the tweens to the timeline
tl.to(".green", { x: 600, duration: 2 }, 1); // 정확히 1초에서 시작(절대)
tl.to(".purple", { x: 600, duration: 1 }, "<"); // 이전 애니메이션의 시작 부분에 삽입(이전 애니메이션과 같이 시작)
tl.to(".orange", { x: 600, duration: 1 }, "+=1"); // 타임라인 종료 후 1초 삽입(갭)

// 간결하게 사용하려면
let tl = gsap.timeline({ defaults: { duration: 1 } });

//no more repetition of duration: 1!
tl.to(".green", { x: 200 }).to(".purple", { x: 200, scale: 0.2 }).to(".orange", { x: 200, scale: 2, y: 20 });
```

### 애니메이션 제어 콜백

```javascript
gsap.to(".class", {
  duration: 1,
  x: 100,
  onComplete: () => console.log("the tween is complete")
}

gsap.timeline({onComplete: tlComplete}); // <- no () after the reference!

function tlComplete() {
  console.log("the tl is complete");
  // more code
}
```

- `onComplete` : 애니메이션이 완료되면 호출.
- `onStart` : 애니메이션이 시작될 때 호출.
- `onUpdate` : 애니메이션이 업데이트될 때마다 호출(애니메이션이 활성 상태인 동안 모든 프레임에서).
- `onRepeat` : 애니메이션이 반복될 때마다 호출.
- `onReverseComplete` : 반전되었을 때 애니메이션이 다시 시작 부분에 도달했을 때 호출.

[타임라인 중첩](https://css-tricks.com/writing-smarter-animation-code/)

```javascript
function createPanel(panel) {
  // 3. 함수로 타임라인 생성/반환 시키기
  let tl = new TimelineLite(); // 1. 패널에 대해 별도의 타임라인 만들기
  tl.from(panel + " .bg", 0.4, { scale: 0, ease: Power1.easeInOut })
    .from(panel + " .bg", 0.3, { rotation: 90, ease: Power1.easeInOut }, 0)
    .staggerFrom(panel + " .text span", 1.1, { y: -50, opacity: 0, ease: Elastic.easeOut }, 0.06)
    .addLabel("out", "+=1")
    .staggerTo(panel + " .text span", 0.3, { opacity: 0, y: 50, ease: Power1.easeIn }, -0.06, "out")
    .to(panel + " .bg", 0.4, {
      scale: 0,
      rotation: -90,
      ease: Power1.easeInOut,
    });
  return tl; //very important that the timeline gets returned
}

// 2. 각 타임라인 중첩시키기 - add()
let master = new TimelineMax({ repeat: -1 });
master.add(createPanel(".panel1")).add(createPanel(".panel2")).add(createPanel(".panel3"));

//make smaller for when demo is embedded
TweenLite.set(".banner", { scale: 0.8, transformOrigin: "left top" });
```

모든 GSAP 애니메이션과 ScrollTrigger에 대한 컨텍스트를 생성하여 한 번에 revert()할 수 있습니다.
컨텍스트를 사용하면 component.querySelectorAll(...)을 통해 선택기 텍스트를 공급하는 것과 같이 모든 선택기 텍스트의 범위를 구성 요소로 지정할 수 있습니다.

```javascript
const component = useRef(null);
useEffect(() => {
  let ctx = gsap.context(() => {
    gsap.from("h1", {
      x: 100,
    });
  }, component);
  return () => ctx.revert();
}, []);
```

<!--

*
*
*
* 개인용
*
*
*
* -->

### 프로젝트 폴더 생성 및 초기화

> vite, vite-plugin-ssr 같이 설치

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

### 그 외

#### prettier-plugin-tailwindcss

```bash
npm install -D prettier prettier-plugin-tailwindcss

```

```js
# prettier.config.js 파일 생성

module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
};
```

tailwind 클래스명을 정렬해준다.

### 폴더 용도

> 자세한 내용은 주석 참고

- doctype 설명 : /renderer/\_default.page.server.jsx
- routes & layout : /renderer/PageShell.jsx
- sub pages(script, styles) : /pages/##/##.page.jsx
- components : pages/components/##.jsx
- features : pages/components/##/##.jsx
- tailwind.css 모음 : /styles/index.css
