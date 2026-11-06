# ✈️ Ala Siete — Archivo Aeronáutico

Proyecto web sobre historia, diseño e ingeniería de aeronaves militares, construido con React, Vite y Bootstrap.

> 🛩️ La sección de API consulta la API pública de Rick y Morty y requiere conexión a internet.
>
> 🔐 Los formularios de acceso son solo demostrativos y no conectan con backend real.

## 🚀 Vista rápida

- Portada con contenido visual de aeronaves
- Navegación por rutas con React Router
- Sección de Props y datos estáticos
- API con búsqueda y paginación
- Tema claro/oscuro
- Deploy preparado para GitHub Pages

## 🧩 Rutas principales

| Ruta               | Descripción                              |
| ------------------ | ---------------------------------------- |
| `/`                | Portada y selección de aeronaves         |
| `/props`           | Contenido de historias y diseño          |
| `/api`             | Búsqueda de personajes de Rick and Morty |
| `/login`           | Simulación de acceso                     |
| `/register`        | Simulación de registro                   |
| `/forgot-password` | Recuperación de contraseña               |

## 🛠️ Requisitos

- Node.js `20.19+` o `22.12+`
- npm

## ▶️ Ejecutar en local

```bash
npm install
npm run dev
```

Luego abre la URL que indique Vite, normalmente:

```bash
http://localhost:5173/
```

## 📋 Comandos útiles

| Comando           | Descripción                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Inicia el proyecto en modo desarrollo |
| `npm run build`   | Genera la versión de producción       |
| `npm run preview` | Sirve la build localmente             |
| `npm run lint`    | Revisa el código con Oxlint           |

## 🗂️ Estructura del proyecto

```text
public/
└── imagenes/                  # Imágenes de portada y contenido
src/
├── App.jsx
├── features/
│   ├── access/components/     # Login, Register, ForgotPassword
│   └── aviation/
│       ├── components/        # SearchBar y ThemeToggle
│       ├── data/              # Datos de aeronaves
│       ├── layout/            # Header y Footer
│       └── pages/             # Home, Stories y RickAndMorty
├── shared/hooks/              # Tema claro/oscuro
└── main.jsx
```

## 🎨 Tecnologías

- React 19
- React Router
- Vite
- Bootstrap 5
- PWA con `vite-plugin-pwa`
- Oxlint

## 🌐 GitHub Pages

La configuración de despliegue está en:

- `.github/workflows/deploy.yml`
- `vite.config.js`

Vite detecta automáticamente el nombre del repositorio para construir las rutas correctas en GitHub Pages.

## 🖼️ Cambiar imágenes

Las imágenes de la portada y contenido se encuentran en `public/imagenes/`.

Algunos ejemplos:

- `principal.jpg` → portada principal
- `avion-1.jpg`, `avion-2.jpg`, `avion-3.jpg` → sección de Props
- El resto de imágenes se usan según la aeronave o la sección

## 📝 Notas

- El sitio incluye una preferencia de tema guardada en `localStorage`
- La interfaz usa Bootstrap para estilos y componentes sin necesidad de hojas extra
- La app está lista para desplegar en una GitHub Pages pública
