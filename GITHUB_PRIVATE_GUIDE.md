# 🔒 GitHub 비공개 저장소 설정 가이드

## 📋 비공개 저장소 장점
- ✅ **보안성**: 저장소 주인과 초대된 멤버만 접근
- ✅ **통제**: 누가 접근하는지 정확히 관리 가능
- ✅ **무료**: 퍼블릭 저장소와 동일한 기능 제공
- ✅ **협업**: 팀원들과 안전하게 공유 가능

## 🚀 설정 방법

### 1. GitHub 비공개 저장소 생성

1. **GitHub 접속**
   - [github.com](https://github.com) 로그인
   - 우측 상단 `+` 버튼 → `New repository`

2. **저장소 설정**
   ```
   Repository name: 환경과삶II-교육과정개발
   Description: 초등 6학년 세계시민교육 기반 환경교육 교육과정
   Privacy: 🔒 Private (선택)
   Add a README file: ✓ 체크
   Add .gitignore: ✓ 체크 (선택사항)
   Choose a license: ✓ 체크 (선택사항)
   ```

3. **Create repository 클릭**

### 2. 로컬 저장소 연동

```bash
# 현재 프로젝트 폴더로 이동
cd "환경과 삶"

# 기존 원격 저장소가 있다면 제거
git remote remove origin  # (이미 있다면)

# 새 비공개 저장소 연결
git remote add origin https://github.com/사용자이름/환경과삶II-교육과정개발.git

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "🌍 초기 커밋: 환경과 삶 II 교육과정 개발 보고서"

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

### 3. 팀원 초대 (선택사항)

1. **저장소 접속**
   - 생성된 비공개 저장소로 이동

2. **Settings 탭**
   - 상단 메뉴에서 `Settings` 클릭

3. **Collaborators**
   - 왼쪽 메뉴에서 `Collaborators` → `Add people`

4. **팀원 초대**
   - GitHub 사용자 이름 또는 이메일 입력
   - `Add collaborator` 클릭
   - 팀원이 초대 수락 필요

## 🔗 링크 공유 방법

### 방법 1: 저장소 링크
```
https://github.com/사용자이름/환경과삶II-교육과정개발
```

### 방법 2: 특정 파일 링크
```
https://github.com/사용자이름/환경과삶II-교육과정개발/blob/main/report/index.html
```

### 방법 3: 폴더 링크
```
https://github.com/사용자이름/환경과삶II-교육과정개발/tree/main/지도안
```

## 📱 GitHub Pages로 웹 보고서 공유

비공개 저장소에서도 GitHub Pages를 사용할 수 있습니다!

1. **Settings 탭**
   - 저장소에서 `Settings` 클릭

2. **Pages 설정**
   - 왼쪽 메뉴에서 `Pages`
   - Source: `Deploy from a branch`
   - Branch: `main` → `/ (root)`
   - `Save` 클릭

3. **웹사이트 접속**
   ```
   https://사용자이름.github.io/환경과삶II-교육과정개발/report/
   ```

## 🛡️ 보안 팁

### 1. **접근 권한 관리**
- 필요한 사람만 Collaborator로 추가
- 주기적으로 접근 권한 검토

### 2. **민감 정보 제외**
- `.gitignore`로 개인정보 파일 제외
- API 키, 비밀번호 등 포함 금지

### 3. **2단계 인증**
- GitHub 계정 2FA 설정 권장

## 📊 파일 구조 (GitHub에 업로드될)

```
환경과삶II-교육과정개발/
├── 📁 report/                 # 웹 보고서
│   ├── 📄 index.html         # 메인 페이지
│   ├── 🎨 styles.css         # 스타일시트
│   ├── ⚡ script.js          # 메인 스크립트
│   ├── 📊 blocks-data.js     # 블록 데이터
│   ├── 🧠 thinking-routines.js # 사고루틴
│   └── 📋 resource-mapping.js # 자료 맵핑
├── 📁 지도안/                 # 17개 지도안
├── 📁 학습지/                 # 17개 학습지
├── ⚙️ vercel.json            # Vercel 설정
├── 🚫 .gitignore              # 제외 파일
└── 📖 README.md               # 설명서
```

## 🎯 활용 방안

### **내부 공유**
- 학교 내부 교사들과 공유
- 교육청 검토용 제출
- 연구소 협업 자료

### **외부 공유**
- 발표 자료 링크 공유
- 논문 부록 자료
- 교육 프로그램 홍보

---

**🔒 비공개 저장소로 안전하게 관리하면서 필요한 사람과 편리하게 공유하세요!**
