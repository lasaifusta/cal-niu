/* Cal Niu — disponibilitat de tallers (caps de setmana dv–dg)
   Edita l'array "tallers" per actualitzar. estat: "lliure" o "ocupat". */
const DISPONIBILITAT = {
  tallers: [
    { ini:"2026-06-19", fi:"2026-06-21", estat:"lliure" },
    { ini:"2026-06-26", fi:"2026-06-28", estat:"ocupat" },
    { ini:"2026-07-03", fi:"2026-07-05", estat:"lliure" },
    { ini:"2026-07-10", fi:"2026-07-12", estat:"ocupat" },
    { ini:"2026-07-17", fi:"2026-07-19", estat:"lliure" },
    { ini:"2026-07-24", fi:"2026-07-26", estat:"ocupat", nota:"Festivalet" },
    { ini:"2026-07-31", fi:"2026-08-02", estat:"ocupat" },
    { ini:"2026-08-07", fi:"2026-08-09", estat:"ocupat" },
    { ini:"2026-08-14", fi:"2026-08-16", estat:"lliure" },
    { ini:"2026-08-21", fi:"2026-08-23", estat:"lliure" },
    { ini:"2026-08-28", fi:"2026-08-30", estat:"lliure" },
    { ini:"2026-09-04", fi:"2026-09-06", estat:"lliure" },
    { ini:"2026-09-11", fi:"2026-09-13", estat:"lliure" },
    { ini:"2026-09-18", fi:"2026-09-20", estat:"lliure" },
    { ini:"2026-09-25", fi:"2026-09-27", estat:"lliure" }
  ]
};

(function(){
  var FALLBACK = { lliure:"Lliure", ocupat:"Ocupat", propose:"Proposa-la" };
  function lang(){ return document.documentElement.lang || "ca"; }
  function lab(k){ var d = (window.I18N && window.I18N[lang()]) || {}; return d["wk_"+k] || FALLBACK[k]; }
  function cap(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
  function d(s){ return new Date(s + "T12:00:00"); }
  function fmtRange(ini, fi){
    var a = d(ini), b = d(fi), lg = lang();
    var mA = a.toLocaleDateString(lg, {month:"long"}), mB = b.toLocaleDateString(lg, {month:"long"});
    if (a.getMonth() === b.getMonth()) return a.getDate() + "–" + b.getDate() + " " + mA;
    return a.getDate() + " " + mA + " – " + b.getDate() + " " + mB;
  }
  function monthLabel(ini){ return cap(d(ini).toLocaleDateString(lang(), {month:"long", year:"numeric"})); }
  function mailLink(range){
    var subj = encodeURIComponent("Proposta d'activitat · " + range);
    var body = encodeURIComponent("Hola! M'agradaria proposar una activitat el cap de setmana del " + range + " a Cal Niu.\n\nNom:\nActivitat / taller:\nNombre de persones:\nEl que necessito:\n\nGràcies!");
    return "mailto:som.calniu@gmail.com?subject=" + subj + "&body=" + body;
  }
  window.renderDisponibilitat = function(){
    var root = document.getElementById("tallers-cal");
    if (!root) return;
    var byMonth = {}, order = [];
    DISPONIBILITAT.tallers.forEach(function(w){
      var mk = w.ini.slice(0,7);
      if (!byMonth[mk]) { byMonth[mk] = []; order.push(mk); }
      byMonth[mk].push(w);
    });
    var html = "";
    order.forEach(function(mk){
      html += '<div class="wk-month">' + monthLabel(byMonth[mk][0].ini) + '</div>';
      byMonth[mk].forEach(function(w){
        var range = fmtRange(w.ini, w.fi);
        if (w.estat === "lliure") {
          html += '<div class="wk-row lliure"><span class="wk-dates">' + range + '</span>' +
                  '<span class="wk-state"><i></i>' + lab("lliure") + '</span>' +
                  '<a class="wk-btn" href="' + mailLink(range) + '">' + lab("propose") + '</a></div>';
        } else {
          var nota = w.nota ? (' · ' + w.nota) : '';
          html += '<div class="wk-row ocupat"><span class="wk-dates">' + range + '</span>' +
                  '<span class="wk-state">' + lab("ocupat") + nota + '</span></div>';
        }
      });
    });
    root.innerHTML = html;
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", window.renderDisponibilitat);
  else window.renderDisponibilitat();
})();
