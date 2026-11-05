# Portafolio de Ivette Mamani Flores

Sitio estático hecho con Astro y Tailwind, basado en [DevPortfolio](https://github.com/RyanFitzgerald/devportfolio) (licencia MIT).
Se publica solo en <https://ivettexmamani.github.io/> cada vez que llega un cambio a `master`.

## Cambiar el contenido

Todo el contenido está en `src/config.ts`.

- **Textos:** edita el campo que corresponda (`aboutMe`, `skillGroups`, `experience`, `volunteering`, `education`, `passions`).
- **Agregar un proyecto:** copia un bloque dentro de `projects` y cambia sus datos: problema, solución, acción, resultado, medio y enlaces.
- **Imágenes y videos:** guárdalos en `public/medios/` y escribe la ruta en `media.src`, por ejemplo `medios/foto.png`.
- **Color:** cambia `accentColor`.

## Publicar

Sube el cambio con `git push`, o edita `src/config.ts` en GitHub. GitHub compila el sitio, así que no necesitas instalar Node.

## Probarlo en tu equipo (opcional)

Con Node instalado: `npm install` y luego `npm run dev`.
