/* Cal Niu — sistema d'idiomes (CA · ES · EN · EU · GA)
   Ús: posa data-i18n="clau" a l'element. Si el text porta HTML (<em>…</em>),
   s'aplica com a innerHTML automàticament. La tria es recorda a localStorage. */
const I18N = {
  ca: {
    nav_home:"Inici", nav_about:"El projecte", nav_lloc:"El lloc", nav_act:"Activitats", nav_vol:"Voluntariat", nav_agenda:"Agenda", nav_participa:"Participa",
    h_eyebrow:"Projecte rural · Castellar del Riu",
    h_title:"Aprendre, fer i <em>compartir</em> al ritme del camp",
    h_sub:"Cal Niu és un espai rural on creixen la cultura, la bioconstrucció, la permacultura i les ganes de fer comunitat.",
    cta_participar:"Vull participar", cta_projecte:"Conèixer el projecte", scroll_cue:"Comença el viatge",
    s0_k:"Benvinguts a Cal Niu", s0_t:"Un niu al cor del <em>Berguedà</em>", s0_p:"Tornem a habitar el món rural des de la cura: per la terra, per les persones i pels sabers que es transmeten fent.",
    s1_k:"Què fem · Oficis", s1_t:"Tallers de <em>bioconstrucció</em>", s1_p:"Tècniques amb terra, palla, fusta i calç per construir de manera sana i sostenible.", s1_link:"Veure els tallers",
    s2_k:"Què fem · Terra", s2_t:"Permacultura i <em>hort</em>", s2_p:"Disseny de sistemes, hort ecològic, compostatge i sobirania alimentària.",
    s3_k:"Què fem · Comunitat", s3_t:"Voluntariats i vida <em>compartida</em>", s3_p:"Queda't una temporada: aprèn fent, treballa la terra i forma part del dia a dia de la casa.", s3_link:"Saber-ne més",
    s4_k:"Què fem · Cultura", s4_t:"Cultura i <em>art</em>", s4_p:"Concerts, cinema a la fresca, exposicions i trobades que donen vida al territori.",
    inv_eye:"L'última cosa", inv_t:"Vols formar part del <em>niu</em>?", inv_p:"Vine a un taller, queda't de voluntari/a o porta la teva pròpia idea.", inv_cta2:"Voluntariat",
    foot_tag:"Una antiga rectoria que torna a viure a Castellar del Riu, Berguedà. Natural · Local · Conscient.",
    foot_rights:"© 2026 Cal Niu · Fet amb cura al Berguedà", foot_loc:"Castellar del Riu · Berguedà"
  },
  es: {
    nav_home:"Inicio", nav_about:"El proyecto", nav_lloc:"El lugar", nav_act:"Actividades", nav_vol:"Voluntariado", nav_agenda:"Agenda", nav_participa:"Participa",
    h_eyebrow:"Proyecto rural · Castellar del Riu",
    h_title:"Aprender, hacer y <em>compartir</em> al ritmo del campo",
    h_sub:"Cal Niu es un espacio rural donde crecen la cultura, la bioconstrucción, la permacultura y las ganas de hacer comunidad.",
    cta_participar:"Quiero participar", cta_projecte:"Conocer el proyecto", scroll_cue:"Empieza el viaje",
    s0_k:"Bienvenidos a Cal Niu", s0_t:"Un nido en el corazón del <em>Berguedà</em>", s0_p:"Volvemos a habitar el mundo rural desde el cuidado: por la tierra, por las personas y por los saberes que se transmiten haciendo.",
    s1_k:"Qué hacemos · Oficios", s1_t:"Talleres de <em>bioconstrucción</em>", s1_p:"Técnicas con tierra, paja, madera y cal para construir de manera sana y sostenible.", s1_link:"Ver los talleres",
    s2_k:"Qué hacemos · Tierra", s2_t:"Permacultura y <em>huerto</em>", s2_p:"Diseño de sistemas, huerto ecológico, compostaje y soberanía alimentaria.",
    s3_k:"Qué hacemos · Comunidad", s3_t:"Voluntariados y vida <em>compartida</em>", s3_p:"Quédate una temporada: aprende haciendo, trabaja la tierra y forma parte del día a día de la casa.", s3_link:"Saber más",
    s4_k:"Qué hacemos · Cultura", s4_t:"Cultura y <em>arte</em>", s4_p:"Conciertos, cine al aire libre, exposiciones y encuentros que dan vida al territorio.",
    inv_eye:"Lo último", inv_t:"¿Quieres formar parte del <em>nido</em>?", inv_p:"Ven a un taller, quédate de voluntario/a o trae tu propia idea.", inv_cta2:"Voluntariado",
    foot_tag:"Una antigua rectoría que vuelve a vivir en Castellar del Riu, Berguedà. Natural · Local · Consciente.",
    foot_rights:"© 2026 Cal Niu · Hecho con cariño en el Berguedà", foot_loc:"Castellar del Riu · Berguedà"
  },
  en: {
    nav_home:"Home", nav_about:"The project", nav_lloc:"The place", nav_act:"Activities", nav_vol:"Volunteering", nav_agenda:"Calendar", nav_participa:"Get involved",
    h_eyebrow:"Rural project · Castellar del Riu",
    h_title:"Learn, make and <em>share</em> at the pace of the countryside",
    h_sub:"Cal Niu is a rural space where culture, natural building, permaculture and the will to build community grow.",
    cta_participar:"I want to take part", cta_projecte:"Discover the project", scroll_cue:"Begin the journey",
    s0_k:"Welcome to Cal Niu", s0_t:"A nest in the heart of the <em>Berguedà</em>", s0_p:"We are bringing the countryside back to life through care: for the land, for people and for the knowledge passed on by doing.",
    s1_k:"What we do · Crafts", s1_t:"<em>Natural building</em> workshops", s1_p:"Techniques with earth, straw, wood and lime to build in a healthy, sustainable way.", s1_link:"See the workshops",
    s2_k:"What we do · Land", s2_t:"Permaculture and <em>garden</em>", s2_p:"Systems design, organic gardening, composting and food sovereignty.",
    s3_k:"What we do · Community", s3_t:"Volunteering and a <em>shared</em> life", s3_p:"Stay for a season: learn by doing, work the land and become part of daily life at the house.", s3_link:"Find out more",
    s4_k:"What we do · Culture", s4_t:"Culture and <em>art</em>", s4_p:"Concerts, open-air cinema, exhibitions and gatherings that bring the territory to life.",
    inv_eye:"One last thing", inv_t:"Want to be part of the <em>nest</em>?", inv_p:"Come to a workshop, stay as a volunteer or bring your own idea.", inv_cta2:"Volunteering",
    foot_tag:"An old rectory coming back to life in Castellar del Riu, Berguedà. Natural · Local · Conscious.",
    foot_rights:"© 2026 Cal Niu · Made with care in the Berguedà", foot_loc:"Castellar del Riu · Berguedà"
  },
  eu: {
    nav_home:"Hasiera", nav_about:"Proiektua", nav_lloc:"Lekua", nav_act:"Jarduerak", nav_vol:"Boluntariotza", nav_agenda:"Agenda", nav_participa:"Parte hartu",
    h_eyebrow:"Landa proiektua · Castellar del Riu",
    h_title:"Ikasi, egin eta <em>partekatu</em> landaren erritmoan",
    h_sub:"Cal Niu landa-gune bat da, non kultura, bioeraikuntza, permakultura eta komunitatea egiteko gogoa hazten diren.",
    cta_participar:"Parte hartu nahi dut", cta_projecte:"Proiektua ezagutu", scroll_cue:"Hasi bidaia",
    s0_k:"Ongi etorri Cal Niura", s0_t:"Habia bat <em>Berguedà</em>ren bihotzean", s0_p:"Landa-mundua berriz biziberritzen dugu zaintzatik: lurrarengatik, pertsonengatik eta eginez transmititzen diren jakintzengatik.",
    s1_k:"Zer egiten dugun · Lanbideak", s1_t:"<em>Bioeraikuntza</em> tailerrak", s1_p:"Lurrarekin, lastoarekin, egurrarekin eta karearekin osasuntsu eta jasangarri eraikitzeko teknikak.", s1_link:"Ikusi tailerrak",
    s2_k:"Zer egiten dugun · Lurra", s2_t:"Permakultura eta <em>baratzea</em>", s2_p:"Sistemen diseinua, baratze ekologikoa, konpostajea eta elikadura-subiranotasuna.",
    s3_k:"Zer egiten dugun · Komunitatea", s3_t:"Boluntariotza eta bizitza <em>partekatua</em>", s3_p:"Geratu denboraldi batez: ikasi eginez, landu lurra eta izan etxeko eguneroko bizitzaren parte.", s3_link:"Gehiago jakin",
    s4_k:"Zer egiten dugun · Kultura", s4_t:"Kultura eta <em>artea</em>", s4_p:"Kontzertuak, zinema aire zabalean, erakusketak eta topaketak, lurraldeari bizia ematen diotenak.",
    inv_eye:"Azken gauza", inv_t:"<em>Habiaren</em> parte izan nahi duzu?", inv_p:"Etorri tailer batera, geratu boluntario gisa edo ekarri zure ideia.", inv_cta2:"Boluntariotza",
    foot_tag:"Castellar del Riun (Berguedà) berriz biziberritzen ari den antzinako abadetxe bat. Naturala · Bertakoa · Kontzientea.",
    foot_rights:"© 2026 Cal Niu · Berguedàn arduraz egina", foot_loc:"Castellar del Riu · Berguedà"
  },
  ga: {
    nav_home:"Baile", nav_about:"An tionscadal", nav_lloc:"An áit", nav_act:"Gníomhaíochtaí", nav_vol:"Obair dheonach", nav_agenda:"Féilire", nav_participa:"Bí páirteach",
    h_eyebrow:"Tionscadal tuaithe · Castellar del Riu",
    h_title:"Foghlaim, déan agus <em>roinn</em> ar luas na tuaithe",
    h_sub:"Is spás tuaithe é Cal Niu áit a bhfásann cultúr, tógáil nádúrtha, buanchultúr agus an fonn pobal a chruthú.",
    cta_participar:"Ba mhaith liom páirt a ghlacadh", cta_projecte:"Faigh amach faoin tionscadal", scroll_cue:"Tosaigh an turas",
    s0_k:"Fáilte go Cal Niu", s0_t:"Nead i gcroílár an <em>Berguedà</em>", s0_p:"Táimid ag tabhairt na tuaithe ar ais chun beatha trí chúram: don talamh, do dhaoine agus don eolas a chuirtear ar aghaidh trí dhéanamh.",
    s1_k:"A ndéanaimid · Ceirdeanna", s1_t:"Ceardlanna <em>tógála nádúrtha</em>", s1_p:"Teicníochtaí le cré, tuí, adhmad agus aol chun tógáil ar bhealach sláintiúil inbhuanaithe.", s1_link:"Féach na ceardlanna",
    s2_k:"A ndéanaimid · Talamh", s2_t:"Buanchultúr agus <em>gairdín</em>", s2_p:"Dearadh córas, gairneoireacht orgánach, múiríniú agus ceannasacht bia.",
    s3_k:"A ndéanaimid · Pobal", s3_t:"Obair dheonach agus saol <em>roinnte</em>", s3_p:"Fan ar feadh séasúir: foghlaim trí dhéanamh, oibrigh an talamh agus bí mar chuid de shaol laethúil an tí.", s3_link:"Tuilleadh eolais",
    s4_k:"A ndéanaimid · Cultúr", s4_t:"Cultúr agus <em>ealaín</em>", s4_p:"Ceolchoirmeacha, pictiúrlann faoin aer, taispeántais agus tionóil a thugann beatha don cheantar.",
    inv_eye:"Rud amháin eile", inv_t:"Ar mhaith leat a bheith mar chuid den <em>nead</em>?", inv_p:"Tar chuig ceardlann, fan mar oibrí deonach nó tabhair do smaoineamh féin.", inv_cta2:"Obair dheonach",
    foot_tag:"Seanteach paróiste ag teacht ar ais chun beatha i Castellar del Riu, Berguedà. Nádúrtha · Áitiúil · Comhfhiosach.",
    foot_rights:"© 2026 Cal Niu · Déanta le cúram sa Berguedà", foot_loc:"Castellar del Riu · Berguedà"
  }
};

function setLang(lang){
  var dict = I18N[lang] || I18N.ca;
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var k = el.getAttribute("data-i18n");
    var v = dict[k];
    if (v == null) return;
    if (v.indexOf("<") !== -1) el.innerHTML = v; else el.textContent = v;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang button").forEach(function(b){
    b.classList.toggle("on", b.dataset.lang === lang);
  });
  try { localStorage.setItem("calniu_lang", lang); } catch(e){}
}

(function(){
  function init(){
    document.querySelectorAll(".lang button").forEach(function(b){
      b.addEventListener("click", function(){ setLang(b.dataset.lang); });
    });
    var saved = "ca";
    try { saved = localStorage.getItem("calniu_lang") || "ca"; } catch(e){}
    setLang(saved);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
