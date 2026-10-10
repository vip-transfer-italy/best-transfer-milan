/* =========================================================================
   BEST TRANSFER MILAN — CONFIG
   Телефон/WhatsApp/Telegram підтягнуті з діючого номера VIP Transfer Italy
   (той самий власник). Домен і email — заглушки під бренд, перевір перед запуском.
   ========================================================================= */
const CONFIG = {
  domain:    "besttransfermilan.com",        // [ВСТАВИТИ: домен]
  phone:     "+39 351 397 5476",
  phoneHref: "+393513975476",                // той самий номер без пробілів, для tel:/wa.me
  telegram:  "https://t.me/VipTransferIt",
  email:     "info@besttransfermilan.com",   // [ВСТАВИТИ: email, якщо потрібен окремий від VIP Transfer]
};

/* ===== currency ===== */
const RATES = { EUR: { rate: 1, symbol: "€", suffix: true }, USD: { rate: 1.08, symbol: "$", suffix: false }, UAH: { rate: 46.5, symbol: "₴", suffix: true } };
let currentCurrency = localStorage.getItem("btm_curr") || "EUR";
let currentLang = localStorage.getItem("btm_lang") || "uk";

function fmtPrice(eur){
  const r = RATES[currentCurrency];
  const val = Math.round(eur * r.rate);
  return r.suffix ? `${val} ${r.symbol}` : `${r.symbol}${val}`;
}

/* =========================================================================
   TRANSLATIONS
   ========================================================================= */
