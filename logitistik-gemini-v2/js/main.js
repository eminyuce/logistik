(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     0. Bilingual Dictionary — TROY FREIGHT LLC (English default + Turkish)
     ------------------------------------------------------------------------ */
  var STORAGE_KEY = 'troyfreight_lang';
  var currentLang = 'en';
  var activeServiceKey = 'relay';
  var formSubmittedSuccess = false;

  var i18n = {
    en: {
      pageTitle: 'TROY FREIGHT LLC | U.S. Amazon Linehaul & Nationwide Freight Carrier',
      pageDesc: "TROY FREIGHT LLC is a U.S. interstate trucking carrier specializing in Amazon Fulfillment Center linehaul, Power-Only Relay freight, and 53' Dry Van OTR across 48 states.",
      skip: 'Skip to main content',
      'nav.services': 'Services',
      'nav.fleet': 'Fleet',
      'nav.industries': 'Operations',
      'nav.terminals': 'U.S. Network',
      'nav.quote': 'Request a Quote',
      'nav.dispatch': 'Dispatch',
      'header.meta': '24/7 U.S. Dispatch · Active USDOT & MC',
      'rail.quote': 'Rate Quote',
      'rail.dispatch': '24/7 Dispatch',
      'hero.eyebrow': 'TROY FREIGHT LLC · U.S. Amazon Linehaul & OTR Carrier',
      'hero.title': 'Moving Amazon Freight<br><span class="hero-title-accent">Across America On Time.</span>',
      'hero.subtitle': "TROY FREIGHT LLC is an asset-based U.S. motor carrier specializing in Amazon Fulfillment Center middle-mile linehaul, Power-Only Relay runs, and 53' dry van freight with our modern red Freightliner Cascadia fleet.",
      'hero.ctaPrimary': 'Request Freight Capacity',
      'hero.ctaSecondary': 'Explore Our Services',
      'hero.ontime': 'On-Time',
      'hero.highlightKicker': 'Top-Tier Amazon Relay Scorecard',
      'hero.highlightText': 'Late-model Freightliner Cascadia tractors with live ELD GPS tracking, strict dock-appointment adherence, and 24/7 U.S. dispatch.',
      'metrics.states': 'U.S. States Served',
      'metrics.units': 'Relay On-Time Rate',
      'metrics.terminals': 'Amazon Hub Coverage',
      'metrics.dispatch': 'Live U.S. Dispatch',
      'services.eyebrow': 'TROY FREIGHT LLC Divisions',
      'services.title': 'Built for Amazon Linehaul & High-Velocity U.S. Freight',
      'services.lead': "Select a division below to explore our Amazon middle-mile operations, Power-Only programs, and nationwide 53' dry van capabilities.",
      'services.tab.relay': 'Amazon Relay Middle-Mile',
      'services.tab.poweronly': 'Power-Only & Drop-and-Hook',
      'services.tab.ftl': "53' Dry Van Full Truckload",
      'services.tab.peak': 'Peak Season & Surge Support',
      'services.tab.expedited': 'Expedited Team Transit',
      'services.tab.dedicated': 'Dedicated Contract Lanes',
      'services.cta': 'Request This Service',
      'fleet.eyebrow': 'TROY FREIGHT LLC Fleet',
      'fleet.title': 'Modern Red Freightliner Cascadia Power. Built for Zero Downtime.',
      'fleet.text': 'High-velocity e-commerce and Amazon fulfillment schedules leave zero room for breakdowns. TROY FREIGHT LLC operates late-model 2020+ Freightliner Cascadia Class-8 tractors and clean 53-foot dry van trailers backed by strict preventative maintenance.',
      'fleet.f1.title': '2020+ Freightliner Cascadia Sleeper Fleet',
      'fleet.f1.desc': 'Fuel-efficient Detroit Diesel powertrains, collision-mitigation safety systems, and scheduled DOT inspections keep every load moving smoothly.',
      'fleet.f2.title': 'Real-Time ELD GPS & Relay Integration',
      'fleet.f2.desc': 'Live breadcrumb tracking, automated yard arrival updates, and proactive exception communication directly from our U.S. dispatch desk.',
      'fleet.f3.title': 'Full FMCSA Compliance & Cargo Protection',
      'fleet.f3.desc': 'Active U.S. Interstate Operating Authority with comprehensive primary auto liability and high-value e-commerce cargo insurance coverage.',
      'fleet.photoTag': 'DROP-AND-HOOK READY',
      'fleet.photoDesc': "Red Freightliner Cascadia tractors and 53' air-ride trailers engineered for high-frequency Amazon Fulfillment Center turns and nationwide OTR lanes.",
      'fleet.spec1': 'Dry Van & Relay',
      'fleet.spec2': 'Cascadia Fleet',
      'fleet.spec3': 'Standard GVW',
      'fleet.spec4Val': '100%',
      'fleet.spec4': 'ELD Tracked',
      'industries.eyebrow': 'U.S. Freight Operations',
      'industries.title': 'Where TROY FREIGHT LLC Delivers Every Day',
      'industries.lead': 'From tight Amazon Fulfillment Center appointment windows to national retail distribution centers, our drivers and dispatchers execute high-compliance freight across America.',
      'industries.cta': 'Partner With TROY FREIGHT',
      'ind.1.title': 'Amazon Fulfillment Centers (FC)',
      'ind.1.desc': 'High-volume middle-mile freight moving seamlessly between regional and cross-country fulfillment facilities with A+ scorecard discipline.',
      'ind.2.title': 'Sort Centers & Delivery Stations',
      'ind.2.desc': 'Time-critical overnight and daytime relay runs feeding sortation centers and last-mile stations ahead of customer delivery cutoffs.',
      'ind.3.title': 'E-Commerce & Parcel Consolidation',
      'ind.3.desc': "High-cube 53' dry van linehaul supporting national e-commerce merchants, 3PL warehouses, and cross-dock transfer hubs.",
      'ind.4.title': 'Retail & Big-Box Distribution',
      'ind.4.desc': 'Strict MABD appointment adherence, drop-and-hook execution, and live visibility for major U.S. retail distribution networks.',
      'ind.5.title': 'Consumer Packaged Goods (CPG)',
      'ind.5.desc': 'Clean, food-grade dry van trailers hauling palletized household goods, beverages, and packaged retail inventory nationwide.',
      'ind.6.title': 'Prime Day & Q4 Holiday Peak',
      'ind.6.desc': "Dedicated surge capacity, extended weekend blocks, and team-driver coverage built for America's busiest e-commerce seasons.",
      'network.kicker': 'Coast-to-Coast U.S. Operations',
      'network.title': '48 STATES · MAJOR AMAZON & INTERSTATE CORRIDORS',
      'network.sub': "Operating daily along I-90, I-80, I-40, I-35, I-95, and I-5 linking America's highest-volume fulfillment clusters and port gateways.",
      'hub.1.region': 'Midwest Corridor',
      'hub.1.desc': 'High-frequency I-55, I-80, and I-65 fulfillment lanes linking Chicagoland, Joliet, and Indianapolis hubs.',
      'hub.2.region': 'South Central',
      'hub.2.desc': 'Daily I-35 and I-20 linehaul connecting DFW, Houston, and San Antonio fulfillment and sort centers.',
      'hub.3.region': 'Southeast',
      'hub.3.desc': 'I-75 and I-85 middle-mile lanes serving Atlanta metro, Charlotte, and Savannah port distribution hubs.',
      'hub.4.region': 'West Coast',
      'hub.4.desc': 'Major Southern California fulfillment and port-transload corridor with outbound team runs across the Southwest.',
      'hub.5.region': 'Northeast',
      'hub.5.desc': 'Dense I-95 and I-78 fulfillment network covering New Jersey, Lehigh Valley, Baltimore, and New England.',
      'hub.6.region': 'Pacific Northwest',
      'hub.6.desc': 'I-5 and I-90 regional and long-haul lanes supporting Pacific Northwest e-commerce fulfillment operations.',
      'quote.eyebrow': 'Shippers, Brokers & Dedicated Lanes',
      'quote.title': 'Request Capacity or a Freight Quote',
      'quote.lead': "Need reliable U.S. linehaul, Power-Only tractors, or 53' dry van capacity? Send your lane details and our TROY FREIGHT LLC dispatch desk will respond within 30 minutes.",
      'form.name': 'Full Name & Company *',
      'form.namePh': 'e.g. Jordan Miller — Midwest Fulfillment',
      'form.email': 'Work Email *',
      'form.emailPh': 'operations@company.com',
      'form.origin': 'Origin City, State / Facility *',
      'form.originPh': 'e.g. Joliet, IL (MDW2)',
      'form.destination': 'Destination City, State / Facility *',
      'form.destinationPh': 'e.g. Dallas, TX (DFW7)',
      'form.equipment': 'Service / Equipment Type *',
      'form.eq.placeholder': 'Select service type...',
      'form.eq.relay': 'Amazon Relay Middle-Mile Linehaul',
      'form.eq.poweronly': 'Power-Only / Drop-and-Hook',
      'form.eq.ftl': "53' Dry Van Full Truckload (FTL)",
      'form.eq.peak': 'Peak Season Surge Capacity',
      'form.eq.expedited': 'Expedited Team Transit',
      'form.eq.dedicated': 'Dedicated Contract Lane',
      'form.weight': 'Est. Weight / Weekly Loads',
      'form.weightPh': 'e.g. 38,000 lbs or 10 loads/week',
      'form.notes': 'Schedule & Load Notes *',
      'form.notesPh': 'Share pickup window, drop-and-hook requirements, facility codes, or dedicated contract frequency...',
      'form.submit': 'Submit Capacity Request',
      'err.name': 'Please enter your name and company.',
      'err.email': 'Please enter a valid work email address.',
      'err.origin': 'Please enter an origin city, state, or facility.',
      'err.destination': 'Please enter a destination city, state, or facility.',
      'err.equipment': 'Please select a service or equipment type.',
      'err.notes': 'Please share your schedule or load notes.',
      'form.success': 'Request received. Our TROY FREIGHT LLC dispatch desk will respond within 30 minutes.',
      'dispatch.pill': '24/7 Live U.S. Dispatch',
      'dispatch.title': 'Need Power Today? Contact TROY FREIGHT Dispatch.',
      'dispatch.sub': "Direct communication with our U.S. asset dispatchers for Amazon linehaul, Power-Only turns, and nationwide 53' dry van loads.",
      'dispatch.phoneLabel': '24/7 Dispatch Line',
      'dispatch.emailLabel': 'Dispatch & Freight Quotes',
      'dispatch.authLabel': 'Operating Authority',
      'dispatch.authValue': 'U.S. Interstate Carrier · Active USDOT & MC · Amazon Relay Partner',
      'dispatch.hqLabel': 'U.S. Operations Base',
      'dispatch.mapBadge': 'U.S. Operations · I-55 / I-80 Hub',
      'footer.about': "TROY FREIGHT LLC is a U.S.-based interstate motor carrier hauling Amazon Fulfillment Center linehaul, Power-Only Relay loads, and 53' dry van freight across America.",
      'footer.divisions': 'Services',
      'footer.div1': 'Amazon Relay Linehaul',
      'footer.div2': 'Power-Only & Drop-Hook',
      'footer.div3': "53' Dry Van FTL",
      'footer.div4': 'Dedicated Contract Lanes',
      'footer.company': 'Company',
      'footer.comp1': 'Cascadia Fleet & Safety',
      'footer.comp2': 'Freight Operations',
      'footer.comp3': 'U.S. Freight Corridors',
      'footer.comp4': 'Request Capacity',
      'footer.hq': 'U.S. Dispatch',
      'cert.1': 'AMAZON RELAY CARRIER',
      'cert.2': 'FMCSA COMPLIANT',
      'cert.3': 'ELD GPS TRACKED',
      'cert.4': '48-STATE AUTHORITY',
      'cert.5': '24/7 U.S. DISPATCH',
      'cert.6': "POWER-ONLY & 53' DRY VAN",
      'footer.copy': '© 2026 TROY FREIGHT LLC. All rights reserved. Operating across the United States.'
    },
    tr: {
      pageTitle: 'TROY FREIGHT LLC | ABD Amazon Hat Taşımacılığı ve Karayolu Lojistik',
      pageDesc: "TROY FREIGHT LLC, ABD genelinde 48 eyalette Amazon Fulfillment Center hat taşımacılığı, Power-Only Relay seferleri ve 53' Dry Van komple tır taşımacılığı yapan kurumsal Amerikan taşıyıcısıdır.",
      skip: 'Ana içeriğe atla',
      'nav.services': 'Hizmetler',
      'nav.fleet': 'Filo',
      'nav.industries': 'Operasyonlar',
      'nav.terminals': 'ABD Ağı',
      'nav.quote': 'Teklif Al',
      'nav.dispatch': 'Operasyon',
      'header.meta': '7/24 ABD Operasyonu · Aktif USDOT & MC',
      'rail.quote': 'Fiyat Teklifi',
      'rail.dispatch': '7/24 Operasyon',
      'hero.eyebrow': 'TROY FREIGHT LLC · ABD Amazon Hat ve Uzun Yol Taşıyıcısı',
      'hero.title': 'Amazon Yüklerini Amerika Boyunca<br><span class="hero-title-accent">Zamanında Taşıyoruz.</span>',
      'hero.subtitle': "TROY FREIGHT LLC; modern kırmızı Freightliner Cascadia filosuyla ABD genelinde Amazon Fulfillment Center orta mil hat taşımacılığı, Power-Only Relay seferleri ve 53' kapalı dorse taşımacılığı sunan özmal filolu bir Amerikan taşıyıcısıdır.",
      'hero.ctaPrimary': 'Araç ve Kapasite Talep Et',
      'hero.ctaSecondary': 'Hizmetlerimizi İnceleyin',
      'hero.ontime': 'Zamanında',
      'hero.highlightKicker': 'Üst Düzey Amazon Relay Performans Skoru',
      'hero.highlightText': 'Yeni nesil Freightliner Cascadia çekiciler, canlı ELD GPS takibi, kesin rampa randevu uyumu ve 7/24 ABD merkezli operasyon.',
      'metrics.states': 'Hizmet Verilen ABD Eyaleti',
      'metrics.units': 'Relay Zamanında Teslimat',
      'metrics.terminals': 'Amazon Merkez Kapsaması',
      'metrics.dispatch': 'Canlı ABD Operasyonu',
      'services.eyebrow': 'TROY FREIGHT LLC Birimleri',
      'services.title': 'Amazon Hat Taşımacılığı ve Yüksek Hızlı ABD Yükleri İçin Tasarlandı',
      'services.lead': "Amazon orta mil operasyonlarımızı, Power-Only programlarımızı ve ABD geneli 53' kapalı dorse çözümlerimizi incelemek için aşağıdan bir hizmet seçin.",
      'services.tab.relay': 'Amazon Relay Orta Mil Hattı',
      'services.tab.poweronly': 'Power-Only ve Drop-and-Hook',
      'services.tab.ftl': "53' Kapalı Dorse Komple Tır (FTL)",
      'services.tab.peak': 'Yoğun Sezon (Peak) Kapasite Desteği',
      'services.tab.expedited': 'Çift Sürücülü Ekspres Transit',
      'services.tab.dedicated': 'Sözleşmeli Özel Hatlar',
      'services.cta': 'Bu Hizmet İçin Teklif Al',
      'fleet.eyebrow': 'TROY FREIGHT LLC Filosu',
      'fleet.title': 'Modern Kırmızı Freightliner Cascadia Gücü. Kesintisiz Operasyon.',
      'fleet.text': "Yüksek tempolu e-ticaret ve Amazon depo takvimlerinde arızaya yer yoktur. TROY FREIGHT LLC, düzenli önleyici bakımdan geçen 2020+ model kırmızı Freightliner Cascadia Class-8 çekiciler ve temiz 53' kapalı dorselerle hizmet verir.",
      'fleet.f1.title': '2020+ Freightliner Cascadia Çekici Filosu',
      'fleet.f1.desc': 'Yakıt verimli Detroit Diesel motorlar, çarpışma önleyici güvenlik sistemleri ve planlı DOT kontrolleriyle her sefer sorunsuz ilerler.',
      'fleet.f2.title': 'Anlık ELD GPS ve Relay Entegrasyonu',
      'fleet.f2.desc': 'Canlı konum takibi, otomatik saha varış güncellemeleri ve ABD operasyon masamızdan doğrudan proaktif durum bilgilendirmesi.',
      'fleet.f3.title': 'Tam FMCSA Uyumluluğu ve Yük Güvencesi',
      'fleet.f3.desc': 'Aktif ABD eyaletler arası taşıma yetkisi, kapsamlı trafik sorumluluk sigortası ve yüksek değerli e-ticaret yük teminatı.',
      'fleet.photoTag': 'DROP-AND-HOOK HAZIR FİLO',
      'fleet.photoDesc': "Sık dönüşlü Amazon Fulfillment Center seferleri ve ABD geneli uzun yol hatları için hazırlanmış kırmızı Freightliner Cascadia çekiciler ve 53' hava süspansiyonlu dorseler.",
      'fleet.spec1': 'Dry Van & Relay',
      'fleet.spec2': 'Cascadia Filo',
      'fleet.spec3': 'Standart GVW',
      'fleet.spec4Val': '%100',
      'fleet.spec4': 'ELD Takipli',
      'industries.eyebrow': 'ABD Lojistik Operasyonları',
      'industries.title': 'TROY FREIGHT LLC Her Gün Nerelerde Görev Yapıyor?',
      'industries.lead': 'Sıkı Amazon Fulfillment Center randevu pencerelerinden ulusal perakende dağıtım merkezlerine kadar sürücülerimiz ve operasyon ekibimiz Amerika boyunca tam uyumlu taşıma yürütür.',
      'industries.cta': 'TROY FREIGHT ile Çalışın',
      'ind.1.title': 'Amazon Fulfillment Merkezleri (FC)',
      'ind.1.desc': 'Bölgesel ve eyaletler arası Amazon fulfillment merkezleri arasında A+ performans disipliniyle kesintisiz orta mil taşımacılığı.',
      'ind.2.title': 'Sort Center ve Dağıtım İstasyonları',
      'ind.2.desc': 'Müşteri teslimat saatlerinden önce ayrıştırma merkezlerini ve son kilometre istasyonlarını besleyen zaman kritik gece ve gündüz seferleri.',
      'ind.3.title': 'E-Ticaret ve Kargo Konsolidasyonu',
      'ind.3.desc': "Ulusal e-ticaret markalarını, 3PL depoları ve cross-dock aktarma merkezlerini destekleyen yüksek hacimli 53' kapalı dorse hatları.",
      'ind.4.title': 'Perakende ve Büyük Dağıtım Merkezleri',
      'ind.4.desc': 'Büyük ABD perakende zincirleri için yüksek MABD randevu uyumu, drop-and-hook uygulaması ve canlı sevkiyat görünürlüğü.',
      'ind.5.title': 'Hızlı Tüketim Ürünleri (CPG)',
      'ind.5.desc': 'Temiz ve kuru kapalı dorselerle ülke genelinde paletli tüketim ürünleri, içecek ve perakende stok taşımacılığı.',
      'ind.6.title': 'Prime Day ve Q4 Yıl Sonu Yoğunluğu',
      'ind.6.desc': 'Amerika’nın en yoğun e-ticaret dönemleri için ayrılmış ek kapasite, hafta sonu blokları ve çift sürücülü kesintisiz destek.',
      'network.kicker': 'Kıyıdan Kıyıya ABD Operasyonu',
      'network.title': '48 EYALET · ANA AMAZON VE OTOYOL KORİDORLARI',
      'network.sub': 'Amerika’nın en yüksek hacimli fulfillment kümelerini ve liman kapılarını birbirine bağlayan I-90, I-80, I-40, I-35, I-95 ve I-5 hatlarında günlük seferler.',
      'hub.1.region': 'Orta Batı Koridoru',
      'hub.1.desc': 'Chicago, Joliet ve Indianapolis fulfillment merkezlerini bağlayan yüksek frekanslı I-55, I-80 ve I-65 hatları.',
      'hub.2.region': 'Güney Merkez',
      'hub.2.desc': 'Dallas–Fort Worth, Houston ve San Antonio fulfillment ile sort merkezlerini bağlayan günlük I-35 ve I-20 seferleri.',
      'hub.3.region': 'Güneydoğu',
      'hub.3.desc': 'Atlanta, Charlotte ve Savannah liman dağıtım merkezlerine hizmet veren I-75 ve I-85 orta mil hatları.',
      'hub.4.region': 'Batı Kıyısı',
      'hub.4.desc': 'Güney Kaliforniya fulfillment ve liman aktarma koridoru ile doğu yönlü çift sürücülü uzun yol seferleri.',
      'hub.5.region': 'Kuzeydoğu',
      'hub.5.desc': 'New Jersey, Lehigh Valley, Baltimore ve New England bölgesini kapsayan yoğun I-95 ve I-78 fulfillment ağı.',
      'hub.6.region': 'Pasifik Kuzeybatı',
      'hub.6.desc': 'Pasifik Kuzeybatı e-ticaret fulfillment operasyonlarını destekleyen I-5 ve I-90 bölgesel ve uzun yol hatları.',
      'quote.eyebrow': 'Yük Sahipleri, Brokerlar ve Özel Hatlar',
      'quote.title': 'Kapasite veya Navlun Teklifi Talep Edin',
      'quote.lead': "Güvenilir ABD hat taşımacılığı, Power-Only çekici veya 53' kapalı dorse kapasitesine mi ihtiyacınız var? Güzergâh bilgilerinizi gönderin, TROY FREIGHT LLC ekibimiz 30 dakika içinde dönüş yapsın.",
      'form.name': 'Ad Soyad ve Şirket *',
      'form.namePh': 'Örn. Ahmet Yılmaz — Midwest Fulfillment',
      'form.email': 'İş E-posta Adresi *',
      'form.emailPh': 'operasyon@sirketiniz.com',
      'form.origin': 'Çıkış Şehri, Eyalet / Tesis *',
      'form.originPh': 'Örn. Joliet, IL (MDW2)',
      'form.destination': 'Varış Şehri, Eyalet / Tesis *',
      'form.destinationPh': 'Örn. Dallas, TX (DFW7)',
      'form.equipment': 'Hizmet / Ekipman Tipi *',
      'form.eq.placeholder': 'Hizmet tipini seçin...',
      'form.eq.relay': 'Amazon Relay Orta Mil Hat Taşımacılığı',
      'form.eq.poweronly': 'Power-Only / Drop-and-Hook',
      'form.eq.ftl': "53' Kapalı Dorse Komple Tır (FTL)",
      'form.eq.peak': 'Yoğun Sezon (Peak) Kapasite Desteği',
      'form.eq.expedited': 'Çift Sürücülü Ekspres Transit',
      'form.eq.dedicated': 'Sözleşmeli Özel Hat',
      'form.weight': 'Tahmini Ağırlık / Haftalık Sefer',
      'form.weightPh': 'Örn. 38,000 lbs veya haftada 10 sefer',
      'form.notes': 'Takvim ve Yük Notları *',
      'form.notesPh': 'Yükleme saat aralığı, drop-and-hook gereksinimleri, tesis kodları veya düzenli sefer sıklığını paylaşın...',
      'form.submit': 'Kapasite Talebini Gönder',
      'err.name': 'Lütfen adınızı, soyadınızı ve şirket adını girin.',
      'err.email': 'Lütfen geçerli bir iş e-posta adresi girin.',
      'err.origin': 'Lütfen çıkış şehri, eyalet veya tesis bilgisini girin.',
      'err.destination': 'Lütfen varış şehri, eyalet veya tesis bilgisini girin.',
      'err.equipment': 'Lütfen bir hizmet veya ekipman tipi seçin.',
      'err.notes': 'Lütfen takvim veya yük detaylarınızı yazın.',
      'form.success': 'Talebiniz alındı. TROY FREIGHT LLC operasyon ekibimiz 30 dakika içinde sizinle iletişime geçecektir.',
      'dispatch.pill': '7/24 Canlı ABD Operasyonu',
      'dispatch.title': 'Bugün Çekici mi Lazım? TROY FREIGHT Operasyonu Arayın.',
      'dispatch.sub': "Amazon hat taşımacılığı, Power-Only dönüşleri ve ABD geneli 53' kapalı dorse yükleri için doğrudan özmal filo operatörlerimizle görüşün.",
      'dispatch.phoneLabel': '7/24 Operasyon Hattı',
      'dispatch.emailLabel': 'Operasyon ve Teklif E-postası',
      'dispatch.authLabel': 'Taşıma Yetkileri',
      'dispatch.authValue': 'ABD Eyaletler Arası Taşıyıcı · Aktif USDOT & MC · Amazon Relay Ortağı',
      'dispatch.hqLabel': 'ABD Operasyon Merkezi',
      'dispatch.mapBadge': 'ABD Operasyonu · I-55 / I-80 Merkezi',
      'footer.about': "TROY FREIGHT LLC; Amerika genelinde Amazon Fulfillment Center hat taşımacılığı, Power-Only Relay seferleri ve 53' kapalı dorse taşımacılığı yürüten ABD merkezli taşıyıcıdır.",
      'footer.divisions': 'Hizmetler',
      'footer.div1': 'Amazon Relay Hat Taşımacılığı',
      'footer.div2': 'Power-Only ve Drop-Hook',
      'footer.div3': "53' Kapalı Dorse (FTL)",
      'footer.div4': 'Sözleşmeli Özel Hatlar',
      'footer.company': 'Kurumsal',
      'footer.comp1': 'Cascadia Filo ve Güvenlik',
      'footer.comp2': 'Yük Operasyonları',
      'footer.comp3': 'ABD Koridor Ağı',
      'footer.comp4': 'Kapasite Talep Et',
      'footer.hq': 'ABD Operasyon',
      'cert.1': 'AMAZON RELAY TAŞIYICISI',
      'cert.2': 'FMCSA UYUMLU',
      'cert.3': 'ELD GPS TAKİPLİ',
      'cert.4': '48 EYALET YETKİSİ',
      'cert.5': '7/24 ABD OPERASYONU',
      'cert.6': "POWER-ONLY & 53' DRY VAN",
      'footer.copy': '© 2026 TROY FREIGHT LLC. Tüm hakları saklıdır. Amerika Birleşik Devletleri genelinde faaliyet gösterir.'
    }
  };

  var servicesData = {
    en: {
      relay: {
        kicker: 'Division 01 · Amazon Network',
        title: 'Amazon Relay Middle-Mile Linehaul',
        desc: 'Scheduled middle-mile linehaul connecting Amazon Fulfillment Centers (FC), Sortation Centers (SC), and regional delivery hubs across the United States with disciplined yard check-in and zero missed appointment windows.',
        image: 'assets/images/hero-truck.jpg',
        alt: 'TROY FREIGHT LLC red Freightliner Cascadia trucks operating at an Amazon fulfillment center',
        specs: ['FC-to-FC & Sort Centers', '99.6% On-Time Score', '24/7 Relay Tracking'],
        bullets: [
          'Strict adherence to Amazon Relay arrival, dwell, and safety scorecards',
          'Seamless gate check-in, trailer seal verification, and digital BOL workflows',
          'Dedicated dispatchers monitoring every block and multi-stop tour 24/7'
        ],
        equipmentOption: 'Amazon Relay Linehaul'
      },
      poweronly: {
        kicker: 'Division 02 · High-Speed Yard Turns',
        title: 'Power-Only & Drop-and-Hook',
        desc: "Our late-model red Freightliner Cascadia tractors couple directly to pre-loaded Amazon and partner 53' trailers—eliminating live-load detention and maximizing daily interstate velocity.",
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'TROY FREIGHT LLC tractors staged for fast drop-and-hook departure at a U.S. distribution terminal',
        specs: ['Zero Dock Detention', 'Pre-Loaded 53\' Trailers', 'Fast Gate Turnaround'],
        bullets: [
          'Rapid drop-and-hook execution at high-volume fulfillment yards nationwide',
          'Thorough pre-trip trailer inspection, tire/brake checks, and seal verification',
          'Flexible solo and team power units available for recurring weekly blocks'
        ],
        equipmentOption: 'Power-Only / Drop-and-Hook'
      },
      ftl: {
        kicker: 'Division 03 · Nationwide OTR',
        title: "53' Dry Van Full Truckload (FTL)",
        desc: 'Clean, high-cube 53-foot air-ride dry vans engineered for interstate retail, e-commerce, and CPG freight across all 48 contiguous United States.',
        image: 'assets/images/hero-truck.jpg',
        alt: 'TROY FREIGHT LLC 53-foot dry van convoy serving major U.S. distribution corridors',
        specs: ['Max Payload: 45,000 lbs', "53' Air-Ride Trailers", '48-State Coverage'],
        bullets: [
          'Direct point-to-point OTR transit with real-time GPS visibility',
          'Food-grade, weather-tight trailer interiors with logistics posts and e-track',
          'Instant digital Proof of Delivery (POD) upon completion'
        ],
        equipmentOption: "53' Dry Van (FTL)"
      },
      peak: {
        kicker: 'Division 04 · E-Commerce Surge',
        title: 'Peak Season & Surge Support',
        desc: 'Scalable tractor and driver capacity built specifically for Prime Day, Black Friday, Cyber Monday, and Q4 holiday volume spikes across America’s busiest fulfillment regions.',
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'TROY FREIGHT LLC fleet ready for peak season freight volume',
        specs: ['Prime Day & Q4 Ready', 'Weekend & Night Blocks', 'Rapid Deployment'],
        bullets: [
          'Pre-allocated surge capacity committed before peak seasonal demand hits',
          'Extended overnight and weekend coverage keeping sort centers flowing',
          'Dedicated operations desk coordinating multi-truck waves smoothly'
        ],
        equipmentOption: 'Peak Season Surge Capacity'
      },
      expedited: {
        kicker: 'Division 05 · Time-Critical',
        title: 'Expedited Team Transit',
        desc: 'Dual-driver sleeper teams running continuously for urgent coast-to-coast replenishment, tight cutoff windows, and high-priority e-commerce inventory transfers.',
        image: 'assets/images/heavy-haul.jpg',
        alt: 'American Class-8 tractor running expedited interstate freight at sunset',
        specs: ['Coast-to-Coast 48–60h', 'Dual-Driver Teams', 'Priority Dispatch'],
        bullets: [
          'Non-stop interstate transit eliminating single-driver HOS layovers',
          'Proactive 4-hour status updates plus live shareable ELD tracking links',
          'High-security trailer locks and strict route-adherence protocols'
        ],
        equipmentOption: 'Expedited Team Transit'
      },
      dedicated: {
        kicker: 'Division 06 · Recurring Loops',
        title: 'Dedicated Contract Lanes',
        desc: 'Assigned TROY FREIGHT LLC tractors and company drivers locked to your recurring weekly U.S. freight loops—delivering consistent schedule reliability and predictable budgeting.',
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'Dedicated TROY FREIGHT LLC trucks aligned at a regional terminal',
        specs: ['Locked Capacity', 'Weekly Recurring Loops', 'KPI Reporting'],
        bullets: [
          'Dedicated drivers familiar with your exact facility gates and dock rules',
          'Stable contract pricing insulated from seasonal spot-market swings',
          'Weekly on-time performance reporting and direct account support'
        ],
        equipmentOption: 'Dedicated Contract Lane'
      }
    },
    tr: {
      relay: {
        kicker: 'Birim 01 · Amazon Ağı',
        title: 'Amazon Relay Orta Mil Hat Taşımacılığı',
        desc: 'ABD genelindeki Amazon Fulfillment Merkezleri (FC), Sort Center (SC) tesisleri ve bölgesel dağıtım istasyonlarını yüksek dakiklik, düzenli saha giriş-çıkışı ve sıfır randevu kaçırma hedefiyle birbirine bağlayan planlı hat taşımacılığı.',
        image: 'assets/images/hero-truck.jpg',
        alt: 'Amazon fulfillment merkezinde görev yapan TROY FREIGHT LLC kırmızı Freightliner Cascadia tırları',
        specs: ['FC & Sort Merkezleri', '%99,6 Zamanında Skor', '7/24 Relay Takibi'],
        bullets: [
          'Amazon Relay varış, bekleme ve güvenlik performans kriterlerine tam uyum',
          'Hızlı tesis kapı girişi, mühür doğrulama ve dijital irsaliye (BOL) süreçleri',
          'Her blok ve çok duraklı turu 7/24 izleyen uzman ABD operasyon ekibi'
        ],
        equipmentOption: 'Amazon Relay Linehaul'
      },
      poweronly: {
        kicker: 'Birim 02 · Hızlı Saha Dönüşleri',
        title: 'Power-Only ve Drop-and-Hook',
        desc: "Yeni nesil kırmızı Freightliner Cascadia çekicilerimiz, önceden yüklenmiş Amazon ve iş ortağı 53' dorselerine doğrudan bağlanarak rampa beklemesini ortadan kaldırır ve günlük sefer hızını en üst düzeye çıkarır.",
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'Hızlı drop-and-hook çıkışı için ABD dağıtım terminalinde hazır bekleyen TROY FREIGHT LLC çekicileri',
        specs: ['Sıfır Rampa Beklemesi', "Hazır 53' Dorseler", 'Hızlı Kapı Dönüşü'],
        bullets: [
          'Yüksek hacimli fulfillment sahalarında hızlı drop-and-hook operasyonları',
          'Her çıkış öncesi detaylı dorse lastik, fren ve mühür güvenlik kontrolü',
          'Haftalık düzenli bloklar için tek ve çift sürücülü esnek çekici desteği'
        ],
        equipmentOption: 'Power-Only / Drop-and-Hook'
      },
      ftl: {
        kicker: 'Birim 03 · ABD Geneli Uzun Yol (OTR)',
        title: "53' Kapalı Dorse Komple Tır (FTL)",
        desc: "Amerika’nın 48 eyaletinde perakende, e-ticaret ve hızlı tüketim yükleri için tasarlanmış temiz, yüksek hacimli 53' hava süspansiyonlu kapalı dorseler.",
        image: 'assets/images/hero-truck.jpg',
        alt: "ABD ana dağıtım koridorlarında ilerleyen TROY FREIGHT LLC 53' kapalı dorse konvoyu",
        specs: ['Maks. Yük: 45,000 lbs', "53' Hava Süspansiyon", '48 Eyalet Kapsama'],
        bullets: [
          'Canlı GPS görünürlüğü ile kapıdan kapıya direkt uzun yol (OTR) teslimat',
          'Temiz, kuru, e-track destekli ve hava koşullarına tam korumalı dorseler',
          'Teslimat anında dijital teslim belgesi (POD) paylaşımı'
        ],
        equipmentOption: "53' Dry Van (FTL)"
      },
      peak: {
        kicker: 'Birim 04 · E-Ticaret Zirve Dönemleri',
        title: 'Yoğun Sezon (Peak) Kapasite Desteği',
        desc: 'Prime Day, Black Friday, Cyber Monday ve Q4 yıl sonu hacim artışları için Amerika’nın en yoğun fulfillment bölgelerinde ölçeklenebilir çekici ve sürücü kapasitesi.',
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'Yoğun sezon yük hacmi için hazır TROY FREIGHT LLC filosu',
        specs: ['Prime Day & Q4 Hazır', 'Gece & Hafta Sonu Blokları', 'Hızlı Devreye Alma'],
        bullets: [
          'Sezon yoğunluğu başlamadan önce taahhüt edilen ek çekici kapasitesi',
          'Sort merkezlerinin akışını kesintisiz tutan gece ve hafta sonu seferleri',
          'Çoklu araç dalgalarını koordine eden özel operasyon masası'
        ],
        equipmentOption: 'Peak Season Surge Capacity'
      },
      expedited: {
        kicker: 'Birim 05 · Zaman Kritik Sevkiyat',
        title: 'Çift Sürücülü Ekspres Transit',
        desc: 'Acil kıyıdan kıyıya stok ikmalleri, kritik kesim saatleri ve yüksek öncelikli e-ticaret transferleri için kesintisiz ilerleyen çift sürücülü sleeper ekipler.',
        image: 'assets/images/heavy-haul.jpg',
        alt: 'Gün batımında otoyolda ekspres taşımacılık yapan Amerikan Class-8 tırı',
        specs: ['48–60 Saatte Kıyıdan Kıyıya', 'Çift Sürücü Ekibi', 'Öncelikli Operasyon'],
        bullets: [
          'Tek sürücü zorunlu mola gecikmelerini ortadan kaldıran kesintisiz transit',
          '4 saatte bir proaktif durum bilgilendirmesi ve canlı ELD takip bağlantısı',
          'Yüksek güvenlikli dorse kilitleri ve sıkı güzergâh protokolleri'
        ],
        equipmentOption: 'Expedited Team Transit'
      },
      dedicated: {
        kicker: 'Birim 06 · Düzenli Haftalık Hatlar',
        title: 'Sözleşmeli Özel Hatlar',
        desc: 'Düzenli haftalık ABD güzergâhlarınıza özel tahsis edilen TROY FREIGHT LLC çekicileri ve sürücüleriyle öngörülebilir maliyet ve kesintisiz program disiplini.',
        image: 'assets/images/terminal-fleet.jpg',
        alt: 'Bölgesel terminalde düzenli hatlar için hazır TROY FREIGHT LLC tırları',
        specs: ['Garantili Kapasite', 'Haftalık Düzenli Turlar', 'KPI Raporlaması'],
        bullets: [
          'Tesis kapılarınıza ve rampa kurallarınıza hâkim daimi sürücü kadrosu',
          'Spot piyasa dalgalanmalarından etkilenmeyen sabit sözleşme tarifeleri',
          'Haftalık zamanında teslimat raporlaması ve doğrudan hesap desteği'
        ],
        equipmentOption: 'Dedicated Contract Lane'
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
  var servicePanel = document.querySelector('#service-panel');
  var stageImage = document.querySelector('#service-image');
  var stageSpecs = document.querySelector('#service-specs');
  var stageKicker = document.querySelector('#service-kicker');
  var stageTitle = document.querySelector('#service-title');
  var stageDesc = document.querySelector('#service-desc');
  var stageBullets = document.querySelector('#service-bullets');
  var stageCta = document.querySelector('#service-cta');
  var equipmentSelect = document.querySelector('#q-equipment');

  var activeEquipmentOption = servicesData.en.relay.equipmentOption;

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

      // On narrow mobile screens, bring the updated service detail panel into view
      if (window.innerWidth <= 860 && servicePanel) {
        var offset = header ? header.offsetHeight + 12 : 76;
        var panelTop = servicePanel.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, panelTop), behavior: 'smooth' });
      }
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

    renderService(activeServiceKey);

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

  // Initial language: ?lang=tr|en -> saved preference -> English default
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
