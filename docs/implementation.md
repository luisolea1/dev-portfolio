# Primera implementación

## Alcance

Home adaptable y estructura de navegación para Home, Proyectos, cuatro fichas en `/proyectos/:slug`, CV y Contacto. Las páginas secundarias comparten la identidad visual y conservan campos explícitos pendientes de contenido real. Esta entrega permanece en local.

## Decisiones respecto a Stitch

| Referencia / ajuste | Implementación |
| --- | --- |
| Home refinado | Referencia principal por ser la composición más específica y reciente del ZIP. |
| Fondo y acento | `#131313`, `#E5E2E1`, `#A3A3A3`, bordes `#303030` y azul `#4169E1`. |
| Tipografía | Inter para titulares/texto y Space Mono para navegación/metadatos; fuentes empaquetadas localmente. |
| Avatar | Eliminado; identidad textual y composición retro del hero conservadas. |
| Reloj | Dentro de la cabecera compartida, centrado con tres columnas iguales desde 1200 px. Bajo identidad/menú en pantallas menores. |
| Hora | `Intl.DateTimeFormat`, zona IANA `America/Mexico_City`, formato de 12 horas y segundos. El desfase GMT se obtiene de la misma zona, sin restar seis horas manualmente. |
| Actualización | Lectura del reloj del sistema cada segundo; resincronización al volver a una pestaña visible; limpieza de intervalo y listener al desmontar. |
| Lectores de pantalla | Reloj con `role="timer"`, descripción de la zona y `aria-live="off"` para evitar anuncios cada segundo. |
| Cabecera | `sticky`, para conservar su espacio natural al crecer el menú o el texto; sin compensaciones de altura rígidas en el contenido. |
| Móvil | Menú desplegable accesible; Escape lo cierra y devuelve el foco; cierre al navegar, pulsar fuera o pasar a escritorio. |
| Proyectos | Filas con imagen/texto en escritorio y una columna en móvil. Los tres gráficos pendientes replican los ejemplos decorativos del HTML, ocultos a lectores de pantalla. |
| CSS | BEM (`bloque__elemento--modificador`), archivos por componente; tokens y estilos base compartidos. Sin Tailwind. |
| Accesibilidad | Enlace de salto, landmarks, encabezados, `aria-current`, foco visible, objetivos táctiles y respeto de movimiento reducido. |

## Contenido

`src/features/profile/profile.data.ts` contiene identidad, presentación, canales de contacto y datos del CV. `src/features/projects/projects.data.ts` contiene las cuatro fichas y alimenta Home, Proyectos, cada detalle y experiencia del CV.

`null` y listas vacías significan pendiente; los textos entre corchetes son una representación de esos campos, no datos de ejemplo que se deban publicar como reales. `contentStatus` registra si cada ficha sigue pendiente de confirmación. No hay un formulario que simule envíos, una descarga de CV vacía ni enlaces `href="#"`.

## Siguiente contenido necesario

- Nombre y presentación personal definitivos.
- Confirmar KALI, rol, fechas y sustituir el mockup si se dispone de captura real.
- Nombres, fechas, contexto, aportaciones, tecnologías y resultados de las cuatro fichas.
- Enlaces reales a demos/repositorios.
- Archivo PDF del CV, resumen profesional, formación y habilidades.
- Correo y perfiles sociales.

La zona del reloj describe la hora de CDMX; no afirma la ubicación personal del autor.
