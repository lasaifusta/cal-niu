/* Cal Niu — disponibilitat de tallers (calendari mensual, caps de setmana dv–dg)
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
  function lab(k){ var dd = (window.I18N && window.I18N[lang()]) || {}; return dd["wk_"+k] || FALLBACK[k]; }
  function cap(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
  function pad(n){ return (n<10?"0":"") + n; }
  function d(s){ return new Date(s + "T12:00:00"); }
  function fmtRange(ini, fi){
    var a = d(ini), b = d(fi), lg = lang();
    var mA = a.toLocaleDateString(lg, {month:"long"}), mB = b.toLocaleDateString(lg, {month:"long"});
    if (a.getMonth() === b.getMonth()) return a.getDate() + "–" + b.getDate() + " " + mA;
    return a.getDate() + " " + mA + " – " + b.getDate() + " " + mB;
  }
  function monthTitle(y, m){ return cap(new Date(y, m, 1).toLocaleDateString(lang(), {month:"long", year:"numeric"})); }
  function mailLink(range){
    var subj = encodeURIComponent("Proposta d'activitat · " + range);
    var body = encodeURIComponent("Hola! M'agradaria proposar una activitat el cap de setmana del " + range + " a Cal Niu.\n\nNom:\nActivitat / taller:\nNombre de persones:\nEl que necessito:\n\nGràcies!");
    return "mailto:som.calniu@gmail.com?subject=" + subj + "&body=" + body;
  }
  function weekdayLabels(){
    var lg = lang(), out = [];
    for (var i=0;i<7;i++){ out.push(new Date(2024,0,1+i).toLocaleDateString(lg, {weekday:"short"})); } // 2024-01-01 = dilluns
    return out;
  }
  function buildMap(){
    var map = {};
    DISPONIBILITAT.tallers.forEach(function(w){
      var range = fmtRange(w.ini, w.fi), a = d(w.ini), b = d(w.fi);
      for (var t=new Date(a); t<=b; t.setDate(t.getDate()+1)){
        var key = t.getFullYear()+"-"+pad(t.getMonth()+1)+"-"+pad(t.getDate());
        map[key] = { estat:w.estat, range:range, nota:w.nota||"" };
      }
    });
    return map;
  }
  function bounds(){
    var ms = DISPONIBILITAT.tallers.map(function(w){ return w.ini.slice(0,7); });
    return { min: ms[0], max: ms[ms.length-1] };
  }
  function mIndex(y,m){ return y*12 + m; }

  window.renderDisponibilitat = function(){
    var root = document.getElementById("tallers-cal");
    if (!root) return;
    var map = buildMap(), bd = bounds();
    var minY = +bd.min.slice(0,4), minM = +bd.min.slice(5,7)-1;
    var maxY = +bd.max.slice(0,4), maxM = +bd.max.slice(5,7)-1;
    if (!window._calView) window._calView = { y:minY, m:minM };
    var v = window._calView;
    var cur = mIndex(v.y, v.m), lo = mIndex(minY, minM), hi = mIndex(maxY, maxM);

    var first = new Date(v.y, v.m, 1);
    var start = (first.getDay()+6)%7;            // dilluns = 0
    var ndays = new Date(v.y, v.m+1, 0).getDate();
    var wd = weekdayLabels();

    var h = '<div class="cal2">';
    h += '<div class="cal2-head">' +
         '<button class="cal2-nav" data-go="-1" aria-label="Mes anterior"' + (cur<=lo?' disabled':'') + '>&#8249;</button>' +
         '<h3>' + monthTitle(v.y, v.m) + '</h3>' +
         '<button class="cal2-nav" data-go="1" aria-label="Mes següent"' + (cur>=hi?' disabled':'') + '>&#8250;</button></div>';
    h += '<div class="cal2-grid">';
    for (var w=0; w<7; w++) h += '<div class="cal2-wd">' + wd[w] + '</div>';
    for (var b=0; b<start; b++) h += '<div class="cal2-day empty"></div>';
    for (var day=1; day<=ndays; day++){
      var key = v.y+"-"+pad(v.m+1)+"-"+pad(day);
      var info = map[key];
      if (info && info.estat==="lliure"){
        h += '<a class="cal2-day free" href="' + mailLink(info.range) + '" title="' + lab("propose") + ' · ' + info.range + '">' + day + '</a>';
      } else if (info){
        var tt = lab("ocupat") + (info.nota? ' · '+info.nota : '');
        h += '<div class="cal2-day busy" title="' + tt + '">' + day + (info.nota? '<span class="cal2-note">'+info.nota+'</span>' : '') + '</div>';
      } else {
        h += '<div class="cal2-day dim">' + day + '</div>';
      }
    }
    h += '</div>';
    h += '<div class="cal2-legend"><span><i class="lg-free"></i>' + lab("lliure") + '</span><span><i class="lg-busy"></i>' + lab("ocupat") + '</span></div>';
    h += '</div>';
    root.innerHTML = h;

    root.querySelectorAll(".cal2-nav").forEach(function(btn){
      btn.addEventListener("click", function(){
        if (btn.hasAttribute("disabled")) return;
        var go = parseInt(btn.getAttribute("data-go"),10);
        v.m += go; if (v.m<0){ v.m=11; v.y--; } if (v.m>11){ v.m=0; v.y++; }
        window.renderDisponibilitat();
      });
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", window.renderDisponibilitat);
  else window.renderDisponibilitat();
})();
