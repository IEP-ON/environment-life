// 블록별 자료 맵핑 데이터
const resourceMappingData = {
    // 자료 활용 원칙
    principles: [
        { title: '교육과정 우선', desc: '성취기준에 부합하는 자료만 선별' },
        { title: '차별화 준수', desc: '도덕/사회/과학과 중복 회피, 글로벌 맥락 강조' },
        { title: '참고 용도', desc: '자료 내용을 그대로 복사하지 않고 교육과정에 맞게 재구성' },
        { title: '멀티미디어 검증', desc: '영상/이미지 자료는 실제 존재 여부 검색 확인' },
        { title: '최신성', desc: '2022~2025 자료 우선, IPCC/UN 등 공신력 있는 출처' }
    ],

    // 자료 활용 통계
    statistics: {
        totalResourceFiles: 27,
        resourceCategories: [
            { category: '교사용 초등5~6학년 시리즈', blocks: 17, usage: '전반적 교수학습 활동 아이디어' },
            { category: '기후변화 PPT 시리즈 (초등)', blocks: 12, usage: '차시별 구체적 활동' },
            { category: '2022~2025 환경의날 자료', blocks: 5, usage: '캠페인, 환경 감수성' },
            { category: '환경수업나눔 2~4기', blocks: 3, usage: '프로젝트, 실천 사례' },
            { category: '국제 문서 (IPCC, 2050전략)', blocks: 6, usage: '글로벌 협력, 국제 규범' }
        ]
    },

    // 차별화 준수 현황
    differentiationStatus: {
        globalKeywords: { status: '✅', description: '17개 블록 전체: 글로벌/국제 키워드 포함' },
        moralSubject: { status: '✅', description: '개인 감수성 넘어 세계시민 책임 강조' },
        socialSubject: { status: '✅', description: '지리 현상 넘어 환경문제 해결 태도 중심' },
        scienceSubject: { status: '✅', description: '과학 원리 간단히, 태도·실천 중심' }
    },

    // 블록별 상세 자료 (주요 블록만 요약)
    blockResources: [
        {
            block: 1,
            title: '오프닝 - 환경과 나의 삶',
            resources: [
                { name: '교사용_초등5~6학년-1-2차시.txt', usage: '환경 개념, 세계시민교육 소개' },
                { name: '환경교육_프로그램_지도서3-4학년.txt', usage: '환경 사진 자료, 질문 벽 아이디어' }
            ],
            differentiation: ['일상 물건→전 세계 연결성', '지역·국제적 환경 이슈 소개'],
            multimedia: ['EBS 지구의 경고 시리즈', '유네스코 세계시민교육 소개 영상']
        },
        {
            block: 2,
            title: '일상 속 환경문제 발견',
            resources: [
                { name: '초등_1-2차시_전기에너지와_기후위기.txt', usage: '전기 사용→CO2 배출 연결고리' },
                { name: '초등1-1차시_온실가스_사라져라_뿅.txt', usage: '일상 속 온실가스 배출 사례' }
            ],
            differentiation: ['나의 선택→태평양 쓰레기 섬', '플라스틱 사용→해양생태계 파괴'],
            multimedia: ['태평양 쓰레기 섬 사진', '일회용품 사용 통계 (한국 vs 세계)']
        },
        {
            block: 5,
            title: '기후변화의 원인과 현상',
            resources: [
                { name: '특강1_날씨_계절_그리고_기후.txt', usage: '날씨와 기후 차이, 기후변화 개념' },
                { name: '지구온난화_1.5도씨_특별보고서_해설서.txt', usage: 'IPCC 1.5도 목표, 전지구적 영향' }
            ],
            differentiation: ['IPCC 1.5도 보고서 (국제 과학 합의)', '투발루 침수, 방글라데시 홍수'],
            multimedia: ['IPCC 보고서 인포그래픽', '북극곰, 투발루 사진']
        },
        {
            block: 7,
            title: '지속가능발전과 연대',
            resources: [
                { name: '초등_6-2차시_파리협정과_학급기후변화협약.txt', usage: '파리기후협약 내용, 국제 협력' },
                { name: '2050장기저탄소발전전략.txt', usage: '한국 2050 탄소중립 전략' }
            ],
            differentiation: ['파리기후협약 (국제 협력)', 'COP 회의 (국제사회 노력)'],
            multimedia: ['파리기후협약 체결 영상 (2015)', 'SDGs 로고 및 인포그래픽']
        },
        {
            block: 14,
            title: '생활 속 생태전환 실천',
            resources: [
                { name: '초등7-1차시_나는_온실가스_요리사.txt', usage: '식생활 실천 방법' },
                { name: '초등7-2차시_기후변화에_맞서는_패셔니스트.txt', usage: '의생활 실천 방법' }
            ],
            differentiation: ['로컬푸드→푸드 마일리지 (글로벌 관점)', '공정무역 (국제 협력)'],
            multimedia: ['푸드 마일리지 계산기', '공정무역 인증 마크']
        },
        {
            block: 15,
            title: '학교·지역 생태전환',
            resources: [
                { name: '교재활용환경수업나눔_2기_초등.txt', usage: '학교 생태전환 프로젝트 사례' },
                { name: '그린멘토_미래의_나를_만나다PPT.txt', usage: '멘토링, 실천 프로젝트' }
            ],
            differentiation: ['학교→지역→국가→세계 확산', '글로벌 청소년 기후행동 연대'],
            multimedia: ['Fridays for Future (세계 청소년 기후행동)', 'UNESCO ESD 프로그램']
        }
    ]
};

