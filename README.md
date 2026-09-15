# Portafolio · Frontend Developer

Primera implementación local con **React + Vite + TypeScript, React Router y CSS BEM**, basada en la exportación de Stitch. Home adaptable, reloj de CDMX en la navegación, sin avatar y cuatro proyectos centralizados. Las páginas de Proyectos, fichas, CV y Contacto son bases funcionales con contenido pendiente explícito.

## Ejecutar

Requiere Node.js **22.12 o superior** y npm.

```sh
npm ci
npm run dev
```

Abre la URL que imprime Vite (normalmente `http://127.0.0.1:5173`). No requiere variables de entorno, backend ni cuenta externa. Las imágenes y fuentes son locales.

```sh
npm run typecheck  # Comprobar TypeScript
npm test           # Casos límite del reloj
npm run build     # TypeScript + compilación de producción en dist/
npm run preview   # Servir la compilación de producción localmente
```

Los tests usan el soporte de TypeScript de Node (`--experimental-strip-types`); Node 22 puede mostrar una advertencia de función experimental. No se necesita un runner adicional.

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Home: presentación, imagen retro y experiencia laboral. |
| `/proyectos` | Listado de los cuatro proyectos. |
| `/proyectos/kali` | Ficha de KALI. |
| `/proyectos/proyecto-02` | Ficha pendiente 02. |
| `/proyectos/proyecto-03` | Ficha pendiente 03. |
| `/proyectos/proyecto-04` | Ficha pendiente 04. |
| `/cv` | Perfil, experiencia, formación, habilidades y futuro PDF. |
| `/contacto` | Email y perfiles sociales pendientes. |
| Cualquier otra ruta | Estado 404 con enlace de regreso. |

Las fichas mantienen **Proyectos** activo en la navegación. Los cambios de ruta reinician el scroll y llevan el foco al contenido. El menú móvil se cierra al navegar, con Escape, al pulsar fuera o al volver al ancho de escritorio.

## Organización

```text
src/
├── app/                  # Rutas y efectos de navegación
├── assets/               # Copias de las imágenes usadas en el sitio
├── components/           # Cabecera y pie compartidos
├── features/
│   ├── clock/            # Reloj, formato y CSS
│   ├── home/             # Home y hero
│   ├── projects/         # Modelo, datos, listado, fichas y componentes
│   ├── profile/          # Datos personales centralizados
│   ├── cv/               # Página de CV
│   ├── contact/          # Página de contacto
│   └── not-found/        # Rutas desconocidas
└── styles/               # Tokens y estilos base
tests/                    # Pruebas de formato y zona del reloj
references/               # ZIP y exportación original sin modificar
docs/                     # Decisiones y comprobaciones
```

Los estilos de cada componente viven junto a su `.tsx`. Se usa BEM (`site-header__link--active`); `container`, `text-link` y `button-link` son bloques compartidos. No se usa Tailwind ni el HTML exportado como código de producción.


## Referencia y validación

- [Originales de Stitch](references/README.md).
- [Decisiones y ajustes aplicados](docs/implementation.md).
- [Comprobaciones realizadas](docs/verification.md).
- Documentación oficial: [Vite](https://vite.dev/guide/) y [React Router](https://reactrouter.com/start/declarative/installation).

## Publicación futura

Esta entrega permanece en local. `dist/` es la salida estática. Al publicar más adelante, el servidor debe devolver `index.html` para rutas de la aplicación como `/proyectos/kali`, conservando el servicio normal de archivos estáticos (fallback SPA). Vite ya permite abrir y recargar esas rutas en desarrollo y preview. No se ha configurado ni ejecutado un despliegue.
