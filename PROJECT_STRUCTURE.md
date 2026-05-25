# Casa Politica Intelligence 프로젝트 구조 문서

이 문서는 현재 홈페이지의 컴포넌트 구조, 주요 코드 흐름, i18n, 문의 메일 API, 차트와 스타일 구성을 이해하기 위한 정리 문서입니다.

## 1. 전체 구조

이 프로젝트는 Next.js App Router 기반의 브랜드/솔루션 소개형 랜딩페이지입니다.

주요 기능은 다음과 같습니다.

- Casa Politica Intelligence 브랜드 랜딩페이지
- 한국어/영어 i18n 전환
- 모바일 반응형 카드 슬라이더
- Highcharts 기반 Insight 데모 차트
- 문의하기 폼과 이메일 발송 API
- SEO 메타데이터와 favicon 설정

주요 라우트 구조는 다음과 같습니다.

```text
src/app/layout.tsx
  └─ 전체 공통 레이아웃
     ├─ Header
     ├─ 페이지 본문
     └─ Footer

src/app/page.tsx
  └─ 메인 홈페이지

src/app/about/page.tsx
  └─ 회사소개 페이지

src/app/main/contact/page.tsx
  └─ 문의하기 페이지

src/app/api/contact/route.ts
  └─ 문의 폼 메일 발송 API
```

## 2. 공통 레이아웃

파일: `src/app/layout.tsx`

전체 페이지의 공통 뼈대입니다.

역할:

- 전역 폰트 설정
- 전역 CSS 로드
- SEO metadata 설정
- `Header`, `Footer`, `Providers` 적용
- 모든 페이지의 공통 레이아웃 제공

핵심 구조:

```tsx
<Providers>
  <Header />
  <div className="flex-1">{children}</div>
  <Footer />
</Providers>
```

`Providers` 내부에서 i18n context가 제공되기 때문에, Header, Footer, 각 페이지 컴포넌트에서 `$localeMessage`를 사용할 수 있습니다.

## 3. Header / Navbar 구조

### Header

파일: `src/components/layout/Header.tsx`

역할:

- 상단 sticky header
- 로고 표시
- 네비게이션 포함

로고 클릭 시 `/`로 이동합니다.

### Navbar

파일: `src/components/layout/Navbar.tsx`

역할:

- 데스크톱 메뉴 렌더링
- 모바일 햄버거 메뉴 렌더링
- 언어 전환 버튼 포함

메뉴 정의:

```ts
const navItems = [
  { href: "/", messageKey: "nav.home" },
  { href: "/#solution", messageKey: "nav.solution" },
  { href: "/#insight", messageKey: "nav.insight" },
  { href: "/about", messageKey: "nav.company" },
  { href: "/main/contact", messageKey: "nav.contact" },
];
```

메뉴 텍스트는 직접 하드코딩하지 않고 `src/locales/kr.js`, `src/locales/en.js`에서 가져옵니다.

## 4. i18n 구조

관련 파일:

```text
src/locales/kr.js
src/locales/en.js
src/locales/index.js
src/i18n/LocaleProvider.tsx
src/i18n/localeMessage.ts
src/i18n/useLocaleMessage.ts
src/i18n/types.ts
```

현재 기본 언어:

```js
export const defaultLocale = "en";
```

동작 흐름:

```text
LocaleProvider
→ 현재 locale 상태 관리
→ localStorage에 저장
→ useLocaleMessage()
→ $localeMessage("home.hero.description")
→ kr.js 또는 en.js에서 문구 반환
```

문구를 추가할 때는 `en.js`와 `kr.js`에 같은 구조로 key를 추가해야 합니다.

예:

```js
home: {
  hero: {
    description: "..."
  }
}
```

사용:

```tsx
const { $localeMessage } = useLocaleMessage();

$localeMessage("home.hero.description");
```

## 5. 메인 홈페이지 구조

파일: `src/app/page.tsx`

현재 메인 페이지는 하나의 파일 안에 여러 섹션이 구성되어 있습니다.

섹션 순서:

```text
1. Hero
2. Pain vs Gain
3. Solution
4. Core Technology
5. Product
6. Insight
7. Company
8. CTA
```

상단에는 카드/표/차트에서 사용할 데이터 배열이 정의되어 있습니다.

주요 배열:

- `metrics`: Hero 대시보드 수치
- `comparisons`: 기존 여론조사와 Casa Politica Intelligence 비교
- `architecture`: Solution 5단계
- `technologyCards`: 핵심 기술 카드
- `productCards`: 제품 구조 카드
- `insightCards`: Insight 차트 카드
- `companyKeywords`: Trust, Real-time, Intelligence, Transparency

렌더링 패턴은 대부분 다음과 같습니다.

```tsx
items.map((item) => (
  <article key={...}>
    ...
  </article>
))
```

즉, 내용을 추가하거나 순서를 바꾸려면 상단 배열을 수정하면 됩니다.

## 6. 메인 페이지 내부 공통 컴포넌트

`src/app/page.tsx` 내부에는 몇 가지 로컬 컴포넌트가 있습니다.

### AnimatedNumber

Hero 대시보드 숫자를 카운트업 애니메이션으로 보여줍니다.

사용 예:

```tsx
<AnimatedNumber
  value={item.value}
  suffix={item.suffix}
  decimals={item.decimals}
/>
```

### SectionHeading

각 섹션 제목 영역을 통일하는 컴포넌트입니다.

사용 예:

```tsx
<SectionHeading
  eyebrow={t("home.solution.eyebrow")}
  title={t("home.solution.title")}
  description={t("home.solution.description")}
/>
```

