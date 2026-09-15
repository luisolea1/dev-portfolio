# Verificación de la primera implementación

Fecha: **15 de septiembre de 2026**. Comprobación local en Chrome, con el servidor de Vite y la salida de producción servida mediante `vite preview`.

## Compilación y pruebas automáticas

| Comprobación | Resultado |
| --- | --- |
| `npm run typecheck` | Correcto, TypeScript estricto. |
| `npm run build` | Correcto, salida generada en `dist/`. |
| `npm test` | 5 pruebas correctas. |
| `env TZ=Asia/Tokyo npm test` | Las mismas 5 pruebas correctas usando otra zona del equipo. |
| Integridad de referencias | ZIP idéntico al proporcionado y sus 7 archivos extraídos idénticos byte a byte. |

Las pruebas del reloj verifican hora de CDMX, segundos, ceros iniciales, cambio de día a medianoche, mediodía y obtención del desfase histórico desde la zona IANA. No hay dependencia de un desfase de seis horas escrito a mano.

SHA-256 del ZIP original y su copia:

```text
96ff9ff8ee45b5da2875d30b5b4dd4168fa00795ea9636a93527b163ea240493
```

## Revisión visual y adaptable

Se inspeccionaron capturas del Home en escritorio, tablet y móvil, incluida la página completa. Los tamaños son del viewport emulado de Chrome; la barra de desplazamiento del sistema puede ocupar 15 px del área disponible.

| Ancho | Resultado |
| --- | --- |
| 1440 px | Hero en dos columnas, cuatro filas de proyectos y pie completo; reloj exactamente centrado. |
| 1280 px | Primera revisión visual del Home: composición, tipografías, imagen retro y cabecera correctas. |
| 1200 px | Navegación de escritorio visible, reloj centrado y cierre del menú al cambiar de breakpoint. |
| 768 px | Hero apilado, proyectos en dos columnas, menú móvil y reloj visibles. |
| 390 px | Home en una columna, menú desplegable, fichas y contacto legibles, sin desbordamiento horizontal. |
| 320 px | Home completo legible, títulos/metadatos se ajustan y no hay desbordamiento horizontal. |

Se detectó y eliminó el ancho mínimo de `html`, que sumaba el ancho de la barra de desplazamiento a 320 px. Se comprobó después que `scrollWidth === clientWidth` y que ningún elemento de contenido, cabecera o pie salía del ancho disponible.

## Navegación y accesibilidad

- Home → Proyectos → las cuatro fichas → regreso a Proyectos.
- Navegación principal a Home, Proyectos, CV y Contacto tanto en escritorio como en móvil.
- `Proyectos` permanece activo en las cuatro fichas mediante `aria-current="page"`.
- Cada ruta tiene título de documento y un encabezado principal coherentes.
- Menú móvil: abrir/cerrar, `aria-expanded`, Escape con devolución del foco, clic fuera y cierre al navegar.
- Atrás/Adelante no vuelve a abrir un menú que se dejó abierto en otra entrada del historial.
- El foco pasa a `main-content` y el scroll vuelve al inicio al cambiar de ruta.
- El enlace “Saltar al contenido” lleva el foco a `main-content`.
- El reloj sigue visible y cambia sus segundos en escritorio y móvil; mantiene `aria-live="off"`.
- Imágenes locales cargadas; no hay avatar en el DOM.
- Correo, redes, demos, repositorios y PDF pendientes no generan enlaces falsos.

## Salida de producción

- Acceso directo a `/proyectos/kali` y recarga: ficha correcta y reloj activo.
- `/proyectos/no-existe`: “Proyecto no encontrado” y regreso al listado.
- `/no-existe`: “Página no encontrada” y regreso al Home.
- Regreso al Home: imágenes cargadas y salto al contenido operativo.
- Sin errores nuevos de consola durante las comprobaciones de producción.

## Límites de esta entrega

Las comprobaciones visuales se realizaron en Chrome con tamaños de viewport emulados; no se ha hecho una auditoría completa de accesibilidad ni una revisión en dispositivos físicos, Safari o Firefox. Las pruebas automatizadas incluidas cubren el formato del reloj; las interacciones de navegador se comprobaron durante esta implementación y no son una suite E2E incluida en el repositorio.

CV, contacto y contenido de las fichas siguen pendientes de datos reales. KALI y sus fechas proceden de la referencia y deben confirmarse. No se ha publicado el sitio.
