# Mayumi-Blog Phase 0 — AG 작업 지시서

> 작성: Claude (2026-06-13)
> 목적: 더미 콘텐츠 제거 + 기본 설정 정비 + 라이트 모드 기본값 + 다크/라이트 토글 복원
> 실행자: AG (AntiGravity)
> 우선순위: 순차 실행 (0-1 → 0-2 → 0-3 → 0-4 → 0-5 → 0-6)

---

## 전제 사항

- 프로젝트 루트: `/Users/gsf/.gemini/antigravity/scratch/projects/Mayumi-Blog`
- 배포: Vercel (push 후 자동 배포)
- 작업 완료 후 `git commit` 및 `git push`까지 실행할 것
- 각 태스크 완료 시 완료 보고 (파일 경로 + 변경 내용 명시)

---

## Task 0-1: 더미 콘텐츠 전체 삭제

아래 파일을 **삭제**한다.

```
src/data/blog/ja/dummy-2.md
src/data/blog/ja/dummy-3.md
src/data/blog/ja/dummy-4.md
src/data/blog/ja/dummy-magazine-post.md
src/data/blog/ja/welcome.md
src/data/blog/ko/dummy-magazine-post.md
src/data/blog/ko/welcome.md
```

**주의:** `src/data/blog/` 루트의 `_integrity-example-fail.md`, `_integrity-example-pass.md`, `_template-trilingual-post.md`는 **삭제하지 말 것** (시스템 파일).

---

## Task 0-2: config.ts 기본 설정 수정

파일: `src/config.ts`

### 변경 1: 타임존 수정
```
변경 전: timezone: "Asia/Seoul",
변경 후: timezone: "Asia/Tokyo",
```

### 변경 2: desc 수정 (Mayumi 블로그 성격 반영)
```
변경 전: desc: "A personal space sharing essays, poems, and stories by Mayumi Phoebe.",
변경 후: desc: "日々の祈りと思索、詩と物語を綴るパーソナルマガジン。",
```

### 변경 3: lang 확인
```
lang: "ja",  ← 이미 ja인지 확인. en이면 ja로 변경.
```

---

## Task 0-3: 라이트 모드 기본값 설정

현재 사이트가 다크 모드로 고정되어 표시됨. 라이트 모드를 기본값으로 설정한다.

### 방법: HTML 초기 테마 스크립트 수정

AstroPaper의 테마 초기화 스크립트를 찾아 수정한다.

1. `src/layouts/` 디렉토리에서 Base layout 또는 root layout 파일 확인
2. `data-theme` 초기화 로직 찾기
3. 로직 수정: localStorage에 저장된 값이 없을 때 기본값을 `"light"`로 설정

예시 패턴:
```javascript
// 변경 전 (dark 기본)
const theme = localStorage.getItem("theme") ?? "dark";

// 변경 후 (light 기본)
const theme = localStorage.getItem("theme") ?? "light";
```

실제 파일 구조를 확인하고 적절한 위치에서 수정할 것.

---

## Task 0-4: 다크/라이트 토글 버튼 Header에 추가

현재 `src/components/Header.astro`에 테마 토글 버튼이 없음. 추가한다.

### 현재 Header 구조
```
왼쪽: LanguageSwitcher
중앙: 로고 (Mayumi Phoebe)
오른쪽: 네비게이션 (記事一覧 / タグ)
```

### 목표 Header 구조
```
왼쪽: LanguageSwitcher
중앙: 로고 (Mayumi Phoebe)
오른쪽: 네비게이션 (記事一覧 / タグ) + [테마 토글 버튼]
```

### 구현 방법

1. GSF-Blog(`/Users/gsf/.gemini/antigravity/scratch/projects/GSF-Blog`)의 Header.astro 또는 테마 토글 컴포넌트를 참조하여 동일 방식으로 구현
2. 토글 버튼은 네비게이션 우측 끝에 배치
3. `ui.ts`에 이미 정의된 키 반드시 활용:
   - `themeToggleTitle` / `themeToggleAria`
4. 토글 클릭 시 `localStorage`에 `"theme"` 키로 저장하고 `<html data-theme>` 속성 업데이트

---

## Task 0-5: constants.ts 정리

파일: `src/constants.ts`

### 변경 1: GitHub href 수정
```
변경 전: href: "https://github.com/asiaunion/GSF-Blog",
변경 후: href: "#",
```
(Mayumi-Blog 전용 repo가 생기면 그때 업데이트)

### 변경 2: 메일 주소 수정
```
변경 전: href: "mailto:asiaunion@gmail.com",
변경 후: href: "mailto:mayumiot@gmail.com",
```

### 변경 3: GitHub 소셜 링크 제거
SOCIALS 배열에서 GitHub 항목 제거. X, Mail만 유지.
(LinkedIn은 사모님 계정 생기면 추후 추가)

---

## Task 0-6: 빌드 확인 및 배포

```bash
# 1. 빌드 테스트
pnpm run build

# 2. 에러 없으면 커밋
git add -A
git commit -m "chore: phase0 — remove dummy content, set light mode default, add theme toggle"

# 3. 푸시 (Vercel 자동 배포)
git push
```

빌드 에러 발생 시:
- 에러 메시지 전문을 보고
- 원인 파악 후 수정
- **Claude에게 보고 후 지시 대기** (임의로 우회하지 말 것)

---

## 완료 보고 형식

각 Task 완료 시:
```
✅ Task 0-X 완료
- 변경 파일: [파일 경로]
- 변경 내용: [구체적 내용]
```

전체 완료 시:
```
🎉 Phase 0 전체 완료
- 빌드: 성공/실패
- 배포: push 완료 (커밋 해시: XXXXXXX)
- 잔여 이슈: [있으면 기재]
```

---

## 참고: Phase 1 예고 (지금 실행하지 말 것)

Phase 0 완료 확인 후 Claude가 별도 지시서 작성 예정:
- About 페이지 3개 언어 작성 (사모님 이력서 참조)
- 첫 실제 글 업로드 (사모님 원고 제공 후)
- Hero 이미지 설정
- i18n ui.ts Mayumi 전용 텍스트 업데이트 (현재 GSF-Blog 텍스트 그대로)
