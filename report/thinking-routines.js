// 사고루틴 상세 데이터
const thinkingRoutinesData = {
    routines: [
        {
            id: 'see-think-wonder',
            name: 'See-Think-Wonder',
            korean: '보고-생각하고-궁금해하기',
            description: '이미지나 현상을 관찰하고, 생각을 정리하며, 질문을 생성하는 3단계 사고 과정',
            purpose: '관찰력, 비판적 사고, 호기심 자극',
            steps: [
                { step: 1, title: '보기 (See)', description: '무엇을 보고 있나요? 구체적으로 관찰한 것들을 나열해보세요.' },
                { step: 2, title: '생각하기 (Think)', description: '이것이 무엇을 의미한다고 생각하나요? 해석하고 추론해보세요.' },
                { step: 3, title: '궁금해하기 (Wonder)', description: '무엇이 궁금한가요? 더 알고 싶은 점들을 질문으로 만들어보세요.' }
            ],
            blocks: [1, 5, 9, 12],
            examples: [
                { block: '블록 1', context: '일상 속 환경 관련 이미지 관찰', outcome: '환경과 삶의 연결성 발견' },
                { block: '블록 5', context: '기후변화 영향 사진 분석', outcome: '전지구적 영향 이해' },
                { block: '블록 9', context: '세계화 환경문제 자료 탐색', outcome: '연결성 파악' },
                { block: '블록 12', context: '지속가능 미래 저해 요인 시각 자료', outcome: '문제 인식 심화' }
            ],
            benefits: ['관찰력 향상', '비판적 사고', '호기심 증진', '증거 기반 추론']
        },
        {
            id: 'think-pair-share',
            name: 'Think-Pair-Share',
            korean: '생각하고-짝과 나누고-전체 공유',
            description: '개별 생각 → 짝과 토론 → 전체 공유의 3단계 협력 학습',
            purpose: '개인적 사고, 협력 능력, 의사소통 기술',
            steps: [
                { step: 1, title: '생각하기 (Think)', description: '주어진 질문에 대해 개별적으로 생각하고 정리합니다.' },
                { step: 2, title: '짝과 나누기 (Pair)', description: '2인 1조가 되어 서로의 생각을 나누고 토론합니다.' },
                { step: 3, title: '전체 공유 (Share)', description: '짝 토론 결과를 전체와 공유하고 확장합니다.' }
            ],
            blocks: [2, 6, 10, 13],
            examples: [
                { block: '블록 2', context: '일상 속 환경문제 발견', outcome: '다양한 관점 파악' },
                { block: '블록 6', context: '생물다양성 중요성', outcome: '가치관 교류' },
                { block: '블록 10', context: '환경문제 복잡성', outcome: '집단지성 활용' },
                { block: '블록 13', context: '환경 감수성', outcome: '공감 능력 확장' }
            ],
            benefits: ['참여도 증진', '사고의 명료화', '협력 학습', '자신감 향상']
        },
        {
            id: 'connect-extend-challenge',
            name: 'Connect-Extend-Challenge',
            korean: '연결-확장-도전',
            description: '기존 지식과 연결하고, 생각을 확장하며, 새로운 도전 과제 설정',
            purpose: '지식 통합, 사고 확장, 문제 해결 능력',
            steps: [
                { step: 1, title: '연결하기 (Connect)', description: '이 내용이 내가 알고 있는 것과 어떻게 연결되나요?' },
                { step: 2, title: '확장하기 (Extend)', description: '새롭게 알게 된 점은 무엇인가요? 생각이 어떻게 확장되었나요?' },
                { step: 3, title: '도전하기 (Challenge)', description: '어떤 새로운 질문이나 도전 과제가 떠오르나요?' }
            ],
            blocks: [3, 7, 11, 16],
            examples: [
                { block: '블록 3', context: '개인 선택과 지구환경', outcome: '나비효과 이해' },
                { block: '블록 7', context: '지속가능발전', outcome: 'SDGs 연계' },
                { block: '블록 11', context: '협력 방안 모색', outcome: '실천 계획 수립' },
                { block: '블록 16', context: '총괄평가', outcome: '종합적 성찰' }
            ],
            benefits: ['지식 통합', '사고 확장', '메타인지', '창의적 문제해결']
        },
        {
            id: 'i-used-to-think',
            name: 'I Used to Think...Now I Think',
            korean: '과거에는...지금은',
            description: '학습 전후의 생각 변화를 비교하며 개인적 성장을 성찰',
            purpose: '메타인지, 개념 변화, 자기 성찰',
            steps: [
                { step: 1, title: '과거 생각', description: '이 주제에 대해 이전에는 어떻게 생각했나요?' },
                { step: 2, title: '현재 생각', description: '지금은 어떻게 생각하게 되었나요?' },
                { step: 3, title: '변화 이유', description: '어떤 경험을 통해 생각이 바뀌었나요?' }
            ],
            blocks: [4, 8, 14, 17],
            examples: [
                { block: '블록 4', context: '환경문제 해결 태도', outcome: '책임감 내면화' },
                { block: '블록 8', context: '총괄평가 I', outcome: '성장 과정 인식' },
                { block: '블록 14', context: '생태전환 실천', outcome: '가치관 전환' },
                { block: '블록 17', context: '클로징', outcome: '총체적 변화 성찰' }
            ],
            benefits: ['메타인지 발달', '개념 변화 인식', '자기 효능감', '지속적 학습']
        },
        {
            id: 'what-so-what-now-what',
            name: 'What? So What? Now What?',
            korean: '무엇?-의미?-실천?',
            description: '현상 파악 → 의미 탐색 → 실천 계획의 3단계 성찰 과정',
            purpose: '현상 이해, 가치 탐색, 실천 의지',
            steps: [
                { step: 1, title: '무엇? (What?)', description: '무엇을 경험하고 배웠나요? 구체적인 사실을 정리합니다.' },
                { step: 2, title: '그래서? (So What?)', description: '이것이 왜 중요한가요? 어떤 의미가 있나요?' },
                { step: 3, title: '이제는? (Now What?)', description: '앞으로 무엇을 하겠습니까? 구체적 실천 계획을 세웁니다.' }
            ],
            blocks: [8, 15, 17],
            examples: [
                { block: '블록 8', context: '총괄평가 I', outcome: '영역1 성찰 및 다짐' },
                { block: '블록 15', context: '학교지역 생태전환', outcome: '프로젝트 실천 계획' },
                { block: '블록 17', context: '클로징', outcome: '미래 실천 다짐' }
            ],
            benefits: ['체계적 성찰', '가치 내면화', '실천 의지', '책임감 함양']
        }
    ],
    
    // 사고루틴별 통계
    statistics: {
        totalBlocks: 17,
        totalRoutineApplications: 19, // 일부 블록에서 2개 사용
        distribution: {
            'see-think-wonder': 4,
            'think-pair-share': 4,
            'connect-extend-challenge': 4,
            'i-used-to-think': 4,
            'what-so-what-now-what': 3
        }
    },
    
    // 교육적 효과
    educationalEffects: {
        cognitive: ['비판적 사고력', '문제 해결력', '메타인지', '창의적 사고'],
        affective: ['환경 감수성', '가치관 형성', '태도 변화', '동기 부여'],
        behavioral: ['협력 능력', '의사소통', '실천 의지', '책임감'],
        social: ['세계시민 의식', '공동체 의식', '연대감', '상호 존중']
    }
};

