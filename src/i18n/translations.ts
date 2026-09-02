export type Lang = "fr" | "en" | "ar";

export const LANGS: { code: Lang; label: string; short: string; dir: "ltr" | "rtl" }[] = [
  { code: "fr", label: "Français", short: "FR", dir: "ltr" },
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  //{ code: "ar", label: "العربية", short: "ع", dir: "rtl" },
];

export type Dict = {
  nav: { home: string; services: string; expertise: string; contact: string; cta: string; menu: string };
  footer: { about: string; navigation: string; contact: string; rights: string };
  home: {
    badge: string;
    titleA: string;
    titleB: string;
    intro: string;
    ctaServices: string;
    ctaContact: string;
    stats: string[];
    domainsTitle: string;
    domainsIntro: string;
    domains: { title: string; text: string }[];
    whyTitle: string;
    why: string[];
    heroAlt: string;
    cadAlt: string;
  };
  services: {
    title: string;
    intro: string;
    blocks: { title: string; items: string[] }[];
    teamTitle: string;
    teamText: string;
    teamAlt: string;
    cta: string;
  };
  expertise: {
    title: string;
    intro: string;
    softwareTitle: string;
    clientsTitle: string;
    clientsIntro: string;
  };
  contact: {
    title: string;
    intro: string;
    phone: string;
    email: string;
    web: string;
    tax: string;
  };
  meta: Record<string, { title: string; description: string }>;
};

const fr: Dict = {
  nav: {
    home: "Accueil",
    services: "Services",
    expertise: "Expertise",
    contact: "Contact",
    cta: "Nous contacter",
    menu: "Menu",
  },
  footer: {
    about:
      "Bureau d'études pluridisciplinaire spécialisé dans les études techniques d'ingénierie industrielle : piping, structure, génie civil, électricité & instrumentation.",
    navigation: "Navigation",
    contact: "Coordonnées",
    rights: "SOUiTECH Engineering — MF : 1986248K",
  },
  home: {
    badge: "Bureau d'études multidisciplinaire",
    titleA: "L'ingénierie au service de la",
    titleB: "performance industrielle",
    intro:
      "SOUiTECH Engineering couvre l'ensemble des disciplines de l'ingénierie industrielle : modélisation & conception 3D, piping & tuyauterie, structure & génie civil, étude électrique & instrumentation.",
    ctaServices: "Nos services",
    ctaContact: "Coordonnées",
    stats: [
      "Clients industriels",
      "Disciplines couvertes",
      "Modélisation & conception",
      "Standards internationaux",
    ],
    domainsTitle: "Nos domaines d'intervention",
    domainsIntro:
      "Une équipe expérimentée et multidisciplinaire qui intervient depuis les phases d'étude et de conception jusqu'à l'assistance technique et au suivi des réalisations.",
    domains: [
      { title: "Piping & réseaux industriels", text: "Conception, isométriques et supportage." },
      { title: "Structures métalliques", text: "Charpentes, plateformes et ossatures." },
      { title: "Génie civil industriel", text: "Fondations, massifs et ouvrages." },
      { title: "Électricité & Instrumentation", text: "Schémas, boucles et implantations." },
      { title: "Équipements industriels", text: "Dimensionnement et intégration." },
      { title: "Utilités & process", text: "Installations et réseaux d'utilités." },
    ],
    whyTitle: "Pourquoi",
    why: [
      "Équipe multidisciplinaire expérimentée",
      "Réservoir d'experts agréés et spécialisés",
      "Solutions adaptées à vos contraintes techniques",
      "Flexibilité et réactivité projet",
      "Qualité et conformité aux standards internationaux",
      "Coût optimisé et forte valeur ajoutée",
    ],
    heroAlt: "Réseau de tuyauterie industrielle au crépuscule",
    cadAlt: "Modélisation 3D d'une unité industrielle",
  },
  services: {
    title: "Nos services",
    intro:
      "Des prestations complètes couvrant l'ensemble des disciplines de l'ingénierie industrielle, de la conception au suivi de réalisation.",
    blocks: [
      {
        title: "Ingénierie & Études techniques",
        items: [
          "Piping & réseaux industriels",
          "Structures métalliques",
          "Génie civil industriel",
          "Électricité & Instrumentation",
          "Équipements industriels",
          "Utilités & installations process",
          "Étude d'installation photovoltaïque",
        ],
      },
      {
        title: "Modélisation & Conception",
        items: [
          "DAO / CAO 2D–3D",
          "Modélisation 3D industrielle",
          "Plans d'exécution et de fabrication",
          "Implantations (Layouts)",
          "Isométriques & supportages",
        ],
      },
      {
        title: "Calculs & Analyses",
        items: [
          "Notes de calcul techniques",
          "Calculs de flexibilité piping",
          "Stress analysis",
          "Dimensionnements mécaniques",
          "Calcul structure",
          "Calcul des supports",
        ],
      },
      {
        title: "Assistance & Sous-traitance technique",
        items: [
          "Assistance technique projet",
          "Support chantier",
          "Suivi d'exécution",
          "Mise à disposition d'ingénieurs et projeteurs",
          "Sous-traitance technique qualifiée à coût optimisé",
        ],
      },
    ],
    teamTitle: "Une équipe mobilisable rapidement",
    teamText:
      "Nous mettons à disposition une équipe expérimentée capable d'intervenir rapidement sur vos projets avec des solutions techniques adaptées, fiables et compétitives.",
    teamAlt: "Équipe d'ingénieurs en réunion projet",
    cta: "Nous contacter",
  },
  expertise: {
    title: "Expertise & Références",
    intro:
      "Notre équipe dispose d'une expérience confirmée dans l'utilisation des logiciels métiers les plus exigeants, et notre savoir-faire est reconnu par des clients industriels de premier plan.",
    softwareTitle: "Logiciels maîtrisés",
    clientsTitle: "Ils nous font confiance",
    clientsIntro:
      "Notre expérience acquise auprès des clients suivants témoigne de notre savoir-faire et de notre capacité à répondre aux exigences les plus élevées.",
  },
  contact: {
    title: "Contact",
    intro:
      "Nos coordonnées pour toute demande d'étude, d'assistance technique ou de sous-traitance.",
    phone: "Téléphone",
    email: "Email",
    web: "Site web",
    tax: "Matricule fiscal",
  },
  meta: {
    home: {
      title: "SOUiTECH Engineering — Bureau d'études en ingénierie industrielle",
      description:
        "Bureau d'études pluridisciplinaire : piping, structures métalliques, génie civil, électricité & instrumentation, modélisation 3D et calculs techniques.",
    },
    services: {
      title: "Services — SOUiTECH Engineering",
      description:
        "Ingénierie & études techniques, modélisation & conception 3D, calculs & analyses, assistance et sous-traitance technique pour l'industrie.",
    },
    expertise: {
      title: "Expertise & Références — SOUiTECH Engineering",
      description:
        "Logiciels maîtrisés et références clients industriels de SOUiTECH Engineering.",
    },
    contact: {
      title: "Contact — SOUiTECH Engineering",
      description:
        "Coordonnées de SOUiTECH Engineering : +216 97 686 557, riadh.souibgui@souitech.com, www.souitech.com.",
    },
  },
};

