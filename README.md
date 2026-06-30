# CV Camilo

CV web profesional bilingue orientado a posicionar el perfil de Camilo Contreras hacia roles como `Software Engineer`, `Solutions Engineer` y `Backend Developer`.

## Stack

- React + Vite
- Tailwind CSS
- i18next
- GitHub Pages

## Funcionalidades

- Experiencia bilingue `es/en`
- Tema claro y oscuro persistente
- Exportacion a PDF con layout especifico para impresion
- Secciones de proyectos y repositorios destacados
- Favicon personalizado
- Medidas basicas de disuasion para proteger contenido visible

## Seguridad y proteccion de contenido

El sitio aplica una capa de disuasion razonable en frontend, entendiendo que ningun contenido publico en web puede protegerse por completo si el navegador necesita renderizarlo.

Medidas implementadas:

- Deshabilitacion de seleccion de texto en la interfaz publica
- Bloqueo de clic derecho fuera de controles editables
- Bloqueo de `copy`, `cut` y `selectstart` en contenido visible
- Bloqueo de atajos comunes como `Ctrl/Cmd + C`, `S`, `U`, `A`, `Shift+Ctrl/Cmd+I`, `Shift+Ctrl/Cmd+J` y `F12`
- Bloqueo de arrastre de imagenes
- Marca de agua visual sobre la fotografia de perfil
- Politicas basicas en `index.html` para `Content-Security-Policy`, `Referrer-Policy` y `X-Content-Type-Options`

Limites importantes:

- Estas medidas no evitan por completo la copia o extraccion del contenido
- Un usuario decidido todavia puede usar capturas de pantalla, herramientas externas o inspeccion avanzada
- La mejor practica para contenido realmente sensible sigue siendo no publicarlo en el frontend

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

```bash
npm run deploy
```

## Estructura

- `src/components`: componentes de UI
- `src/locales`: textos en espanol e ingles
- `src/hooks`: hooks reutilizables, incluyendo proteccion de contenido
- `public`: assets publicos

## Nota

La proteccion de contenido en frontend debe entenderse como una medida de disuasion y de buenas practicas visibles, no como una barrera de seguridad absoluta.
