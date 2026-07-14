/* Cal Niu — properes activitats (destacat + llista, s'actualitza sol segons la data d'avui)
   Per afegir o editar una activitat: toca només l'array ACTIVITATS.
   - start / end: dates de l'activitat (YYYY-MM-DD). Quan avui > end, l'activitat desapareix sola.
   - poster: imatge del cartell (ideal vertical). link: on va el botó. Textos en 5 idiomes. */
const ACTIVITATS = [
  {
    key: "bioconstruccio",
    start: "2026-08-21", end: "2026-08-23",
    poster: "imagenes/web/proxima-bioconstruccio.jpg",
    alt: "Cartell del taller de bioconstrucció a Cal Niu",
    link: "https://wa.me/34699078507?text=" + encodeURIComponent("Hola! Vull reservar plaça al taller de bioconstrucció (21–23 d'agost) a Cal Niu."),
    title: { ca:"Taller de bioconstrucció", es:"Taller de bioconstrucción", en:"Natural building workshop", eu:"Bioeraikuntza tailerra", ga:"Ceardlann tógála nádúrtha" },
    desc: {
      ca:"Tres dies per aixecar un forn de llenya amb COB —terra, palla i aigua—. Teoria i mans a la massa, àpats inclosos.",
      es:"Tres días para levantar un horno de leña con COB —tierra, paja y agua—. Teoría y manos a la masa, comidas incluidas.",
      en:"Three days building a wood-fired oven with cob —earth, straw and water. Theory and hands in the mud, meals included.",
      eu:"Hiru egun egurrezko labe bat COB-arekin eraikitzeko —lurra, lastoa eta ura—. Teoria eta eskuak lokatzetan, otorduak barne.",
      ga:"Trí lá ag tógáil oigheann adhmaid le cob —cré, tuí agus uisce. Teoiric agus lámha sa láib, béilí san áireamh."
    },
    meta: { ca:"21–23 d'agost · Castellar del Riu", es:"21–23 de agosto · Castellar del Riu", en:"21–23 August · Castellar del Riu", eu:"Abuztuaren 21–23 · Castellar del Riu", ga:"21–23 Lúnasa · Castellar del Riu" },
    cta:  { ca:"Reserva plaça", es:"Reserva plaza", en:"Book a place", eu:"Erreserbatu lekua", ga:"Cuir áit in áirithe" }
  },
  {
    key: "hugelkultur",
    start: "2026-08-29", end: "2026-08-29",
    poster: "imagenes/web/proxima-hugelkultur.jpg",
    alt: "Cartell del taller de Hügelkultur i concert a Cal Niu",
    link: "inscripcio-hugelkultur.html",
    title: { ca:"Hügelkultur + concert", es:"Hügelkultur + concierto", en:"Hügelkultur + concert", eu:"Hügelkultur + kontzertua", ga:"Hügelkultur + ceolchoirm" },
    desc: {
      ca:"Al matí, construïm un bancal elevat que reté l'aigua i gairebé no s'ha de regar. Al vespre, concert i micro obert, oberts a tothom.",
      es:"Por la mañana construimos un bancal elevado que retiene el agua y casi no hay que regar. Por la tarde, concierto y micro abierto, abiertos a todos.",
      en:"In the morning we build a raised bed that holds water and barely needs watering. In the evening, a concert and open mic, open to everyone.",
      eu:"Goizez, ura atxikitzen duen ohe goratu bat eraikitzen dugu, ia ureztatu behar ez dena. Arratsaldez, kontzertua eta mikro irekia, denontzat.",
      ga:"Ar maidin tógaimid ceapach ardaithe a choinníonn uisce agus is ar éigean a bhíonn uisciú uaidh. Tráthnóna, ceolchoirm agus micreafón oscailte, oscailte do chách."
    },
    meta: { ca:"Dissabte 29 d'agost · Castellar del Riu", es:"Sábado 29 de agosto · Castellar del Riu", en:"Saturday 29 August · Castellar del Riu", eu:"Abuztuaren 29a, larunbata · Castellar del Riu", ga:"Dé Sathairn 29 Lúnasa · Castellar del Riu" },
    cta:  { ca:"Vull inscriure'm", es:"Quiero inscribirme", en:"Sign me up", eu:"Izena eman nahi dut", ga:"Cláraigh mé" }
  }
];

(function(){
  var LABELS = {
    eye:  { ca:"Pròxima activitat", es:"Próxima actividad", en:"Next activity", eu:"Hurrengo jarduera", ga:"An chéad ghníomhaíocht eile" },
    more: { ca:"Més endavant", es:"Más adelante", en:"Coming up", eu:"Aurrerago", ga:"Ag teacht aníos" }
  };
  function lang(){ return document.documentElement.lang || "ca"; }
  function tr(o){ return (o && (o[lang()] || o.ca)) || ""; }
  function pad(n){ return (n<10?"0":"") + n; }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function todayStr(){ var n = new Date(); return n.getFullYear() + "-" + pad(n.getMonth()+1) + "-" + pad(n.getDate()); }

  function upcoming(){
    var t = todayStr();
    return ACTIVITATS
      .filter(function(a){ return t <= a.end; })            // encara no ha passat
      .sort(function(a,b){ return a.start < b.start ? -1 : (a.start > b.start ? 1 : 0); });
  }

  function featuredHTML(a){
    return '' +
      '<div class="split">' +
        '<a class="next-poster reveal-zoom" href="' + esc(a.link) + '"><img loading="lazy" src="' + esc(a.poster) + '" alt="' + esc(a.alt) + '"></a>' +
        '<div>' +
          '<p class="eyebrow reveal">' + esc(tr(LABELS.eye)) + '</p>' +
          '<h2 class="reveal d1">' + esc(tr(a.title)) + '</h2>' +
          '<div class="rule reveal d1"></div>' +
          '<p class="reveal d2">' + esc(tr(a.desc)) + '</p>' +
          '<p class="reveal d3" style="color:var(--mute)">' + esc(tr(a.meta)) + '</p>' +
          '<a class="btn-pill reveal d4" href="' + esc(a.link) + '" style="margin-top:10px">' + esc(tr(a.cta)) + '</a>' +
        '</div>' +
      '</div>';
  }

  function listHTML(rest){
    var cards = rest.map(function(a){
      return '<a class="proxcard reveal" href="' + esc(a.link) + '">' +
               '<div class="proxcard-im"><img loading="lazy" src="' + esc(a.poster) + '" alt="' + esc(a.alt) + '"></div>' +
               '<div class="proxcard-t">' + esc(tr(a.title)) + '</div>' +
               '<div class="proxcard-m">' + esc(tr(a.meta)) + '</div>' +
             '</a>';
    }).join('');
    return '<div class="proxlist"><p class="proxlist-h reveal">' + esc(tr(LABELS.more)) + '</p><div class="proxlist-grid">' + cards + '</div></div>';
  }

  window.renderProximes = function(){
    var sec = document.getElementById("proxima");
    var root = document.getElementById("proxima-root");
    if (!sec || !root) return;
    var list = upcoming();
    if (!list.length){ sec.hidden = true; return; }   // res a la vista → amaga la secció
    sec.hidden = false;
    var html = featuredHTML(list[0]);
    if (list.length > 1) html += listHTML(list.slice(1));
    root.innerHTML = html;
    // els elements injectats no els veu l'IntersectionObserver d'immersive.js: activa'ls a mà
    requestAnimationFrame(function(){
      root.querySelectorAll(".reveal, .reveal-zoom").forEach(function(el){ el.classList.add("in"); });
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", window.renderProximes);
  else window.renderProximes();
})();
