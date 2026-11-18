/* =========================================================================
   Google Ads tracking + Consent Mode v2.
   - Ads/analytics cookies stay OFF until the visitor clicks "Accept all"
     in the cookie banner (EU rules); without consent Google only gets
     anonymous cookieless pings.
   - Every click on WhatsApp / Telegram / phone links is sent as a "contact"
     event. Once a conversion action exists in Google Ads, paste its label
     into ADS_CONVERSION_LABEL and those clicks are also counted as Ads
     conversions.
   ========================================================================= */
(function(){
  var ADS_ID = "AW-18393778159";
  var ADS_CONVERSION_LABEL = ""; // e.g. "AbCdEfGhIjK123" from Google Ads → Goals → Conversions

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  var consent = null;
  try { consent = localStorage.getItem("btm_cookie_consent"); } catch(e) {}
  var state = consent === "accepted" ? "granted" : "denied";
  gtag("consent", "default", {
    ad_storage: state, ad_user_data: state, ad_personalization: state, analytics_storage: state
  });
  gtag("js", new Date());
  gtag("config", ADS_ID);

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + ADS_ID;
  document.head.appendChild(s);

  function grant(){
    gtag("consent", "update", {
      ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "granted"
    });
  }

  document.addEventListener("click", function(e){
    if (e.target.closest && e.target.closest("#cookieAccept")) { grant(); return; }
    var a = e.target.closest ? e.target.closest("a[href]") : null;
    if (!a || e.defaultPrevented) return;
    var href = a.getAttribute("href") || "";
    var method = /wa\.me|whatsapp/i.test(href) ? "whatsapp"
               : /t\.me/i.test(href) ? "telegram"
               : /^tel:/i.test(href) ? "phone" : null;
    if (!method) return;
    gtag("event", "contact", { method: method, page_path: location.pathname });
    if (ADS_CONVERSION_LABEL) {
      gtag("event", "conversion", { send_to: ADS_ID + "/" + ADS_CONVERSION_LABEL });
    }
  });
})();