const I18N = {
  uk: {
    cookie_text: "Ми використовуємо файли cookie, щоб покращити роботу сайту й аналізувати трафік. Ви можете прийняти всі cookie або відхилити необов'язкові.",
    cookie_decline: "Відхилити", cookie_accept: "Прийняти всі",
    nav_services: "Послуги", nav_destinations: "Напрямки", nav_faq: "FAQ", nav_reviews: "Відгуки",
    nav_company: "Компанія ▾", nav_about: "Про нас", nav_terms: "Умови та правила",
    hero_eyebrow: "Преміальний трансфер-сервіс · Мілан",
    hero_title: "Приватний трансфер<br>у Мілані",
    hero_subtitle: "Комфортні поїздки з аеропортів Мальпенса, Лінате й Бергамо, а також у будь-яке місто Італії та Європи. Преміальні авто, персональний водій, фіксована ціна.",
    f_from: "Звідки", f_from_ph: "Аеропорт, місто, готель...",
    f_to: "Куди", f_to_ph: "Аеропорт, місто, готель...",
    f_date: "Дата", f_pax: "Пасажири", f_bags: "Багаж", f_submit: "Дізнатися ціни", search_title: "Пошук маршруту",
    trust_based: "на основі відгуків клієнтів",
    badge1: "Вибір тисяч мандрівників", badge2: "Підтримка 24/7", badge3: "Безпечно та надійно",
    results_eyebrow: "Ваш маршрут",
    results_note: "Ціни вказані орієнтовно та залежать від обраного класу авто. Точну вартість менеджер підтвердить після бронювання.",
    results_unknown_title: "Розрахуємо точну вартість для вас",
    results_unknown_text: "Цей напрямок не входить до стандартного списку маршрутів — надішліть заявку, і диспетчер відповість із ціною протягом кількох хвилин.",
    results_unknown_cta: "Запит ціни",
    dest_eyebrow: "Напрямки з Мілана", dest_title: "Популярні маршрути", price_from: "від",
    btn_book: "Забронювати",
    catalog_eyebrow: "Повний каталог", catalog_title: "Куди ще ми їдемо",
    tab_italy: "Італія", tab_france: "Франція", tab_switzerland: "Швейцарія", tab_austria: "Австрія",
    catalog_notfound: "Не знайшли свій напрямок?", catalog_contact: "Зв'яжіться з нами",
    cat_airports: "Аеропорти", cat_cities: "Міста", cat_sea: "Морські курорти", cat_lakes: "Озера",
    cat_ski: "Гірськолижні курорти", cat_outlets: "Аутлети", cat_fairs: "Виставкові центри",
    cat_fr_cities: "Міста", cat_fr_ski: "Гірськолижні курорти",
    cat_ch_cities: "Міста", cat_ch_ski: "Гірськолижні курорти",
    cat_at_airports: "Аеропорти", cat_at_resorts: "Курорти",
    steps_eyebrow: "Як це працює", steps_title: "Подорожувати просто",
    step1_title: "Легке бронювання", step1_text: "Залиште заявку на сайті або у WhatsApp — підтвердимо маршрут і ціну за кілька хвилин.",
    step2_title: "Зустріч з водієм", step2_text: "Водій чекає на вас із табличкою в залі прильоту та допомагає з багажем.",
    step3_title: "Комфортна поїздка", step3_text: "Доїдьте до дверей готелю чи будинку у преміальному авто без зупинок і стресу.",
    quality_eyebrow: "Бездоганний сервіс", quality_title: "Персональний підхід до кожної поїздки",
    quality_text: "Наші водії — професіонали з багаторічним досвідом, охайним зовнішнім виглядом і знанням маршрутів по всій Італії та сусідніх країнах. Ми стежимо за рейсами, узгоджуємо час подачі авто та відповідаємо на повідомлення цілодобово — ваша поїздка завжди проходить за планом.",
    quality_cta: "Зв'язатися з нами",
    services_eyebrow: "Наші послуги", services_title: "Що ми пропонуємо",
    svc1_title: "Трансфер з аеропорту", svc1_text: "Мальпенса, Лінате, Бергамо — зустріч у залі прильоту та доставка до адреси й назад.",
    svc2_title: "Груповий трансфер", svc2_text: "Авто на 7–50 місць для екскурсій, гастротурів і корпоративних поїздок.",
    svc3_title: "Весільний трансфер", svc3_text: "Авто на 4–50 місць з кондиціонером і Wi-Fi для весільного кортежу та гостей.",
    svc4_title: "Трансфер готель — готель", svc4_text: "Переїзд між готелями та містами без очікування на вокзалах і стоянках таксі.",
    svc5_title: "Трансфер до вокзалу", svc5_text: "Вчасна подача авто до відправлення потяга, допомога з багажем.",
    svc6_title: "Погодинна оренда з водієм", svc6_text: "Бізнес-поїздки, зустрічі, шопінг-тури — авто з водієм на весь день за погодинним тарифом.",
    fleet_eyebrow: "Автопарк", fleet_title: "Оберіть клас авто", car_pax: "пас.", car_bags: "багаж", car_book: "Забронювати це авто", car_hourly: "погодинно від",
    about_eyebrow: "Про нас", about_title: "Подорож без стресу — наш головний принцип",
    about_text: "Best Transfer Milan — команда водіїв і диспетчерів, що базується в Мілані та щодня возить гостей Італії комфортно, пунктуально та без несподіванок у ціні. Ми стежимо за рейсами, тримаємо авто в ідеальному стані та завжди на зв'язку — до, під час і після поїздки.",
    about_cta: "Дізнатися більше про компанію",
    reviews_eyebrow: "Відгуки", reviews_title: "Що кажуть наші клієнти",
    reviews_placeholder_note: "[ВСТАВИТИ: реальні відгуки клієнтів — наведені приклади підлягають заміні]",
    faq_eyebrow: "FAQ", faq_title: "Корисно знати",
    modal_title: "Забронювати трансфер", m_name: "Ваше ім'я", m_phone: "Телефон / WhatsApp", m_phone_ph: "+39 ...",
    m_comment: "Коментар (необов'язково)", m_comment_ph: "Номер рейсу, дитяче крісло тощо",
    m_error: "Будь ласка, заповніть ім'я та телефон коректно.",
    m_submit: "Відправити заявку", m_or: "або", m_whatsapp: "Написати у WhatsApp",
    m_success: "Дякуємо за заявку! Ми зв'яжемося з вами найближчим часом.",
    terms_title: "Умови та правила",
    footer_tag: "Преміальні приватні трансфери по Мілану, Італії та Європі.",
    footer_contacts: "Контакти", footer_menu: "Меню", footer_company: "Компанія",
    footer_rights: "Усі права захищено.", footer_fx: "Курси валют наведені орієнтовно та можуть відрізнятися від банківських."
  },
  en: {
    cookie_text: "We use cookies to improve the site and analyse traffic. You can accept all cookies or decline the optional ones.",
    cookie_decline: "Decline", cookie_accept: "Accept all",
    nav_services: "Services", nav_destinations: "Destinations", nav_faq: "FAQ", nav_reviews: "Reviews",
    nav_company: "Company ▾", nav_about: "About us", nav_terms: "Terms & Conditions",
    hero_eyebrow: "Premium Transfer Service · Milan",
    hero_title: "Private Transfer<br>in Milan",
    hero_subtitle: "Comfortable rides from Malpensa, Linate and Bergamo airports, and to any city in Italy or Europe. Premium cars, personal driver, fixed price.",
    f_from: "From", f_from_ph: "Airport, city, hotel...",
    f_to: "To", f_to_ph: "Airport, city, hotel...",
    f_date: "Date", f_pax: "Passengers", f_bags: "Luggage", f_submit: "Get prices", search_title: "Route search",
    trust_based: "based on customer reviews",
    badge1: "Chosen by thousands of travellers", badge2: "24/7 support", badge3: "Safe and reliable",
    results_eyebrow: "Your route",
    results_note: "Prices shown are indicative and depend on the car class. The manager will confirm the exact fare after booking.",
    results_unknown_title: "We'll calculate the exact fare for you",
    results_unknown_text: "This destination isn't in our standard list — send a request and our dispatcher will reply with the price within minutes.",
    results_unknown_cta: "Request a price",
    dest_eyebrow: "Destinations from Milan", dest_title: "Popular routes", price_from: "from",
    btn_book: "Book now",
    catalog_eyebrow: "Full catalogue", catalog_title: "Where else we drive",
    tab_italy: "Italy", tab_france: "France", tab_switzerland: "Switzerland", tab_austria: "Austria",
    catalog_notfound: "Can't find your destination?", catalog_contact: "Contact us",
    cat_airports: "Airports", cat_cities: "Cities", cat_sea: "Sea resorts", cat_lakes: "Lakes",
    cat_ski: "Ski resorts", cat_outlets: "Outlets", cat_fairs: "Exhibition centres",
    cat_fr_cities: "Cities", cat_fr_ski: "Ski resorts",
    cat_ch_cities: "Cities", cat_ch_ski: "Ski resorts",
    cat_at_airports: "Airports", cat_at_resorts: "Resorts",
    steps_eyebrow: "How it works", steps_title: "Travelling made simple",
    step1_title: "Easy booking", step1_text: "Submit a request on the site or via WhatsApp — we confirm the route and price within minutes.",
    step2_title: "Meet your driver", step2_text: "Your driver waits at arrivals with a name sign and helps with your luggage.",
    step3_title: "Comfortable ride", step3_text: "Get to your hotel or home door-to-door in a premium car, with no stops or stress.",
    quality_eyebrow: "Impeccable service", quality_title: "A personal approach to every ride",
    quality_text: "Our drivers are seasoned professionals, always well-presented and familiar with routes across Italy and neighbouring countries. We track flights, coordinate pickup times and reply to messages around the clock — your ride always goes to plan.",
    quality_cta: "Get in touch",
    services_eyebrow: "Our services", services_title: "What we offer",
    svc1_title: "Airport transfer", svc1_text: "Malpensa, Linate, Bergamo — meeting at arrivals and delivery to your address and back.",
    svc2_title: "Group transfer", svc2_text: "Vehicles for 7–50 people for excursions, food tours and corporate trips.",
    svc3_title: "Wedding transfer", svc3_text: "Vehicles for 4–50 people with air conditioning and Wi-Fi for the wedding party and guests.",
    svc4_title: "Hotel-to-hotel transfer", svc4_text: "Move between hotels and cities with no waiting at stations or taxi ranks.",
    svc5_title: "Train station transfer", svc5_text: "On-time pickup ahead of departure, with help carrying your luggage.",
    svc6_title: "Hourly hire with driver", svc6_text: "Business trips, meetings, shopping tours — a car with driver for the day, billed hourly.",
    fleet_eyebrow: "Our fleet", fleet_title: "Choose your class", car_pax: "pax", car_bags: "luggage", car_book: "Book this car", car_hourly: "hourly from",
    about_eyebrow: "About us", about_title: "A stress-free journey is our main principle",
    about_text: "Best Transfer Milan is a team of drivers and dispatchers based in Milan, driving guests across Italy every day — comfortably, punctually and with no surprises in price. We track flights, keep our cars immaculate and stay reachable before, during and after every ride.",
    about_cta: "Learn more about the company",
    reviews_eyebrow: "Reviews", reviews_title: "What our clients say",
    reviews_placeholder_note: "[INSERT: real client reviews — the examples above are placeholders to be replaced]",
    faq_eyebrow: "FAQ", faq_title: "Good to know",
    modal_title: "Book a transfer", m_name: "Your name", m_phone: "Phone / WhatsApp", m_phone_ph: "+39 ...",
    m_comment: "Comment (optional)", m_comment_ph: "Flight number, child seat, etc.",
    m_error: "Please fill in your name and phone correctly.",
    m_submit: "Send request", m_or: "or", m_whatsapp: "Message on WhatsApp",
    m_success: "Thank you for your request! We'll contact you shortly.",
    terms_title: "Terms & Conditions",
    footer_tag: "Premium private transfers across Milan, Italy and Europe.",
    footer_contacts: "Contacts", footer_menu: "Menu", footer_company: "Company",
    footer_rights: "All rights reserved.", footer_fx: "Exchange rates are indicative and may differ from bank rates."
  },
  it: {
    cookie_text: "Utilizziamo i cookie per migliorare il sito e analizzare il traffico. Puoi accettare tutti i cookie o rifiutare quelli non essenziali.",
    cookie_decline: "Rifiuta", cookie_accept: "Accetta tutti",
    nav_services: "Servizi", nav_destinations: "Destinazioni", nav_faq: "FAQ", nav_reviews: "Recensioni",
    nav_company: "Azienda ▾", nav_about: "Chi siamo", nav_terms: "Termini e condizioni",
    hero_eyebrow: "Servizio Transfer Premium · Milano",
    hero_title: "Transfer Privato<br>a Milano",
    hero_subtitle: "Viaggi confortevoli dagli aeroporti di Malpensa, Linate e Bergamo, e verso qualsiasi città in Italia o in Europa. Auto premium, driver personale, prezzo fisso.",
    f_from: "Da", f_from_ph: "Aeroporto, città, hotel...",
    f_to: "A", f_to_ph: "Aeroporto, città, hotel...",
    f_date: "Data", f_pax: "Passeggeri", f_bags: "Bagagli", f_submit: "Scopri i prezzi", search_title: "Cerca percorso",
    trust_based: "basato sulle recensioni dei clienti",
    badge1: "Scelto da migliaia di viaggiatori", badge2: "Assistenza 24/7", badge3: "Sicuro e affidabile",
    results_eyebrow: "Il tuo percorso",
    results_note: "I prezzi indicati sono orientativi e dipendono dalla classe dell'auto scelta. Il manager confermerà la tariffa esatta dopo la prenotazione.",
    results_unknown_title: "Calcoleremo la tariffa esatta per te",
    results_unknown_text: "Questa destinazione non è nell'elenco standard — invia una richiesta e il nostro operatore ti risponderà con il prezzo in pochi minuti.",
    results_unknown_cta: "Richiedi il prezzo",
    dest_eyebrow: "Destinazioni da Milano", dest_title: "Percorsi popolari", price_from: "da",
    btn_book: "Prenota ora",
    catalog_eyebrow: "Catalogo completo", catalog_title: "Dove andiamo ancora",
    tab_italy: "Italia", tab_france: "Francia", tab_switzerland: "Svizzera", tab_austria: "Austria",
    catalog_notfound: "Non trovi la tua destinazione?", catalog_contact: "Contattaci",
    cat_airports: "Aeroporti", cat_cities: "Città", cat_sea: "Località balneari", cat_lakes: "Laghi",
    cat_ski: "Località sciistiche", cat_outlets: "Outlet", cat_fairs: "Centri fieristici",
    cat_fr_cities: "Città", cat_fr_ski: "Località sciistiche",
    cat_ch_cities: "Città", cat_ch_ski: "Località sciistiche",
    cat_at_airports: "Aeroporti", cat_at_resorts: "Località",
    steps_eyebrow: "Come funziona", steps_title: "Viaggiare in modo semplice",
    step1_title: "Prenotazione facile", step1_text: "Invia una richiesta sul sito o su WhatsApp — confermiamo percorso e prezzo in pochi minuti.",
    step2_title: "Incontro con il driver", step2_text: "Il driver ti aspetta all'arrivo con un cartello con il tuo nome e ti aiuta con i bagagli.",
    step3_title: "Viaggio confortevole", step3_text: "Arrivi direttamente alla porta del tuo hotel o di casa, in un'auto premium, senza soste né stress.",
    quality_eyebrow: "Servizio impeccabile", quality_title: "Un approccio personale ad ogni viaggio",
    quality_text: "I nostri driver sono professionisti esperti, sempre curati nell'aspetto e con un'ottima conoscenza dei percorsi in tutta Italia e nei paesi limitrofi. Monitoriamo i voli, coordiniamo gli orari di ritiro e rispondiamo ai messaggi 24 ore su 24 — il tuo viaggio va sempre come previsto.",
    quality_cta: "Contattaci",
    services_eyebrow: "I nostri servizi", services_title: "Cosa offriamo",
    svc1_title: "Transfer aeroportuale", svc1_text: "Malpensa, Linate, Bergamo — incontro in sala arrivi e trasporto all'indirizzo e ritorno.",
    svc2_title: "Transfer di gruppo", svc2_text: "Veicoli da 7 a 50 posti per escursioni, tour gastronomici e viaggi aziendali.",
    svc3_title: "Transfer per matrimoni", svc3_text: "Veicoli da 4 a 50 posti con aria condizionata e Wi-Fi per il corteo nuziale e gli ospiti.",
    svc4_title: "Transfer hotel-hotel", svc4_text: "Spostamenti tra hotel e città senza attese in stazione o ai parcheggi taxi.",
    svc5_title: "Transfer in stazione", svc5_text: "Ritiro puntuale prima della partenza del treno, con aiuto per i bagagli.",
    svc6_title: "Noleggio con driver a ore", svc6_text: "Viaggi d'affari, incontri, shopping tour — auto con driver per tutta la giornata a tariffa orario.",
    fleet_eyebrow: "La nostra flotta", fleet_title: "Scegli la tua classe", car_pax: "pax", car_bags: "bagagli", car_book: "Prenota quest'auto", car_hourly: "tariffa oraria da",
    about_eyebrow: "Chi siamo", about_title: "Un viaggio senza stress è il nostro principio guida",
    about_text: "Best Transfer Milan è un team di driver e operatori con base a Milano, che ogni giorno accompagna gli ospiti in tutta Italia in modo confortevole, puntuale e senza sorprese sul prezzo. Monitoriamo i voli, manteniamo le auto impeccabili e siamo sempre raggiungibili prima, durante e dopo il viaggio.",
    about_cta: "Scopri di più sull'azienda",
    reviews_eyebrow: "Recensioni", reviews_title: "Cosa dicono i nostri clienti",
    reviews_placeholder_note: "[INSERIRE: recensioni reali dei clienti — gli esempi sopra sono segnaposto da sostituire]",
    faq_eyebrow: "FAQ", faq_title: "Utile da sapere",
    modal_title: "Prenota un transfer", m_name: "Il tuo nome", m_phone: "Telefono / WhatsApp", m_phone_ph: "+39 ...",
    m_comment: "Commento (opzionale)", m_comment_ph: "Numero di volo, seggiolino per bambini, ecc.",
    m_error: "Compila correttamente nome e telefono.",
    m_submit: "Invia richiesta", m_or: "oppure", m_whatsapp: "Scrivi su WhatsApp",
    m_success: "Grazie per la tua richiesta! Ti contatteremo a breve.",
    terms_title: "Termini e condizioni",
    footer_tag: "Transfer privati premium a Milano, in Italia e in Europa.",
    footer_contacts: "Contatti", footer_menu: "Menu", footer_company: "Azienda",
    footer_rights: "Tutti i diritti riservati.", footer_fx: "I tassi di cambio sono indicativi e possono differire da quelli bancari."
  },
  ru: {
    cookie_text: "Мы используем файлы cookie, чтобы улучшить работу сайта и анализировать трафик. Вы можете принять все cookie или отклонить необязательные.",
    cookie_decline: "Отклонить", cookie_accept: "Принять все",
    nav_services: "Услуги", nav_destinations: "Направления", nav_faq: "FAQ", nav_reviews: "Отзывы",
    nav_company: "Компания ▾", nav_about: "О нас", nav_terms: "Условия и правила",
    hero_eyebrow: "Премиальный трансфер-сервис · Милан",
    hero_title: "Приватный трансфер<br>в Милане",
    hero_subtitle: "Комфортные поездки из аэропортов Мальпенса, Линате и Бергамо, а также в любой город Италии и Европы. Премиальные авто, персональный водитель, фиксированная цена.",
    f_from: "Откуда", f_from_ph: "Аэропорт, город, отель...",
    f_to: "Куда", f_to_ph: "Аэропорт, город, отель...",
    f_date: "Дата", f_pax: "Пассажиры", f_bags: "Багаж", f_submit: "Узнать цены", search_title: "Поиск маршрута",
    trust_based: "на основе отзывов клиентов",
    badge1: "Выбор тысяч путешественников", badge2: "Поддержка 24/7", badge3: "Безопасно и надёжно",
    results_eyebrow: "Ваш маршрут",
    results_note: "Цены указаны ориентировочно и зависят от выбранного класса авто. Точную стоимость менеджер подтвердит после бронирования.",
    results_unknown_title: "Рассчитаем точную стоимость для вас",
    results_unknown_text: "Это направление не входит в стандартный список маршрутов — отправьте заявку, и диспетчер ответит с ценой в течение нескольких минут.",
    results_unknown_cta: "Запросить цену",
    dest_eyebrow: "Направления из Милана", dest_title: "Популярные маршруты", price_from: "от",
    btn_book: "Забронировать",
    catalog_eyebrow: "Полный каталог", catalog_title: "Куда ещё мы едем",
    tab_italy: "Италия", tab_france: "Франция", tab_switzerland: "Швейцария", tab_austria: "Австрия",
    catalog_notfound: "Не нашли своё направление?", catalog_contact: "Свяжитесь с нами",
    cat_airports: "Аэропорты", cat_cities: "Города", cat_sea: "Морские курорты", cat_lakes: "Озёра",
    cat_ski: "Горнолыжные курорты", cat_outlets: "Аутлеты", cat_fairs: "Выставочные центры",
    cat_fr_cities: "Города", cat_fr_ski: "Горнолыжные курорты",
    cat_ch_cities: "Города", cat_ch_ski: "Горнолыжные курорты",
    cat_at_airports: "Аэропорты", cat_at_resorts: "Курорты",
    steps_eyebrow: "Как это работает", steps_title: "Путешествовать просто",
    step1_title: "Лёгкое бронирование", step1_text: "Оставьте заявку на сайте или в WhatsApp — подтвердим маршрут и цену за несколько минут.",
    step2_title: "Встреча с водителем", step2_text: "Водитель ждёт вас с табличкой в зале прилёта и помогает с багажом.",
    step3_title: "Комфортная поездка", step3_text: "Доедете до дверей отеля или дома на премиальном авто без остановок и стресса.",
    quality_eyebrow: "Безупречный сервис", quality_title: "Персональный подход к каждой поездке",
    quality_text: "Наши водители — профессионалы с многолетним опытом, опрятным внешним видом и знанием маршрутов по всей Италии и соседним странам. Мы следим за рейсами, согласовываем время подачи авто и отвечаем на сообщения круглосуточно — ваша поездка всегда проходит по плану.",
    quality_cta: "Связаться с нами",
    services_eyebrow: "Наши услуги", services_title: "Что мы предлагаем",
    svc1_title: "Трансфер из аэропорта", svc1_text: "Мальпенса, Линате, Бергамо — встреча в зале прилёта и доставка по адресу и обратно.",
    svc2_title: "Групповой трансфер", svc2_text: "Авто на 7–50 мест для экскурсий, гастротуров и корпоративных поездок.",
    svc3_title: "Свадебный трансфер", svc3_text: "Авто на 4–50 мест с кондиционером и Wi-Fi для свадебного кортежа и гостей.",
    svc4_title: "Трансфер отель — отель", svc4_text: "Переезд между отелями и городами без ожидания на вокзалах и стоянках такси.",
    svc5_title: "Трансфер на вокзал", svc5_text: "Своевременная подача авто до отправления поезда, помощь с багажом.",
    svc6_title: "Почасовая аренда с водителем", svc6_text: "Бизнес-поездки, встречи, шопинг-туры — авто с водителем на весь день по почасовому тарифу.",
    fleet_eyebrow: "Автопарк", fleet_title: "Выберите класс авто", car_pax: "пас.", car_bags: "багаж", car_book: "Забронировать это авто", car_hourly: "почасово от",
    about_eyebrow: "О нас", about_title: "Путешествие без стресса — наш главный принцип",
    about_text: "Best Transfer Milan — команда водителей и диспетчеров, базирующаяся в Милане и ежедневно возящая гостей Италии комфортно, пунктуально и без сюрпризов в цене. Мы следим за рейсами, держим авто в идеальном состоянии и всегда на связи — до, во время и после поездки.",
    about_cta: "Узнать больше о компании",
    reviews_eyebrow: "Отзывы", reviews_title: "Что говорят наши клиенты",
    reviews_placeholder_note: "[ВСТАВИТЬ: реальные отзывы клиентов — приведённые примеры подлежат замене]",
    faq_eyebrow: "FAQ", faq_title: "Полезно знать",
    modal_title: "Забронировать трансфер", m_name: "Ваше имя", m_phone: "Телефон / WhatsApp", m_phone_ph: "+39 ...",
    m_comment: "Комментарий (необязательно)", m_comment_ph: "Номер рейса, детское кресло и т.д.",
    m_error: "Пожалуйста, заполните имя и телефон корректно.",
    m_submit: "Отправить заявку", m_or: "или", m_whatsapp: "Написать в WhatsApp",
    m_success: "Спасибо за заявку! Мы свяжемся с вами в ближайшее время.",
    terms_title: "Условия и правила",
    footer_tag: "Премиальные приватные трансферы по Милану, Италии и Европе.",
    footer_contacts: "Контакты", footer_menu: "Меню", footer_company: "Компания",
    footer_rights: "Все права защищены.", footer_fx: "Курсы валют приведены ориентировочно и могут отличаться от банковских."
  }
};

