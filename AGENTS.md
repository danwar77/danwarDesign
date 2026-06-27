# AGENTS.md

## Proyecto
Danwar Design es una landing page estatica para una agencia creativa digital enfocada en:

- Visuales y mundos 3D con Blender.
- Diseno y desarrollo web moderno.
- Ingenieria IA y aplicaciones con IA para Flutter.
- Direccion visual para mejorar marcas.
- Contenido bilingue: Espanol por defecto e Ingles como alternativa.

El archivo principal es `danwardesign.html`.

## Estado Actual
- Rama base: `master`.
- Pagina servida localmente en `http://127.0.0.1:5177/danwardesign.html`.
- La landing moderna ya reemplazo la plantilla antigua.
- La pagina esta separada en HTML, CSS y JS.
- Estado del loop: `state/loops/danwar-design-modernization.json`.
- Decision actual: local verificado, esperando aprobacion humana antes de push/deploy.

## Estructura
```text
.
|-- danwardesign.html
|-- assets/
|   |-- css/
|   |   `-- styles.css
|   |-- js/
|   |   `-- language.js
|   `-- img/
|       `-- .gitkeep
|-- me docs/
|   |-- plans/to-do/
|   `-- review-ledger/
`-- state/
    `-- loops/
```

## Reglas De Trabajo
- Usar el loop de desarrollo documentado en `state/loops/` y `me docs/`.
- Antes de cambios grandes, actualizar o crear un plan en `me docs/plans/to-do/`.
- Mantener el estado persistente del trabajo en `state/loops/<loop>.json`.
- Registrar verificaciones y hallazgos en `me docs/review-ledger/`.
- No hacer push, deploy, merge ni promocion a produccion sin OK explicito del usuario.
- No revertir cambios locales que no hayas hecho.
- Mantener la pagina funcional como sitio estatico.

## Estilo Visual
- Estetica actual: dark premium, gradientes cian/violeta/lima, cards glass, composicion IA/3D abstracta.
- Espanol debe aparecer primero por defecto.
- Ingles debe funcionar con el selector ES/EN.
- La web debe poder verse bien aunque no haya imagenes reales.
- Cuando se anadan imagenes o renders, ubicarlos en `assets/img/`.
- Logo actual: `assets/img/danwar77-logo-header.png`, generado desde `C:/MARCA_PERSONAL/marca5.png`.
- Favicon/icono: `assets/img/danwar77-logo-icon.png`.

## Reglas Tecnicas
- HTML: `danwardesign.html`.
- CSS: `assets/css/styles.css`.
- JS: `assets/js/language.js`.
- Evitar dependencias externas innecesarias.
- Mantener accesibilidad basica:
  - `lang` correcto.
  - foco visible.
  - `skip-link`.
  - contraste alto.
  - soporte `prefers-reduced-motion`.
- Mantener responsive en desktop y movil.
- Evitar rutas rotas a `css/`, `js/` o `img/` antiguas.

## Verificacion Recomendada
Usar servidor local:

```powershell
python -m http.server 5177 --bind 127.0.0.1
```

Comprobar:

```powershell
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:5177/danwardesign.html
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:5177/assets/css/styles.css
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:5177/assets/js/language.js
```

Checks minimos:
- HTML, CSS y JS devuelven HTTP 200.
- No hay referencias a assets antiguos inexistentes.
- El selector ES/EN cambia el idioma visible.
- En 375px no hay overflow horizontal de pagina.

## Evidencias Visuales
Las capturas actuales se guardan en:

- `preview-danwardesign-modern.png`
- `preview-danwardesign-mobile.png`

Pueden regenerarse tras cambios visuales.

## Contenido Base
Mensaje central:

- "Hacemos tu marca mas inteligente."
- "Soy IA Engineer y desarrollamos aplicaciones con IA para Flutter, visuales 3D con Blender, sitios web modernos y una presencia de marca lista para vender, presentar y crecer."

Servicios clave:
- Sueno 3D con Blender.
- Web como la imaginas.
- Apps IA para Flutter.
- Marca con direccion.

## Notas Para Futuros Agentes
- Este repo venia de una plantilla antigua con recursos faltantes.
- La modernizacion actual evita depender de assets que no existen.
- Si se desea una version mas visual, crear renders o imagenes en `assets/img/` y referenciarlos desde el HTML/CSS.
- Mantener las variantes del logo en `assets/img/`; el header usa una composicion horizontal para no romper la navegacion.
- Si se anade build tooling, documentarlo aqui y mantener una forma simple de servir el sitio estatico.
