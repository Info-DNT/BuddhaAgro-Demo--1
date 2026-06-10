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
    "nav_products": "Products",
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
    "page_title_products": "Our Products | BuddhaAgro",
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
    "subject_opt_support": "General Support",

    // Kalanamak Rice Page Specifics
    "page_title_kalanamak": "Kalanamak Rice | BuddhaAgro",
    "kalanamak_hero_tag": "HERITAGE AROMATIC RICE",
    "kalanamak_hero_title": "BuddhaAgro Kalanamak Rice: The Scent of History, the Taste of Health",
    "kalanamak_hero_desc": "Sourced from the fertile, GI-tagged soils of Siddharth Nagar and cultivated using advanced bio-inputs. Known as the 'Buddha Rice', it blends heritage taste with exceptional nutritional values.",
    "kalanamak_story_tag": "THE BUDDHA RICE STORY",
    "kalanamak_story_title": "A Legacy Dating Back to 600 BC",
    "kalanamak_story_desc": "Legend has it that Lord Buddha, after breaking his fast at Kapilvastu, gifted these black-husked grains to the local villagers, asking them to sow them. The resulting rice possessed a unique aroma, carrying the essence of Buddha's mercy. Today, BuddhaAgro combines this ancient heritage with modern precision agriculture to produce the purest, most aromatic Kalanamak rice.",
    "kalanamak_features_title": "Distinctive Attributes of Kalanamak Rice",
    "kalanamak_feat_1_title": "Intense Aroma",
    "kalanamak_feat_1_desc": "Known for its rich, appetizing aroma that fills the air when cooked. It retains its fragrance even when stored for long periods.",
    "kalanamak_feat_2_title": "Nutrient-Dense",
    "kalanamak_feat_2_desc": "Extremely rich in Iron, Zinc, and Antioxidants. Helps combat malnutrition and supports cognitive development.",
    "kalanamak_feat_3_title": "Low Glycemic Index",
    "kalanamak_feat_3_desc": "A lower GI value compared to regular white rice makes it a safer, healthier alternative for diabetics.",
    "kalanamak_nutri_title": "Nutritional Profile (per 100g)",
    "kalanamak_nutri_1_name": "Zinc",
    "kalanamak_nutri_1_val": "4.5 mg",
    "kalanamak_nutri_2_name": "Iron",
    "kalanamak_nutri_2_val": "4.0 mg",
    "kalanamak_nutri_3_name": "Antioxidant Rating",
    "kalanamak_nutri_3_val": "High (ORAC)",
    "kalanamak_nutri_4_name": "Glycemic Index (GI)",
    "kalanamak_nutri_4_val": "55 (Low-GI)",
    "btn_order_now": "Inquire for Bulk Order",
    "kalanamak_gi_title": "GI-Tagged & Authentic",
    "kalanamak_gi_desc": "Sourced directly from certified farmers in Siddharth Nagar. Verified under geographical indication rules for authentic premium quality.",
    
    // Kalanamak Health Section
    "kalanamak_health_title": "Health & Wellness Benefits",
    "kalanamak_health_1_title": "Diabetic-Friendly",
    "kalanamak_health_1_desc": "With a low Glycemic Index (typically around 49–52), it releases sugar slowly into the bloodstream, preventing sudden spikes and crashes.",
    "kalanamak_health_2_title": "High in Micronutrients",
    "kalanamak_health_2_desc": "It naturally contains higher levels of iron and zinc compared to regular white rice, which helps combat anemia and boosts immunity.",
    "kalanamak_health_3_title": "Rich in Antioxidants",
    "kalanamak_health_3_desc": "The presence of anthocyanin helps fight oxidative stress, supports healthy skin, and promotes heart health.",
    "kalanamak_health_4_title": "Weight Management",
    "kalanamak_health_4_desc": "Its higher protein and dietary fiber content keeps you feeling full longer, reducing cravings and unnecessary snacking.",
    "kalanamak_health_5_title": "Easy to Digest",
    "kalanamak_health_5_desc": "It is gentle on the stomach and gut-friendly, making it a great dietary staple for both children and the elderly.",
    "kalanamak_health_6_title": "Boosting Red Blood Cell Production",
    "kalanamak_health_6_desc": "Discover the exceptional health benefits of Kalanamak Rice. By incorporating this rice variant into your diet, you can effectively combat fatigue, boost energy levels, and enhance overall vitality.",

    // Products Page Specifics
    "products_section_title": "Our Premium Offerings",
    "products_section_subtitle": "Discover our high-quality agricultural products developed using state-of-the-art precision bio-inputs.",
    "product_kalanamak_title": "BuddhaAgro Kalanamak Rice",
    "product_kalanamak_desc": "Heritage aromatic 'Buddha Rice' cultivated with advanced bio-inputs. Famous for its unique scent, rich nutrients, and low glycemic index.",
    "product_fertilizer_title": "Organic Bio-Fertilizer",
    "product_fertilizer_desc": "Enhanced bio-organic soil input designed to restore microbial activity and boost yield stability.",
    "product_seed_title": "Precision Seed Treatment",
    "product_seed_desc": "Advanced crop immunization formula protecting seeds against pathogens during early lifecycle steps.",
    "btn_view_product": "View Product"
  },
  hi: {
    // Navigation
    "nav_about": "हमारे बारे में",
    "nav_solutions": "समाधान",
    "nav_technology": "तकनीक",
    "nav_products": "उत्पाद",
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
    "page_title_products": "हमारे उत्पाद | बुद्धाएग्रो",
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
    "subject_opt_support": "सामान्य सहायता",

    // Kalanamak Rice Page Specifics
    "page_title_kalanamak": "कालानमक चावल | बुद्धाएग्रो",
    "kalanamak_hero_tag": "धरोहर सुगंधित चावल",
    "kalanamak_hero_title": "बुद्धाएग्रो कालानमक चावल: इतिहास की सुगंध, स्वास्थ्य का स्वाद",
    "kalanamak_hero_desc": "सिद्धार्थ नगर की उपजाऊ, जीआई-टैग मिट्टी से प्राप्त और उन्नत जैव-इनपुट का उपयोग करके खेती की गई। 'बुद्ध चावल' के रूप में जाना जाने वाला यह चावल, विरासत के स्वाद को असाधारण पोषण मूल्यों के साथ मिलाता है।",
    "kalanamak_story_tag": "बुद्ध चावल की कहानी",
    "kalanamak_story_title": "600 ईसा पूर्व से चली आ रही विरासत",
    "kalanamak_story_desc": "किंवदंती है कि भगवान बुद्ध ने कपिलवस्तु में अपना उपवास तोड़ने के बाद, स्थानीय ग्रामीणों को ये काले छिलके वाले दाने भेंट किए और उन्हें बोने के लिए कहा। इसके परिणामस्वरूप उत्पन्न चावल में एक अनोखी सुगंध थी, जो बुद्ध की दया का सार लिए हुए थी। आज, बुद्धाएग्रो इसी प्राचीन विरासत को आधुनिक सटीक कृषि के साथ जोड़कर सबसे शुद्ध, सबसे सुगंधित कालानमक चावल का उत्पादन करता है।",
    "kalanamak_features_title": "कालानमक चावल की विशिष्ट विशेषताएं",
    "kalanamak_feat_1_title": "तीव्र सुगंध",
    "kalanamak_feat_1_desc": "पकाने पर हवा में भर जाने वाली समृद्ध, क्षुधावर्धक सुगंध के लिए जाना जाता है। लंबे समय तक संग्रहीत करने पर भी यह अपनी सुगंध बनाए रखता है।",
    "kalanamak_feat_2_title": "पोषक तत्वों से भरपूर",
    "kalanamak_feat_2_desc": "आयरन, जिंक और एंटीऑक्सीडेंट से भरपूर। कुपोषण से लड़ने में मदद करता है और संज्ञानात्मक विकास का समर्थन करता है।",
    "kalanamak_feat_3_title": "कम ग्लाइसेमिक इंडेक्स",
    "kalanamak_feat_3_desc": "नियमित सफेद चावल की तुलना में कम जीआई मान इसे मधुमेह रोगियों के लिए एक सुरक्षित, स्वास्थ्यवर्धक विकल्प बनाता है।",
    "kalanamak_nutri_title": "पोषण संबंधी प्रोफ़ाइल (प्रति 100 ग्राम)",
    "kalanamak_nutri_1_name": "जस्ता (जिंक)",
    "kalanamak_nutri_1_val": "4.5 मिलीग्राम",
    "kalanamak_nutri_2_name": "लोहा (आयरन)",
    "kalanamak_nutri_2_val": "4.0 मिलीग्राम",
    "kalanamak_nutri_3_name": "एंटीऑक्सीडेंट रेटिंग",
    "kalanamak_nutri_3_val": "उच्च (ORAC)",
    "kalanamak_nutri_4_name": "ग्लाइसेमिक इंडेक्स (जीआई)",
    "kalanamak_nutri_4_val": "55 (कम-जीआई)",
    "btn_order_now": "थोक ऑर्डर के लिए पूछताछ करें",
    "kalanamak_gi_title": "जीआई-टैग्ड और प्रामाणिक",
    "kalanamak_gi_desc": "सिद्धार्थ नगर के प्रमाणित किसानों से सीधे प्राप्त। प्रामाणिक प्रीमियम गुणवत्ता के लिए भौगोलिक संकेत नियमों के तहत सत्यापित।",

    // Kalanamak Health Section
    "kalanamak_health_title": "स्वास्थ्य और कल्याण लाभ",
    "kalanamak_health_1_title": "मधुमेह-अनुकूल",
    "kalanamak_health_1_desc": "कम ग्लाइसेमिक इंडेक्स (आमतौर पर 49-52 के आसपास) के साथ, यह रक्तप्रवाह में धीरे-धीरे चीनी छोड़ता है, जिससे अचानक स्पाइक्स और क्रैश को रोका जा सकता है।",
    "kalanamak_health_2_title": "सूक्ष्म पोषक तत्वों से भरपूर",
    "kalanamak_health_2_desc": "नियमित सफेद चावल की तुलना में इसमें प्राकृतिक रूप से आयरन और जिंक का उच्च स्तर होता है, जो एनीमिया से लड़ने और प्रतिरक्षा को बढ़ावा देने में मदद करता है।",
    "kalanamak_health_3_title": "एंटीऑक्सीडेंट से भरपूर",
    "kalanamak_health_3_desc": "एंथोसायनिन की उपस्थिति ऑक्सीडेटिव तनाव से लड़ने में मदद करती है, स्वस्थ त्वचा का समर्थन करती है और हृदय स्वास्थ्य को बढ़ावा देती है।",
    "kalanamak_health_4_title": "वजन नियंत्रण",
    "kalanamak_health_4_desc": "इसके उच्च प्रोटीन और आहार फाइबर की मात्रा आपको लंबे समय तक भरा हुआ महसूस कराती है, जिससे लालसा और अनावश्यक स्नैकिंग कम होती है।",
    "kalanamak_health_5_title": "पचने में आसान",
    "kalanamak_health_5_desc": "यह पेट के लिए कोमल और आंत के लिए अनुकूल है, जिससे यह बच्चों और बुजुर्गों दोनों के लिए एक बेहतरीन आहार प्रधान बन जाता है।",
    "kalanamak_health_6_title": "लाल रक्त कोशिकाओं के उत्पादन को बढ़ावा देना",
    "kalanamak_health_6_desc": "कालानमक चावल के असाधारण स्वास्थ्य लाभों की खोज करें। इस चावल की किस्म को अपने आहार में शामिल करके, आप प्रभावी रूप से थकान से लड़ सकते हैं, ऊर्जा के स्तर को बढ़ा सकते हैं और समग्र जीवन शक्ति को बढ़ा सकते हैं।",

    // Products Page Specifics
    "products_section_title": "हमारी प्रीमियम पेशकशें",
    "products_section_subtitle": "अत्याधुनिक सटीक जैव-इनपुट का उपयोग करके विकसित हमारे उच्च गुणवत्ता वाले कृषि उत्पादों की खोज करें।",
    "product_kalanamak_title": "बुद्धाएग्रो कालानमक चावल",
    "product_kalanamak_desc": "उन्नत जैव-इनपुट के साथ उगाया जाने वाला धरोहर सुगंधित 'बुद्ध चावल'। अपनी अनूठी सुगंध, समृद्ध पोषक तत्वों और कम ग्लाइसेमिक इंडेक्स के लिए प्रसिद्ध है।",
    "product_fertilizer_title": "जैविक जैव-उर्वरक",
    "product_fertilizer_desc": "सूक्ष्मजीवी गतिविधि को बहाल करने और उपज स्थिरता को बढ़ावा देने के लिए डिज़ाइन किया गया उन्नत जैव-जैविक मिट्टी इनपुट।",
    "product_seed_title": "सटीक बीज उपचार",
    "product_seed_desc": "प्रारंभिक जीवन-चक्र चरणों के दौरान रोगजनकों के खिलाफ बीजों की रक्षा करने वाला उन्नत फसल प्रतिरक्षण फॉर्मूला।",
    "btn_view_product": "उत्पाद देखें"
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