/* =========================================================================
   DATA: fleet
   ========================================================================= */
const FLEET = [
  { id:"economy", img:"images/skoda-octavia-studio.jpg", name:"Skoda Octavia", models:"Skoda, Renault, Volkswagen Golf", mult:1.00, hourly:30, pax:3, bags:2,
    badge:{uk:"Економ",en:"Economy",it:"Economy",ru:"Эконом"},
    desc:{uk:"Надійний і охайний седан для поїздок наодинці чи вдвох за розумну ціну. Чисто, пунктуально і приватно.",
          en:"A reliable, tidy sedan for solo or two-person trips at a fair price. Clean, punctual and private.",
          it:"Una berlina affidabile e curata per viaggi da soli o in coppia a un prezzo equo. Pulita, puntuale e privata.",
          ru:"Надёжный и опрятный седан для поездок в одиночку или вдвоём по разумной цене. Чисто, пунктуально и приватно."} },
  { id:"comfort", img:"images/vw-passat-studio.jpg", name:"Volkswagen Passat", models:"Volkswagen Passat, Toyota RAV4", mult:1.29, hourly:38, pax:3, bags:3,
    badge:{uk:"Комфорт",en:"Comfort",it:"Comfort",ru:"Комфорт"},
    desc:{uk:"Просторий сучасний седан з більшим простором для ніг і плавним ходом — чудовий баланс комфорту й ціни.",
          en:"A spacious modern sedan with extra legroom and a smooth ride — a great balance of comfort and price.",
          it:"Una berlina moderna e spaziosa con più spazio per le gambe e una guida fluida — un ottimo equilibrio tra comfort e prezzo.",
          ru:"Просторный современный седан с увеличенным пространством для ног и плавным ходом — отличный баланс комфорта и цены."} },
  { id:"business", img:"images/mercedes-s-class-studio.jpg", name:"Mercedes-Benz S-Class", models:"S-Class, C-Class, V-Class", mult:1.71, hourly:51, pax:3, bags:3,
    badge:{uk:"Бізнес",en:"Business",it:"Business",ru:"Бизнес"},
    desc:{uk:"Еталонний бізнес-седан: стримана розкіш, тихий салон і впевнена керованість для важливих поїздок.",
          en:"A benchmark business sedan: understated luxury, a quiet cabin and confident handling for important rides.",
          it:"Una berlina business di riferimento: lusso discreto, abitacolo silenzioso e guida sicura per i viaggi importanti.",
          ru:"Эталонный бизнес-седан: сдержанная роскошь, тихий салон и уверенная управляемость для важных поездок."} },
  { id:"stdvan", img:"images/renault-trafic-studio.jpg?v=2", name:"Renault Trafic", models:"Mercedes Vito, Renault Trafic", mult:2.00, hourly:48, pax:8, bags:8,
    badge:{uk:"Стандарт мінівен",en:"Standard Minivan",it:"Minivan Standard",ru:"Стандарт минивэн"},
    desc:{uk:"Практичний і просторий варіант для великих груп і родин, яким не потрібні VIP-опції — місце для всіх і всього багажу.",
          en:"Practical and spacious for bigger groups and families who don't need the VIP extras — room for everyone and all the luggage.",
          it:"Pratico e spazioso per gruppi e famiglie numerose che non necessitano degli extra VIP — spazio per tutti e per i bagagli.",
          ru:"Практичный и просторный вариант для больших групп и семей, которым не нужны VIP-опции — место для всех и всего багажа."} },
  { id:"vipvan", img:"images/mercedes-v-class-studio.jpg", name:"Mercedes-Benz V-Class", models:"Mercedes V-Class, Volkswagen Caravelle", mult:2.57, hourly:55, pax:7, bags:7,
    badge:{uk:"VIP мінівен",en:"VIP Minivan",it:"Minivan VIP",ru:"VIP минивэн"},
    desc:{uk:"Флагман автопарку. Простір першого класу для сімей і груп — шкіряний салон, кліматичні зони та місце для всього багажу.",
          en:"The flagship of the fleet. First-class space for families and groups — leather interior, climate zones and room for everyone's luggage.",
          it:"L'ammiraglia della flotta. Spazio di prima classe per famiglie e gruppi — interni in pelle, zone climatiche e spazio per i bagagli.",
          ru:"Флагман автопарка. Пространство первого класса для семей и групп — кожаный салон, климатические зоны и место для всего багажа."} },
  { id:"microbus", img:"images/mercedes-sprinter-studio.jpg", name:"Mercedes-Benz Sprinter", models:"Mercedes-Benz Sprinter, 16 seats", mult:null, hourly:65, pax:16, bags:16,
    badge:{uk:"Мікроавтобус",en:"Microbus",it:"Microbus",ru:"Микроавтобус"},
    desc:{uk:"Комфортний мікроавтобус до 16 пасажирів — для весіль, корпоративних груп і трансферів великою компанією.",
          en:"A comfortable minibus for up to 16 passengers — weddings, corporate groups and transfers for large parties.",
          it:"Un minibus confortevole fino a 16 passeggeri — matrimoni, gruppi aziendali e transfer per grandi comitive.",
          ru:"Комфортный микроавтобус до 16 пассажиров — для свадеб, корпоративных групп и трансферов большой компанией."} }
];
const ON_REQUEST_LABEL = {uk:"Ціна за запитом",en:"Price on request",it:"Prezzo su richiesta",ru:"Цена по запросу"};

