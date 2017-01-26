# Grap UI

Grap을 개발하기 위한 UI 프레임워크 입니다.

## 시작하는 방법

- 프로젝트를 내려받습니다. `git clone`
- npm 을 사용하여 프로젝트를 설치합니다. `npm install`

## 프로젝트 구성

```
/
| js/ # 자바스크립트 작업 폴더
| build/ # Sass, es2015를 빌드한 결과
| dist/ 
| docs/ # 실제 Grap UI를 이용해서 만드는 Grap UI 문서
| scss/
  |
  |– utils/
  |   |– _variables.scss    # Sass 변수
  |   |– _functions.scss    # Sass 함수
  |   |– _mixins.scss       # Sass 믹스인
  |
  |– base/
  |   |- _base.scss         # 전체적으로 적용될 필요가 있는 기본 정보
  |   |– _reset.scss        # Normalize.css
  |   |– _typography.scss   # 타이포그라피 
  |   …                     # Etc.
  |
  |– components/
  |   |– _badge.scss        # 뱃지
  |   |– _breadcrumb.scss   # 사이트 이동 경로
  |   |– _buttons.scss      # 버튼
  |   |– _carousel.scss     # 캐러젤(혹은 슬라이드)
  |   |– _dropdown.scss     # 드랍다운
  |   |– _list.scss         # 리스트
  |   |– _loader.scss       # 로더
  |   |– _media.scss        # 이미지 / 동영상
  |   |– _modal.scss        # 모달
  |   |– _tab.scss          # 탭
  |   |– _tooltip.scss      # 툴팁
  |   …                     # Etc.
  |
  |– layout/
  |   |– _footer.scss       # 푸터
  |   |– _forms.scss        # 폼
  |   |– _grid.scss         # 그리드 레이아웃
  |   |– _header.scss       # 헤더
  |   |– _navigation.scss   # 네비게이션
  |   |– _sidebar.scss      # 사이드바
  |   …                     # Etc.
  |
  |– pages/
  |   |– _landing.scss      # 랜딩 페이지에서만 사용하는 스타일
  |   …                     # Etc.
  |
  |– themes/
  |   |– _theme.scss        # 기본 테마
  |   |– _admin.scss        # 관리자 용 테마
  |   …                     # Etc.
  |
  |– vendors/
  |   …                     # Etc.
  |
  `– main.scss              # Main Sass 파일
```

## 개발 방법

docs 폴더의 `index.html` 과 `js`, `css` 폴더의 내용을 수정하면 자동으로 브라우저에 반영됩니다.
아래 명령어를 이용하여 개발하면 됩니다.

```
# 터미널에서..
gulp
```

## 참고사항

### 스타일 통일을 위한 도구

- [.editorconfig](http://editorconfig.org/)
- [Javascript Standard](http://standardjs.com/)
- [ESlint](http://eslint.org/)

### 프로젝트 빌드 도구

- [Webpack](https://webpack.github.io/)
- [Gulp](http://gulpjs.com/)

### 템플릿 엔진 (미정)


### 스타일시트 프리프로세서

- [SCSS](http://sass-lang.com/)
- [SCSS 가이드라인](https://sass-guidelin.es/)

### 자바스크립트 컴파일러

- [Babel](https://babeljs.io/)
- [Learn ES2015](https://babeljs.io/learn-es2015/)


### 한글 폰트(미정)

- [Spoqa Han Sans](http://spoqa.github.io/spoqa-han-sans/)
- [Noto Sans CJK](https://www.google.com/get/noto/help/cjk/)

