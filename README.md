# Catálogo de recursos (demo base)

Demo del catálogo de recursos digitales: buscador, filtro por tipo y recursos gratis o premium. Hecho con React + TypeScript (Vite). Es una base: todo el contenido es de ejemplo.

## Cómo correrlo
1. Instala Node.js 18 o superior.
2. En la carpeta del proyecto: `npm install`
3. `npm run dev` y abre la dirección que aparece (normalmente http://localhost:5173).

## Dónde cambiar cosas
- `src/data/resources.ts`: los recursos y el precio del plan Premium. Aquí se agrega contenido.
- `src/styles.css`: colores y estilo. El color de resalte es `--accent` (arriba del archivo).
- `src/App.tsx`: la página, el buscador y los filtros.
- `src/components/ResourceCard.tsx`: la tarjeta de cada recurso.

## Para trabajar en equipo con Git
1. Subir el proyecto: `git init`, `git add .`, `git commit -m "Base del catálogo"`, crear un repositorio vacío en GitHub y `git remote add origin <url>`, `git push -u origin main`.
2. Cada persona trabaja en su propia rama (`git checkout -b nombre-de-la-mejora`) y propone los cambios con un Pull Request.

## Ideas para seguir
- Datos reales de los recursos y de cada tipo.
- Una página de detalle por recurso.
- Un registro de usuario conectado a la lista de espera.
- Cobro del plan Premium.
