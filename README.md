# 🔤 ABC Challenge

Página web interactiva para enseñar el abecedario a niños, con cards animadas, imágenes representativas y seguimiento de progreso en tiempo real.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📸 Demo

> Aquí necesitamos una captura o un video una vez terminado

---

## ✨ Funcionalidades

- **Navbar con contador de progreso** — muestra cuántas letras únicas ha descubierto el usuario (`X/26`)
- **Galería de 26 cards**, una por cada letra del abecedario
- **Efecto flip 3D** al hacer clic en una card (CSS `transform` + `backface-visibility`): revela una imagen representativa y la palabra en español
- **Contador inteligente** — solo suma la primera vez que se descubre cada letra; no cuenta si vuelves a voltear una letra ya vista
- **Filtros de contenido**:
  - `Mostrar todas` → las 26 letras del abecedario
  - `Mostrar vocales` → solo A, E, I, O, U
- **Sección del equipo** con los integrantes del proyecto

---

## 🛠️ Tecnologías usadas

- **HTML5** — estructura semántica
- **CSS3** — estilos, layout con Grid, animación flip 3D
- **JavaScript (ES6+)** — lógica de interacción, delegación de eventos, manipulación del DOM

No se usaron frameworks ni librerías externas de JavaScript.

---

## 🚀 Cómo ejecutar el proyecto localmente

1. Clona el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd abc-challenge
   ```
3. Abre `index.html` directamente en tu navegador, **o** usa la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de VS Code para levantar un servidor local con recarga automática.

No requiere instalación de dependencias ni `npm install`.

---

## 📁 Estructura de carpetas

```
abc-challenge/
├── index.html
├── style.css
├── script.js
├── img/
│   ├── A.png
│   ├── B.png
│   ├── ...
│   └── Z.png
└── README.md
```

---

## 🔀 Flujo de trabajo del equipo

El proyecto se desarrolló de forma colaborativa usando Git y GitHub:

- Cada integrante trabajó en su propia rama, organizada por bloque de letras (ej. `letras-A-E`, `letras-F-J`)
- Nadie trabajó directamente sobre `main`
- Los merges a `main` fueron coordinados por el líder del repositorio, integrando el trabajo de cada rama de forma ordenada
- El progreso se gestionó con un tablero de Trello, reflejando en todo momento el estado real del desarrollo (Por Hacer / En Progreso / Listo)

### 📋 Tablero de Trello

[Ver tablero del proyecto en Trello](https://trello.com/invite/b/6a62392f50dc8379b7416649/ATTI89b03e86893045bde320e14a3c8d3e83CE53553C/abc-challenge)

---

## 👥 Equipo

| Integrante | Rol |
|---|---|
| Mauricio Álvarez | Líder Técnico y Frontend |
| Angélica García | Planeación y Frontend |

---

## 📄 Licencia

Proyecto desarrollado con fines educativos como parte de un laboratorio de Generation Colombia 💙