/* =========================================================================
   DATA: popular destinations from Milan (base price, economy class, EUR)
   ========================================================================= */
const POPULAR = [
  { name:"Milano Malpensa (MXP)", price:88, img:"images/destinations/malpensa.jpg" },
  { name:"Bergamo Orio al Serio (BGY)", price:87, img:"images/destinations/bergamo.jpg" },
  { name:"Milano Linate (LIN)", price:40, img:"images/destinations/linate.jpg" },
  { name:"Lago di Como", price:63, img:"images/destinations/como.jpg" },
  { name:"Bellagio", price:128, img:"images/destinations/bellagio.jpg" },
  { name:"Lugano", price:122, img:"images/destinations/lugano.jpg" },
  { name:"Desenzano del Garda", price:187, img:"images/destinations/desenzano.jpg" },
  { name:"Torino", price:209, img:"images/destinations/torino.jpg" },
  { name:"Genova", price:215, img:"images/destinations/genova.jpg" },
  { name:"Portofino", price:258, img:"images/destinations/portofino.jpg" },
  { name:"Santa Margherita Ligure", price:251, img:"images/destinations/santa-margherita.jpg" },
  { name:"Rapallo", price:242, img:"images/destinations/rapallo.jpg" },
  { name:"Bologna", price:313 },
  { name:"Forte dei Marmi", price:355 },
  { name:"Venezia", price:393 },
  { name:"Pisa", price:409 },
  { name:"Livorno", price:425 },
  { name:"Firenze", price:453 },
  { name:"Serravalle Designer Outlet", price:147 },
  { name:"FoxTown Outlet (Svizzera)", price:93 }
];

/* =========================================================================
   DATA: full catalogue by country / category
   ========================================================================= */
const CATALOG = {
  italy: [
    { key:"cat_airports", items:[
      {name:"Milano Malpensa (MXP)",price:88},{name:"Milano Linate (LIN)",price:40},
      {name:"Bergamo Orio al Serio (BGY)",price:87},{name:"Venezia Marco Polo (VCE)",price:393},
      {name:"Roma Fiumicino (FCO)",price:950},{name:"Bologna (BLQ)",price:313},
      {name:"Treviso (TSF)",price:410},{name:"Bolzano (BZO)",price:330}
    ]},
    { key:"cat_cities", items:[
      {name:"Torino",price:209},{name:"Genova",price:215},{name:"Bologna",price:313},
      {name:"Venezia",price:393},{name:"Firenze",price:453},{name:"Verona",price:230},{name:"Parma",price:260}
    ]},
    { key:"cat_sea", items:[
      {name:"Portofino",price:258},{name:"Positano",price:980},{name:"Amalfi",price:1020},
      {name:"Alassio",price:240},{name:"Viareggio",price:360},{name:"Santa Margherita Ligure",price:251},
      {name:"Rapallo",price:242},{name:"Forte dei Marmi",price:355}
    ]},
    { key:"cat_lakes", items:[
      {name:"Lago di Como",price:63},{name:"Bellagio",price:128},{name:"Desenzano del Garda (Lago di Garda)",price:187},
      {name:"Stresa (Lago Maggiore)",price:140},{name:"Lago d'Iseo",price:110}
    ]},
    { key:"cat_ski", items:[
      {name:"Bormio",price:365},{name:"Livigno",price:392},{name:"Cortina d'Ampezzo",price:718},
      {name:"Cervinia",price:356},{name:"Courmayeur",price:386},{name:"Madonna di Campiglio",price:541},
      {name:"Sestriere",price:418},{name:"Monte Rosa",price:252},{name:"Val Gardena",price:601}
    ]},
    { key:"cat_outlets", items:[
      {name:"Serravalle Designer Outlet",price:147},{name:"Fidenza Village",price:170},
      {name:"FoxTown Outlet (Svizzera)",price:93},{name:"The Mall Firenze",price:460}
    ]},
    { key:"cat_fairs", items:[
      {name:"Rho Fiera Milano",price:45},{name:"Fiera Milano City",price:35},{name:"Bologna Fiere",price:313}
    ]}
  ],
  france: [
    { key:"cat_fr_cities", items:[
      {name:"Nice",price:480},{name:"Cannes",price:500},{name:"Annecy",price:320},{name:"Paris",price:790}
    ]},
    { key:"cat_fr_ski", items:[
      {name:"Courchevel",price:551},{name:"Chamonix",price:483},{name:"Val d'Isère",price:494},{name:"Tignes",price:516},
      {name:"La Plagne",price:525},{name:"La Tania",price:543},{name:"Les Arcs",price:530},{name:"Les Houches",price:432},
      {name:"Megève",price:482},{name:"Méribel",price:541},{name:"Bourg-Saint-Maurice",price:475},{name:"Le Grand Bornand",price:543}
    ]}
  ],
  switzerland: [
    { key:"cat_ch_cities", items:[
      {name:"Lugano",price:122},{name:"St. Moritz",price:452},{name:"Ascona",price:170},{name:"Champéry",price:527}
    ]},
    { key:"cat_ch_ski", items:[
      {name:"Zermatt",price:416},{name:"Verbier",price:310},{name:"Davos",price:290},{name:"Crans-Montana",price:310}
    ]}
  ],
  austria: [
    { key:"cat_at_airports", items:[
      {name:"Innsbruck",price:300},{name:"Vienna",price:820},{name:"Salzburg",price:480}
    ]},
    { key:"cat_at_resorts", items:[
      {name:"Sölden",price:659},{name:"Saalbach",price:933},{name:"Ischgl",price:649},{name:"St. Anton",price:598},
      {name:"Alpbach",price:777},{name:"Kitzbühel",price:847},{name:"Obergurgl",price:640},{name:"Mayrhofen",price:805},{name:"Söll",price:814}
    ]}
  ]
};

