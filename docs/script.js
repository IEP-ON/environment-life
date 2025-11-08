// DOM 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 스크롤 효과
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 모바일 메뉴 토글
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 메인 컨텐츠 생성
    createMainContent();

    // 블록 카드 렌더링
    renderBlocks('all');

    // 필터 버튼 이벤트
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderBlocks(button.dataset.filter);
        });
    });

    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
            }
        });
    });
});

// 메인 컨텐츠 HTML 생성
function createMainContent() {
    const content = `
        <section id="overview" class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">01</span>
                    <h2 class="section-title">프로젝트 개요</h2>
                    <p class="section-subtitle">세계시민교육 기반 환경교육의 새로운 패러다임</p>
                </div>
                <div id="overviewContent"></div>
            </div>
        </section>

        <section id="curriculum" class="section section-dark">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">02</span>
                    <h2 class="section-title">교육과정 구성</h2>
                    <p class="section-subtitle">32차시 블록타임 기반 체계적 설계</p>
                </div>
                <div id="curriculumContent"></div>
            </div>
        </section>

        <section id="blocks" class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">03</span>
                    <h2 class="section-title">블록수업 상세</h2>
                    <p class="section-subtitle">17개 블록별 수업 내용 및 자료</p>
                </div>
                <div class="blocks-filter">
                    <button class="filter-btn active" data-filter="all">전체 (17개)</button>
                    <button class="filter-btn" data-filter="opening">오프닝 (1개)</button>
                    <button class="filter-btn" data-filter="area1">영역1 (6개)</button>
                    <button class="filter-btn" data-filter="eval">평가 (2개)</button>
                    <button class="filter-btn" data-filter="area2">영역2 (7개)</button>
                    <button class="filter-btn" data-filter="closing">클로징 (1개)</button>
                </div>
                <div id="blocksList" class="blocks-list"></div>
            </div>
        </section>

        <section id="materials" class="section section-dark">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">04</span>
                    <h2 class="section-title">개발 자료 현황</h2>
                    <p class="section-subtitle">체계적으로 구축된 교수학습 자료</p>
                </div>
                <div id="materialsContent"></div>
            </div>
        </section>

        <section id="features" class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">05</span>
                    <h2 class="section-title">특징 및 차별점</h2>
                    <p class="section-subtitle">세계시민교육 기반 환경교육의 차별화</p>
                </div>
                <div id="featuresContent"></div>
            </div>
        </section>

        <section id="plan" class="section section-dark">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">06</span>
                    <h2 class="section-title">향후 계획 및 활용 방안</h2>
                    <p class="section-subtitle">교육과정의 지속적 발전과 확산</p>
                </div>
                <div id="planContent"></div>
            </div>
        </section>
    `;

    document.getElementById('mainContent').innerHTML = content;
    
    // 각 섹션 내용 로드
    loadSectionContents();
}

// 섹션 내용 로드
function loadSectionContents() {
    // 개요 섹션
    document.getElementById('overviewContent').innerHTML = createOverviewSection();
    
    // 교육과정 섹션
    document.getElementById('curriculumContent').innerHTML = createCurriculumSection();
    
    // 자료 섹션
    document.getElementById('materialsContent').innerHTML = createMaterialsContent();
    
    // 특징 섹션
    document.getElementById('featuresContent').innerHTML = createFeaturesContent();
    
    // 계획 섹션
    document.getElementById('planContent').innerHTML = createPlanContent();
    
    // 사고루틴 스크립트 로드
    loadThinkingRoutinesScript();
    
    // 자료 맵핑 스크립트 로드
    loadResourceMappingScript();
}

// 사고루틴 스크립트 동적 로드
function loadThinkingRoutinesScript() {
    const script = document.createElement('script');
    script.src = 'thinking-routines.js';
    script.onload = function() {
        // 특징 섹션에 사고루틴 상세 내용 추가
        const featuresSection = document.querySelector('#features .container');
        const thinkingRoutinesHTML = createThinkingRoutinesSection();
        featuresSection.insertAdjacentHTML('beforeend', thinkingRoutinesHTML);
    };
    document.head.appendChild(script);
}

