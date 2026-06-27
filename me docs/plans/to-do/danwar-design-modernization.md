# Danwar Design modernization

## Objetivo
Modernizar `danwardesign.html` como landing page bilingue para Danwar Design, con Espanol como idioma principal e Ingles como alternativa.

## Alcance
- Reemplazar la pagina antigua por una landing autosuficiente en un solo HTML.
- Mantener el tema original: agencia que mejora marcas con 3D en Blender y desarrollo web.
- Evitar dependencias faltantes (`css/`, `js/`, `img/`) para que la pagina renderice correctamente en este repo.
- Incluir estructura moderna: hero, propuesta, servicios, proceso, portfolio conceptual, CTA y contacto.
- Anadir selector de idioma ES/EN.
- Mejorar responsive, accesibilidad basica y estados de foco.

## Claims
- La pagina debe verse moderna aun sin assets externos.
- El contenido principal debe aparecer primero en Espanol.
- El usuario debe poder cambiar a Ingles sin recargar.
- La pagina debe funcionar servida desde `http://127.0.0.1:5177/danwardesign.html`.

## Tests
- `git status --short` para controlar cambios.
- Cargar la pagina en navegador local.
- Verificar que no haya assets rotos dependientes de carpetas inexistentes.
- Revisar consola del navegador sin errores criticos.
- Capturar evidencia visual desktop y comprobar contenido clave.

## Checklist
- [x] Plan creado.
- [x] Preflight del repo realizado.
- [x] HTML modernizado.
- [x] Verificacion en navegador.
- [x] Evidencia registrada en loop state/review ledger.
- [x] Estructura `assets/` creada para CSS, JS e imagenes futuras.
- [x] CSS y JS extraidos del HTML manteniendo la pagina funcional.
- [x] Oferta actualizada para incluir IA Engineer y aplicaciones con IA para Flutter.
- [x] Logo Danwar77 Design integrado en header y favicon.