/* =========================================================================
   DATA: FAQ
   ========================================================================= */
const FAQ_DATA = {
  uk: [
    {q:"Що якщо мій рейс затримається?",a:"Ми стежимо за номером вашого рейсу й автоматично коригуємо час подачі авто. Безкоштовне очікування — 60 хвилин після приземлення."},
    {q:"Як відбувається оплата?",a:"Готівкою або карткою безпосередньо водію, або банківським переказом заздалегідь. Ціна фіксується й підтверджується до поїздки."},
    {q:"Чи надаєте дитячі крісла?",a:"Так, безкоштовно. Просто вкажіть вік дитини під час бронювання — ми підготуємо відповідне крісло."},
    {q:"Де я зустрінуся з водієм?",a:"У залі прильоту з табличкою з вашим ім'ям. Водій допоможе з багажем і проведе до авто."},
    {q:"Можна скасувати бронювання?",a:"Так — безкоштовне скасування за 24 години до поїздки. Просто напишіть нам у WhatsApp."},
    {q:"Ви їздите за межі Італії?",a:"Так. Ми також виконуємо трансфери до Швейцарії, Франції, Австрії та інших сусідніх країн."}
  ],
  en: [
    {q:"What if my flight is delayed?",a:"We track your flight number and adjust the pickup time automatically. Waiting is free for 60 minutes after landing."},
    {q:"How do I pay?",a:"Cash or card directly to the driver, or by bank transfer in advance. The price is fixed and confirmed before the ride."},
    {q:"Do you provide child seats?",a:"Yes, free of charge. Just mention the age of the children when booking and we will prepare the right seat."},
    {q:"Where will I meet the driver?",a:"In the arrivals hall with a name sign. He will help with the luggage and walk you to the car."},
    {q:"Can I cancel my booking?",a:"Yes — free cancellation up to 24 hours before the ride. Just message us on WhatsApp."},
    {q:"Do you drive outside Italy?",a:"Yes. We also handle transfers to Switzerland, France, Austria and other neighbouring countries."}
  ],
  it: [
    {q:"E se il mio volo è in ritardo?",a:"Monitoriamo il numero del tuo volo e adattiamo automaticamente l'orario di ritiro. L'attesa è gratuita per 60 minuti dopo l'atterraggio."},
    {q:"Come posso pagare?",a:"In contanti o con carta direttamente al driver, oppure tramite bonifico in anticipo. Il prezzo è fisso e confermato prima del viaggio."},
    {q:"Fornite seggiolini per bambini?",a:"Sì, gratuitamente. Basta indicare l'età dei bambini al momento della prenotazione e prepareremo il seggiolino adeguato."},
    {q:"Dove incontrerò il driver?",a:"Nella sala arrivi, con un cartello con il tuo nome. Ti aiuterà con i bagagli e ti accompagnerà all'auto."},
    {q:"Posso annullare la prenotazione?",a:"Sì — cancellazione gratuita fino a 24 ore prima del viaggio. Basta scriverci su WhatsApp."},
    {q:"Guidate anche fuori dall'Italia?",a:"Sì. Gestiamo anche transfer verso Svizzera, Francia, Austria e altri paesi limitrofi."}
  ],
  ru: [
    {q:"Что если мой рейс задержится?",a:"Мы следим за номером вашего рейса и автоматически корректируем время подачи авто. Бесплатное ожидание — 60 минут после приземления."},
    {q:"Как происходит оплата?",a:"Наличными или картой напрямую водителю, либо банковским переводом заранее. Цена фиксируется и подтверждается до поездки."},
    {q:"Предоставляете ли детские кресла?",a:"Да, бесплатно. Просто укажите возраст ребёнка при бронировании — мы подготовим подходящее кресло."},
    {q:"Где я встречу водителя?",a:"В зале прилёта с табличкой с вашим именем. Водитель поможет с багажом и проведёт к авто."},
    {q:"Можно ли отменить бронирование?",a:"Да — бесплатная отмена за 24 часа до поездки. Просто напишите нам в WhatsApp."},
    {q:"Вы ездите за пределы Италии?",a:"Да. Мы также выполняем трансферы в Швейцарию, Францию, Австрию и другие соседние страны."}
  ]
};

/* =========================================================================
   DATA: reviews (placeholder examples — replace with real client reviews)
   ========================================================================= */
const REVIEWS_DATA = {
  uk: [
    {name:"Олена К.",meta:"Мальпенса → Lago di Como",text:"Водій зустрів з табличкою прямо на виході, допоміг з валізами. Доїхали до готелю швидко і без жодної зупинки. Авто чисте, кондиціонер працював ідеально."},
    {name:"Андрій П.",meta:"Мілан, бізнес-поїздка",text:"Замовляв погодинно на два дні зустрічей. Водій завжди був на зв'язку, приїжджав на 10 хвилин раніше. Ціну погодили одразу, без доплат наприкінці."},
    {name:"Марина Т.",meta:"Мальпенса → Лівіньо",text:"Їхали родиною з двома дітьми та купою багажу — все помістилося в мінівен без проблем. Водій порадив, де зупинитися перекусити дорогою. Рекомендую."}
  ],
  en: [
    {name:"Helen K.",meta:"Malpensa → Lake Como",text:"The driver was waiting right at the exit with a name sign and helped with every suitcase. We reached the hotel quickly with no stops. The car was spotless and the AC worked perfectly."},
    {name:"Andrew P.",meta:"Milan, business trip",text:"Booked an hourly rate for two days of meetings. The driver was always reachable and arrived 10 minutes early each time. The price was agreed upfront with no surprises at the end."},
    {name:"Marina T.",meta:"Malpensa → Livigno",text:"We travelled as a family with two kids and a mountain of luggage — everything fit in the minivan without any issue. The driver even suggested a great stop for lunch on the way. Highly recommend."}
  ],
  it: [
    {name:"Elena K.",meta:"Malpensa → Lago di Como",text:"L'autista ci aspettava proprio all'uscita con un cartello con il nostro nome e ci ha aiutato con ogni valigia. Siamo arrivati in hotel velocemente, senza soste. Auto impeccabile e aria condizionata perfetta."},
    {name:"Andrea P.",meta:"Milano, viaggio di lavoro",text:"Ho prenotato a ore per due giorni di riunioni. L'autista era sempre raggiungibile e arrivava 10 minuti prima ogni volta. Il prezzo concordato in anticipo, nessuna sorpresa alla fine."},
    {name:"Marina T.",meta:"Malpensa → Livigno",text:"Abbiamo viaggiato in famiglia con due bambini e un sacco di bagagli — tutto è entrato nel minivan senza problemi. L'autista ci ha persino consigliato una bella sosta per il pranzo. Consigliatissimo."}
  ],
  ru: [
    {name:"Елена К.",meta:"Мальпенса → Lago di Como",text:"Водитель встретил с табличкой прямо на выходе, помог с чемоданами. Доехали до отеля быстро и без единой остановки. Машина чистая, кондиционер работал идеально."},
    {name:"Андрей П.",meta:"Милан, бизнес-поездка",text:"Заказывал почасово на два дня встреч. Водитель всегда был на связи, приезжал на 10 минут раньше. Цену согласовали сразу, без доплат в конце."},
    {name:"Марина Т.",meta:"Мальпенса → Ливиньо",text:"Ехали семьёй с двумя детьми и кучей багажа — всё поместилось в минивэн без проблем. Водитель посоветовал, где остановиться перекусить по дороге. Рекомендую."}
  ]
};

/* =========================================================================
   DATA: terms & conditions (original text)
   ========================================================================= */