const en: Dict = {
  nav: {
    home: "Home",
    services: "Services",
    expertise: "Expertise",
    contact: "Contact",
    cta: "Contact us",
    menu: "Menu",
  },
  footer: {
    about:
      "Multidisciplinary engineering design office specialised in industrial technical studies: piping, structures, civil works, electrical & instrumentation.",
    navigation: "Navigation",
    contact: "Contact details",
    rights: "SOUiTECH Engineering — Tax ID: 1986248K",
  },
  home: {
    badge: "Engineering design office",
    titleA: "Engineering driving",
    titleB: "industrial performance",
    intro:
      "SOUiTECH Engineering covers every discipline of industrial engineering: 3D modelling & design, piping, structures & civil works, electrical studies & instrumentation.",
    ctaServices: "Our services",
    ctaContact: "Contact details",
    stats: [
      "Industrial clients",
      "Disciplines covered",
      "Modelling & design",
      "International standards",
    ],
    domainsTitle: "Our fields of expertise",
    domainsIntro:
      "An experienced, multidisciplinary team involved from study and design phases through to technical assistance and construction follow-up.",
    domains: [
      { title: "Piping & industrial networks", text: "Design, isometrics and supports." },
      { title: "Steel structures", text: "Frames, platforms and skeletons." },
      { title: "Industrial civil works", text: "Foundations, plinths and structures." },
      { title: "Electrical & Instrumentation", text: "Diagrams, loops and layouts." },
      { title: "Industrial equipment", text: "Sizing and integration." },
      { title: "Utilities & process", text: "Utility installations and networks." },
    ],
    whyTitle: "Why",
    why: [
      "Experienced multidisciplinary team",
      "Pool of certified, specialised experts",
      "Solutions tailored to your technical constraints",
      "Project flexibility and responsiveness",
      "Quality and compliance with international standards",
      "Optimised cost and high added value",
    ],
    heroAlt: "Industrial piping network at dusk",
    cadAlt: "3D model of an industrial unit",
  },
  services: {
    title: "Our services",
    intro:
      "Complete services covering every discipline of industrial engineering, from design to construction follow-up.",
    blocks: [
      {
        title: "Engineering & Technical studies",
        items: [
          "Piping & industrial networks",
          "Steel structures",
          "Industrial civil works",
          "Electrical & Instrumentation",
          "Industrial equipment",
          "Utilities & process installations",
          "Photovoltaic installation studies",
        ],
      },
      {
        title: "Modelling & Design",
        items: [
          "CAD / CAE 2D–3D",
          "Industrial 3D modelling",
          "Construction and fabrication drawings",
          "Layouts",
          "Isometrics & supports",
        ],
      },
      {
        title: "Calculations & Analyses",
        items: [
          "Technical calculation notes",
          "Piping flexibility calculations",
          "Stress analysis",
          "Mechanical sizing",
          "Structural calculations",
          "Support calculations",
        ],
      },
      {
        title: "Technical assistance & Outsourcing",
        items: [
          "Project technical assistance",
          "Site support",
          "Execution follow-up",
          "Provision of engineers and designers",
          "Qualified technical outsourcing at optimised cost",
        ],
      },
    ],
    teamTitle: "A team you can mobilise quickly",
    teamText:
      "We provide an experienced team able to step in quickly on your projects with tailored, reliable and competitive technical solutions.",
    teamAlt: "Engineering team in a project meeting",
    cta: "Contact us",
  },
  expertise: {
    title: "Expertise & References",
    intro:
      "Our team has proven experience with the most demanding engineering software, and our know-how is recognised by leading industrial clients.",
    softwareTitle: "Software mastered",
    clientsTitle: "They trust us",
    clientsIntro:
      "Our experience with the following clients reflects our know-how and our ability to meet the highest requirements.",
  },
  contact: {
    title: "Contact",
    intro:
      "Our contact details for any study, technical assistance or outsourcing request.",
    phone: "Phone",
    email: "Email",
    web: "Website",
    tax: "Tax ID",
  },
  meta: {
    home: {
      title: "SOUiTECH Engineering — Industrial engineering design office",
      description:
        "Multidisciplinary design office: piping, steel structures, civil works, electrical & instrumentation, 3D modelling and technical calculations.",
    },
    services: {
      title: "Services — SOUiTECH Engineering",
      description:
        "Engineering & technical studies, 3D modelling & design, calculations & analyses, technical assistance and outsourcing for industry.",
    },
    expertise: {
      title: "Expertise & References — SOUiTECH Engineering",
      description:
        "Engineering software mastered and industrial client references of SOUiTECH Engineering.",
    },
    contact: {
      title: "Contact — SOUiTECH Engineering",
      description:
        "SOUiTECH Engineering contact details: +216 97 686 557, riadh.souibgui@souitech.com, www.souitech.com.",
    },
  },
};

