// 추가 헬퍼 함수들
function createDifferentiationTable() {
    return `
        <h3 style="font-size: 1.8em; margin-bottom: 20px;">타 교과와의 차별화 전략</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;">
            <thead style="background: linear-gradient(135deg, #2c5f2d 0%, #43cea2 100%); color: white;">
                <tr>
                    <th style="padding: 15px;">구분</th>
                    <th style="padding: 15px;">타 교과</th>
                    <th style="padding: 15px;">환경과 삶 II</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 15px; font-weight: 700;">vs 도덕과</td>
                    <td style="padding: 15px;">개인 도덕성, 일상 실천</td>
                    <td style="padding: 15px; background: #e8f5e9;"><strong>세계시민 책임, 국제 협력</strong></td>
                </tr>
                <tr>
                    <td style="padding: 15px; font-weight: 700;">vs 사회과</td>
                    <td style="padding: 15px;">국내 기후, 지리 현상</td>
                    <td style="padding: 15px; background: #e8f5e9;"><strong>글로벌 영향, 세계화 특성</strong></td>
                </tr>
                <tr>
                    <td style="padding: 15px; font-weight: 700;">vs 과학과</td>
                    <td style="padding: 15px;">과학 원리, 실험</td>
                    <td style="padding: 15px; background: #e8f5e9;"><strong>태도·가치, 생태전환 실천</strong></td>
                </tr>
            </tbody>
        </table>
    `;
}

function createFeatures() {
    return `
        <h3 style="font-size: 1.8em; margin: 40px 0 20px;">핵심 차별화 포인트</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div style="background: white; padding: 30px; border-radius: 15px; border-left: 5px solid #43cea2;">
                <h4 style="font-size: 1.5em; margin-bottom: 15px; color: #2c5f2d;">🌍 글로벌 시각</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>파리기후협약, COP, SDGs</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>국제 환경 협력 사례</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>나비효과, 상호의존성</li>
                </ul>
            </div>
            <div style="background: white; padding: 30px; border-radius: 15px; border-left: 5px solid #43cea2;">
                <h4 style="font-size: 1.5em; margin-bottom: 15px; color: #2c5f2d;">🤝 실천 지향</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>개인·가정·학교·세계 차원</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>구체적 실천 계획 수립</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>생태전환 프로젝트</li>
                </ul>
            </div>
            <div style="background: white; padding: 30px; border-radius: 15px; border-left: 5px solid #43cea2;">
                <h4 style="font-size: 1.5em; margin-bottom: 15px; color: #2c5f2d;">🧠 사고력 신장</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>하버드 사고루틴 적용</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>비판적 사고력 함양</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>협력 학습</li>
                </ul>
            </div>
        </div>
    `;
}

function createPlanSection() {
    return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 40px;">
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px;">
                <h4 style="font-size: 1.5em; margin-bottom: 15px;">📚 현장 적용</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>2025학년도 초등 6학년 적용</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>블록타임제 운영</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>수업 공개 및 컨설팅</li>
                </ul>
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px;">
                <h4 style="font-size: 1.5em; margin-bottom: 15px;">🔄 지속적 개선</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>학생 반응 및 평가 분석</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>교수학습 자료 보완</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>최신 환경 이슈 반영</li>
                </ul>
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px;">
                <h4 style="font-size: 1.5em; margin-bottom: 15px;">📤 공유 및 확산</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>교육청 자료 공유</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>타 학교 적용 지원</li>
                    <li style="padding: 8px 0; position: relative; padding-left: 25px;"><span style="position: absolute; left: 0; color: #43cea2;">✓</span>교사 연수 자료 활용</li>
                </ul>
            </div>
        </div>
        <div style="background: rgba(255, 165, 0, 0.2); border-left: 5px solid #ffa500; padding: 25px; border-radius: 10px;">
            <h4 style="font-size: 1.4em; margin-bottom: 15px;">⭐ 기대 효과</h4>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 10px 0;"><strong>학생:</strong> 환경 감수성 증진, 세계시민 의식 함양, 생태전환적 삶 실천</li>
                <li style="padding: 10px 0;"><strong>교사:</strong> 세계시민교육 기반 환경교육 수업 역량 강화, 교육과정 재구성 능력 향상</li>
                <li style="padding: 10px 0;"><strong>학교:</strong> 환경교육 내실화, 지속가능발전교육 선도 학교</li>
                <li style="padding: 10px 0;"><strong>사회:</strong> 차세대 환경 리더 양성, 지속가능한 미래 사회 기여</li>
            </ul>
        </div>
    `;
}