// 사고루틴 관련 함수들
function createThinkingRoutinesSection() {
    return `
        <div style="margin: 40px 0;">
            <h3 style="font-size: 2em; margin-bottom: 30px; text-align: center; color: #2c5f2d;">🧠 하버드 사고루틴 적용 전략</h3>
            
            <!-- 개요 -->
            <div style="background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%); padding: 30px; border-radius: 15px; margin-bottom: 40px;">
                <h4 style="font-size: 1.4em; margin-bottom: 15px; color: #185a9d;">사고루틴이란?</h4>
                <p style="line-height: 1.8; margin-bottom: 15px;">
                    하버드 대학교 <strong>프로젝트 제로(Project Zero)</strong>에서 개발한 사고력 신장 방법으로, 
                    학생들이 스스로 생각을 구조화하고 깊이 있는 학습을 할 수 있도록 돕는 교수법입니다. 
                    환경과 삶 II에서는 5개 핵심 사고루틴을 <strong>19회</strong> 반복 적용하여 
                    비판적 사고력과 환경 문제 해결 능력을 체계적으로 함양합니다.
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                    ${createEffectCard('🧠', '인지적 효과', ['비판적 사고력', '문제 해결력', '메타인지'])}
                    ${createEffectCard('❤️', '정의적 효과', ['환경 감수성', '가치관 형성', '태도 변화'])}
                    ${createEffectCard('🤝', '행동적 효과', ['협력 능력', '의사소통', '실천 의지'])}
                    ${createEffectCard('🌍', '사회적 효과', ['세계시민 의식', '공동체 의식', '연대감'])}
                </div>
            </div>

            <!-- 사고루틴별 상세 -->
            <div style="display: grid; gap: 30px;">
                ${thinkingRoutinesData.routines.map(routine => createRoutineCard(routine)).join('')}
            </div>

            <!-- 적용 통계 -->
            <div style="background: white; padding: 30px; border-radius: 15px; margin-top: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <h4 style="font-size: 1.4em; margin-bottom: 20px; text-align: center;">📊 사고루틴 적용 통계</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                        <div style="font-size: 2.5em; font-weight: 900; color: #43cea2; margin-bottom: 10px;">19</div>
                        <div style="font-weight: 600;">총 적용 횟수</div>
                        <div style="font-size: 0.9em; color: #666;">17개 블록에서 반복</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                        <div style="font-size: 2.5em; font-weight: 900; color: #43cea2; margin-bottom: 10px;">5</div>
                        <div style="font-weight: 600;">사고루틴 종류</div>
                        <div style="font-size: 0.9em; color: #666;">하버드 프로젝트 제로</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                        <div style="font-size: 2.5em; font-weight: 900; color: #43cea2; margin-bottom: 10px;">100%</div>
                        <div style="font-weight: 600;">전체 블록 적용률</div>
                        <div style="font-size: 0.9em; color: #666;">모든 블록에서 활용</div>
                    </div>
                </div>
                
                <!-- 분포 차트 -->
                <div style="margin-top: 30px;">
                    <h5 style="font-weight: 600; margin-bottom: 15px; text-align: center;">사고루틴별 적용 빈도</h5>
                    <div style="display: flex; align-items: end; justify-content: space-around; height: 150px; padding: 0 20px;">
                        ${Object.entries(thinkingRoutinesData.statistics.distribution).map(([key, count]) => {
                            const routine = thinkingRoutinesData.routines.find(r => r.id === key);
                            const percentage = (count / thinkingRoutinesData.statistics.totalRoutineApplications * 100).toFixed(1);
                            return `
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="width: 40px; background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%); border-radius: 5px 5px 0 0; height: ${count * 30}px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;">${count}</div>
                                    <div style="margin-top: 10px; text-align: center; font-size: 0.8em;">
                                        <div style="font-weight: 600;">${routine.korean.split('-')[0]}</div>
                                        <div style="color: #666;">${percentage}%</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createEffectCard(icon, title, items) {
    return `
        <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="font-size: 2em; margin-bottom: 10px;">${icon}</div>
            <div style="font-weight: 600; margin-bottom: 10px;">${title}</div>
            <ul style="list-style: none; padding: 0; font-size: 0.9em;">
                ${items.map(item => `<li style="padding: 2px 0;">• ${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

function createRoutineCard(routine) {
    const blockNumbers = routine.blocks.map(b => `블록${b}`).join(', ');
    
    return `
        <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                <div style="flex: 1;">
                    <h4 style="font-size: 1.3em; font-weight: 700; color: #2c5f2d; margin-bottom: 5px;">${routine.name}</h4>
                    <div style="color: #666; font-size: 0.9em; margin-bottom: 10px;">${routine.korean}</div>
                    <p style="line-height: 1.6; color: #555;">${routine.description}</p>
                </div>
                <div style="background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%); color: white; padding: 15px 20px; border-radius: 10px; text-align: center; margin-left: 20px;">
                    <div style="font-size: 1.5em; font-weight: 900;">${routine.blocks.length}</div>
                    <div style="font-size: 0.9em;">회 적용</div>
                </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <div style="font-weight: 600; margin-bottom: 10px;">🎯 교육적 목적</div>
                <div style="color: #555;">${routine.purpose}</div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; margin-bottom: 10px;">📋 적용 단계</div>
                <div style="display: grid; gap: 10px;">
                    ${routine.steps.map(step => `
                        <div style="display: flex; gap: 15px;">
                            <div style="flex-shrink: 0; width: 30px; height: 30px; background: #43cea2; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9em;">${step.step}</div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600; color: #2c5f2d; margin-bottom: 2px;">${step.title}</div>
                                <div style="font-size: 0.9em; color: #666;">${step.description}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; margin-bottom: 10px;">📚 적용 블록</div>
                <div style="background: #e8f5e9; padding: 10px 15px; border-radius: 8px; color: #2c5f2d; font-weight: 500;">${blockNumbers}</div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; margin-bottom: 10px;">💡 적용 사례 및 효과</div>
                <div style="display: grid; gap: 8px;">
                    ${routine.examples.map(example => `
                        <div style="background: #f0f8ff; padding: 10px; border-radius: 6px; font-size: 0.9em;">
                            <span style="font-weight: 600; color: #185a9d;">${example.block}:</span> 
                            ${example.context} → <span style="color: #43cea2; font-weight: 500;">${example.outcome}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div>
                <div style="font-weight: 600; margin-bottom: 10px;">✨ 기대 효과</div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${routine.benefits.map(benefit => `
                        <span style="background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%); color: white; padding: 5px 12px; border-radius: 15px; font-size: 0.85em;">${benefit}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}
