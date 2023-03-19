# my-portfolio

NotionAPI를 활용한 Nextjs 포트폴리오 입니다. <br /><br />
<b>배포링크</b>: [보러가기](https://my-portfolio-orcin-one.vercel.app/)

## 기간

2023.03.06 ~ 진행중

## 기술 스택

- Next.js
- Typescript
- Tailwind CSS
- Notion API
- ESLint

## 화면

### light-mode

![light-mode](https://user-images.githubusercontent.com/50124980/226212280-3a5db12c-dd96-4fdd-931b-be3c05322f96.png)

### dark-mode

![dark-mode](https://user-images.githubusercontent.com/50124980/226212291-d48e1376-8bb2-45cb-ae2b-139c56d87621.png)

## 디렉토리 구조

```
📦
├─ .eslintignore
├─ .eslintrc.ts
├─ .gitignore
├─ README.md
├─ components
│  ├─ about
│  │  └─ about-item.tsx
│  ├─ blog
│  │  └─ blogs-detail.tsx
│  │  └─ blogs-item.tsx
│  ├─ home
│  │  └─ animation.tsx
│  │  └─ hero.tsx
│  ├─ project
│  │  └─ projects-item.tsx
│  ├─ dark-mode.tsx
│  ├─ footer.tsx
│  ├─ header.tsx
│  └─ layout.tsx
├─ config
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ 404.tsx
│  ├─ aboutme
│  │  └─ index.tsx
│  ├─ api
│  │  ├─ index.ts
│  │  └─ notionApi.ts
│  ├─ blog
│  │  ├─ [id].tsx
│  │  └─ index.tsx
│  ├─ project
│  │  └─ index.tsx
│  └─ index.tsx
├─ postcss.config.js
├─ public
├─ route
├─ styles
├─ tailwind.config.js
├─ tsconfig.json
└─ types
```
