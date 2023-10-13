### 10.10.

@croishz
[component] TextPassed - 속도 옵션을 props로 옮김.
스타일, 컴포넌트 샘플 표시 방식 수정

### 9.27.

@croishz
[component] Layout - gnb 높이 제한을 위해 적용한 grid 속성이 모바일에서 오류라 롤백 오타 수정등
[component] Layout - 공통 헤더의 최대 높이 제한
[page] page_header css 추가
[env] heading 요소에 직접 들어가있던 font class를 jsx로 옮김. 헤딩 레벨 의존성 제거.
[component] ScrollSign 추가
[component] PageTitle 추가
[component] Icon - props 정리, "arrow/up"에 적용되도록 수정, "arrow/down" 추가

- text-heading-1,2,3,4,...에서 빠졌던 letter-spacing 복구
- h1~h5에 직접 적용된 apply 제거하고 jsx에 클래스로 넣음.
- about에서 헤딩 레빌이 h3 > h5로 넘어가서 h5를 h4로 수정
- 각 페이지 시작하는 제목 부분을 컴포넌트로 변경. pageTitle, scrolllSign
- GNB의 최대 높이 선언 - 페이지 레이아웃을 grid로 바꿔서 적용.
- Icon arrow/up 스타일 먹히도록 수정

### 9.26.

@croishz
[env] font css에 자간 선언이 빠진 것 복구
[components] HorizonScrollContents - 가로 스크롤 영역을 컴포넌트로 빼냄.
[components] LineMotionText - 자체 모션을 위한 boolean prop - animateDelegation -을 추가
[utils] animateSvg - 받는 인자를 선택자에서 요소로 변경
[component] TextSplit - 내용을 쪼개는 단위별로 나뉘어져 있던 컴포넌트를 하나로 합침. animation type과 split type으로 렌더링 구분.

### 9.22.

[component] SvgLine - shape case name 수정

- 동그라미
  circle/20.down.fill
  name/
  option1(타원에 가까울수록 수가 큼),
  option2(겹침 방향)

- 타이포그라피
  typo/thej

[component] Text - children 렌더링 조건 수정 : react.element의 존재 여부를 확인

### 9.22.

[env] eslint 업데이트 - 사용하지 않는 변수 경고로 하향
[component] LineMotionText - 코드 축약
[component] LineMotionText - 코드 축약
[components] LineMotionText - 모션 함수 추가. 하나의 path 요소만 그리는 걸로 한정된 컴포넌트.…
… 확장은 나중에.

### 9.20

@sr1227SR
[components] LineMotionText - 텍스트 위에 svg path 얹는 컴포넌트 추가 / SvgLine에서 …

@croishz
[components] TextPassed - 이동 속도 오류 수정 / 아이콘 모양 변경
[page] Careers - 컨텐츠 추가
[component] Layout - 페이지를 감싸고 있던 좌우 패딩을 제거. 페이지의 컨텐츠 별로 모바일에서 스크린 너비와…
[env] 컴포넌트 샘플 수정
[component] Footer - css 선택자 수정
[components] LineMotionText - props 수정

### 9.19.

[page] careers - 가로 스크롤 영역 추가

### 9.18.

[component] CursorDot - 커서 모션에 gsap 적용, 마우스 포인트가 브라우저 스크린 밖으로 나가면 화면에…
[env] z-index 규칙 추가
cursor-dot z-index 값 수정
[hook] useMouseHover - link, button에 자식이 있는 경우까지 포함하여 구분하도록 수정

### 9.15.

@croishz
다른 프로젝트 폴더의 코드 git에 계속 표시되는 거 방지
[env] tailwind 클래스 정리해주는 라이브러리 추가
[hooks] useCssTheme - state 중에 원하는 것을 선택하는 기능 추가
[env] tailwind config - modal 플로팅할 때 html에 넣을 클래스 추가, theme나 hook 이용해…
[components] header - 모바일에서 메뉴 토글 기능 추가
[env] 코드 컨벤션 추가
[components] header - 데탑 모션 추가, 페이지 스크롤 묶는 대상을 html -> body로 변경

### 9. 13.

@croishz
[components] PageShell - grid guide 리사이징 시 여백 반영
[components] Footer - 코드 컨벤션에 맞춰 정리

### 9. 12.

@sr1227SR
[components, hooks, css] about 수정
[components] svgIcon 수정

@croishz
[components] BackToTop - 페이지 상단으로 올리는 스크롤 이벤트 추가
[components] MotionBox - stream 순서 변경 임의로 안되도록 id 조건 추가
[components] Header - trigger 요소 변경, 오류 수정 / Footer - 모니터링 코드 수정
[env] 페이지 아래 공통 여백 추가
[env] breakpoint - tablet에 max 구간 추가
[utils] gsap 디버깅 함수 추가