### MobileSnapSlider

모바일 카드 섹션을 가로 스와이프 슬라이더처럼 보여주는 컴포넌트입니다.

기능:

- 모바일에서 가로 스와이프
- `snap-x`, `snap-mandatory`
- 스크롤바 숨김
- dots 표시
- dot 클릭 시 해당 카드로 이동
- 데스크톱에서는 grid 레이아웃으로 전환

적용 섹션:

- Solution
- Technology
- Product
- Insight

## 7. Insight 차트 구조

관련 파일:

```text
src/components/charts/InsightHighchart.tsx
src/app/page.tsx
src/styles/globals.css
```

Highcharts는 브라우저 의존성이 있기 때문에 `next/dynamic`으로 클라이언트에서만 로드합니다.

```ts
const InsightHighchart = dynamic(
  () =>
    import("@/components/charts/InsightHighchart").then(
      (mod) => mod.InsightHighchart,
    ),
  {
    ssr: false,
  },
);
```

현재 차트는 실제 API 데이터가 아니라 데모용 샘플 데이터입니다.

차트 종류:

- `election`: 정책 키워드 모멘텀
- `media`: 뉴스 프레임 전환
- `risk`: 부정 감성 확산 경로

차트 hover 효과는 `src/styles/globals.css`에서 CSS 애니메이션으로 처리합니다.

## 8. 회사소개 페이지 구조

라우트:

```text
src/app/about/page.tsx
```

실제 콘텐츠:

```text
src/components/sections/AboutSection.tsx
```

현재 구조:

- 왼쪽: `Intelligence Map` 브랜드 비주얼
- 오른쪽: 회사 소개 텍스트
- 하단: 정치 전략, AI 데이터, 신뢰 분석, 인프라 태그

문구는 `about.*` locale key로 관리합니다.

```js
about: {
  eyebrow,
  title,
  subtitle,
  paragraph1,
  paragraph2,
  tags
}
```

## 9. 문의하기 구조

라우트:

```text
src/app/main/contact/page.tsx
```

컴포넌트 흐름:

```text
ContactPage
→ ContactSection
→ ContactForm
```

폼 파일:

```text
src/features/contact/ContactForm.tsx
```

전송 흐름:

```text
사용자 폼 입력
→ fetch("/api/contact", POST)
→ src/app/api/contact/route.ts
→ nodemailer
→ Gmail SMTP
→ CONTACT_TO_EMAIL로 메일 전송
```

API 파일:

```text
src/app/api/contact/route.ts
```

필요한 환경변수:

```env
SMTP_USER=발송용 Gmail
SMTP_PASS=Gmail 앱 비밀번호
CONTACT_TO_EMAIL=받는 이메일
```

주의:

- `.env.local`은 로컬 전용입니다.
- `.env.local`은 Git에 올라가지 않습니다.
- 배포 환경에서는 Vercel 또는 배포 플랫폼에 환경변수를 별도로 등록해야 합니다.

## 10. 스타일 구조

전역 스타일:

```text
src/styles/globals.css
```

주요 역할:

- 브랜드 컬러 변수 정의
- 폰트 변수 정의
- heading/body/data-number 스타일 정의
- 스크롤바 숨김 유틸
- Hero SVG 애니메이션
- Insight chart hover animation

대표 컬러:

```css
--brand-navy: #001f5c;
--brand-gold: #c9a44b;
```

대표 폰트:

- 제목: `EB Garamond`, `Nanum Myeongjo`
- 본문: `Inter`, `Pretendard`
- 수치: `Inter`

## 11. Assets 구조

관련 파일:

```text
src/assets/icons/iconPaths.ts
src/assets/icons/LogoNavbar.tsx
src/assets/images/imagePaths.ts
public/icons
public/images
```

로고는 `LogoNavbar` 컴포넌트에서 관리합니다.

이미지나 아이콘을 새로 추가할 때는 보통 다음 순서로 관리합니다.

```text
public/icons 또는 public/images에 파일 추가
→ src/assets/icons/iconPaths.ts 또는 src/assets/images/imagePaths.ts에 경로 등록
→ 컴포넌트에서 import 후 사용
```

## 12. 현재 코드에서 알아두면 좋은 점

- `src/app/page.tsx`가 상당히 커졌기 때문에, 추후 유지보수를 위해 섹션별 컴포넌트 분리를 고려할 수 있습니다.
- `src/components/sections/HeroSection.tsx`, `PostsSection.tsx` 등 과거 템플릿성 컴포넌트가 일부 남아 있습니다.
- `src/features/posts/*`는 현재 핵심 페이지에서는 거의 사용되지 않는 템플릿성 코드입니다.
- Highcharts 차트 데이터는 실제 운영 데이터가 아니라 데모용 샘플 데이터입니다.
- 문의하기 기능은 실제 SMTP 발송 구조지만, 배포 환경변수 설정이 필요합니다.
- `.env.local`은 절대 커밋하면 안 됩니다.

## 13. 한 줄 요약

현재 프로젝트는 Casa Politica Intelligence의 사업 컨셉과 솔루션을 보여주는 프론트 중심 소개 사이트입니다.

구성은 다음과 같습니다.

```text
브랜드 랜딩페이지
+ 다국어 시스템
+ 모바일 대응
+ 데모 차트
+ 문의 메일 API
```

실제 AI 민심 분석 MVP라기보다는, 투자자/고객/정치권에게 보여줄 수 있는 1차 브랜드 웹사이트에 가깝습니다.