// 자료 맵핑 스크립트 동적 로드
function loadResourceMappingScript() {
    const script = document.createElement('script');
    script.src = 'resource-mapping.js';
    script.onload = function() {
        // 개발자료 섹션에 자료 맵핑 상세 내용 추가
        const materialsSection = document.querySelector('#materials .container');
        const resourceMappingHTML = createResourceMappingSection();
        materialsSection.insertAdjacentHTML('beforeend', resourceMappingHTML);
    };
    document.head.appendChild(script);
}

// 블록 카드 렌더링
function renderBlocks(filter) {
    const blocksList = document.getElementById('blocksList');
    let filteredBlocks = blocksData;

    if (filter !== 'all') {
        filteredBlocks = blocksData.filter(block => block.category === filter);
    }

    blocksList.innerHTML = filteredBlocks.map(block => createBlockCard(block)).join('');
}

// 블록 카드 HTML 생성
function createBlockCard(block) {
    const categoryColors = {
        opening: '#FF6B6B',
        area1: '#4ECDC4',
        area2: '#98D8C8',
        eval: '#FFA07A',
        closing: '#A29BFE'
    };

    return `
        <div class="block-card" style="border-left-color: ${categoryColors[block.category]};">
            <div class="block-header">
                <div class="block-number">${block.number}</div>
                <div class="block-hours">${block.hours}</div>
            </div>
            <h3 class="block-title">${block.title}</h3>
            <div class="block-area">📌 ${block.area} | ${block.achievement}</div>
            <p class="block-description">${block.description}</p>
            
            <div class="block-objectives">
                <h4>🎯 학습목표</h4>
                <ul>
                    ${block.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>

            <div style="background: #f0f8ff; padding: 12px; border-radius: 8px; margin: 15px 0;">
                <strong>🧠 사고루틴:</strong> ${block.thinkingRoutine}
            </div>

            <div class="block-keywords">
                ${block.keywords.map(keyword => `<span class="keyword-tag">#${keyword}</span>`).join('')}
            </div>

            <div class="block-links">
                <a href="${block.lessonPlan}" class="block-link lesson-link" target="_blank">
                    📝 지도안 열기
                </a>
                <a href="${block.worksheet}" class="block-link worksheet-link" target="_blank">
                    📋 학습지 열기
                </a>
            </div>
        </div>
    `;
}

// 섹션 생성 함수들
function createOverviewSection() {
    return `
        <div style="background: #f5f7fa; padding: 30px; border-radius: 15px; margin-bottom: 40px; line-height: 1.9;">
            <p>본 프로젝트는 <strong>2022 개정 교육과정</strong>에 따른 세계시민교육 기반 환경교육 교육과정입니다. 
            환경문제를 단순히 지역적 차원이 아닌 <strong style="color: #43cea2;">글로벌 관점</strong>에서 이해하고, 
            학생들이 <strong style="color: #43cea2;">세계시민으로서의 환경 책임</strong>을 인식하며 
            <strong style="color: #43cea2;">생태전환적 삶</strong>을 실천할 수 있도록 설계되었습니다.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
            ${createOverviewCard('🎯', '핵심 목적', '17개 블록수업 개발', ['32차시 블록타임', '지도안 17개', '학습지 17개'])}
            ${createOverviewCard('🌐', '교육 철학', '세계시민교육 기반', ['글로벌 이슈', '국제 협력', '상호의존성'])}
            ${createOverviewCard('🧠', '교수법', '사고루틴 적용', ['5개 루틴', '사고력 신장', '협력 학습'])}
            ${createOverviewCard('♻️', '실천 지향', '4개 차원 실천', ['개인', '사회', '국가', '세계'])}
        </div>
    `;
}

function createOverviewCard(icon, title, desc, items) {
    return `
        <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 30px; border-radius: 15px;">
            <div style="font-size: 3em; margin-bottom: 15px;">${icon}</div>
            <h3 style="font-size: 1.4em; font-weight: 700; color: #2c5f2d; margin-bottom: 10px;">${title}</h3>
            <p style="margin-bottom: 15px; color: #666;">${desc}</p>
            <ul style="list-style: none; padding: 0;">
                ${items.map(item => `<li style="padding: 5px 0;">✓ ${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

function createCurriculumSection() {
    return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 25px; margin-bottom: 40px;">
            ${createStatCard('📦', '17', '블록 수업')}
            ${createStatCard('📚', '32', '총 차시')}
            ${createStatCard('📝', '34', '개발 산출물')}
            ${createStatCard('🧠', '5', '사고루틴')}
        </div>
    `;
}

function createStatCard(icon, number, label) {
    return `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 35px 25px; border-radius: 15px; text-align: center;">
            <div style="font-size: 2em;">${icon}</div>
            <div style="font-size: 3.5em; font-weight: 900; margin: 10px 0;">${number}</div>
            <div style="font-size: 1.2em;">${label}</div>
        </div>
    `;
}

function createMaterialsContent() {
    return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-bottom: 40px;">
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px;">
                <h3 style="font-size: 1.5em; margin-bottom: 15px;">📝 지도안 (17개)</h3>
                <p>교사용 수업 지도안</p>
                <ul style="list-style: none; padding: 0; margin-top: 15px;">
                    <li style="padding: 5px 0;">✓ HTML 형식, 인쇄 최적화</li>
                    <li style="padding: 5px 0;">✓ 교사 발문 중심</li>
                    <li style="padding: 5px 0;">✓ 사고루틴 적용</li>
                </ul>
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px;">
                <h3 style="font-size: 1.5em; margin-bottom: 15px;">📋 학습지 (17개)</h3>
                <p>학생용 활동 학습지</p>
                <ul style="list-style: none; padding: 0; margin-top: 15px;">
                    <li style="padding: 5px 0;">✓ HTML 형식, 인쇄 최적화</li>
                    <li style="padding: 5px 0;">✓ 지도안 발문 연계</li>
                    <li style="padding: 5px 0;">✓ 충분한 답안 공간</li>
                </ul>
            </div>
        </div>
        <div style="background: rgba(255,165,0,0.2); padding: 25px; border-radius: 10px; text-align: center;">
            <h4 style="font-size: 1.4em; margin-bottom: 15px;">📁 개발 완료 산출물</h4>
            <p style="margin-bottom: 20px;"><strong>총 34개 파일</strong> - 지도안 17개 + 학습지 17개</p>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <a href="./지도안/" style="background: white; color: #333; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: 600;">지도안 폴더</a>
                <a href="./학습지/" style="background: white; color: #333; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: 600;">학습지 폴더</a>
            </div>
        </div>
        
        <!-- 자료 맵핑 상세 섹션은 resource-mapping.js에서 동적 추가 -->
    `;
}

function createFeaturesContent() {
    return `
        <h3 style="font-size: 1.8em; margin-bottom: 20px;">🌍 세계시민교육 기반 환경교육의 차별화</h3>
        <p style="margin-bottom: 30px; line-height: 1.8;">
            환경과 삶 II는 <strong>세계시민교육 기반 환경교육</strong>으로서 도덕과, 사회과, 과학과와 명확히 차별화됩니다.
            글로벌 관점, 국제 협력, 생태전환적 삶을 중심으로 교육과정을 설계하였습니다.
        </p>

        <!-- 차별화 테이블 -->
        <div style="margin-bottom: 40px;">
            <h4 style="font-size: 1.4em; margin-bottom: 20px; text-align: center;">📊 타 교과와의 차별화 전략</h4>
            <div style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead style="background: linear-gradient(135deg, #2c5f2d 0%, #43cea2 100%); color: white;">
                        <tr>
                            <th style="padding: 15px; text-align: center;">구분</th>
                            <th style="padding: 15px; text-align: center;">타 교과 초점</th>
                            <th style="padding: 15px; text-align: center;">환경과 삶 II 차별화</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 15px; text-align: center; font-weight: 700; background: #f8f9fa;">vs 도덕과</td>
                            <td style="padding: 15px;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li>• 개인 도덕성, 환경 감수성</li>
                                    <li>• 일상 속 환경 위기</li>
                                    <li>• 개인 실천 중심</li>
                                </ul>
                            </td>
                            <td style="padding: 15px; background: #e8f5e9;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li><strong>• 지역·국제적 환경 이슈</strong></li>
                                    <li><strong>• 세계시민으로서의 환경 책임</strong></li>
                                    <li><strong>• 국제사회 노력과 협력</strong></li>
                                </ul>
                            </td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 15px; text-align: center; font-weight: 700; background: #f8f9fa;">vs 사회과</td>
                            <td style="padding: 15px;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li>• 우리나라 기후 특징</li>
                                    <li>• 자연재해 이해</li>
                                    <li>• 지리적 현상 파악</li>
                                </ul>
                            </td>
                            <td style="padding: 15px; background: #e8f5e9;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li><strong>• 전지구적 영향</strong></li>
                                    <li><strong>• 환경 발자국</strong></li>
                                    <li><strong>• 세계화 문제 특성</strong></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 15px; text-align: center; font-weight: 700; background: #f8f9fa;">vs 과학과</td>
                            <td style="padding: 15px;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li>• 과학적 원리</li>
                                    <li>• 실험·관찰</li>
                                    <li>• 지식 전달</li>
                                </ul>
                            </td>
                            <td style="padding: 15px; background: #e8f5e9;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li><strong>• 태도·가치 변화</strong></li>
                                    <li><strong>• 생태전환 실천</strong></li>
                                    <li><strong>• 세계시민 행동</strong></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 핵심 차별화 포인트 -->
        <div style="margin-bottom: 40px;">
            <h4 style="font-size: 1.4em; margin-bottom: 20px; text-align: center;">⭐ 핵심 차별화 포인트</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px;">
                    <h5 style="font-size: 1.3em; margin-bottom: 15px;">🌍 글로벌 시각</h5>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="padding: 8px 0;">✓ 파리기후협약, COP, SDGs</li>
                        <li style="padding: 8px 0;">✓ 국제 환경 협력 사례</li>
                        <li style="padding: 8px 0;">✓ 나비효과, 상호의존성</li>
                        <li style="padding: 8px 0;">✓ 전지구적 영향 이해</li>
                    </ul>
                </div>
                <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 30px; border-radius: 15px;">
                    <h5 style="font-size: 1.3em; margin-bottom: 15px;">🤝 실천 지향</h5>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="padding: 8px 0;">✓ 개인·가정·학교·세계 차원</li>
                        <li style="padding: 8px 0;">✓ 구체적 실천 계획 수립</li>
                        <li style="padding: 8px 0;">✓ 생태전환 프로젝트</li>
                        <li style="padding: 8px 0;">✓ 글로벌 청소년 연대</li>
                    </ul>
                </div>
                <div style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; padding: 30px; border-radius: 15px;">
                    <h5 style="font-size: 1.3em; margin-bottom: 15px;">🧠 사고력 신장</h5>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="padding: 8px 0;">✓ 하버드 사고루틴 적용</li>
                        <li style="padding: 8px 0;">✓ 비판적 사고력 함양</li>
                        <li style="padding: 8px 0;">✓ 협력 학습</li>
                        <li style="padding: 8px 0;">✓ 메타인지 발달</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 사고루틴 강화 섹션은 thinking-routines.js에서 동적 추가 -->
    `;
}

function createPlanContent() {
    return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px;">
                <h4 style="font-size: 1.5em; margin-bottom: 15px;">📚 현장 적용</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 5px 0;">✓ 2025학년도 적용</li>
                    <li style="padding: 5px 0;">✓ 블록타임제 운영</li>
                    <li style="padding: 5px 0;">✓ 수업 공개</li>
                </ul>
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px;">
                <h4 style="font-size: 1.5em; margin-bottom: 15px;">🔄 지속적 개선</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 5px 0;">✓ 평가 분석</li>
                    <li style="padding: 5px 0;">✓ 자료 보완</li>
                    <li style="padding: 5px 0;">✓ 이슈 반영</li>
                </ul>
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px;">
                <h4 style="font-size: 1.5em; margin-bottom: 15px;">📤 공유 및 확산</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 5px 0;">✓ 교육청 공유</li>
                    <li style="padding: 5px 0;">✓ 타 학교 지원</li>
                    <li style="padding: 5px 0;">✓ 교사 연수</li>
                </ul>
            </div>
        </div>
    `;
}
