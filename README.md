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

## 로그

### 10.13.

[all] 마무리 정리
[pages] contact 추가

### 10.10.

@croishz [component] TextPassed - 속도 옵션을 props로 옮김. 스타일, 컴포넌트 샘플 표시 방식 수정

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

@croishz
[component] SvgLine - shape case name 수정

- 동그라미
  circle/20.down.fill
  name/
  option1(타원에 가까울수록 수가 큼),
  option2(겹침 방향)

- 타이포그라피
  typo/thej

[component] Text - children 렌더링 조건 수정 : react.element의 존재 여부를 확인

### 9.21.

@croishz
[env] eslint 업데이트 - 사용하지 않는 변수 경고로 하향
[component] LineMotionText - 코드 축약
[component] LineMotionText - 코드 축약
[components] LineMotionText - 모션 함수 추가. 하나의 path 요소만 그리는 걸로 한정된 컴포넌트 확장은 나중에.

### 9.20

@sr1227SR
[components] LineMotionText - 텍스트 위에 svg path 얹는 컴포넌트 추가 / SvgLine에서 shape 선택 코드 수정

@croishz
[components] TextPassed - 이동 속도 오류 수정 / 아이콘 모양 변경
[page] Careers - 컨텐츠 추가
[component] Layout - 페이지를 감싸고 있던 좌우 패딩을 제거. 페이지의 컨텐츠 별로 모바일에서 스크린 너비와 같은 요소들이 있음.
[env] 컴포넌트 샘플 수정
[component] Footer - css 선택자 수정
[components] LineMotionText - props 수정

### 9.19.

[page] careers - 가로 스크롤 영역 추가

### 9.18.

[component] CursorDot - 커서 모션에 gsap 적용, 마우스 포인트가 브라우저 스크린 밖으로 나가면 화면에서 커서 사라짐, z-index 최고치 수정
[env] z-index 규칙 추가
cursor-dot z-index 값 수정
[hook] useMouseHover - link, button에 자식이 있는 경우까지 포함하여 구분하도록 수정

### 9.15.

@croishz
다른 프로젝트 폴더의 코드 git에 계속 표시되는 거 방지
[env] tailwind 클래스 정리해주는 라이브러리 추가
[hooks] useCssTheme - state 중에 원하는 것을 선택하는 기능 추가
[env] tailwind config - modal 플로팅할 때 html에 넣을 클래스 추가, theme나 hook 이용해서 사용 가능
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
[env] tailwind.config - 여백 값 1~999px까지 반영. ex) pt-10 => padding-top :1rem
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