const TERMS_DATA = {
  uk: `<h4>1. Загальні умови</h4><p>Best Transfer Milan надає послуги приватного трансферу легковими автомобілями та мінівенами з водієм на території Мілана, Італії та суміжних країн. Бронюючи поїздку, клієнт погоджується з цими умовами.</p>
  <h4>2. Ціна та оплата</h4><p>Вартість поїздки фіксується і підтверджується менеджером до початку трансферу. Оплата приймається готівкою, карткою водію або банківським переказом заздалегідь. Ціни на сайті є орієнтовними; остаточна вартість залежить від точної адреси, часу та обраного класу авто.</p>
  <h4>3. Скасування та зміни</h4><p>Безкоштовне скасування або перенесення поїздки можливе за 24 години до запланованого часу. Скасування пізніше може супроводжуватися частковою оплатою.</p>
  <h4>4. Затримка рейсу</h4><p>Для трансферів з аеропорту ми відстежуємо номер рейсу та безкоштовно чекаємо до 60 хвилин після фактичного приземлення.</p>
  <h4>5. Багаж та пасажири</h4><p>Будь ласка, вказуйте точну кількість пасажирів і одиниць багажу під час бронювання — це допомагає підібрати авто відповідного класу.</p>
  <h4>6. Конфіденційність</h4><p>Дані, надані під час бронювання (ім'я, телефон, маршрут), використовуються виключно для організації поїздки та не передаються третім особам, окрім випадків, передбачених законом.</p>`,
  en: `<h4>1. General terms</h4><p>Best Transfer Milan provides private chauffeur transfer services using cars and vans across Milan, Italy and neighbouring countries. By booking a ride, the client agrees to these terms.</p>
  <h4>2. Price & payment</h4><p>The fare is fixed and confirmed by the manager before the transfer begins. Payment is accepted in cash or by card to the driver, or by bank transfer in advance. Prices on the website are indicative; the final fare depends on the exact address, time and selected car class.</p>
  <h4>3. Cancellations & changes</h4><p>Free cancellation or rescheduling is available up to 24 hours before the scheduled time. Later cancellations may involve a partial charge.</p>
  <h4>4. Flight delays</h4><p>For airport transfers we track your flight number and wait free of charge for up to 60 minutes after actual landing.</p>
  <h4>5. Luggage & passengers</h4><p>Please provide the exact number of passengers and luggage items when booking — this helps us select the right car class.</p>
  <h4>6. Privacy</h4><p>Details provided during booking (name, phone, route) are used solely to organise the ride and are not shared with third parties except where required by law.</p>`,
  it: `<h4>1. Condizioni generali</h4><p>Best Transfer Milan fornisce servizi di transfer privato con driver, con auto e minivan a Milano, in Italia e nei paesi limitrofi. Prenotando un viaggio, il cliente accetta queste condizioni.</p>
  <h4>2. Prezzo e pagamento</h4><p>La tariffa è fissa e confermata dal manager prima dell'inizio del transfer. Il pagamento è accettato in contanti o con carta al driver, oppure tramite bonifico in anticipo. I prezzi sul sito sono indicativi; la tariffa finale dipende dall'indirizzo esatto, dall'orario e dalla classe dell'auto scelta.</p>
  <h4>3. Cancellazioni e modifiche</h4><p>La cancellazione o la modifica gratuita sono possibili fino a 24 ore prima dell'orario previsto. Cancellazioni successive possono comportare un addebito parziale.</p>
  <h4>4. Ritardo del volo</h4><p>Per i transfer aeroportuali monitoriamo il numero di volo e attendiamo gratuitamente fino a 60 minuti dopo l'atterraggio effettivo.</p>
  <h4>5. Bagagli e passeggeri</h4><p>Si prega di indicare il numero esatto di passeggeri e bagagli al momento della prenotazione — questo ci aiuta a scegliere la classe di auto adeguata.</p>
  <h4>6. Privacy</h4><p>I dati forniti durante la prenotazione (nome, telefono, percorso) sono utilizzati esclusivamente per organizzare il viaggio e non vengono condivisi con terzi, salvo obbligo di legge.</p>`,
  ru: `<h4>1. Общие условия</h4><p>Best Transfer Milan предоставляет услуги приватного трансфера легковыми автомобилями и минивэнами с водителем на территории Милана, Италии и соседних стран. Бронируя поездку, клиент соглашается с этими условиями.</p>
  <h4>2. Цена и оплата</h4><p>Стоимость поездки фиксируется и подтверждается менеджером до начала трансфера. Оплата принимается наличными, картой водителю или банковским переводом заранее. Цены на сайте являются ориентировочными; итоговая стоимость зависит от точного адреса, времени и выбранного класса авто.</p>
  <h4>3. Отмена и изменения</h4><p>Бесплатная отмена или перенос поездки возможны за 24 часа до запланированного времени. Более позднее отмена может сопровождаться частичной оплатой.</p>
  <h4>4. Задержка рейса</h4><p>Для трансферов из аэропорта мы отслеживаем номер рейса и бесплатно ждём до 60 минут после фактического приземления.</p>
  <h4>5. Багаж и пассажиры</h4><p>Пожалуйста, указывайте точное количество пассажиров и единиц багажа при бронировании — это помогает подобрать авто подходящего класса.</p>
  <h4>6. Конфиденциальность</h4><p>Данные, предоставленные при бронировании (имя, телефон, маршрут), используются исключительно для организации поездки и не передаются третьим лицам, кроме случаев, предусмотренных законом.</p>`
};

/* =========================================================================
   HELPERS
   ========================================================================= */
function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || key; }
function normalize(s){ return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim(); }

function buildPlacesIndex(){
  const places = [];
  POPULAR.forEach(p=>places.push({name:p.name,price:p.price}));
  Object.values(CATALOG).forEach(groups=>groups.forEach(g=>g.items.forEach(i=>places.push({name:i.name,price:i.price}))));
  const seen = new Set(); const out = [];
  places.forEach(p=>{ const n=normalize(p.name); if(!seen.has(n)){ seen.add(n); out.push(p); } });
  return out;
}
const PLACES_INDEX = buildPlacesIndex();

function findBasePrice(query){
  const q = normalize(query);
  if(!q || q==="milano" || q==="milan" || q==="milano, italy") return null;
  let best = null;
  PLACES_INDEX.forEach(p=>{
    const n = normalize(p.name);
    if(q===n || q.includes(n) || n.includes(q)){
      if(!best || n.length > normalize(best.name).length) best = p;
    }
  });
  return best;
}

/* =========================================================================
   RENDER FUNCTIONS
   ========================================================================= */
function applyStaticI18n(){
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[currentLang][key] !== undefined) el.innerHTML = I18N[currentLang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(I18N[currentLang][key] !== undefined) el.setAttribute("placeholder", I18N[currentLang][key]);
  });
}

function renderDestinations(){
  const grid = document.getElementById("destGrid");
  grid.innerHTML = POPULAR.slice(0,12).map(d=>`
    <div class="dest-card reveal" data-name="${d.name}" ${d.img ? `style="background-image:url('${d.img}')"` : ""}>
      <div class="dest-card__name">${d.name}</div>
      <div class="dest-card__price">${t("price_from")} ${fmtPrice(d.price)}</div>
      <button type="button" class="dest-card__btn" data-dest="${d.name}">${t("btn_book")}</button>
    </div>`).join("");
  grid.querySelectorAll("[data-dest]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{ e.stopPropagation(); fillAndSearch("Milano", btn.getAttribute("data-dest")); });
  });
  grid.querySelectorAll(".dest-card").forEach(card=>{
    card.addEventListener("click", ()=> fillAndSearch("Milano", card.getAttribute("data-name")));
  });
  observeReveals();
}

function renderCatalog(){
  const panels = document.getElementById("catalogPanels");
  const tabs = ["italy","france","switzerland","austria"];
  panels.innerHTML = tabs.map(tab=>`
    <div class="catalog__panel ${tab==="italy"?"is-active":""}" data-panel="${tab}">
      ${CATALOG[tab].map(group=>`
        <div class="catalog__group">
          <h4>${t(group.key)}</h4>
          <div class="chips">
            ${group.items.map(i=>`<button type="button" class="chip" data-chip="${i.name}">${i.name} <small>${t("price_from")} ${fmtPrice(i.price)}</small></button>`).join("")}
          </div>
        </div>`).join("")}
    </div>`).join("");
  panels.querySelectorAll("[data-chip]").forEach(chip=>{
    chip.addEventListener("click", ()=> fillAndSearch("Milano", chip.getAttribute("data-chip")));
  });
}

function renderFleetCards(container, computeFn){
  return FLEET.map(car=>{
    const data = computeFn ? computeFn(car) : null;
    const disabled = data && !data.fits;
    return `
    <div class="${container==="results"?"result-card":"car-card"} reveal ${disabled?"is-disabled":""}" data-fleet="${car.id}">
      <div class="car-card__media"><img src="${car.img}" alt="${car.name}" loading="lazy"></div>
      <span class="car-card__badge">${car.badge[currentLang]}</span>
      <h3 class="${container==="results"?"result-card__name":"car-card__name"}">${car.badge[currentLang]}</h3>
      ${container!=="results" ? `<p class="car-card__models">${car.models}</p><p class="car-card__desc">${car.desc[currentLang]}</p>` : ""}
      <div class="${container==="results"?"result-card__specs":"car-card__specs"}">
        <span>👤 ${car.pax} ${t("car_pax")}</span><span>🧳 ${car.bags} ${t("car_bags")}</span>
      </div>
      ${data ? `
        ${!data.fits ? `<p class="result-card__warn">${currentLang==="uk"?"Недостатньо місць":currentLang==="it"?"Posti insufficienti":currentLang==="ru"?"Недостаточно мест":"Not enough capacity"}</p>` : ""}
        <div class="result-card__price">${data.onRequest ? ON_REQUEST_LABEL[currentLang] : fmtPrice(data.price)}</div>
        <button type="button" class="btn btn--gold" data-book="${car.id}" ${!data.fits?"disabled":""}>${t("btn_book")}</button>
      ` : `<p class="car-card__hourly">${t("car_hourly")} ${fmtPrice(car.hourly)}/${currentLang==="uk"?"год":currentLang==="it"?"ora":currentLang==="ru"?"ч":"h"}</p><a href="#booking" class="btn btn--outline" data-book="${car.id}">${t("car_book")}</a>`}
    </div>`;
  }).join("");
}