### 9. 11.

@croishz
[components] Video - video 요소만 남기고 main에서 사용하는 코드는 MotionBox 컴포넌트로 만듬.
[page] main - 테스트 코드는 모두 jsx로 옮김. MotionBox 반영
[env] index.css의 변수명 수정
@croishz
[page] Layout - gsap 의존성을 dist로 모두 옮겨서 missing plugin 오류 잡음.
[components] Footer - fnb 링크 오류 수정
css 변수 수정 반영
documentProps 테스트
[components] MotionBox - props에서 children 지움
[env] tailwind.config - 여백 값 1~999px까지 반영. ex) pt-10 => padding-top :…
@sr1227SR
[page, components, css] about 수정, 각 페이지 타이틀 수정

### 9. 8.

@croishz
[components] Layout - smooth scroll 적용.
[components] Layout - 페이지 스크롤 변수 제거
[components] ListMonoLayout - props 정의 오류 수정 / 이미지 테두리 제거 / font 클래스 변경
[components] TextPassed - 스크롤시 속도 변경 변수를 hooks 안에 고정

### 9. 7.

@croishz
[components] Header, Footer, Layout -
[components] TextPassed - props 정의 오류 수정

### 9. 6.

@croishz
[components] Footer - 레이아웃 완료
[components] 전역 상태 추가 - mode
[components] Icon - svg를 inline으로 사용하는 컴포넌트 추가
[components] HiddenText - sr only 텍스트 컴포넌트 추가
[env] font size 추가 - 임시

### 9. 5.

@sr1227SR
[css] index 수정

### 9. 4.

@croishz
[components] ListMonoLayout 추가
[env] component 보일러플레이트
[route] work - ListMonoLayout 삽입
[env] css에 grid 변수 추가
[utils] breakpoint 변경
[env] tailwind config 수정 - font 전체를 설정 함수로 뽑음. / 분기점 변경
[components] Header - 로고 링크 메인으로 수정
[env] react-query 모듈 추가
[route] 페이지 레이아웃 정리
오타 수정
빌드 오류 수정
[env] 분기점 수정

### 9. 1.

@croishz
[page] index 정리

@sr1227SR
about, css, guide 정리

### 8. 31.

main, about 진행중

@croishz
[env] config prettier
[component] Text:passed - 글자 흘러가며 아이콘 회전하는 컴포넌트 추가
[env] route props 정의
[component] Link - header에서 분리해 옴. 자식으로 컴포넌트도 추가 가능.
[components] Header, Footer - 컴포넌트로 옮김
[WSG] TextPassed 샘플 추가
[component] pageShell - 컴포넌트 계층 정리 / Header gnb 컬러 선택
[pages] wrapper 추가

### 8. 24.

[css] wsg 적용
[components] Text 수정 - 한줄, 두줄, 문단 모두 사용 가능.

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

### 8. 16.

video 등 컴포넌트 추가/수정

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

### 8. 9.

폴더, 설정 등 추가/삭제

### 8. 7.

vite, react, gsap 세팅

### matchMedia

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

> 함수로 주면 resize 될때마다 gsap에서 refresh하면서 계속 맞춤

```javascript
scrollTrigger: {
  trigger: splitTargets,
  toggleActions: "restart pause resume reverse",
  start: "top 100%",
  end: () => `+=${함수()}`,
  invalidateOnRefresh: true,
},
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

## global로 npm-check-updates 설치

```bash
npm i -g npm-check-updates
ncu -u
// 1. 프로젝트(package.json과 동일한) 디렉토리에서 다음 명령어 실행
npm install
// 2. 업데이트된 결과를 설치
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

### 폴더 용도

> 자세한 내용은 주석 참고

- doctype 설명 : /renderer/\_default.page.server.jsx
- routes & layout : /renderer/PageShell.jsx
- sub pages(script, styles) : /pages/##/##.page.jsx
- components : pages/components/##.jsx
- features : pages/components/##/##.jsx
- tailwind.css 모음 : /styles/index.css

### 코드 컨벤션

- module.css에서 jsx에 선택자는 snake case로 작성함
  ex. .box_title (O) | .box-title (X)
- \{component\}.jsx 새로 만들 시 components/component.sample.jsx 사용할 것.
- z-index는 5 이하 사용 권장, 10 이상부터는 툴팁, 모달, 팝오버등 별도 창에 사용. 최고치는 1000으로 고정하고 .cursor-dot에만 적용. 나머지 요소는 모두 그 이하로 정함.
