# Desplegar el portafolio en Vercel

## Configuración incluida

| Ajuste | Valor |
| --- | --- |
| Framework Preset | Vite |
| Root Directory | `.` (raíz del repositorio) |
| Node.js Version | `24.x`, fijado en `package.json` y `.nvmrc` |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Variables de entorno | Ninguna necesaria |

`vercel.json` guarda el framework, los comandos y el directorio de salida. `package-lock.json` conserva las versiones de las dependencias. No hace falta instalar un adaptador, convertir el proyecto en Next.js ni agregar funciones de servidor.

La regla `/(.*)` → `/index.html` permite que React Router resuelva `/proyectos`, sus cuatro fichas, `/cv`, `/contacto` y el estado 404 de la aplicación al entrar directamente o recargar. Es la configuración de SPA indicada en la [guía oficial de Vite en Vercel](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas). Se conserva la URL solicitada; no es una redirección al Home.

Los archivos de la compilación, incluidas las imágenes y fuentes de `dist/assets/`, se sirven como archivos estáticos. Una ruta desconocida muestra la página 404 de React; al ser una SPA estática, esa respuesta del servidor tiene estado HTTP 200.

## Opción 1: importar desde GitHub

1. Comprueba que los commits que quieres desplegar, incluidos `vercel.json` y `package-lock.json`, estén en la rama `main` de `luisolea1/dev-portfolio` en GitHub. Cuando decidas subir los commits locales:

   ```sh
   git push -u origin main
   ```

2. En Vercel, abre **Add New → Project** e importa ese repositorio.
3. Usa el directorio raíz `.` y verifica los valores de la tabla anterior. La configuración del repositorio establece los comandos y la salida.
4. Selecciona **Deploy** y espera a que finalice la compilación.
5. Revisa el enlace generado con las comprobaciones del final de esta guía.

Después de conectar el repositorio, las nuevas publicaciones dependerán de la integración Git y de la rama de producción configurada en Vercel. Mantén `main` como rama de producción si ese es el flujo elegido.

## Opción 2: Vercel CLI

Desde la raíz del proyecto, con Node 24:

```sh
npm ci
npm test
npm run build
npx vercel
```

El primer uso solicita iniciar sesión y elegir o crear el proyecto en Vercel. `npx vercel` crea un despliegue de vista previa. Cuando quieras publicar en producción:

```sh
npx vercel --prod
```

La CLI genera `.vercel/` con la vinculación local al proyecto; esa carpeta está excluida de Git. `.vercelignore` excluye las referencias originales y la documentación de las cargas de la CLI. Las imágenes usadas por la aplicación están en `src/assets/` y permanecen incluidas. Los originales siguen conservados en el repositorio, fuera de `dist/`.

## Comprobaciones

Antes de publicar:

```sh
node --version       # v24.x
npm ci
npm test
npm run build
npm run preview
```

En la URL generada por Vercel:

- Abrir `/` y comprobar imágenes, fuentes y reloj de CDMX.
- Entrar directamente en `/proyectos/kali` y recargar.
- Repetir con `/proyectos/proyecto-02`, `/proyectos/proyecto-03`, `/proyectos/proyecto-04`, `/cv` y `/contacto`.
- Abrir `/no-existe` y comprobar la página 404 y su enlace de regreso.
- Revisar el menú móvil y comprobar que los archivos de `assets/` se cargan correctamente.

Si Vercel muestra su 404 al recargar una ficha, comprueba que el despliegue usa el commit con `vercel.json` y el directorio raíz correcto. Si falla la compilación, revisa primero Node 24 y el log de `npm ci` / `npm run build`.

## Alcance de esta preparación

Se ha preparado la configuración local. No se ha vinculado una cuenta de Vercel, hecho push ni creado un despliegue. Los campos de contenido que ya estuvieran pendientes permanecen pendientes.

La preparación se verificó el 15 de septiembre de 2026 en una copia temporal con **Node 24.21.0**: `npm ci`, `npm run build` y las **5 pruebas** de `npm test` terminaron correctamente. La configuración de rutas sigue la receta oficial de Vercel; su comportamiento en el dominio desplegado se comprueba después de publicar.

## Documentación oficial

- [Configuración con vercel.json](https://vercel.com/docs/project-configuration/vercel-json).
- [Versiones de Node.js y selección mediante engines](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
- [Exclusiones de carga con .vercelignore](https://vercel.com/docs/deployments/vercel-ignore).
- [Vercel CLI](https://vercel.com/docs/cli).
