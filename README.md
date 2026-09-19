# Luis Olea · Portafolio

Portafolio de desarrollo frontend con proyectos, currículum y enlaces de contacto.

**Sitio web:** [luisolea.vercel.app](https://luisolea.vercel.app/)

## Tecnologías

- React y TypeScript.
- Vite para desarrollo y compilación.
- React Router para la navegación.
- HTML semántico y CSS con metodología BEM.
- Inter y Space Mono mediante Fontsource.
- Vercel para el despliegue.

## Desarrollo local

Requiere Node.js **24.x** y npm. Si usas nvm, ejecuta `nvm use` en la raíz del proyecto.

```sh
npm ci
npm run dev
```

Abre la dirección que indica Vite, normalmente `http://127.0.0.1:5173`. No se necesitan variables de entorno. Las imágenes, fuentes y el PDF del CV se sirven desde el propio proyecto.

## Comandos

| Comando | Función |
| --- | --- |
| `npm run dev` | Iniciar el servidor de desarrollo. |
| `npm run typecheck` | Comprobar los tipos de TypeScript. |
| `npm test` | Ejecutar las pruebas del formato y zona horaria del reloj. |
| `npm run build` | Comprobar TypeScript y generar la versión de producción en `dist/`. |
| `npm run preview` | Revisar localmente la versión compilada. |

## Secciones

- **Inicio:** presentación y experiencia en proyectos.
- **Proyectos:** KALI, TV Explorer, Around The U.S. y Homeland, con sus tecnologías, contribuciones, resultados y enlaces.
- **CV:** perfil, experiencia, formación, habilidades y descarga del currículum.
- **Contacto:** correo electrónico, LinkedIn y GitHub.

## Organización

```text
src/
├── app/          # Rutas y efectos de navegación
├── assets/       # Imágenes y currículum en PDF
├── components/   # Cabecera y pie compartidos
├── features/     # Páginas, datos y componentes por funcionalidad
└── styles/       # Variables de diseño y estilos globales
public/           # Iconos y tarjeta para compartir enlaces
tests/            # Pruebas del reloj
scripts/          # Utilidades de desarrollo
docs/             # Documentación técnica
```

Los datos personales están en `src/features/profile/profile.data.ts`. Las fichas de proyectos se mantienen en `src/features/projects/projects.data.ts` y se reutilizan en Inicio, Proyectos y CV.

## Despliegue

El sitio se publica en Vercel desde el repositorio de GitHub. `vercel.json` configura Vite, la salida `dist/` y las rutas de la aplicación. Consulta la [guía de despliegue](docs/vercel.md).