// 자료 맵핑 관련 함수들
function createResourceMappingSection() {
    return `
        <div style="margin: 40px 0;">
            <h3 style="font-size: 2em; margin-bottom: 30px; text-align: center; color: #2c5f2d;">📊 블록별 자료 맵핑 상세</h3>
            
            <!-- 자료 활용 원칙 -->
            <div style="background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%); padding: 30px; border-radius: 15px; margin-bottom: 40px;">
                <h4 style="font-size: 1.4em; margin-bottom: 20px; color: #185a9d;">📋 자료 활용 원칙</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                    ${resourceMappingData.principles.map(principle => `
                        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <div style="font-weight: 700; color: #2c5f2d; margin-bottom: 8px;">${principle.title}</div>
                            <div style="font-size: 0.9em; color: #666; line-height: 1.5;">${principle.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 자료 활용 통계 -->
            <div style="background: white; padding: 30px; border-radius: 15px; margin-bottom: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <h4 style="font-size: 1.4em; margin-bottom: 20px; text-align: center;">📈 자료 활용 통계</h4>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
                    <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%); color: white; border-radius: 10px;">
                        <div style="font-size: 2.5em; font-weight: 900; margin-bottom: 10px;">${resourceMappingData.statistics.totalResourceFiles}</div>
                        <div style="font-weight: 600;">총 자료 파일</div>
                        <div style="font-size: 0.9em; opacity: 0.9;">17개 블록에 활용</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px;">
                        <div style="font-size: 2.5em; font-weight: 900; margin-bottom: 10px;">5</div>
                        <div style="font-weight: 600;">자료 카테고리</div>
                        <div style="font-size: 0.9em; opacity: 0.9;">체계적 분류</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 10px;">
                        <div style="font-size: 2.5em; font-weight: 900; margin-bottom: 10px;">100%</div>
                        <div style="font-weight: 600;">블록 적용률</div>
                        <div style="font-size: 0.9em; opacity: 0.9;">모든 블록 활용</div>
                    </div>
                </div>

                <div>
                    <h5 style="font-weight: 600; margin-bottom: 15px; color: #2c5f2d;">카테고리별 활용 현황</h5>
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead style="background: linear-gradient(135deg, #2c5f2d 0%, #43cea2 100%); color: white;">
                            <tr>
                                <th style="padding: 12px; text-align: left; font-weight: 700;">자료 카테고리</th>
                                <th style="padding: 12px; text-align: center; font-weight: 700;">활용 블록 수</th>
                                <th style="padding: 12px; text-align: left; font-weight: 700;">주요 활용 내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${resourceMappingData.statistics.resourceCategories.map((cat, idx) => `
                                <tr style="border-bottom: 1px solid #eee; background: ${idx % 2 === 0 ? '#f8f9fa' : '#ffffff'};">
                                    <td style="padding: 12px; font-weight: 600; color: #2c5f2d;">${cat.category}</td>
                                    <td style="padding: 12px; text-align: center;">
                                        <span style="background: #43cea2; color: white; padding: 4px 12px; border-radius: 15px; font-size: 0.9em; font-weight: 600;">${cat.blocks}개</span>
                                    </td>
                                    <td style="padding: 12px; color: #333;">${cat.usage}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 차별화 준수 현황 -->
            <div style="background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); padding: 30px; border-radius: 15px; margin-bottom: 40px;">
                <h4 style="font-size: 1.4em; margin-bottom: 20px; text-align: center;">✅ 차별화 준수 현황</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                    ${Object.entries(resourceMappingData.differentiationStatus).map(([key, item]) => `
                        <div style="background: white; padding: 20px; border-radius: 10px; display: flex; align-items: start; gap: 15px;">
                            <div style="flex-shrink: 0; font-size: 1.5em;">${item.status}</div>
                            <div>
                                <div style="font-weight: 600; margin-bottom: 5px; color: #2c5f2d;">${
                                    key === 'globalKeywords' ? '글로벌 키워드' :
                                    key === 'moralSubject' ? 'vs 도덕과' :
                                    key === 'socialSubject' ? 'vs 사회과' : 'vs 과학과'
                                }</div>
                                <div style="font-size: 0.9em; color: #666; line-height: 1.5;">${item.description}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 주요 블록별 자료 상세 -->
            <div>
                <h4 style="font-size: 1.4em; margin-bottom: 20px; text-align: center;">📚 주요 블록별 자료 활용 사례</h4>
                <div style="display: grid; gap: 25px;">
                    ${resourceMappingData.blockResources.map(block => createBlockResourceCard(block)).join('')}
                </div>
            </div>
        </div>
    `;
}

function createBlockResourceCard(block) {
    return `
        <div style="background: white; padding: 25px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                <div>
                    <h5 style="font-size: 1.2em; font-weight: 700; color: #2c5f2d; margin-bottom: 5px;">블록 ${block.block}: ${block.title}</h5>
                </div>
                <div style="background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%); color: white; padding: 8px 15px; border-radius: 20px; font-size: 0.9em; font-weight: 600;">
                    ${block.resources.length}개 자료
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; margin-bottom: 10px; color: #555;">📄 활용 자료</div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    ${block.resources.map(resource => `
                        <div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #eee; ${resource === block.resources[block.resources.length-1] ? 'border-bottom: none; margin-bottom: 0; padding-bottom: 0;' : ''}">
                            <div style="font-weight: 500; color: #2c5f2d; font-size: 0.9em;">${resource.name}</div>
                            <div style="font-size: 0.85em; color: #666; margin-top: 3px;">→ ${resource.usage}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; margin-bottom: 10px; color: #555;">🌍 차별화 포인트</div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${block.differentiation.map(point => `
                        <span style="background: #e8f5e9; color: #2c5f2d; padding: 6px 12px; border-radius: 15px; font-size: 0.85em; font-weight: 500;">${point}</span>
                    `).join('')}
                </div>
            </div>

            <div>
                <div style="font-weight: 600; margin-bottom: 10px; color: #555;">🎬 멀티미디어 자료</div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${block.multimedia.map(media => `
                        <span style="background: #f0f8ff; color: #185a9d; padding: 6px 12px; border-radius: 15px; font-size: 0.85em;">${media}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}
