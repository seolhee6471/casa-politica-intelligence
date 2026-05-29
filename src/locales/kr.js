/** @type {import("./en.js").default} */
const kr = {
  common: {
    siteName: "Casa Politica Intelligence",
    brand: "Casa Politica Intelligence",
    description: "Casa Politica Intelligence",
    rights: "All rights reserved.",
    scrollToTop: "맨 위로",
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
      "정치·데이터 인텔리전스를 위한 Casa Politica Intelligence 플랫폼입니다.",
    recentPosts: "최근 소식",
    hero: {
      eyebrow: "Casa Politica Intelligence – The Architecture of Power",
      headlineLine1: "우리는 민심을 묻지 않습니다.",
      headlineLine2: "권력의 흐름을 해독합니다.",
      description:
        "전화 조사 없는, 실시간 민심 분석 엔진.",
      primaryCta: "문의하기",
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
      title: "표본 조사의 한계를\n실시간 데이터로 넘습니다",
      description:
        "묻는 조사에서 읽는 데이터로. 속도, 비용, 대표성의 한계를 다시 설계합니다.",
      headers: {
        criteria: "기준",
        legacy: "기존 여론조사",
        casa: "Casa Politica Intelligence",
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
      title: "데이터 수집에서 대시보드까지\n이어지는 AI 민심 엔진",
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
        "언급량보다 중요한 것은 이유와 방향입니다. Casa Politica Intelligence는 의견의 구조를 읽습니다.",
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
        "Casa Politica Intelligence의 엔진은 정치 이슈의 방향, 속도, 확산 경로를 분석해 의사결정 가능한 리포트로 전환합니다.",
      cards: {
        election: {
          category: "Election Pulse",
          title: "정책 키워드별 언급량 변동",
          text: "교통·주거 키워드의 언급량, 감성, 지역 반응을 통합해 수도권 청년층의 상승 흐름을 검증했습니다.",
        },
        media: {
          category: "Media Signal",
          title: "뉴스 프레임 전환 감지",
          text: "후보 개인 이슈 중심의 보도가 정책 검증 프레임으로 이동하는 전환 시점을 12시간 단위로 포착했습니다.",
        },
        risk: {
          category: "Risk Radar",
          title: "부정 감성 확산 경로",
          text: "커뮤니티, 숏폼, 지역 매체로 이어지는 확산 노드를 추적해 부정 감성의 증폭 경로를 맵핑했습니다.",
        },
      },
    },
    company: {
      eyebrow: "Company",
      title: "투명한 데이터 운영 원칙으로\n신뢰를 설계합니다.",
      description:
        "우리는 정치적 판단을 대신하지 않습니다. 더 빠르고 검증 가능한 근거를 제공해 캠페인, 언론, 투자자가 같은 현실을 바라보도록 돕습니다.",
      keywordTexts: {
        trust:
          "데이터의 수집부터 분석까지 전 과정을 투명하게 공개하여, 누구나 신뢰할 수 있는 객관적인 근거를 제시합니다.",
        realTime:
          "변화하는 시장 상황을 즉각적으로 반영하여, 의사결정의 골든타임을 놓치지 않도록 최신 데이터를 실시간으로 전달합니다.",
        intelligence:
          "단순 수치 나열을 넘어, 고도화된 분석 모델을 통해 비즈니스의 핵심을 꿰뚫는 전략적 통찰을 도출합니다.",
        transparency:
          "정보의 비대칭을 해소하고 모든 프로세스를 오픈하여, 데이터 기반의 의사결정이 가진 진정한 투명성을 구현합니다.",
      },
    },
    cta: {
      eyebrow: "Contact",
      title: "실시간 민심 분석을 팀의 의사결정에 연결하세요.",
      button: "문의하기",
    },
    samplePost: {
      title: "Casa Politica Intelligence에 오신 것을 환영합니다",
      excerpt: "프로젝트 구조가 준비되었습니다. 기능을 추가해 보세요.",
    },
  },
  about: {
    eyebrow: "회사 소개 · 리더십",
    title: "Casa Politica Intelligence",
    subtitle:
      "Casa Politica Intelligence는 여론을 묻는 회사를 넘어, 권력의 흐름과 민심의 변화를 실시간 데이터로 해석하는 정치 인텔리전스 기업입니다.",
    paragraph1:
      "우리는 전화·표본 기반 조사의 한계를 행동 데이터, 자연어 분석, 이슈 확산 모델로 보완합니다. 정치인, 정당, 기관이 더 빠르고 검증 가능한 근거로 판단하도록 돕습니다.",
    paragraph2:
      "정치의 언어와 데이터 과학을 연결해 캠페인, 정책, 위기 대응의 기준을 새롭게 만드는 것을 목표로 합니다.",
    tags: {
      strategy: "정치 전략",
      data: "AI 데이터",
      trust: "신뢰 분석",
      infrastructure: "인프라",
    },
    visualLabel: "Political Data Flow",
    metrics: {
      response: "기존 여론조사 응답률 한계",
      delay: "조사부터 발표까지 걸리는 시간",
      realtime: "실시간 이슈 감지 운영",
    },
    principles: {
      observation: {
        title: "Ask People에서 Read Behavior로",
        text: "말로 답한 표본만 보지 않고 검색, 댓글, 언급량, 확산 경로 같은 행동 신호를 함께 읽습니다.",
      },
      infrastructure: {
        title: "정치판의 데이터 운영 체계",
        text: "단발성 리포트가 아니라 수집, 정제, 분석, 지표화, 대시보드까지 이어지는 운영 인프라를 지향합니다.",
      },
      trust: {
        title: "신뢰 가능한 분석 원칙",
        text: "데이터 출처와 처리 기준을 명확히 하고, 편향과 노이즈를 줄여 전략 판단에 사용할 수 있는 근거를 만듭니다.",
      },
    },
    mission: {
      eyebrow: "Mission",
      title: "우리는 여론조사를 대체하기보다 의사결정을 바꿉니다.",
      text: "Casa Politica Intelligence의 목표는 더 많은 숫자를 보여주는 것이 아닙니다. 민심의 방향, 속도, 이유를 구조적으로 해석해 캠페인, 정책, 위기 대응의 기준을 새롭게 만드는 것입니다.",
    },
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
      sending: "전송 중...",
      success: "문의가 전송되었습니다. 확인 후 연락드리겠습니다.",
      error:
        "문의 전송에 실패했습니다. 잠시 후 다시 시도하거나 이메일로 직접 연락해 주세요.",
    },
  },
};

export default kr;
