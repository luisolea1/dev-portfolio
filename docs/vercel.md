# Despliegue en Vercel

Sitio de producción: [luisolea.vercel.app](https://luisolea.vercel.app/).

## Configuración

| Ajuste | Valor |
| --- | --- |
| Repositorio | `luisolea1/dev-portfolio` |
| Rama de producción | `main` |
| Framework | Vite |
| Directorio raíz | `.` |
| Node.js | `24.x` |
| Instalación | `npm ci` |
| Compilación | `npm run build` |
| Salida | `dist` |
| Variables de entorno | Ninguna |

La configuración está en `vercel.json`. La regla de reescritura a `/index.html` permite abrir y recargar directamente las rutas de React Router, como `/proyectos/kali` y `/cv`.

## Publicar cambios

Comprueba los cambios antes de crear un commit:

```sh
npm test
npm run build
```

Una vez registrados los cambios, súbelos a la rama de producción:

```sh
git push origin main
```

La integración de GitHub con Vercel inicia el despliegue. Revisa su estado en el panel de Vercel.

## Comprobaciones después del despliegue

- Abrir Inicio, Proyectos, CV y Contacto.
- Recargar una ficha de proyecto para comprobar las rutas directas.
- Revisar la carga de imágenes y la descarga del CV.
- Comprobar los enlaces a demos, repositorios y perfiles sociales.
- Revisar el menú y la distribución en una pantalla pequeña.
- Confirmar que `/favicon.svg` y `/social-preview.png` están disponibles.

La tarjeta para compartir se configura en `index.html`. Si cambia el dominio, actualiza allí las URL absolutas de Open Graph y Twitter.

Las rutas desconocidas muestran la pantalla 404 de la aplicación. Al tratarse de una SPA estática, el servidor responde con HTTP 200 a esas rutas.