function renderFleet(){
  document.getElementById("fleetGrid").innerHTML = renderFleetCards("fleet");
  document.getElementById("fleetGrid").querySelectorAll("[data-book]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{ e.preventDefault(); openBookingModal(); });
  });
  observeReveals();
}

function renderFaq(){
  const list = document.getElementById("faqList");
  list.innerHTML = FAQ_DATA[currentLang].map((f,i)=>`
    <details class="faq__item reveal" ${i===0?"open":""}>
      <summary>${f.q}</summary>
      <p>${f.a}</p>
    </details>`).join("");
  observeReveals();
}

let reviewIndex = 0, reviewTimer = null;
function renderReviews(){
  const track = document.getElementById("reviewsTrack");
  const dots = document.getElementById("reviewsDots");
  const data = REVIEWS_DATA[currentLang];
  track.innerHTML = data.map(r=>`
    <figure class="review">
      <div class="review__stars">★★★★★</div>
      <blockquote>${r.text}</blockquote>
      <figcaption><span>${r.name}</span> · <span>${r.meta}</span></figcaption>
    </figure>`).join("");
  dots.innerHTML = data.map((_,i)=>`<button type="button" data-dot="${i}" class="${i===0?"is-active":""}"></button>`).join("");
  dots.querySelectorAll("[data-dot]").forEach(d=>{
    d.addEventListener("click", ()=> showReview(parseInt(d.getAttribute("data-dot"),10)));
  });
  reviewIndex = 0; showReview(0);
  document.getElementById("reviewsPlaceholderNote").hidden = false;

  const trustQuotes = document.getElementById("trustQuotes");
  trustQuotes.innerHTML = data.map((r,i)=>`<span class="${i===0?"is-active":""}">"${r.text.replace(/^\[.*?\]\s*/,"").slice(0,70) || r.meta}"</span>`).join("");
  let tq = 0;
  if(window.__tqTimer) clearInterval(window.__tqTimer);
  window.__tqTimer = setInterval(()=>{
    const spans = trustQuotes.querySelectorAll("span");
    if(!spans.length) return;
    spans[tq].classList.remove("is-active");
    tq = (tq+1) % spans.length;
    spans[tq].classList.add("is-active");
  }, 4000);
}
function showReview(i){
  const data = REVIEWS_DATA[currentLang];
  reviewIndex = (i + data.length) % data.length;
  document.getElementById("reviewsTrack").style.transform = `translateX(-${reviewIndex*100}%)`;
  document.querySelectorAll("#reviewsDots button").forEach((d,idx)=>d.classList.toggle("is-active", idx===reviewIndex));
}
function startReviewAutoplay(){
  if(reviewTimer) clearInterval(reviewTimer);
  reviewTimer = setInterval(()=> showReview(reviewIndex+1), 6000);
}

function renderTerms(){
  document.getElementById("termsBody").innerHTML = TERMS_DATA[currentLang];
}

/* =========================================================================
   SEARCH / PRICING
   ========================================================================= */
function computeClassPrice(car, basePrice, pax, bags){
  const fits = car.pax >= pax && car.bags >= bags;
  if(car.mult === null) return { onRequest:true, fits };
  return { price: Math.round(basePrice * car.mult), fits };
}

function fillAndSearch(from, to){
  document.getElementById("fromInput").value = from;
  document.getElementById("toInput").value = to;
  runSearch();
  document.getElementById("results").scrollIntoView({behavior:"smooth", block:"start"});
}

function runSearch(){
  const from = document.getElementById("fromInput").value.trim() || "Milano";
  const to = document.getElementById("toInput").value.trim();
  const pax = parseInt(document.querySelector('[data-counter="pax"]').getAttribute("data-value"),10);
  const bags = parseInt(document.querySelector('[data-counter="bags"]').getAttribute("data-value"),10);

  const resultsSection = document.getElementById("results");
  resultsSection.hidden = false;
  document.getElementById("resultsRoute").textContent = `${from} → ${to || "?"}`;

  let match = findBasePrice(to) || findBasePrice(from);
  const grid = document.getElementById("resultsGrid");

  if(!match){
    grid.innerHTML = `
      <div class="result-card reveal" style="grid-column:1/-1;text-align:center;align-items:center">
        <h3 class="result-card__name">${t("results_unknown_title")}</h3>
        <p style="color:var(--text-soft);max-width:480px;margin:0 auto 18px">${t("results_unknown_text")}</p>
        <button type="button" class="btn btn--gold" id="unknownCta">${t("results_unknown_cta")}</button>
      </div>`;
    document.getElementById("unknownCta").addEventListener("click", ()=> openBookingModal(`${from} → ${to || "?"}`));
  } else {
    grid.innerHTML = renderFleetCards("results", (car)=> computeClassPrice(car, match.price, pax, bags));
    grid.querySelectorAll("[data-book]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const car = FLEET.find(c=>c.id===btn.getAttribute("data-book"));
        const data = computeClassPrice(car, match.price, pax, bags);
        openBookingModal(`${from} → ${to}`, `${car.name} · ${data.onRequest ? ON_REQUEST_LABEL[currentLang] : fmtPrice(data.price)}`);
      });
    });
  }
  observeReveals();
}

/* =========================================================================
   AUTOCOMPLETE
   ========================================================================= */
function setupAutocomplete(inputId, listId){
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const names = ["Milano", ...PLACES_INDEX.map(p=>p.name)];

  input.addEventListener("input", ()=>{
    const q = normalize(input.value);
    if(!q){ list.classList.remove("is-open"); list.innerHTML=""; return; }
    const matches = names.filter(n=>normalize(n).includes(q)).slice(0,8);
    if(!matches.length){ list.classList.remove("is-open"); return; }
    list.innerHTML = matches.map(n=>`<li><button type="button">${n}</button></li>`).join("");
    list.classList.add("is-open");
    list.querySelectorAll("button").forEach((b,i)=>{
      b.addEventListener("click", ()=>{ input.value = matches[i]; list.classList.remove("is-open"); });
    });
  });
  document.addEventListener("click", (e)=>{
    if(!list.contains(e.target) && e.target!==input) list.classList.remove("is-open");
  });
}

/* =========================================================================
   MODAL
   ========================================================================= */
function openBookingModal(routeText, classText){
  const modal = document.getElementById("bookingModal");
  modal.hidden = false;
  document.getElementById("modalRoute").textContent = [routeText, classText].filter(Boolean).join(" · ");
  document.getElementById("modalForm").reset();
  document.getElementById("mDate").value = document.getElementById("dateInput").value || "";
  document.getElementById("modalSuccess").hidden = true;
  document.getElementById("modalForm").style.display = "grid";
  document.getElementById("modalError").hidden = true;
  modal.dataset.route = routeText || "";
  modal.dataset.class = classText || "";
  document.body.style.overflow = "hidden";
}
function closeBookingModal(){
  document.getElementById("bookingModal").hidden = true;
  document.body.style.overflow = "";
}
function openTermsModal(){ document.getElementById("termsModal").hidden = false; document.body.style.overflow="hidden"; }
function closeTermsModal(){ document.getElementById("termsModal").hidden = true; document.body.style.overflow=""; }

/* =========================================================================
   INIT
   ========================================================================= */
function observeReveals(){
  const els = document.querySelectorAll(".reveal:not(.is-visible)");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("is-visible"); io.unobserve(e.target); } });
  }, {threshold:.12});
  els.forEach(el=>io.observe(el));
}

function applyConfigToDom(){
  document.querySelectorAll("#headerPhone, #footerPhone").forEach(el=>{ el.textContent = CONFIG.phone; el.setAttribute("href", `tel:${CONFIG.phoneHref}`); });
  document.getElementById("footerEmail").textContent = CONFIG.email;
  document.getElementById("footerEmail").setAttribute("href", `mailto:${CONFIG.email}`);
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a=>{ a.setAttribute("href", `https://wa.me/${CONFIG.phoneHref.replace("+","")}`); });
  document.querySelectorAll('[data-telegram-link]').forEach(a=>{ a.setAttribute("href", CONFIG.telegram); });
}

