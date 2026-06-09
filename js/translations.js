/**
 * js/translations.js
 * Centralized Translation Dictionary and DOM Scanner Functions
 * Exposes:
 *  - window.translations
 *  - window.getTranslation(key, lang)
 *  - window.translateStaticHtml(lang)
 */

window.translations = {
  en: {
    // Navigation
    "nav_about": "About Us",
    "nav_solutions": "Solutions",
    "nav_technology": "Technology",
    "nav_contact": "Contact",
    "btn_get_started": "Get Started",

    // Common Footer
    "footer_sub_title": "Agrotech & Bioscience",
    "footer_address": "Vill & Post - Teuwan grant Tola Dokam, Tahsil - Itwa, Disstt - Siddharth Nagar, U.P. 272192",
    "footer_copyright": "© 2025 Buddha Agrotech and Bioscience Private Limited. All rights reserved.",
    "footer_privacy": "Privacy Policy",
    "footer_terms": "Terms of Service",
    "footer_compliance": "Compliance",
    "footer_sustainability": "Sustainability",

    // Page Titles
    "page_title_index": "BuddhaAgro | Integrated Life-cycle Advantage",
    "page_title_about": "About Us | BuddhaAgro",
    "page_title_solutions": "Our Solutions | BuddhaAgro",
    "page_title_technology": "Our Technology | BuddhaAgro",
    "page_title_contact": "Contact Us | BuddhaAgro",

    // Index Page Specifics
    "hero_tag": "AGRICULTURE 4.0",
    "hero_title": "Cultivating the Future: The Integrated Life-cycle Advantage.",
    "hero_desc": "Revolutionizing agriculture from seed to harvest with seamless, sustainable solutions designed for high-precision institutional yields.",
    "btn_explore": "Explore Our Solutions",
    "btn_how_it_works": "How It Works",
    "lifecycle_title": "Integrated Life-cycle Journey",
    "step_1_title": "Seed",
    "step_1_desc": "Genetic Selection",
    "step_2_title": "Care",
    "step_2_desc": "Precision Inputs",
    "step_3_title": "Scale",
    "step_3_desc": "Real-time Analytics",
    "step_4_title": "Market",
    "step_4_desc": "Seamless Harvest",

    // About Page Specifics
    "about_tag": "Our DNA",
    "about_title": "The Industrial-Organic Duality",
    "about_desc": "BuddhaAgro represents the convergence of traditional agricultural resilience and next-generation technological precision. Our unique business proposition lies in our <strong>Integrated Life-cycle Advantage</strong>—a holistic framework that ensures every phase of the agricultural process is data-driven, sustainable, and optimized for scale.",
    "about_stat_desc": "Traceable Integration from seed to market.",
    "about_stability_title": "Stability",
    "about_stability_desc": "Built on decades of industrial expertise and infrastructure.",
    "about_expertise_title": "Expertise",
    "about_expertise_desc": "Ag-tech pioneers driving the shift toward sustainable yields.",

    // Solutions Page Specifics
    "solutions_tag": "Our Ecosystem",
    "solutions_title": "Strategic Solutions for Modern Growth",
    "sol_1_title": "Precision Farming",
    "sol_1_desc": "Utilizing GPS and satellite data to manage field variability, ensuring every seed receives the optimal amount of nutrients.",
    "sol_2_title": "Bio-input Solutions",
    "sol_2_desc": "Advanced fertilizers and crop protection formulas developed in our proprietary labs to boost immunity and soil health.",
    "sol_3_title": "Agricultural Drone Tech",
    "sol_3_desc": "Automated aerial surveillance and precision spraying that reduces waste by 30% while increasing operational efficiency.",
    "btn_learn_more": "Learn More",

    // Technology Page Specifics
    "tech_tag": "The Stack",
    "tech_title": "Data-Driven Intelligence for Resilience",
    "tech_1_title": "Edge IoT Sensors",
    "tech_1_desc": "Continuous soil moisture, pH, and nutrient monitoring directly from the field.",
    "tech_2_title": "Centralized Ag-OS",
    "tech_2_desc": "Our proprietary operating system that integrates data from all inputs to provide actionable insights.",
    "tech_3_title": "AI Yield Prediction",
    "tech_3_desc": "Machine learning models that forecast harvest dates and volumes with 94% accuracy.",
    "tech_perf_title": "Current Performance",
    "tech_perf_status": "Optimized",
    "tech_perf_yield": "Yield Increase",
    "tech_chart_peak": "PEAK",
    "tech_chart_footer": "Real-time aggregate data visualization of integrated lifecycle stages.",

    // Contact Page Specifics
    "contact_tag": "Connect With Us",
    "contact_title": "Start Your Integration Journey",
    "contact_office_title": "Corporate Office",
    "contact_office_desc": "Vill & Post - Teuwan grant Tola Dokam,<br />Tahsil - Itwa, Disstt - Siddharth Nagar,<br />Uttar Pradesh 272192",
    "contact_mobile_title": "Mobile Support",
    "contact_email_title": "General Inquiries",
    "contact_success_title": "Message Sent!",
    "contact_success_desc": "Thank you for reaching out. Our team will contact you within 24 hours to optimize your lifecycle journey.",
    "contact_send_another": "Send another message",
    "contact_label_name": "Full Name",
    "contact_label_org": "Organization",
    "contact_label_email": "Email Address",
    "contact_label_subject": "Subject",
    "contact_label_message": "Message",
    "contact_placeholder_name": "John Doe",
    "contact_placeholder_org": "Agro Corp",
    "contact_placeholder_email": "john@company.com",
    "contact_placeholder_subject": "Select a subject",
    "contact_placeholder_message": "How can we help optimize your lifecycle?",
    "contact_submit": "Submit Inquiry",
    "err_name": "Please enter your name",
    "err_org": "Please enter organization",
    "err_email": "Please enter a valid email",
    "err_subject": "Please select a subject",
    "err_message": "Please enter your message",
    "subject_opt_placeholder": "Select a subject",
    "subject_opt_precision": "Precision Farming Inquiry",
    "subject_opt_bio": "Bio-input Procurement",
    "subject_opt_tech": "Technology Partnership",
    "subject_opt_support": "General Support"
  },
  hi: {
    // Navigation
    "nav_about": "हमारे बारे में",
    "nav_solutions": "समाधान",
    "nav_technology": "तकनीक",
    "nav_contact": "संपर्क करें",
    "btn_get_started": "शुरू करें",

    // Common Footer
    "footer_sub_title": "एग्रोटेक एंड बायोसाइंस",
    "footer_address": "ग्राम और पोस्ट - टेउवां ग्रांट टोला डोकम, तहसील - इटवा, जिला - सिद्धार्थ नगर, उत्तर प्रदेश 272192",
    "footer_copyright": "© 2025 बुद्धा एग्रोटेक एंड बायोसाइंस प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।",
    "footer_privacy": "गोपनीयता नीति",
    "footer_terms": "सेवा की शर्तें",
    "footer_compliance": "अनुपालन",
    "footer_sustainability": "सततता",

    // Page Titles
    "page_title_index": "बुद्धाएग्रो | एकीकृत जीवन-चक्र लाभ",
    "page_title_about": "हमारे बारे में | बुद्धाएग्रो",
    "page_title_solutions": "हमारे समाधान | बुद्धाएग्रो",
    "page_title_technology": "हमारी तकनीक | बुद्धाएग्रो",
    "page_title_contact": "संपर्क करें | बुद्धाएग्रो",

    // Index Page Specifics
    "hero_tag": "कृषि ४.०",
    "hero_title": "भविष्य की खेती: एकीकृत जीवन-चक्र लाभ।",
    "hero_desc": "उच्च-सटीक संस्थागत पैदावार के लिए डिज़ाइन किए गए सहज, टिकाऊ समाधानों के साथ बीज से लेकर कटाई तक कृषि में क्रांति लाना।",
    "btn_explore": "हमारे समाधान खोजें",
    "btn_how_it_works": "यह कैसे काम करता है",
    "lifecycle_title": "एकीकृत जीवन-चक्र यात्रा",
    "step_1_title": "बीज",
    "step_1_desc": "आनुवंशिक चयन",
    "step_2_title": "देखभाल",
    "step_2_desc": "सटीक इनपुट",
    "step_3_title": "स्केल",
    "step_3_desc": "वास्तविक समय विश्लेषण",
    "step_4_title": "बाज़ार",
    "step_4_desc": "सहज फसल कटाई",

    // About Page Specifics
    "about_tag": "हमारा डीएनए",
    "about_title": "औद्योगिक-जैविक द्वैत",
    "about_desc": "बुद्धाएग्रो पारंपरिक कृषि लचीलेपन और अगली पीढ़ी की तकनीकी सटीकता के संगम का प्रतिनिधित्व करता है। हमारा अनूठा व्यावसायिक प्रस्ताव हमारे <strong>एकीकृत जीवन-चक्र लाभ</strong> में निहित है—एक समग्र ढांचा जो यह सुनिश्चित करता है कि कृषि प्रक्रिया का हर चरण डेटा-संचालित, टिकाऊ और बड़े पैमाने के लिए अनुकूलित हो।",
    "about_stat_desc": "बीज से लेकर बाजार तक पारदर्शी एकीकरण।",
    "about_stability_title": "स्थिरता",
    "about_stability_desc": "दशकों के औद्योगिक अनुभव और बुनियादी ढांचे पर निर्मित।",
    "about_expertise_title": "विशेषज्ञता",
    "about_expertise_desc": "टिकाऊ पैदावार की ओर बदलाव को गति देने वाले एग-टेक अग्रणी।",

    // Solutions Page Specifics
    "solutions_tag": "हमारा पारिस्थितिकी तंत्र",
    "solutions_title": "आधुनिक विकास के लिए रणनीतिक समाधान",
    "sol_1_title": "सटीक खेती",
    "sol_1_desc": "खेत की परिवर्तनशीलता को प्रबंधित करने के लिए जीपीएस और सैटेलाइट डेटा का उपयोग करना, यह सुनिश्चित करना कि प्रत्येक बीज को पोषक तत्वों की इष्टतम मात्रा मिले।",
    "sol_2_title": "बायो-इनपुट समाधान",
    "sol_2_desc": "मिट्टी के स्वास्थ्य और प्रतिरक्षा को बढ़ावा देने के लिए हमारी प्रयोगशालाओं में विकसित उन्नत उर्वरक और फसल संरक्षण फॉर्मूले।",
    "sol_3_title": "कृषि ड्रोन तकनीक",
    "sol_3_desc": "स्वचालित हवाई निगरानी और सटीक छिड़काव जो परिचालन दक्षता बढ़ाते हुए कचरे को 30% तक कम करता है।",
    "btn_learn_more": "अधिक जानें",

    // Technology Page Specifics
    "tech_tag": "तकनीक स्टैक",
    "tech_title": "लचीलेपन के लिए डेटा-संचालित बुद्धिमत्ता",
    "tech_1_title": "एज आईओटी सेंसर",
    "tech_1_desc": "सीधे खेत से मिट्टी की नमी, पीएच और पोषक तत्वों की निरंतर निगरानी।",
    "tech_2_title": "केंद्रीकृत एग-ओएस",
    "tech_2_desc": "हमारा मालिकाना ऑपरेटिंग सिस्टम जो सभी इनपुट से डेटा को एकीकृत करता है ताकि उपयोगी जानकारी प्रदान की जा सके।",
    "tech_3_title": "एआई उपज पूर्वानुमान",
    "tech_3_desc": "मशीन लर्निंग मॉडल जो 94% सटीकता के साथ फसल कटाई की तारीखों और मात्रा का पूर्वानुमान लगाते हैं।",
    "tech_perf_title": "वर्तमान प्रदर्शन",
    "tech_perf_status": "अनुकूलित",
    "tech_perf_yield": "उपज में वृद्धि",
    "tech_chart_peak": "शिखर",
    "tech_chart_footer": "एकीकृत जीवन-चक्र चरणों का वास्तविक समय का डेटा विज़ुअलाइज़ेशन।",

    // Contact Page Specifics
    "contact_tag": "हमसे जुड़ें",
    "contact_title": "अपनी एकीकरण यात्रा शुरू करें",
    "contact_office_title": "कॉर्पोरेट कार्यालय",
    "contact_office_desc": "ग्राम और पोस्ट - टेउवां ग्रांट टोला डोकम,<br />तहसील - इटवा, जिला - सिद्धार्थ नगर,<br />उत्तर प्रदेश 272192",
    "contact_mobile_title": "मोबाइल सहायता",
    "contact_email_title": "सामान्य पूछताछ",
    "contact_success_title": "संदेश भेजा गया!",
    "contact_success_desc": "हमसे संपर्क करने के लिए धन्यवाद। हमारी टीम आपकी जीवन-चक्र यात्रा को अनुकूलित करने के लिए 24 घंटे के भीतर आपसे संपर्क करेगी।",
    "contact_send_another": "दूसरा संदेश भेजें",
    "contact_label_name": "पूरा नाम",
    "contact_label_org": "संगठन",
    "contact_label_email": "ईमेल पता",
    "contact_label_subject": "विषय",
    "contact_label_message": "संदेश",
    "contact_placeholder_name": "जॉन डो",
    "contact_placeholder_org": "एग्रो कॉर्प",
    "contact_placeholder_email": "john@company.com",
    "contact_placeholder_subject": "विषय चुनें",
    "contact_placeholder_message": "हम आपकी जीवन-चक्र यात्रा को अनुकूलित करने में कैसे मदद कर सकते हैं?",
    "contact_submit": "पूछताछ सबमिट करें",
    "err_name": "कृपया अपना नाम दर्ज करें",
    "err_org": "कृपया संगठन दर्ज करें",
    "err_email": "कृपया एक वैध ईमेल दर्ज करें",
    "err_subject": "कृपया एक विषय चुनें",
    "err_message": "कृपया अपना संदेश दर्ज करें",
    "subject_opt_placeholder": "विषय चुनें",
    "subject_opt_precision": "सटीक खेती संबंधी पूछताछ",
    "subject_opt_bio": "बायो-इनपुट खरीद",
    "subject_opt_tech": "प्रौद्योगिकी साझेदारी",
    "subject_opt_support": "सामान्य सहायता"
  }
};

/**
 * Returns translated string. Fallbacks to EN if missing in requested lang,
 * and key string if both are missing.
 */
window.getTranslation = function(key, lang) {
  const chosenLang = lang || window.currentLang || 'en';
  if (window.translations[chosenLang] && window.translations[chosenLang][key] !== undefined) {
    return window.translations[chosenLang][key];
  }
  if (window.translations['en'] && window.translations['en'][key] !== undefined) {
    return window.translations['en'][key];
  }
  return key;
};

/**
 * Scans DOM and translates elements containing data-i18n attribute
 */
window.translateStaticHtml = function(lang) {
  const activeLang = lang || 'en';

  // 1. Update Title tag if it is annotated
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    document.title = window.getTranslation(key, activeLang);
  }

  // 2. Query and update all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = window.getTranslation(key, activeLang);

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) {
        el.placeholder = translation;
      } else {
        el.value = translation;
      }
    } else {
      el.innerHTML = translation;
    }
  });
};
