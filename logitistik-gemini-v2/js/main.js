(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     0. Bilingual Dictionary (English default + Turkish)
     ------------------------------------------------------------------------ */
  var STORAGE_KEY = 'ironroad_lang';
  var currentLang = 'en';
  var activeServiceKey = 'ftl';
  var formSubmittedSuccess = false;

  var i18n = {
    en: {
      pageTitle: 'IRONROAD FREIGHT | Nationwide U.S. Trucking & Heavy Freight Carrier',
      pageDesc: 'IRONROAD FREIGHT delivers 48-state Full Truckload, Refrigerated, Flatbed, Heavy Haul, and Dedicated Fleet trucking with 24/7 U.S.-based dispatch.',
      skip: 'Skip to main content',
      'brand.tag': '20+ YRS · US FREIGHT',
      'nav.services': 'Services',
      'nav.fleet': 'Fleet',
      'nav.industries': 'Industries',
      'nav.terminals': 'Terminals',
      'nav.quote': 'Request a Quote',
      'nav.dispatch': 'Dispatch',
      'header.meta': '24/7 Dispatch · USDOT #2847192',
      'rail.quote': 'Rate Quote',
      'rail.dispatch': '24/7 Dispatch',
      'hero.eyebrow': '48-State Asset-Based Carrier · MC #691408',
      'hero.title': 'Hauling America Forward<br><span class="hero-title-accent">Mile After Mile.</span>',
      'hero.subtitle': 'From coast-to-coast dry van and temperature-controlled reefer loads to heavy-haul flatbeds, IRONROAD moves mission-critical American freight on schedule with 24/7 live dispatch.',
      'hero.ctaPrimary': 'Get an Instant Freight Quote',
      'hero.ctaSecondary': 'Explore Hauling Services',
      'hero.ontime': 'On-Time',
      'hero.highlightKicker': 'FMCSA Satisfactory Safety Rating',
      'hero.highlightText': 'EPA SmartWay Transport Partner with late-model Class-8 rigs and real-time ELD satellite visibility.',
      'metrics.states': 'Lower States Covered',
      'metrics.units': 'Late-Model Power Units',
      'metrics.terminals': 'Regional U.S. Terminals',
      'metrics.dispatch': 'In-House U.S. Dispatch',
      'services.eyebrow': 'Freight & Hauling Divisions',
      'services.title': 'Built for Every Lane and Load Type',
      'services.lead': 'Select a division below to review equipment capacity, transit options, and specialized freight capabilities.',
      'services.tab.ftl': "Full Truckload (53' Dry Van)",
      'services.tab.reefer': 'Temperature-Controlled Reefer',
      'services.tab.flatbed': 'Flatbed & Heavy Haul',
      'services.tab.dedicated': 'Dedicated Contract Fleet',
      'services.tab.expedited': 'Expedited Team Transit',
      'services.tab.crossdock': 'Port Drayage & Cross-Dock',
      'services.cta': 'Quote This Equipment',
      'fleet.eyebrow': 'Modern American Iron',
      'fleet.title': 'Asset-Based Fleet. Zero Brokerage Guesswork.',
      'fleet.text': 'When you tender a load to IRONROAD, it rides on our own late-model Kenworth, Peterbilt, and Freightliner Class-8 tractors operated by vetted company drivers and safety-certified owner-operators.',
      'fleet.f1.title': 'Average Tractor Age Under 2.4 Years',
      'fleet.f1.desc': 'In-house preventative maintenance shops at our Chicago, Dallas, and Atlanta terminals keep breakdowns near zero.',
      'fleet.f2.title': 'Live Satellite ELD & Reefer Telemetry',
      'fleet.f2.desc': 'Shareable tracking links give your traffic desk live ETA updates, door-open alerts, and continuous temperature logs.',
      'fleet.f3.title': '$250,000 Cargo & $2M Liability Coverage',
      'fleet.f3.desc': 'Full commercial authority with high-value cargo riders available on demand for industrial machinery and electronics.',
      'fleet.photoTag': 'HEAVY HAUL & OTR',
      'fleet.photoDesc': '1,800+ late-model dry vans, multi-temp reefers, step-decks, and RGN lowboys ready across major U.S. interstates.',
      'fleet.spec1': 'Dry & Reefer',
      'fleet.spec2': 'Flatbed / Step',
      'fleet.spec3': 'Standard GVW',
      'fleet.spec4Val': 'Permitted',
      'fleet.spec4': 'Oversize Loads',
      'industries.eyebrow': 'Sector Expertise',
      'industries.title': 'Industries That Rely on Our Wheels',
      'industries.lead': 'Every freight vertical has its own compliance rules, appointment windows, and handling demands. Our dispatchers specialize by sector so nothing gets lost in translation.',
      'industries.cta': 'Discuss Your Lane',
      'ind.1.title': 'Manufacturing & Steel',
      'ind.1.desc': 'Coil hauling, structural steel, CNC equipment, and just-in-time plant replenishment across the Midwest and Sun Belt.',
      'ind.2.title': 'Automotive & Tier-1 Parts',
      'ind.2.desc': 'Time-definite assembly line deliveries and team-driver expedite runs engineered to keep production floors moving.',
      'ind.3.title': 'Food, Beverage & Cold Chain',
      'ind.3.desc': 'FSMA-compliant reefers maintaining -20°F to +70°F with continuous digital pulp and trailer-temp verification.',
      'ind.4.title': 'Retail & Big-Box DC',
      'ind.4.desc': 'Strict MABD appointment adherence, EDI 204/214 integration, and drop-trailer capacity for national distribution centers.',
      'ind.5.title': 'Construction & Infrastructure',
      'ind.5.desc': 'Flatbed, Conestoga, and step-deck jobsite deliveries with certified chain, tarp, and oversize-permit coordination.',
      'ind.6.title': 'Agriculture & Machinery',
      'ind.6.desc': 'Seasonal harvest surge capacity and heavy-equipment transport linking heartland producers to coastal ports.',
      'network.kicker': 'Coast-to-Coast Infrastructure',
      'network.title': '48 STATES · 14 TERMINALS · 6 MAJOR CORRIDOR HUBS',
      'network.sub': 'Strategically positioned along I-90, I-80, I-40, I-35, I-95, and I-5 for rapid driver relays and cross-dock staging.',
      'hub.1.region': 'Midwest HQ',
      'hub.1.desc': 'Central 24/7 Dispatch, 120-door cross-dock, and Class-8 maintenance center on the I-55 corridor.',
      'hub.2.region': 'South Central',
      'hub.2.desc': 'I-35 / I-20 relay yard handling Mexico cross-border transfers, flatbed staging, and Sun Belt lanes.',
      'hub.3.region': 'Southeast',
      'hub.3.desc': 'I-75 / I-85 distribution hub connecting Savannah port drayage to regional grocery and retail DCs.',
      'hub.4.region': 'West Coast',
      'hub.4.desc': 'Inland Empire yard serving LA/Long Beach port transloading, team eastbound runs, and cold storage.',
      'hub.5.region': 'Northeast',
      'hub.5.desc': 'Port Newark / Elizabeth drayage terminal covering I-95 metro corridors from Boston to Baltimore.',
      'hub.6.region': 'Pacific Northwest',
      'hub.6.desc': 'I-5 timber, machinery, and Pacific port gateway with dedicated heavy-haul and reefer power.',
      'quote.eyebrow': 'Fast Turnaround Pricing',
      'quote.title': 'Request a Freight Quote',
      'quote.lead': 'Submit your lane details below. Our U.S. pricing desk responds to spot and contract quote requests within 30 minutes.',
      'form.name': 'Full Name & Company *',
      'form.namePh': 'e.g. Jordan Miller — Heartland Steel',
      'form.email': 'Work Email *',
      'form.emailPh': 'dispatch@company.com',
      'form.origin': 'Pickup City, State *',
      'form.originPh': 'e.g. Chicago, IL',
      'form.destination': 'Delivery City, State *',
      'form.destinationPh': 'e.g. Dallas, TX',
      'form.equipment': 'Equipment Type *',
      'form.eq.placeholder': 'Select trailer type...',
      'form.eq.ftl': "53' Dry Van (FTL)",
      'form.eq.reefer': "53' Refrigerated (Reefer)",
      'form.eq.flatbed': 'Flatbed / Step-Deck',
      'form.eq.heavy': 'Heavy Haul / RGN',
      'form.eq.expedited': 'Expedited Team',
      'form.eq.drayage': 'Port Drayage / Intermodal',
      'form.weight': 'Est. Weight (lbs)',
      'form.weightPh': 'e.g. 42,000 lbs',
      'form.notes': 'Commodity & Load Notes *',
      'form.notesPh': 'Share pickup window, commodity, pallet count, temp requirements, or special tarping/liftgate notes...',
      'form.submit': 'Submit Quote Request',
      'err.name': 'Please enter your name and company.',
      'err.email': 'Please enter a valid work email address.',
      'err.origin': 'Please enter a pickup city and state.',
      'err.destination': 'Please enter a delivery city and state.',
      'err.equipment': 'Please select an equipment type.',
      'err.notes': 'Please describe your commodity or load notes.',
      'form.success': 'Quote request received. Our Chicago dispatch & pricing desk will reply within 30 minutes.',
      'dispatch.pill': '24/7 Live U.S. Dispatch',
      'dispatch.title': 'Need a Truck Today? Call Dispatch Direct.',
      'dispatch.sub': 'Skip the phone trees. Speak directly with an asset dispatcher at our Chicago headquarters.',
      'dispatch.phoneLabel': '24/7 Dispatch Line',
      'dispatch.emailLabel': 'Rate Quotes & Tenders',
      'dispatch.authLabel': 'Authority Credentials',
      'dispatch.hqLabel': 'Corporate Terminal (HQ)',
      'dispatch.mapBadge': 'Terminal Map · I-55 Corridor',
      'footer.about': 'Asset-based U.S. motor carrier delivering dry van, reefer, flatbed, and dedicated freight solutions across all 48 contiguous states since 2004.',
      'footer.divisions': 'Divisions',
      'footer.div1': 'Full Truckload (Dry Van)',
      'footer.div2': 'Refrigerated Cold Chain',
      'footer.div3': 'Flatbed & Heavy Haul',
      'footer.div4': 'Dedicated Fleet',
      'footer.company': 'Company',
      'footer.comp1': 'Equipment & Safety',
      'footer.comp2': 'Industries Served',
      'footer.comp3': 'U.S. Terminals',
      'footer.comp4': 'Request a Quote',
      'footer.hq': 'Headquarters',
      'cert.1': 'FMCSA SATISFACTORY',
      'cert.2': 'EPA SMARTWAY PARTNER',
      'cert.3': 'C-TPAT CERTIFIED',
      'cert.4': 'TWIC PORT ACCESS',
      'cert.5': 'HAZMAT ENDORSED',
      'cert.6': 'CARB COMPLIANT',
      'footer.copy': '© 2026 IRONROAD FREIGHT LINES LLC. All rights reserved. USDOT #2847192 · MC #691408.'
    },
    tr: {
      pageTitle: 'IRONROAD FREIGHT | ABD Geneli Karayolu ve Ağır Yük Taşımacılığı',
      pageDesc: 'IRONROAD FREIGHT, 7/24 ABD merkezli operasyon desteğiyle 48 eyalette komple tır (FTL), frigorifik, açık kasa, ağır yük ve özel filo taşımacılığı sunar.',
      skip: 'Ana içeriğe atla',
      'brand.tag': '20+ YIL · ABD LOJİSTİK',
      'nav.services': 'Hizmetler',
      'nav.fleet': 'Filo',
      'nav.industries': 'Sektörler',
      'nav.terminals': 'Terminaller',
      'nav.quote': 'Teklif Al',
      'nav.dispatch': 'Operasyon',
      'header.meta': '7/24 Operasyon · USDOT #2847192',
      'rail.quote': 'Fiyat Teklifi',
      'rail.dispatch': '7/24 Operasyon',
      'hero.eyebrow': '48 Eyalette Özmal Filo Taşıyıcısı · MC #691408',
      'hero.title': 'Amerika Yükünü İleriye Taşıyoruz<br><span class="hero-title-accent">Mil Mil Güvenle.</span>',
      'hero.subtitle': 'Kıyıdan kıyıya kapalı kasa ve ısı kontrollü frigorifik taşımalardan ağır yük platform dorselere kadar IRONROAD, kritik ABD yüklerini 7/24 canlı operasyonla zamanında ulaştırır.',
      'hero.ctaPrimary': 'Hızlı Navlun Teklifi Alın',
      'hero.ctaSecondary': 'Taşımacılık Hizmetlerini İnceleyin',
      'hero.ontime': 'Zamanında',
      'hero.highlightKicker': 'FMCSA Satisfactory Güvenlik Derecesi',
      'hero.highlightText': 'Yeni nesil Class-8 çekiciler ve anlık uydu destekli ELD takibiyle EPA SmartWay Taşımacılık Ortağı.',
      'metrics.states': 'Kapsanan ABD Eyaleti',
      'metrics.units': 'Yeni Nesil Çekici Filosu',
      'metrics.terminals': 'Bölgesel ABD Terminali',
      'metrics.dispatch': 'Şirket İçi ABD Operasyonu',
      'services.eyebrow': 'Taşımacılık ve Operasyon Birimleri',
      'services.title': 'Her Güzergâh ve Yük Tipi İçin Tasarlandı',
      'services.lead': 'Ekipman kapasitesi, transit seçenekleri ve uzman taşıma çözümlerimizi incelemek için aşağıdan bir birim seçin.',
      'services.tab.ftl': "Komple Tır (53' Kapalı Dorse)",
      'services.tab.reefer': 'Isı Kontrollü Frigorifik (Reefer)',
      'services.tab.flatbed': 'Açık Kasa (Flatbed) ve Ağır Yük',
      'services.tab.dedicated': 'Sözleşmeli Özel Filo',
      'services.tab.expedited': 'Çift Sürücülü Ekspres Transit',
      'services.tab.crossdock': 'Liman Drayage ve Cross-Dock',
      'services.cta': 'Bu Ekipman İçin Teklif Al',
      'fleet.eyebrow': 'Modern Amerikan Filosu',
      'fleet.title': 'Özmal Filo Gücü. Aracısız Kesin Operasyon.',
      'fleet.text': 'IRONROAD’a emanet ettiğiniz her yük, deneyimli kadrolu sürücülerimiz ve güvenlik sertifikalı iş ortaklarımızın kullandığı özmal Kenworth, Peterbilt ve Freightliner Class-8 çekicilerimizle taşınır.',
      'fleet.f1.title': '2,4 Yılın Altında Ortalama Çekici Yaşı',
      'fleet.f1.desc': 'Chicago, Dallas ve Atlanta terminallerimizdeki şirket içi periyodik bakım atölyeleri sayesinde yol arızaları sıfıra yakındır.',
      'fleet.f2.title': 'Anlık Uydu ELD ve Frigorifik Telemetri',
      'fleet.f2.desc': 'Paylaşılabilir takip bağlantıları lojistik ekibinize canlı varış süresi (ETA), kapı açılma uyarıları ve kesintisiz sıcaklık kayıtları sunar.',
      'fleet.f3.title': '250.000 $ Yük ve 2 Milyon $ Sorumluluk Sigortası',
      'fleet.f3.desc': 'Tam ticari taşıma yetkisine ek olarak endüstriyel makine ve elektronik yükler için talebe özel yüksek teminat seçenekleri.',
      'fleet.photoTag': 'AĞIR YÜK VE UZUN YOL (OTR)',
      'fleet.photoDesc': 'Ana ABD otoyollarında göreve hazır 1.800+ yeni nesil kapalı dorse, çok bölgeli frigorifik, step-deck ve RGN lowboy.',
      'fleet.spec1': 'Kuru & Frigo',
      'fleet.spec2': 'Flatbed / Step',
      'fleet.spec3': 'Standart GVW',
      'fleet.spec4Val': 'İzinli',
      'fleet.spec4': 'Gabari Dışı Yük',
      'industries.eyebrow': 'Sektörel Uzmanlık',
      'industries.title': 'Tekerlerimize Güvenen Sektörler',
      'industries.lead': 'Her sektörün kendine özgü mevzuatı, randevu penceresi ve elleçleme hassasiyeti vardır. Operasyon uzmanlarımız sektör bazlı çalışarak tüm süreci kusursuz yönetir.',
      'industries.cta': 'Güzergâhınızı Planlayalım',
      'ind.1.title': 'Üretim ve Çelik Sanayi',
      'ind.1.desc': 'Orta Batı ve Güney Kuşağı boyunca rulo sac, yapısal çelik, CNC makineleri ve tam zamanında (JIT) fabrika ikmalleri.',
      'ind.2.title': 'Otomotiv ve Yan Sanayi',
      'ind.2.desc': 'Üretim bantlarını kesintisiz tutmak için planlanmış zaman kesinlikli montaj hattı teslimatları ve çift sürücülü ekspres seferler.',
      'ind.3.title': 'Gıda, İçecek ve Soğuk Zincir',
      'ind.3.desc': 'Dijital ürün ve dorse ısı doğrulamasıyla -20°F ile +70°F arasında tam FSMA uyumlu soğuk zincir taşımacılığı.',
      'ind.4.title': 'Perakende ve Dağıtım Merkezleri',
      'ind.4.desc': 'Ulusal dağıtım merkezleri için yüksek MABD randevu uyumu, EDI 204/214 entegrasyonu ve drop-trailer dorse havuzu.',
      'ind.5.title': 'İnşaat ve Altyapı',
      'ind.5.desc': 'Sertifikalı zincirleme, brandalama ve gabari dışı izin koordinasyonuyla flatbed, Conestoga ve step-deck şantiye teslimatları.',
      'ind.6.title': 'Tarım ve İş Makineleri',
      'ind.6.desc': 'Hasat dönemlerinde ek kapasite desteği ve iç bölgelerdeki üreticileri limanlara bağlayan ağır ekipman taşımacılığı.',
      'network.kicker': 'Kıyıdan Kıyıya Altyapı',
      'network.title': '48 EYALET · 14 TERMİNAL · 6 ANA KORİDOR MERKEZİ',
      'network.sub': 'Hızlı sürücü değişimleri ve cross-dock aktarmaları için I-90, I-80, I-40, I-35, I-95 ve I-5 otoyollarında stratejik konumlandırma.',
      'hub.1.region': 'Orta Batı Genel Merkez',
      'hub.1.desc': 'I-55 koridorunda 7/24 merkezi operasyon, 120 kapılı cross-dock tesisi ve Class-8 bakım merkezi.',
      'hub.2.region': 'Güney Merkez',
      'hub.2.desc': 'I-35 / I-20 kavşağında Meksika sınır geçiş aktarmaları, flatbed hazırlık sahası ve güney eyalet hatları.',
      'hub.3.region': 'Güneydoğu',
      'hub.3.desc': 'Savannah liman bağlantısını bölgesel gıda ve perakende dağıtım merkezlerine bağlayan I-75 / I-85 merkezi.',
      'hub.4.region': 'Batı Kıyısı',
      'hub.4.desc': 'LA / Long Beach liman aktarmaları, doğu yönlü çift sürücülü seferler ve soğuk depolama sunan Inland Empire sahası.',
      'hub.5.region': 'Kuzeydoğu',
      'hub.5.desc': 'Boston’dan Baltimore’a I-95 metropol hattını kapsayan Port Newark / Elizabeth konteyner terminali.',
      'hub.6.region': 'Pasifik Kuzeybatı',
      'hub.6.desc': 'Özel ağır yük ve frigorifik filosuyla I-5 kereste, makine ve Pasifik liman kapısı.',
      'quote.eyebrow': 'Hızlı Fiyatlandırma',
      'quote.title': 'Navlun Teklifi Talep Edin',
      'quote.lead': 'Güzergâh bilgilerinizi aşağıdan iletin. ABD fiyatlandırma masamız spot ve sözleşmeli taleplere 30 dakika içinde yanıt verir.',
      'form.name': 'Ad Soyad ve Şirket *',
      'form.namePh': 'Örn. Ahmet Yılmaz — Anadolu Çelik',
      'form.email': 'İş E-posta Adresi *',
      'form.emailPh': 'operasyon@sirketiniz.com',
      'form.origin': 'Yükleme Şehri, Eyalet *',
      'form.originPh': 'Örn. Chicago, IL',
      'form.destination': 'Teslimat Şehri, Eyalet *',
      'form.destinationPh': 'Örn. Dallas, TX',
      'form.equipment': 'Ekipman / Dorse Tipi *',
      'form.eq.placeholder': 'Dorse tipini seçin...',
      'form.eq.ftl': "53' Kapalı Dorse (FTL)",
      'form.eq.reefer': "53' Frigorifik (Reefer)",
      'form.eq.flatbed': 'Açık Kasa (Flatbed / Step-Deck)',
      'form.eq.heavy': 'Ağır Yük / RGN Lowboy',
      'form.eq.expedited': 'Çift Sürücülü Ekspres',
      'form.eq.drayage': 'Liman Drayage / İntermodal',
      'form.weight': 'Tahmini Ağırlık (lbs)',
      'form.weightPh': 'Örn. 42,000 lbs',
      'form.notes': 'Yük Türü ve Operasyon Notları *',
      'form.notesPh': 'Yükleme tarih aralığı, ürün cinsi, palet adedi, ısı gereksinimi veya branda/liftgate notlarınızı yazın...',
      'form.submit': 'Teklif Talebini Gönder',
      'err.name': 'Lütfen adınızı, soyadınızı ve şirket adını girin.',
      'err.email': 'Lütfen geçerli bir iş e-posta adresi girin.',
      'err.origin': 'Lütfen yükleme şehrini ve eyaletini girin.',
      'err.destination': 'Lütfen teslimat şehrini ve eyaletini girin.',
      'err.equipment': 'Lütfen bir ekipman / dorse tipi seçin.',
      'err.notes': 'Lütfen yük türünü veya operasyon notlarınızı belirtin.',
      'form.success': 'Teklif talebiniz alındı. Chicago operasyon ve fiyatlandırma ekibimiz 30 dakika içinde size dönüş yapacaktır.',
      'dispatch.pill': '7/24 Canlı ABD Operasyonu',
      'dispatch.title': 'Bugün Araç mı Lazım? Doğrudan Operasyonu Arayın.',
      'dispatch.sub': 'Sesli yanıt menülerini geçin. Chicago genel merkezimizdeki özmal filo operatörüyle doğrudan görüşün.',
      'dispatch.phoneLabel': '7/24 Operasyon Hattı',
      'dispatch.emailLabel': 'Teklif ve Sevkiyat Talepleri',
      'dispatch.authLabel': 'Resmi Taşıma Yetkileri',
      'dispatch.hqLabel': 'Merkez Terminal (HQ)',
      'dispatch.mapBadge': 'Terminal Haritası · I-55 Koridoru',
      'footer.about': '2004’ten bu yana 48 ABD eyaletinde özmal filosuyla kapalı dorse, frigorifik, açık kasa ve özel filo taşımacılığı sunan kurumsal taşıyıcı.',
      'footer.divisions': 'Birimlerimiz',
      'footer.div1': 'Komple Tır (Kapalı Dorse)',
      'footer.div2': 'Soğuk Zincir Frigorifik',
      'footer.div3': 'Açık Kasa ve Ağır Yük',
      'footer.div4': 'Sözleşmeli Özel Filo',
      'footer.company': 'Kurumsal',
      'footer.comp1': 'Ekipman ve Güvenlik',
      'footer.comp2': 'Hizmet Verilen Sektörler',
      'footer.comp3': 'ABD Terminalleri',
      'footer.comp4': 'Navlun Teklifi Al',
      'footer.hq': 'Genel Merkez',
      'cert.1': 'FMCSA SATISFACTORY',
      'cert.2': 'EPA SMARTWAY ORTAĞI',
      'cert.3': 'C-TPAT SERTİFİKALI',
      'cert.4': 'TWIC LİMAN ERİŞİMİ',
      'cert.5': 'HAZMAT YETKİLİ',
      'cert.6': 'CARB UYUMLU',
      'footer.copy': '© 2026 IRONROAD FREIGHT LINES LLC. Tüm hakları saklıdır. USDOT #2847192 · MC #691408.'
    }
  };

  var servicesData = {
    en: {
      ftl: {
        kicker: 'Division 01 · Nationwide OTR',
        title: "Full Truckload (53' Dry Van)",
        desc: 'High-cube 53-foot air-ride dry vans engineered for regional and transcontinental point-to-point freight. We maintain a 3:1 trailer-to-tractor ratio so your docks can run drop-and-hook programs without driver detention.',
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'IRONROAD semi-trucks lined up at a freight distribution terminal',
        specs: ['Max Payload: 45,000 lbs', "53' Air-Ride Trailers", 'Drop-Trailer Pools'],
        bullets: [
          'Direct door-to-door OTR transit across all 48 contiguous states',
          'GPS geofencing with automated arrival and POD notifications',
          'Flexible drop-trailer pools for high-volume shippers'
        ],
        equipmentOption: "53' Dry Van (FTL)"
      },
      reefer: {
        kicker: 'Division 02 · Cold Chain',
        title: 'Temperature-Controlled Reefer',
        desc: 'Precision-monitored refrigerated trailers protecting food, beverage, and pharmaceutical freight from -20°F deep freeze to +70°F climate-controlled loads with two-way satellite telemetry.',
        image: 'assets/images/hero-truck.jpg',
        alt: 'American semi-truck hauling freight down an interstate highway at sunset',
        specs: ['-20°F to +70°F Range', 'FSMA Compliant', '2-Way Temp Alerts'],
        bullets: [
          'Continuous digital temperature logging with instant exception alerts',
          'Pre-cooled trailer verification prior to dock arrival',
          'Multi-temp dual-zone units for mixed grocery and cold-chain runs'
        ],
        equipmentOption: "53' Refrigerated (Reefer)"
      },
      flatbed: {
        kicker: 'Division 03 · Open Deck & Over-Dimensional',
        title: 'Flatbed & Heavy Haul',
        desc: 'Heavy-duty flatbeds, step-decks, Conestoga rolling-tarp trailers, and RGN lowboys built for structural steel, machinery, lumber, and permitted oversize industrial freight.',
        image: 'assets/images/heavy-haul.jpg',
        alt: 'American Class-8 flatbed semi-truck hauling heavy structural steel girders on a highway',
        specs: ['48,000+ lb Capacity', '4ft–8ft Lumber Tarps', 'Oversize Permits'],
        bullets: [
          'Full state permit, pilot car, and route-survey coordination',
          'Certified coil racks, chains, binders, and weatherproof tarping',
          'Experienced open-deck drivers trained in heavy securement'
        ],
        equipmentOption: 'Flatbed / Step-Deck'
      },
      dedicated: {
        kicker: 'Division 04 · Contract Capacity',
        title: 'Dedicated Contract Fleet',
        desc: 'Guaranteed trucks, assigned company drivers, and custom KPI reporting locked exclusively to your distribution network—giving you private-fleet reliability without capital overhead.',
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'Dedicated IRONROAD truck fleet parked cleanly at a modern freight terminal',
        specs: ['Guaranteed Power', 'Custom KPI Reports', 'Multi-Stop Routing'],
        bullets: [
          'Locked-in contract rates immune to spot-market volatility',
          'On-site account managers and custom EDI / API integration',
          'Scalable seasonal surge trucks drawn from our OTR fleet'
        ],
        equipmentOption: "53' Dry Van (FTL)"
      },
      expedited: {
        kicker: 'Division 05 · Time-Critical',
        title: 'Expedited Team Transit',
        desc: 'Two-driver sleeper teams that keep wheels rolling 22 hours a day for coast-to-coast deadlines, plant-down emergencies, and high-value retail product launches.',
        image: 'assets/images/hero-truck.jpg',
        alt: 'Sleeper cab semi-truck running non-stop team transit on an American highway',
        specs: ['Coast-to-Coast in 48–60h', 'Dual-Driver Teams', 'Priority Dispatch'],
        bullets: [
          'Non-stop transit eliminating single-driver HOS layovers',
          'Proactive check-calls every 4 hours plus live tracking links',
          'High-security locks and geofenced stop protocols'
        ],
        equipmentOption: 'Expedited Team'
      },
      crossdock: {
        kicker: 'Division 06 · Port & Terminal Ops',
        title: 'Port Drayage & Cross-Dock',
        desc: 'TWIC-certified port drayage at LA/Long Beach, Newark, Savannah, and Tacoma paired with high-speed container transloading into 53-foot domestic dry vans.',
        image: 'assets/images/heavy-haul.jpg',
        alt: 'Heavy freight carrier operating along major U.S. interstate corridors',
        specs: ['TWIC Certified', 'Own Chassis Pool', 'Same-Day Transload'],
        bullets: [
          'Rapid pier pull and chassis availability avoiding demurrage fees',
          '14 U.S. cross-dock facilities for palletization and consolidation',
          'Direct inland OTR forwarding to regional distribution centers'
        ],
        equipmentOption: 'Port Drayage / Intermodal'
      }
    },
    tr: {
      ftl: {
        kicker: 'Birim 01 · ABD Geneli Uzun Yol (OTR)',
        title: "Komple Tır (53' Kapalı Dorse)",
        desc: 'Bölgesel ve kıyıdan kıyıya noktadan noktaya yükler için tasarlanmış yüksek hacimli 53 fit hava süspansiyonlu kapalı dorseler. 3:1 dorse/çekici oranımız sayesinde rampalarınızda beklemesiz drop-and-hook operasyonları yürütebilirsiniz.',
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'Lojistik dağıtım terminalinde sıralanmış IRONROAD tırları',
        specs: ['Maks. Yük: 45,000 lbs', "53' Hava Süspansiyon", 'Drop-Trailer Havuzu'],
        bullets: [
          '48 ABD eyaletinin tamamında kapıdan kapıya direkt uzun yol (OTR) teslimat',
          'GPS coğrafi çitleme ile otomatik varış ve teslimat belgesi (POD) bildirimleri',
          'Yüksek hacimli yükleyiciler için esnek yedek dorse (drop-trailer) havuzu'
        ],
        equipmentOption: "53' Dry Van (FTL)"
      },
      reefer: {
        kicker: 'Birim 02 · Soğuk Zincir',
        title: 'Isı Kontrollü Frigorifik (Reefer)',
        desc: 'Çift yönlü uydu telemetrisiyle gıda, içecek ve medikal yüklerinizi -20°F derin dondurucudan +70°F iklimlendirilmiş sıcaklıklara kadar kesintisiz koruyan modern frigorifik dorseler.',
        image: 'assets/images/hero-truck.jpg',
        alt: 'Gün batımında otoyolda ilerleyen Amerikan nakliye tırı',
        specs: ['-20°F / +70°F Aralığı', 'FSMA Uyumlu', 'Anlık Isı Uyarısı'],
        bullets: [
          'Kesintisiz dijital sıcaklık kaydı ve sapma anında otomatik alarm',
          'Rampaya yanaşmadan önce ön soğutma doğrulama protokolü',
          'Karma gıda ve soğuk zincir hatları için çift bölgeli çoklu ısı üniteleri'
        ],
        equipmentOption: "53' Refrigerated (Reefer)"
      },
      flatbed: {
        kicker: 'Birim 03 · Açık Kasa ve Gabari Dışı',
        title: 'Açık Kasa (Flatbed) ve Ağır Yük',
        desc: 'Yapısal çelik, endüstriyel makine, kereste ve özel izinli gabari dışı yükler için yüksek dayanımlı flatbed, step-deck, Conestoga sürgülü branda ve RGN lowboy çözümleri.',
        image: 'assets/images/heavy-haul.jpg',
        alt: 'Otoyolda yapısal çelik kiriş taşıyan ağır yük flatbed tırı',
        specs: ['48,000+ lb Kapasite', '4–8 ft Branda Ekipmanı', 'Özel Yol İzinleri'],
        bullets: [
          'Eyalet bazlı yol izinleri, eskort araç ve güzergâh etüdü koordinasyonu',
          'Sertifikalı rulo sac beşikleri, zincir, gergi ve su geçirmez brandalama',
          'Ağır yük sabitleme eğitimli deneyimli açık kasa sürücü kadrosu'
        ],
        equipmentOption: 'Flatbed / Step-Deck'
      },
      dedicated: {
        kicker: 'Birim 04 · Sözleşmeli Kapasite',
        title: 'Sözleşmeli Özel Filo',
        desc: 'Yalnızca sizin dağıtım ağınıza tahsis edilmiş garantili çekiciler, daimi kadrolu sürücüler ve özel KPI raporlamasıyla sabit yatırım yükü olmadan özel filo güvenilirliği.',
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'Modern terminalde konuşlandırılmış sözleşmeli IRONROAD filosu',
        specs: ['Garantili Araç Gücü', 'Özel KPI Raporları', 'Çok Noktalı Dağıtım'],
        bullets: [
          'Spot piyasa dalgalanmalarından etkilenmeyen sabit sözleşme tarifeleri',
          'Özel müşteri yöneticisi ve EDI / API sistem entegrasyonu',
          'Sezonluk yoğunluklarda uzun yol filomuzdan anında ek araç desteği'
        ],
        equipmentOption: "53' Dry Van (FTL)"
      },
      expedited: {
        kicker: 'Birim 05 · Zaman Kritik Sevkiyat',
        title: 'Çift Sürücülü Ekspres Transit',
        desc: 'Kıyıdan kıyıya acil terminler, hat durma riski taşıyan fabrika acilleri ve yüksek değerli perakende lansmanları için günde 22 saat kesintisiz ilerleyen çift sürücülü ekipler.',
        image: 'assets/images/hero-truck.jpg',
        alt: 'Kesintisiz çift sürücülü ekspres sefer yapan uzun yol tırı',
        specs: ['48–60 Saatte Kıyıdan Kıyıya', 'Çift Sürücü Ekibi', 'Öncelikli Operasyon'],
        bullets: [
          'Tek sürücü dinlenme molalarını ortadan kaldıran kesintisiz transit akışı',
          'Her 4 saatte bir proaktif durum bilgilendirmesi ve canlı takip linki',
          'Yüksek güvenlikli kilit sistemleri ve coğrafi çitli mola protokolleri'
        ],
        equipmentOption: 'Expedited Team'
      },
      crossdock: {
        kicker: 'Birim 06 · Liman ve Terminal Operasyonu',
        title: 'Liman Drayage ve Cross-Dock',
        desc: 'LA/Long Beach, Newark, Savannah ve Tacoma limanlarında TWIC sertifikalı konteyner çekimi ve 53 fitlik iç hat dorselerine aynı gün hızlı aktarma (transloading).',
        image: 'assets/images/heavy-haul.jpg',
        alt: 'Ana ABD otoyol koridorlarında görev yapan ağır yük taşıyıcısı',
        specs: ['TWIC Sertifikalı', 'Özmal Şasi Havuzu', 'Aynı Gün Aktarma'],
        bullets: [
          'Demuraj maliyetlerini önleyen hızlı liman çıkışı ve hazır şasi temini',
          'Paletleme ve konsolidasyon için 14 bölgesel ABD cross-dock tesisi',
          'Bölgesel dağıtım merkezlerine doğrudan iç hat uzun yol yönlendirmesi'
        ],
        equipmentOption: 'Port Drayage / Intermodal'
      }
    }
  };

  /* ------------------------------------------------------------------------
     1. Mobile Menu Open & Close
     ------------------------------------------------------------------------ */
  var menuToggle = document.querySelector('.menu-toggle');
  var siteNav = document.querySelector('#primary-nav');

  function setMenuOpen(isOpen) {
    if (!menuToggle || !siteNav) {
      return;
    }
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    siteNav.classList.toggle('is-open', isOpen);
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!expanded);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (!siteNav.classList.contains('is-open')) {
        return;
      }
      if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
        setMenuOpen(false);
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. Smooth In-Page Navigation
     ------------------------------------------------------------------------ */
  var header = document.querySelector('.site-header');
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') {
        return;
      }
      var targetEl = document.querySelector(targetId);
      if (!targetEl) {
        return;
      }

      event.preventDefault();
      setMenuOpen(false);

      var offset = header ? header.offsetHeight : 0;
      var targetTop = targetId === '#top'
        ? 0
        : targetEl.getBoundingClientRect().top + window.scrollY - offset;

      var prefersReduced = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: prefersReduced ? 'auto' : 'smooth'
      });
    });
  });

  /* ------------------------------------------------------------------------
     3. Interactive Services Explorer
     ------------------------------------------------------------------------ */
  var serviceTabs = document.querySelectorAll('.service-tab');
  var stageImage = document.querySelector('#service-image');
  var stageSpecs = document.querySelector('#service-specs');
  var stageKicker = document.querySelector('#service-kicker');
  var stageTitle = document.querySelector('#service-title');
  var stageDesc = document.querySelector('#service-desc');
  var stageBullets = document.querySelector('#service-bullets');
  var stageCta = document.querySelector('#service-cta');
  var equipmentSelect = document.querySelector('#q-equipment');

  var activeEquipmentOption = servicesData.en.ftl.equipmentOption;

  function renderService(key) {
    var langPack = servicesData[currentLang] || servicesData.en;
    var data = langPack[key];
    if (!data) {
      return;
    }

    activeServiceKey = key;
    activeEquipmentOption = data.equipmentOption;

    if (stageImage) {
      stageImage.src = data.image;
      stageImage.alt = data.alt;
    }
    if (stageKicker) {
      stageKicker.textContent = data.kicker;
    }
    if (stageTitle) {
      stageTitle.textContent = data.title;
    }
    if (stageDesc) {
      stageDesc.textContent = data.desc;
    }
    if (stageSpecs) {
      stageSpecs.innerHTML = '';
      data.specs.forEach(function (spec) {
        var span = document.createElement('span');
        span.textContent = spec;
        stageSpecs.appendChild(span);
      });
    }
    if (stageBullets) {
      stageBullets.innerHTML = '';
      data.bullets.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        stageBullets.appendChild(li);
      });
    }
  }

  serviceTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var key = tab.getAttribute('data-service');
      serviceTabs.forEach(function (btn) {
        var isCurrent = btn === tab;
        btn.classList.toggle('is-active', isCurrent);
        btn.setAttribute('aria-selected', String(isCurrent));
      });
      renderService(key);
    });
  });

  if (stageCta && equipmentSelect) {
    stageCta.addEventListener('click', function () {
      equipmentSelect.value = activeEquipmentOption;
    });
  }

  /* ------------------------------------------------------------------------
     4. Quote Form Client-Side Validation & Success State
     ------------------------------------------------------------------------ */
  var quoteForm = document.querySelector('#quote-form');
  var quoteStatus = document.querySelector('#quote-status');
  var fields = null;

  if (quoteForm) {
    fields = {
      name: {
        input: quoteForm.querySelector('#q-name'),
        error: quoteForm.querySelector('#err-name'),
        errKey: 'err.name'
      },
      email: {
        input: quoteForm.querySelector('#q-email'),
        error: quoteForm.querySelector('#err-email'),
        errKey: 'err.email'
      },
      origin: {
        input: quoteForm.querySelector('#q-origin'),
        error: quoteForm.querySelector('#err-origin'),
        errKey: 'err.origin'
      },
      destination: {
        input: quoteForm.querySelector('#q-destination'),
        error: quoteForm.querySelector('#err-destination'),
        errKey: 'err.destination'
      },
      equipment: {
        input: quoteForm.querySelector('#q-equipment'),
        error: quoteForm.querySelector('#err-equipment'),
        errKey: 'err.equipment'
      },
      notes: {
        input: quoteForm.querySelector('#q-notes'),
        error: quoteForm.querySelector('#err-notes'),
        errKey: 'err.notes'
      }
    };

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function t(key) {
      var dict = i18n[currentLang] || i18n.en;
      return dict[key] || i18n.en[key] || '';
    }

    function setFieldError(field, message) {
      field.error.textContent = message;
      if (message) {
        field.input.setAttribute('aria-invalid', 'true');
      } else {
        field.input.removeAttribute('aria-invalid');
      }
    }

    function clearStatus() {
      formSubmittedSuccess = false;
      if (!quoteStatus) {
        return;
      }
      quoteStatus.textContent = '';
      quoteStatus.className = 'form-status';
    }

    function validateField(key) {
      var field = fields[key];
      var val = field.input.value.trim();
      if (!val) {
        setFieldError(field, t(field.errKey));
        return false;
      }
      if (key === 'email' && !emailRegex.test(val)) {
        setFieldError(field, t('err.email'));
        return false;
      }
      setFieldError(field, '');
      return true;
    }

    Object.keys(fields).forEach(function (key) {
      var eventName = fields[key].input.tagName === 'SELECT' ? 'change' : 'input';
      fields[key].input.addEventListener(eventName, function () {
        if (fields[key].input.getAttribute('aria-invalid') === 'true') {
          validateField(key);
        }
        clearStatus();
      });
    });

    quoteForm.addEventListener('submit', function (event) {
      event.preventDefault();
      clearStatus();

      var firstInvalid = null;
      Object.keys(fields).forEach(function (key) {
        var valid = validateField(key);
        if (!valid && !firstInvalid) {
          firstInvalid = fields[key].input;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      quoteForm.reset();
      Object.keys(fields).forEach(function (key) {
        setFieldError(fields[key], '');
      });

      formSubmittedSuccess = true;
      if (quoteStatus) {
        quoteStatus.textContent = t('form.success');
        quoteStatus.className = 'form-status form-status--success';
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. Language Switching Engine (EN default / TR)
     ------------------------------------------------------------------------ */
  var langButtons = document.querySelectorAll('.lang-btn');
  var metaDesc = document.querySelector('meta[name="description"]');

  function applyLanguage(lang, persist) {
    if (!i18n[lang]) {
      lang = 'en';
    }
    currentLang = lang;
    var dict = i18n[lang];

    document.documentElement.lang = lang;
    document.title = dict.pageTitle;
    if (metaDesc) {
      metaDesc.setAttribute('content', dict.pageDesc);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    langButtons.forEach(function (btn) {
      var isSelected = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
    });

    // Re-render active service tab in selected language
    renderService(activeServiceKey);

    // Refresh any currently visible form errors or success notice
    if (fields) {
      Object.keys(fields).forEach(function (key) {
        if (fields[key].input.getAttribute('aria-invalid') === 'true') {
          fields[key].error.textContent = dict[fields[key].errKey];
        }
      });
    }
    if (formSubmittedSuccess && quoteStatus) {
      quoteStatus.textContent = dict['form.success'];
    }

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {
        // Ignore storage errors in restricted contexts
      }
    }
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var selected = btn.getAttribute('data-lang');
      applyLanguage(selected, true);
    });
  });

  // Determine initial language: ?lang=tr|en -> saved preference -> English default
  var initialLang = 'en';
  try {
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    if (urlLang && i18n[urlLang]) {
      initialLang = urlLang;
    } else {
      var savedLang = window.localStorage.getItem(STORAGE_KEY);
      if (savedLang && i18n[savedLang]) {
        initialLang = savedLang;
      }
    }
  } catch (e) {
    initialLang = 'en';
  }

  applyLanguage(initialLang, false);
})();
