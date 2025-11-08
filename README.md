# 🌍 환경과 삶 II - 교육과정 개발 보고서

## 📋 프로젝트 개요
초등 6학년을 위한 세계시민교육 기반 환경교육 교육과정 개발 보고서입니다.

## 🚀 Vercel 배포 방법

### 방법 1: GitHub 연동 (권장)

1. **GitHub 저장소 생성**
   ```bash
   git add .
   git commit -m "초기 커밋: 환경과 삶 II 보고서"
   git branch -M main
   git remote add origin https://github.com/사용자이름/저장소이름.git
   git push -u origin main
   ```

2. **Vercel에 배포**
   - [vercel.com](https://vercel.com) 접속
   - "New Project" 클릭
   - GitHub 저장소 선택
   - "Deploy" 클릭

### 방법 2: Vercel CLI 사용

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **배포**
   ```bash
   cd "환경과 삶"
   vercel --prod
   ```

## 📁 파일 구조
```
환경과 삶/
├── report/                 # 웹 보고서 (메인)
│   ├── index.html         # 메인 페이지
│   ├── styles.css         # 스타일시트
│   ├── script.js          # 메인 스크립트
│   ├── blocks-data.js     # 블록 데이터
│   ├── thinking-routines.js # 사고루틴 데이터
│   └── resource-mapping.js # 자료 맵핑 데이터
├── 지도안/                 # 17개 지도안 파일
├── 학습지/                 # 17개 학습지 파일
└── vercel.json            # Vercel 설정
```

## 🌐 배포 후 URL
배포 완료되면 다음과 같은 URL로 접근 가능:
- `https://프로젝트이름.vercel.app`
- `https://프로젝트이름.vercel.app/report/`

## ✨ 주요 기능
- 17개 블록 상세 정보
- 사고루틴 교육적 가치
- 자료 맵핑 현황
- 지도안·학습지 파일 연동
- 반응형 웹디자인

## 📞 문의
개발팀: 남대구초등학교 교육과정 개발팀
