# Kit Instagram · Cal Niu

Cómo hacer carteles coherentes para el feed con **Claude Design + Canva + Claude Cowork**.

---

## Reparto de herramientas

- **Claude Design** → fábrica de coherencia Y salida. Aquí vive el *design system* y la **plantilla maestra**. Cada cartel = duplicar la maestra y cambiar solo color + título + foto + datos. **Para la imagen, pídele en su chat: "fes-me'l PNG a 1080×1350"** y te da la tarjeta de descarga (PNG 4:5 con las fuentes de marca). Sin PDF, sin Canva.
- **Claude Cowork** → preparación y orden. Prepara el bloque de contenido en català, revisa el borrador y lleva el calendario. (Conversión PDF→PNG solo como respaldo.)
- *(Canva gratis no sirve: el resize a 1080×1350 está capado. Y ya no hace falta.)*

## Setup (una sola vez)

1. **Design system** en Claude Design, creado desde el repo `github.com/lasaifusta/cal-niu`.
2. **Plantilla maestra** guardada (Projects / Templates) — NO se edita; se duplica.

## Bucle por cada cartel

1. **Cowork:** dar la actividad o el folleto → recibir el bloque de datos + color.
2. **Claude Design:** duplicar maestra → pegar bloque → regenerar. Email a mano en el lienzo.
3. **Claude Design:** pedir **"fes-me'l PNG a 1080×1350"** → descargar el PNG.
4. Publicar en Instagram / enviar por WhatsApp.

---

## Marca (tokens)

**Colores**

- Oliva `#4c5440` · Oliva fosc `#3a4131`
- Terracota `#a4664a` · Terracota fosc `#834f38`
- Daurat `#b89357`
- Paper `#f7f2e9` · Crema `#efe7d7` · Tinta `#2c2a24` · Fons fosc `#23261c`

**Tipografía:** *Fraunces* (titulares, también cursiva) · *Jost* (texto, 300/400/500)

**Pie fijo:** `Cal Niu · calniu.com · @som.calniu`
**Ubicación:** Llinars · Castellar del Riu (Berguedà)
**Contacte:** WhatsApp 699 078 507 / `wa.me/34617575495` · @som.calniu (DM)

## Color por categoría (rotación coherente)

| Categoría | Color de fondo |
|---|---|
| Taller | Terracota `#a4664a` |
| Esdeveniment | Oliva `#4c5440` |
| Cultura / cinema | Fons fosc `#23261c` |
| Frase / cita | Daurat `#b89357` o Paper `#f7f2e9` |
| Voluntariat | Oliva fosc `#3a4131` |

---

## Prompt · plantilla maestra (solo la primera vez)

```
Crea una PLANTILLA maestra de post de Instagram para Cal Niu (1080×1350 px,
4:5), usando el design system de Cal Niu. Sistema coherente para todo el feed
donde solo cambien: COLOR de fondo, TÍTOL, FOTO i DADES.

Estructura fija (idéntica en todas las variantes):
- Fons de color pla de la paleta de Cal Niu, o foto a sang amb vel càlid fosc.
- A dalt esquerra: etiqueta de categoria ("TALLER", "ESDEVENIMENT"...).
  A dalt dreta: logo de Cal Niu.
- ZONA DE FOTO FIXA: marc gran amb cantonades arrodonides.
- Text ancorat a la meitat INFERIOR: TÍTOL gran (Fraunces) + subtítol (Jost),
  i per als tallers amb durada un reclam tipus "7 DIES".
- Banda inferior amb dades i icones (data, lloc, preu, format) i peu
  "Cal Niu · calniu.com · @som.calniu".
- Reforça la llegibilitat: vel fosc al terç inferior.

Tot (logo, posició del títol, banda de dades, peu) SEMPRE a la mateixa
posició. Genera variants amb terracota, oliva i daurat.
```

## Prompt · cada cartel nuevo (sobre la copia duplicada)

```
Sense modificar la plantilla mestra, crea una NOVA versió mantenint EXACTAMENT
la mateixa disposició, tipografia, posicions i estil. Canvia només la FOTO,
el TÍTOL i les DADES amb aquest contingut:

CATEGORIA: [Taller / Esdeveniment / Cultura / ...]
RECLAM: [ex. 7 DIES · DE FORMACIÓ — o deixar buit]
TÍTOL: [ ]
SUBTÍTOL: [ ]
DATA: [ ]
LLOC: Llinars · Castellar del Riu
PREU: [ ]
FORMAT: [ex. Teoria i pràctica]
CONTACTE: WhatsApp 699 078 507 · @som.calniu
PEU: Cal Niu · calniu.com · @som.calniu

Format 1080×1350 px. Color de fons segons categoria.
```

---

## Recordatorios

- **Siempre 1080×1350** (4:5). Si exporta A4, está mal.
- **Email:** no poner hotmail personal; usar WhatsApp / DM. Si hace falta, escribirlo a mano en el lienzo (el prompt lo enmascara).
- **Contraste:** texto sobre el tercio inferior con velo oscuro.
- **Coherencia:** nunca empezar de cero — duplicar la maestra.
