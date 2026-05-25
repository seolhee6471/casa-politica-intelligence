/** @type {import("./en.js").default} */
const kr = {
  common: {
    siteName: "Casa Política Intelligence",
    brand: "Casa Política",
    description: "Casa Política Intelligence",
    rights: "All rights reserved.",
  },
  nav: {
    home: "홈",
    solution: "기술 소개",
    insight: "인사이트",
    company: "회사 소개",
    about: "회사 소개",
    contact: "문의하기",
  },
  home: {
    title: "홈",
    description:
      "정치·데이터 인텔리전스를 위한 Casa Política 플랫폼입니다.",
    recentPosts: "최근 소식",
    hero: {
      eyebrow: "Casa Politica – The Architecture of Power",
      headlineLine1: "우리는 민심을 묻지 않습니다.",
      headlineLine2: "권력의 흐름을 해독합니다.",
      description:
        "전화 조사 없는, 실시간 민심 분석 엔진.",
      primaryCta: "솔루션 데모 신청하기",
      secondaryCta: "기술 구조 보기",
    },
    dashboard: {
      eyebrow: "Live Sentiment Engine",
      title: "Public Pulse",
      status: "Live",
      metrics: {
        events: "실시간 수집 이벤트",
        confidence: "편향 보정 신뢰도",
        speed: "이슈 감지 속도",
      },
    },
    painGain: {
      eyebrow: "Pain vs Gain",
      title: "표본 조사의 한계를 실시간 데이터로 넘습니다",
      description:
        "묻는 조사에서 읽는 데이터로. 속도, 비용, 대표성의 한계를 다시 설계합니다.",
      headers: {
        criteria: "기준",
        legacy: "기존 여론조사",
        casa: "Casa Politica",
      },
      rows: {
        responseRate: {
          label: "응답률",
          legacy: "5% 내외 표본 응답",
          casa: "수천만 건 행동 데이터",
        },
        speed: {
          label: "속도",
          legacy: "조사 설계부터 발표까지 수일",
          casa: "실시간 이슈 감지 및 업데이트",
        },
        distortion: {
          label: "왜곡",
          legacy: "무응답·표본 편향 리스크",
          casa: "AI 편향 제거와 교차 검증",
        },
        cost: {
          label: "비용",
          legacy: "1회 수천만 원 수준의 고정비",
          casa: "반복 분석 가능한 저비용 데이터 인프라",
        },
        behavior: {
          label: "행동 데이터",
          legacy: "말한 것만 반영",
          casa: "검색·댓글·클릭 등 행동 신호까지 분석",
        },
      },
    },
    solution: {
      eyebrow: "Solution",
      title: "데이터 수집에서 대시보드까지 이어지는 AI 민심 엔진",
      description:
        "수집 → 정제 → 분석 → 지표화 → 대시보드. 복잡한 민심을 운영 가능한 5단계 흐름으로 바꿉니다.",
      steps: {
        collection: {
          title: "Data Collection",
          summary: "SNS·뉴스·검색 신호 수집",
          text: "SNS, 유튜브, 뉴스 댓글, 검색 트렌드, 커뮤니티 데이터를 API와 크롤링으로 수집합니다.",
        },
        refinement: {
          title: "Data Refinement",
          summary: "봇·중복·노이즈 제거",
          text: "욕설, 봇, 중복 계정, 노이즈를 제거하고 지역·맥락 신호를 정제합니다.",
        },
        analysis: {
          title: "AI Analysis",
          summary: "감성·이슈·영향력 분석",
          text: "감성, 이슈, 인물 영향력, 의견 구조를 한국어 정치 언어에 맞춰 분석합니다.",
        },
        index: {
          title: "Index Generation",
          summary: "Politica Index 생성",
          text: "Politica Index, Heat Score, Momentum으로 민심의 방향과 속도를 지표화합니다.",
        },
        dashboard: {
          title: "Real-time Dashboard",
          summary: "알림과 리포트 제공",
          text: "지지 흐름, 오늘의 이슈, 부정 급증 알림을 고객 화면에서 제공합니다.",
        },
      },
    },
    technology: {
      eyebrow: "Core Technology",
      title: "단순 빈도 분석이 아닌 의견 구조 분석",
      description:
        "언급량보다 중요한 것은 이유와 방향입니다. Casa Politica는 의견의 구조를 읽습니다.",
      cards: {
        nlp: {
          title: "NLP 감성 분석",
          text: "한국어 정치 언어의 맥락을 반영해 긍정·부정·중립을 판단합니다.",
        },
        opinion: {
          title: "Opinion Modeling Engine",
          text: "단순 언급량이 아니라 어떤 이유로 여론이 움직이는지 의견 구조를 분석합니다.",
        },
        predictive: {
          title: "Predictive Analytics",
          text: "선거 결과 예측과 정책 반응 시뮬레이션으로 다음 움직임을 읽습니다.",
        },
        dashboard: {
          title: "Real-time Dashboard",
          text: "정치인과 기관이 위기 신호를 즉시 확인할 수 있는 운영 화면을 제공합니다.",
        },
      },
    },
    product: {
      eyebrow: "Product",
      title: "정치 전략을 위한 세 가지 제품 구조",
      description:
        "리포트, SaaS, 예측 모델. 전략 의사결정에 필요한 형태로 제공합니다.",
      cards: {
        insight: {
          title: "Politica Insight",
          audience: "B2B Report",
          text: "정당, 국회의원, 지자체를 위한 실시간 민심 분석 리포트입니다.",
        },
        pulse: {
          title: "Politica Pulse",
          audience: "SaaS Platform",
          text: "특정 이슈와 인물을 월 구독형으로 모니터링하는 분석 플랫폼입니다.",
        },
        forecast: {
          title: "Politica Forecast",
          audience: "Prediction Model",
          text: "선거 결과와 정책 반응을 예측하는 프리미엄 분석 모델입니다.",
        },
      },
    },
    insight: {
      eyebrow: "Insight",
      title: "기술력을 증명하는 이슈 리포트",
      description:
        "Casa Politica의 엔진은 정치 이슈의 방향, 속도, 확산 경로를 분석해 의사결정 가능한 리포트로 전환합니다.",
      cards: {
        election: {
          category: "Election Pulse",
          title: "정책 키워드별 언급량 변동",
          text: "교통·주거 키워드가 수도권 청년층 대화에서 빠르게 상승했습니다.",
        },
        media: {
          category: "Media Signal",
          title: "뉴스 프레임 전환 감지",
          text: "후보 개인 이슈에서 정책 검증 프레임으로 전환되는 시점을 포착했습니다.",
        },
        risk: {
          category: "Risk Radar",
          title: "부정 감성 확산 경로",
          text: "커뮤니티, 숏폼, 지역 매체를 거치는 확산 경로를 맵핑했습니다.",
        },
      },
    },
    company: {
      eyebrow: "Company",
      title: "투명한 데이터 운영 원칙으로 신뢰를 설계합니다.",
      description:
        "우리는 정치적 판단을 대신하지 않습니다. 더 빠르고 검증 가능한 근거를 제공해 캠페인, 언론, 투자자가 같은 현실을 바라보도록 돕습니다.",
      keywordText:
        "데이터의 출처, 처리 과정, 해석 기준을 명확히 하여 의사결정자가 납득할 수 있는 인사이트를 제공합니다.",
    },
    cta: {
      eyebrow: "Contact",
      title: "실시간 민심 분석을 팀의 의사결정에 연결하세요.",
      button: "솔루션 데모 신청하기",
    },
    samplePost: {
      title: "Casa Política Intelligence에 오신 것을 환영합니다",
      excerpt: "프로젝트 구조가 준비되었습니다. 기능을 추가해 보세요.",
    },
  },
  about: {
    title: "회사 소개",
    paragraph1:
      "Casa Política Intelligence는 정치·공공 데이터를 분석하고 인사이트를 제공하는 플랫폼입니다.",
    paragraph2:
      "이 페이지는 회사 소개, 미션, 팀 정보 등을 담을 수 있습니다.",
  },
  contact: {
    title: "문의하기",
    description: "궁금한 점이 있으시면 아래 양식을 작성해 주세요.",
    form: {
      name: "이름",
      namePlaceholder: "이름을 입력하세요",
      email: "이메일",
      subject: "제목",
      subjectPlaceholder: "문의 제목",
      message: "문의 내용",
      submit: "문의 보내기",
    },
  },
};

export default kr;
