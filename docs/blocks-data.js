// 블록 수업 데이터
const blocksData = [
    {
        id: 1,
        number: "블록 1",
        title: "환경과 나의 삶",
        hours: "1차시",
        category: "opening",
        area: "오프닝",
        achievement: "단원 도입",
        description: "우리 생활 속 환경과 관련된 것들을 찾아보고, 환경문제가 나의 삶과 어떻게 연결되는지 생각해본다.",
        objectives: [
            "[지식·이해] 일상생활과 환경의 연결성을 이해할 수 있다",
            "[과정·기능] 환경과 나의 삶이 글로벌하게 연결되어 있음을 파악할 수 있다",
            "[가치·태도] 환경에 대한 궁금증과 탐구 의욕을 가질 수 있다"
        ],
        thinkingRoutine: "See-Think-Wonder",
        keywords: ["환경", "일상생활", "연결성"],
        lessonPlan: "./지도안/블록01_지도안_환경과나의삶.html",
        worksheet: "./학습지/블록01_학습지_환경과나의삶.html"
    },
    {
        id: 2,
        number: "블록 2",
        title: "일상 속 환경문제 발견",
        hours: "2-3차시",
        category: "area1",
        area: "영역1-① 환경 이슈와 개인 결정",
        achievement: "[6환경01-01]",
        description: "일상생활 속에서 환경문제를 발견하고, 이러한 문제가 개인의 선택과 어떻게 연결되는지 탐구한다.",
        objectives: [
            "[지식·이해] 일상 속 환경문제와 개인의 선택이 지역·국제적 환경에 미치는 영향을 이해할 수 있다",
            "[과정·기능] 우리 생활 속에서 환경문제를 발견하고 분석할 수 있다",
            "[가치·태도] 환경문제에 관심을 가지고 적극적으로 탐색하려는 태도를 가질 수 있다"
        ],
        thinkingRoutine: "Think-Pair-Share",
        keywords: ["플라스틱", "쓰레기", "에너지"],
        lessonPlan: "./지도안/블록02_지도안_일상속환경문제발견.html",
        worksheet: "./학습지/블록02_학습지_일상속환경문제발견.html"
    },
    {
        id: 3,
        number: "블록 3",
        title: "개인의 선택과 지구환경",
        hours: "4-5차시",
        category: "area1",
        area: "영역1-① 환경 이슈와 개인 결정",
        achievement: "[6환경01-01]",
        description: "개인의 작은 선택이 지구 환경에 미치는 영향을 이해하고, 환경 발자국 개념을 학습한다.",
        objectives: [
            "[지식·이해] 개인의 선택이 지역과 세계 환경에 미치는 영향을 이해할 수 있다",
            "[과정·기능] 환경 발자국 개념을 이해하고 나의 환경 발자국을 계산할 수 있다",
            "[가치·태도] 일상 속 선택을 환경친화적으로 바꾸려는 태도를 가질 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge",
        keywords: ["환경 발자국", "나비효과"],
        lessonPlan: "./지도안/블록03_지도안_개인의선택과지구환경.html",
        worksheet: "./학습지/블록03_학습지_개인의선택과지구환경.html"
    },
    {
        id: 4,
        number: "블록 4",
        title: "환경문제 해결의 태도",
        hours: "6-7차시",
        category: "area1",
        area: "영역1-① 환경 이슈와 개인 결정",
        achievement: "[6환경01-01]",
        description: "환경문제 해결을 위한 긍정적 태도와 책임감을 기르고, 실천 의지를 다진다.",
        objectives: [
            "[지식·이해] 환경문제 해결을 위한 다양한 태도와 접근 방식을 이해할 수 있다",
            "[과정·기능] 환경문제 해결 과정에서 나의 역할과 책임을 탐색할 수 있다",
            "[가치·태도] 환경문제를 해결하려는 적극적인 태도와 변화를 이끌어낼 수 있다는 신념을 가질 수 있다"
        ],
        thinkingRoutine: "I Used to Think...Now I Think",
        keywords: ["태도", "책임감", "실천"],
        lessonPlan: "./지도안/블록04_지도안_환경문제해결의태도.html",
        worksheet: "./학습지/블록04_학습지_환경문제해결의태도.html"
    },
    {
        id: 5,
        number: "블록 5",
        title: "기후변화의 원인과 현상",
        hours: "8-9차시",
        category: "area1",
        area: "영역1-② 기후변화와 생물다양성",
        achievement: "[6환경01-02]",
        description: "기후변화의 원인과 현상을 이해하고, 전 세계적 영향을 탐구한다.",
        objectives: [
            "[지식·이해] 기후변화의 원인과 전 지구적 영향을 이해할 수 있다",
            "[과정·기능] 기후변화 현상을 관찰하고 원인과 결과를 분석할 수 있다",
            "[가치·태도] 기후변화 문제에 관심을 가지고 해결에 동참하려는 마음을 가질 수 있다"
        ],
        thinkingRoutine: "See-Think-Wonder",
        keywords: ["기후변화", "온난화", "IPCC"],
        lessonPlan: "./지도안/블록05_지도안_기후변화의원인과현상.html",
        worksheet: "./학습지/블록05_학습지_기후변화의원인과현상.html"
    },
    {
        id: 6,
        number: "블록 6",
        title: "생물다양성의 중요성",
        hours: "10-11차시",
        category: "area1",
        area: "영역1-② 기후변화와 생물다양성",
        achievement: "[6환경01-02]",
        description: "생물다양성의 중요성을 이해하고, 국제적 보호 노력을 학습한다.",
        objectives: [
            "[지식·이해] 생물다양성의 의미와 중요성을 이해할 수 있다",
            "[과정·기능] 생물다양성 감소의 원인을 조사하고 보전 방안을 제안할 수 있다",
            "[가치·태도] 생물다양성을 지키려는 마음과 생명 존중 태도를 가질 수 있다"
        ],
        thinkingRoutine: "Think-Pair-Share",
        keywords: ["생물다양성", "CBD", "COP15"],
        lessonPlan: "./지도안/블록06_지도안_생물다양성의중요성.html",
        worksheet: "./학습지/블록06_학습지_생물다양성의중요성.html"
    },
    {
        id: 7,
        number: "블록 7",
        title: "지속가능발전과 연대",
        hours: "12-13차시",
        category: "area1",
        area: "영역1-② 기후변화와 생물다양성",
        achievement: "[6환경01-02]",
        description: "지속가능발전목표(SDGs)를 이해하고, 국제 연대와 협력의 필요성을 학습한다.",
        objectives: [
            "[지식·이해] 지속가능발전의 개념과 SDGs를 이해할 수 있다",
            "[과정·기능] 지속가능한 미래를 위한 국제 협력 사례를 조사하고 분석할 수 있다",
            "[가치·태도] 지속가능한 미래를 위해 서로 연대하여 협력하려는 마음을 가질 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge",
        keywords: ["SDGs", "지속가능발전", "국제 협력"],
        lessonPlan: "./지도안/블록07_지도안_지속가능발전과연대.html",
        worksheet: "./학습지/블록07_학습지_지속가능발전과연대.html"
    },
    {
        id: 8,
        number: "블록 8",
        title: "총괄평가 I",
        hours: "14-15차시",
        category: "eval",
        area: "총괄평가",
        achievement: "[6환경01-01], [6환경01-02]",
        description: "영역1에서 학습한 내용을 종합하고 평가한다.",
        objectives: [
            "[지식·이해] 영역1(세계화와 상호의존)의 핵심 개념을 종합적으로 이해할 수 있다",
            "[과정·기능] 학습한 내용을 바탕으로 환경문제 해결 방안을 제안할 수 있다",
            "[가치·태도] 학습 과정을 성찰하고 세계시민으로서의 책임감을 가질 수 있다"
        ],
        thinkingRoutine: "I Used to Think...Now I Think, What? So What? Now What?",
        keywords: ["평가", "성찰", "포트폴리오"],
        lessonPlan: "./지도안/블록08_지도안_총괄평가I.html",
        worksheet: "./학습지/블록08_학습지_총괄평가I.html"
    },
    {
        id: 9,
        number: "블록 9",
        title: "세계화와 환경문제 연결성",
        hours: "16-17차시",
        category: "area2",
        area: "영역2-① 세계화 문제와 지속가능성",
        achievement: "[6환경01-03]",
        description: "세계화로 인한 환경문제의 연결성과 상호의존성을 이해한다.",
        objectives: [
            "[지식·이해] 세계화와 환경문제의 연결성을 이해할 수 있다",
            "[과정·기능] 세계화로 인한 환경문제 사례를 조사하고 상호의존성을 파악할 수 있다",
            "[가치·태도] 세계 공동의 문제 해결에 관심을 가지고 공감하는 태도를 가질 수 있다"
        ],
        thinkingRoutine: "See-Think-Wonder",
        keywords: ["세계화", "연결성", "상호의존성"],
        lessonPlan: "./지도안/블록09_지도안_세계화와환경문제연결성.html",
        worksheet: "./학습지/블록09_학습지_세계화와환경문제연결성.html"
    },
    {
        id: 10,
        number: "블록 10",
        title: "환경문제의 복잡성·불확실성",
        hours: "18-19차시",
        category: "area2",
        area: "영역2-① 세계화 문제와 지속가능성",
        achievement: "[6환경01-03]",
        description: "환경문제의 복잡성과 불확실성을 이해하고, 티핑 포인트 개념을 학습한다.",
        objectives: [
            "[지식·이해] 환경문제의 복잡성과 불확실성을 이해할 수 있다",
            "[과정·기능] 환경문제의 특성(연결성, 불확실성, 복잡성)을 분석하고 추론할 수 있다",
            "[가치·태도] 복잡한 환경문제 해결을 위해 협력하려는 태도를 가질 수 있다"
        ],
        thinkingRoutine: "Think-Pair-Share",
        keywords: ["복잡성", "불확실성", "티핑포인트"],
        lessonPlan: "./지도안/블록10_지도안_환경문제의복잡성불확실성.html",
        worksheet: "./학습지/블록10_학습지_환경문제의복잡성불확실성.html"
    },
    {
        id: 11,
        number: "블록 11",
        title: "지속가능 미래 위한 협력",
        hours: "20-21차시",
        category: "area2",
        area: "영역2-① 세계화 문제와 지속가능성",
        achievement: "[6환경01-03]",
        description: "지속가능한 미래를 위한 국제 협력과 거버넌스를 학습한다.",
        objectives: [
            "[지식·이해] 지속가능한 미래를 위한 국제 협력의 필요성을 이해할 수 있다",
            "[과정·기능] 환경문제 해결을 위한 국제 협력 방안을 탐색하고 제안할 수 있다",
            "[가치·태도] 세계 공동체의 일원으로서 연대와 협력의 가치를 실천하려는 태도를 가질 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge",
        keywords: ["협력", "거버넌스", "세대 간 연대"],
        lessonPlan: "./지도안/블록11_지도안_지속가능미래위한협력.html",
        worksheet: "./학습지/블록11_학습지_지속가능미래위한협력.html"
    },
    {
        id: 12,
        number: "블록 12",
        title: "지속가능 미래 저해 요인",
        hours: "22-23차시",
        category: "area2",
        area: "영역2-② 생태전환적 삶의 실천",
        achievement: "[6환경01-04]",
        description: "지속가능한 미래를 저해하는 요인을 탐색하고 극복 방안을 모색한다.",
        objectives: [
            "[지식·이해] 지속가능한 미래를 저해하는 요인들을 이해할 수 있다",
            "[과정·기능] 지속가능한 미래의 저해 요인을 탐색하고 분석할 수 있다",
            "[가치·태도] 지속가능한 미래를 만들기 위한 변화의 책임에 공감할 수 있다"
        ],
        thinkingRoutine: "See-Think-Wonder",
        keywords: ["저해요인", "경제성장", "소비주의"],
        lessonPlan: "./지도안/블록12_지도안_지속가능미래저해요인.html",
        worksheet: "./학습지/블록12_학습지_지속가능미래저해요인.html"
    },
    {
        id: 13,
        number: "블록 13",
        title: "환경 감수성 기르기",
        hours: "24-25차시",
        category: "area2",
        area: "영역2-② 생태전환적 삶의 실천",
        achievement: "[6환경01-04]",
        description: "자연에 대한 감수성을 기르고, 환경친화적 태도를 함양한다.",
        objectives: [
            "[지식·이해] 환경 감수성의 의미와 중요성을 이해할 수 있다",
            "[과정·기능] 환경 감수성을 기르는 다양한 방법을 탐색하고 실천할 수 있다",
            "[가치·태도] 환경에 대한 감수성과 환경친화적인 태도를 가질 수 있다"
        ],
        thinkingRoutine: "Think-Pair-Share",
        keywords: ["감수성", "자연", "공감"],
        lessonPlan: "./지도안/블록13_지도안_환경감수성기르기.html",
        worksheet: "./학습지/블록13_학습지_환경감수성기르기.html"
    },
    {
        id: 14,
        number: "블록 14",
        title: "생활 속 생태전환 실천",
        hours: "26-27차시",
        category: "area2",
        area: "영역2-② 생태전환적 삶의 실천",
        achievement: "[6환경01-04]",
        description: "생활 속에서 생태전환을 실천할 수 있는 구체적 방법을 학습하고 계획을 수립한다.",
        objectives: [
            "[지식·이해] 생태전환적 삶의 의미와 필요성을 이해할 수 있다",
            "[과정·기능] 생활 속에서 생태전환을 실천할 수 있는 방법을 찾고 계획할 수 있다",
            "[가치·태도] 생태전환적 삶을 실천하려는 의지와 태도를 가질 수 있다"
        ],
        thinkingRoutine: "I Used to Think...Now I Think",
        keywords: ["생태전환", "로컬푸드", "공정무역"],
        lessonPlan: "./지도안/블록14_지도안_생활속생태전환실천.html",
        worksheet: "./학습지/블록14_학습지_생활속생태전환실천.html"
    },
    {
        id: 15,
        number: "블록 15",
        title: "학교·지역 생태전환",
        hours: "28-29차시",
        category: "area2",
        area: "영역2-② 생태전환적 삶의 실천",
        achievement: "[6환경01-04]",
        description: "학교와 지역사회에서 생태전환 프로젝트를 기획하고 발표한다.",
        objectives: [
            "[지식·이해] 학교와 지역사회의 생태전환 필요성을 이해할 수 있다",
            "[과정·기능] 학교와 지역사회의 생태전환 프로젝트를 기획하고 실천할 수 있다",
            "[가치·태도] 공동체와 함께 생태전환을 실천하려는 책임감과 협력 태도를 가질 수 있다"
        ],
        thinkingRoutine: "What? So What? Now What?",
        keywords: ["프로젝트", "캠페인", "Fridays for Future"],
        lessonPlan: "./지도안/블록15_지도안_학교지역생태전환.html",
        worksheet: "./학습지/블록15_학습지_학교지역생태전환.html"
    },
    {
        id: 16,
        number: "블록 16",
        title: "총괄평가 II",
        hours: "30-31차시",
        category: "eval",
        area: "총괄평가",
        achievement: "[6환경01-03], [6환경01-04]",
        description: "영역2에서 학습한 내용을 종합하고 평가한다.",
        objectives: [
            "[지식·이해] 영역2(생태전환)의 핵심 개념을 종합적으로 이해할 수 있다",
            "[과정·기능] 학습한 내용을 바탕으로 생태전환 실천 계획을 수립할 수 있다",
            "[가치·태도] 학습 과정을 성찰하고 생태전환적 삶을 실천하려는 의지를 가질 수 있다"
        ],
        thinkingRoutine: "Connect-Extend-Challenge",
        keywords: ["평가", "발표", "성찰"],
        lessonPlan: "./지도안/블록16_지도안_총괄평가II.html",
        worksheet: "./학습지/블록16_학습지_총괄평가II.html"
    },
    {
        id: 17,
        number: "블록 17",
        title: "클로징: 환경과 함께하는 미래",
        hours: "32차시",
        category: "closing",
        area: "클로징",
        achievement: "단원 종합",
        description: "32차시 동안의 학습을 성찰하고, 세계시민으로서 환경 책임을 다짐한다.",
        objectives: [
            "[지식·이해] 32차시 학습을 통해 환경과 삶의 관계를 종합적으로 이해할 수 있다",
            "[과정·기능] 학습 과정을 성찰하고 미래 실천 계획을 수립할 수 있다",
            "[가치·태도] 세계시민으로서 환경 책임을 다짐하고 지속적으로 실천하려는 태도를 가질 수 있다"
        ],
        thinkingRoutine: "I Used to Think...Now I Think, What? So What? Now What?",
        keywords: ["성찰", "다짐", "세계시민"],
        lessonPlan: "./지도안/블록17_지도안_클로징환경과함께하는미래.html",
        worksheet: "./학습지/블록17_학습지_클로징환경과함께하는미래.html"
    }
];