const ar: Dict = {
  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    expertise: "الخبرات",
    contact: "اتصل بنا",
    cta: "اتصل بنا",
    menu: "القائمة",
  },
  footer: {
    about:
      "مكتب دراسات متعدد الاختصاصات متخصص في الدراسات التقنية للهندسة الصناعية: الأنابيب، الهياكل المعدنية، الهندسة المدنية، الكهرباء والقياس والتحكم.",
    navigation: "التصفح",
    contact: "بيانات الاتصال",
    rights: "سويتاك للهندسة — المعرف الجبائي: 1986248K",
  },
  home: {
    badge: "مكتب دراسات",
    titleA: "الهندسة في خدمة",
    titleB: "الأداء الصناعي",
    intro:
      "تغطي سويتاك للهندسة جميع اختصاصات الهندسة الصناعية: النمذجة والتصميم ثلاثي الأبعاد، الأنابيب، الهياكل والهندسة المدنية، الدراسات الكهربائية والقياس والتحكم.",
    ctaServices: "خدماتنا",
    ctaContact: "بيانات الاتصال",
    stats: ["عميل صناعي", "اختصاصات مغطاة", "نمذجة وتصميم", "معايير دولية"],
    domainsTitle: "مجالات تدخلنا",
    domainsIntro:
      "فريق ذو خبرة ومتعدد الاختصاصات يتدخل من مراحل الدراسة والتصميم إلى المساندة التقنية ومتابعة الإنجاز.",
    domains: [
      { title: "الأنابيب والشبكات الصناعية", text: "التصميم والمخططات الأيزومترية والدعائم." },
      { title: "الهياكل المعدنية", text: "الهياكل والمنصات والإطارات." },
      { title: "الهندسة المدنية الصناعية", text: "الأساسات والقواعد والمنشآت." },
      { title: "الكهرباء والقياس والتحكم", text: "المخططات والحلقات والتوزيع." },
      { title: "المعدات الصناعية", text: "التحجيم والدمج." },
      { title: "المرافق والعمليات", text: "منشآت وشبكات المرافق." },
    ],
    whyTitle: "لماذا",
    why: [
      "فريق متعدد الاختصاصات وذو خبرة",
      "رصيد من الخبراء المعتمدين والمتخصصين",
      "حلول ملائمة لقيودكم التقنية",
      "مرونة وسرعة استجابة في المشاريع",
      "الجودة والمطابقة للمعايير الدولية",
      "كلفة محسّنة وقيمة مضافة عالية",
    ],
    heroAlt: "شبكة أنابيب صناعية عند الغروب",
    cadAlt: "نمذجة ثلاثية الأبعاد لوحدة صناعية",
  },
  services: {
    title: "خدماتنا",
    intro:
      "خدمات متكاملة تغطي جميع اختصاصات الهندسة الصناعية، من التصميم إلى متابعة الإنجاز.",
    blocks: [
      {
        title: "الهندسة والدراسات التقنية",
        items: [
          "الأنابيب والشبكات الصناعية",
          "الهياكل المعدنية",
          "الهندسة المدنية الصناعية",
          "الكهرباء والقياس والتحكم",
          "المعدات الصناعية",
          "المرافق ومنشآت العمليات",
          "دراسة تركيب الطاقة الشمسية الكهروضوئية",
        ],
      },
      {
        title: "النمذجة والتصميم",
        items: [
          "الرسم والتصميم بالحاسوب 2D–3D",
          "النمذجة الصناعية ثلاثية الأبعاد",
          "مخططات التنفيذ والتصنيع",
          "مخططات التوزيع",
          "المخططات الأيزومترية والدعائم",
        ],
      },
      {
        title: "الحسابات والتحاليل",
        items: [
          "مذكرات الحساب التقنية",
          "حساب مرونة الأنابيب",
          "تحليل الإجهادات",
          "التحجيم الميكانيكي",
          "حساب الهياكل",
          "حساب الدعائم",
        ],
      },
      {
        title: "المساندة والمناولة التقنية",
        items: [
          "المساندة التقنية للمشاريع",
          "الدعم في الورشات",
          "متابعة التنفيذ",
          "توفير مهندسين ورسامين",
          "مناولة تقنية مؤهلة بكلفة محسّنة",
        ],
      },
    ],
    teamTitle: "فريق جاهز للتدخل السريع",
    teamText:
      "نوفر فريقاً ذا خبرة قادراً على التدخل بسرعة في مشاريعكم بحلول تقنية ملائمة وموثوقة وتنافسية.",
    teamAlt: "فريق مهندسين في اجتماع مشروع",
    cta: "اتصل بنا",
  },
  expertise: {
    title: "الخبرات والمراجع",
    intro:
      "يمتلك فريقنا خبرة مؤكدة في استخدام أكثر البرمجيات المهنية تطلباً، وخبرتنا معترف بها لدى كبار العملاء الصناعيين.",
    softwareTitle: "البرمجيات المتقنة",
    clientsTitle: "هم يثقون بنا",
    clientsIntro:
      "خبرتنا المكتسبة لدى العملاء التالين تشهد على كفاءتنا وقدرتنا على تلبية أعلى المتطلبات.",
  },
  contact: {
    title: "اتصل بنا",
    intro: "بيانات الاتصال لكل طلب دراسة أو مساندة تقنية أو مناولة.",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    web: "الموقع الإلكتروني",
    tax: "المعرف الجبائي",
  },
  meta: {
    home: {
      title: "سويتاك للهندسة — مكتب دراسات في الهندسة الصناعية",
      description:
        "مكتب دراسات متعدد الاختصاصات: الأنابيب، الهياكل المعدنية، الهندسة المدنية، الكهرباء والقياس والتحكم، النمذجة ثلاثية الأبعاد.",
    },
    services: {
      title: "الخدمات — سويتاك للهندسة",
      description:
        "الهندسة والدراسات التقنية، النمذجة والتصميم ثلاثي الأبعاد، الحسابات والتحاليل، المساندة والمناولة التقنية.",
    },
    expertise: {
      title: "الخبرات والمراجع — سويتاك للهندسة",
      description: "البرمجيات المتقنة ومراجع العملاء الصناعيين لسويتاك للهندسة.",
    },
    contact: {
      title: "اتصل بنا — سويتاك للهندسة",
      description:
        "بيانات الاتصال بسويتاك للهندسة: 557 686 97 216+، riadh.souibgui@souitech.com.",
    },
  },
};

export const dictionaries: Record<Lang, Dict> = { fr, en, ar };