function setLang(lang){
  currentLang = lang;
  localStorage.setItem("btm_lang", lang);
  document.getElementById("langToggle").innerHTML = `${lang.toUpperCase()} <i>▾</i>`;
  document.querySelectorAll("#langMenu button").forEach(b=>b.classList.toggle("is-active", b.getAttribute("data-lang")===lang));
  applyStaticI18n();
  renderDestinations(); renderCatalog(); renderFleet(); renderFaq(); renderReviews(); renderTerms();
  document.getElementById("results").hidden || runSearch();
  startReviewAutoplay();
}
function setCurrency(curr){
  currentCurrency = curr;
  localStorage.setItem("btm_curr", curr);
  document.getElementById("currToggle").innerHTML = `${RATES[curr].symbol} ${curr} <i>▾</i>`;
  document.querySelectorAll("#currMenu button").forEach(b=>b.classList.toggle("is-active", b.getAttribute("data-curr")===curr));
  renderDestinations(); renderCatalog();
  if(!document.getElementById("results").hidden) runSearch();
}

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("year").textContent = new Date().getFullYear();
  applyConfigToDom();

  /* cookie banner */
  const cookieBanner = document.getElementById("cookieBanner");
  if(!localStorage.getItem("btm_cookie_consent")){ cookieBanner.hidden = false; }
  document.getElementById("cookieAccept").addEventListener("click", ()=>{ localStorage.setItem("btm_cookie_consent","accepted"); cookieBanner.hidden = true; });
  document.getElementById("cookieDecline").addEventListener("click", ()=>{ localStorage.setItem("btm_cookie_consent","declined"); cookieBanner.hidden = true; });

  /* burger */
  const burger = document.getElementById("burger"), mobileNav = document.getElementById("mobileNav");
  burger.addEventListener("click", ()=>{ burger.classList.toggle("is-open"); mobileNav.classList.toggle("is-open"); });
  mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>{ burger.classList.remove("is-open"); mobileNav.classList.remove("is-open"); }));

  /* lang & currency switches */
  ["langSwitch","currSwitch"].forEach(id=>{
    const el = document.getElementById(id);
    el.querySelector(".switch__toggle").addEventListener("click", (e)=>{
      e.stopPropagation();
      const isOpen = el.classList.contains("is-open");
      document.querySelectorAll(".switch").forEach(s=>s.classList.remove("is-open"));
      el.classList.toggle("is-open", !isOpen);
    });
  });
  document.addEventListener("click", ()=> document.querySelectorAll(".switch").forEach(s=>s.classList.remove("is-open")));
  document.querySelectorAll("#langMenu button").forEach(b=>b.addEventListener("click", ()=>{ setLang(b.getAttribute("data-lang")); document.getElementById("langSwitch").classList.remove("is-open"); }));
  document.querySelectorAll("#currMenu button").forEach(b=>b.addEventListener("click", ()=>{ setCurrency(b.getAttribute("data-curr")); document.getElementById("currSwitch").classList.remove("is-open"); }));

  /* counters */
  document.querySelectorAll(".counter").forEach(counter=>{
    const min = parseInt(counter.getAttribute("data-min"),10), max = parseInt(counter.getAttribute("data-max"),10);
    const valSpan = counter.querySelector(".counter__value");
    const displayEl = document.getElementById(counter.getAttribute("data-counter")==="pax" ? "paxDisplay" : "bagsDisplay");
    counter.querySelectorAll(".counter__btn").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        let v = parseInt(counter.getAttribute("data-value"),10) + parseInt(btn.getAttribute("data-step"),10);
        v = Math.max(min, Math.min(max, v));
        counter.setAttribute("data-value", v); valSpan.textContent = v;
        if(displayEl) displayEl.textContent = v;
      });
    });
  });

  /* passengers/luggage popover */
  const counterPopover = document.getElementById("counterPopover");
  document.querySelectorAll(".counter-trigger").forEach(trigger=>{
    trigger.addEventListener("click", (e)=>{
      e.stopPropagation();
      counterPopover.hidden = !counterPopover.hidden;
    });
  });
  document.addEventListener("click", (e)=>{
    if(!counterPopover.hidden && !counterPopover.contains(e.target) && !e.target.closest(".counter-trigger")) counterPopover.hidden = true;
  });

  /* swap from/to */
  document.getElementById("swapBtn").addEventListener("click", ()=>{
    const fromEl = document.getElementById("fromInput"), toEl = document.getElementById("toInput");
    const tmp = fromEl.value; fromEl.value = toEl.value; toEl.value = tmp;
  });

  /* autocomplete */
  setupAutocomplete("fromInput","fromList");
  setupAutocomplete("toInput","toList");

  /* search form */
  document.getElementById("searchForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!document.getElementById("toInput").value.trim()){ document.getElementById("toInput").focus(); return; }
    runSearch();
    document.getElementById("results").scrollIntoView({behavior:"smooth", block:"start"});
  });

  /* modal triggers */
  document.getElementById("qualityCta").addEventListener("click", (e)=>{ e.preventDefault(); openBookingModal(); });
  document.getElementById("openContactFromCatalog").addEventListener("click", ()=> openBookingModal());
  document.getElementById("aboutMoreBtn").addEventListener("click", (e)=>{ e.preventDefault(); openTermsModal(); });
  document.getElementById("modalClose").addEventListener("click", closeBookingModal);
  document.getElementById("modalBackdrop").addEventListener("click", closeBookingModal);

  document.getElementById("openTerms").addEventListener("click", (e)=>{ e.preventDefault(); openTermsModal(); });
  document.getElementById("openTermsMobile").addEventListener("click", (e)=>{ e.preventDefault(); openTermsModal(); });
  document.getElementById("footerTermsLink").addEventListener("click", (e)=>{ e.preventDefault(); openTermsModal(); });
  document.getElementById("termsClose").addEventListener("click", closeTermsModal);
  document.getElementById("termsBackdrop").addEventListener("click", closeTermsModal);

  /* modal: send via WhatsApp only */
  document.getElementById("modalForm").addEventListener("submit", (e)=> e.preventDefault());
  document.getElementById("modalWaBtn").addEventListener("click", (e)=>{
    const name = document.getElementById("mName").value.trim();
    const phone = document.getElementById("mPhone").value.trim();
    if(!name || phone.length < 6){
      e.preventDefault();
      document.getElementById("modalError").hidden = false;
      return;
    }
    document.getElementById("modalError").hidden = true;

    const modal = document.getElementById("bookingModal");
    const comment = document.getElementById("mComment").value.trim();
    const dateRaw = document.getElementById("mDate").value;
    const date = dateRaw ? dateRaw.replace("T", " ") : "";
    const lines = [
      `Best Transfer Milan — ${I18N[currentLang].modal_title}`,
      modal.dataset.route ? `${currentLang==="uk"?"Маршрут":currentLang==="it"?"Percorso":currentLang==="ru"?"Маршрут":"Route"}: ${modal.dataset.route}` : null,
      modal.dataset.class ? `${currentLang==="uk"?"Авто":currentLang==="it"?"Auto":currentLang==="ru"?"Авто":"Car"}: ${modal.dataset.class}` : null,
      `${currentLang==="uk"?"Ім'я":currentLang==="it"?"Nome":currentLang==="ru"?"Имя":"Name"}: ${name}`,
      `${currentLang==="uk"?"Телефон":currentLang==="it"?"Telefono":currentLang==="ru"?"Телефон":"Phone"}: ${phone}`,
      date ? `${currentLang==="uk"?"Дата":currentLang==="it"?"Data":currentLang==="ru"?"Дата":"Date"}: ${date}` : null,
      comment ? `${currentLang==="uk"?"Коментар":currentLang==="it"?"Commento":currentLang==="ru"?"Комментарий":"Comment"}: ${comment}` : null
    ].filter(Boolean).join("\n");

    document.getElementById("modalWaBtn").setAttribute("href", `https://wa.me/${CONFIG.phoneHref.replace("+","")}?text=${encodeURIComponent(lines)}`);
    document.getElementById("modalForm").style.display = "none";
    document.getElementById("modalSuccess").hidden = false;
    /* href just updated on this same click — browser opens it in a new tab as normal link navigation */
  });

  /* catalog tabs */
  document.getElementById("catalogTabs").addEventListener("click", (e)=>{
    const btn = e.target.closest(".tabs__btn"); if(!btn) return;
    document.querySelectorAll(".tabs__btn").forEach(b=>b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const tab = btn.getAttribute("data-tab");
    document.querySelectorAll(".catalog__panel").forEach(p=>p.classList.toggle("is-active", p.getAttribute("data-panel")===tab));
  });

  /* default date = today at 12:00 */
  const today = new Date().toISOString().slice(0,10);
  document.getElementById("dateInput").value = `${today}T12:00`;

  /* initial render */
  document.getElementById("langToggle").innerHTML = `${currentLang.toUpperCase()} <i>▾</i>`;
  document.querySelectorAll("#langMenu button").forEach(b=>b.classList.toggle("is-active", b.getAttribute("data-lang")===currentLang));
  document.getElementById("currToggle").innerHTML = `${RATES[currentCurrency].symbol} ${currentCurrency} <i>▾</i>`;
  document.querySelectorAll("#currMenu button").forEach(b=>b.classList.toggle("is-active", b.getAttribute("data-curr")===currentCurrency));

  applyStaticI18n();
  renderDestinations(); renderCatalog(); renderFleet(); renderFaq(); renderReviews(); renderTerms();
  startReviewAutoplay();
  observeReveals();
});
