# Ala Siete — Archivo Aeronáutico

Sitio web sobre historia, diseño e ingeniería de aeronaves militares. Está construido con React, React Router, Bootstrap y Vite. La sección **API** consulta la API pública de Rick y Morty y requiere conexión a internet.

> Los formularios de acceso son demostrativos: no crean cuentas ni se conectan a un backend.

## Requisitos

- Node.js `20.19+` o `22.12+`.
- npm.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre la dirección local que indique Vite (normalmente `http://localhost:5173/`).

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor local con recarga automática. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve la compilación localmente. |
| `npm run lint` | Analiza el código con Oxlint. |

## Secciones

| Ruta | Contenido |
| --- | --- |
| `/` | Portada y selección de aeronaves. |
| `/props` | Historias sobre diseño, ingeniería y aviación. |
| `/api` | Personajes de Rick y Morty con búsqueda por nombre y paginación. |
| `/login` | Acceso de demostración. |
| `/register` | Registro de demostración. |
| `/forgot-password` | Recuperación de acceso de demostración. |

El menú superior incluye Inicio, Props y API. El tema claro/oscuro conserva la selección en `localStorage`.
La interfaz usa las clases y componentes de Bootstrap; no requiere una hoja de estilos propia.

## Cambiar la imagen de ejemplo

Las imágenes de la página de inicio están en `public/imagenes/`: `principal.jpg` se usa como portada; `estadosunidos.jpg`, `reinounido.jpg` y `union sovietica.jpg` se muestran en las tarjetas según el país de cada aeronave. Las tres imágenes redondas de Props son `avion-1.jpg`, `avion-2.jpg` y `avion-3.jpg`. Las imágenes de la sección API proceden del servicio de Rick y Morty.

## Organización

```text
public/
└── imagenes/                    # Fotos de portada, países y Props
src/
├── App.jsx
├── features/
│   ├── access/components/       # Formularios de cuenta
│   └── aviation/
│       ├── components/         # Búsqueda y control de tema
│       ├── data/               # Datos de aeronaves de la portada
│       ├── layout/              # Navegación y pie de página
│       └── pages/               # Portada, historias y API Rick y Morty
├── shared/hooks/                # Preferencia de tema
```

## Tecnologías

- React 19, React Router y Vite.
- Bootstrap 5 para la cuadrícula, navegación, formularios, tarjetas y paginación.
- API pública de Rick y Morty.
- `vite-plugin-pwa` y Workbox.
- Oxlint.

El despliegue a GitHub Pages se configura en `.github/workflows/deploy.yml`; Vite detecta automáticamente el nombre del repositorio para construir las rutas de publicación.
