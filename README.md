
## 🚀 Project Structure

### 🎥 TU BASE DE DATOS DE PELICULAS

# 🎞️ Titulo: Cinefilo Interactivo

```
🛠️ ** Tecnologias y Herramientas utilizadas **

⚙️ Astro
🎨 Tailwind
🛢️ MSSQL - Motor de base de datos relacional
🔐 JSON Web Token (JWT)
🧪 Dotenv (manejo de variables de entorno)
🧱 Principios SOLID para arquitectura de código (lo mejor que se entendio)
```

---

## 🎯 FUNCIONES Y OBJETIVOS

```
(1) 🔐 ______DB(1)--API(1)--FETCH(1)--FrondEnd(1) =: Iniciar sesión
(2) 👤 ______DB(2)--API(2)--FETCH(2)--FrondEnd(2) =: Crear nuevo Usuario
(3) 🎞️_____________________ FETCH(3)--FrondEnd(3) =: Cargar catálogo de Películas
(4) 🔍_____________________ FETCH(4)--FrondEnd(4) =: Buscar películas por título (con debounce)
(5) 📄_______________________________ FrondEnd(5) =: Ver detalles de película
(6) ⭐______ FrondEnd(6)--FETCH(5)--API(3)--DB(3) =: Cargar lista favoritos
(7) 🛠️______ FrondEnd(7)--FETCH(6)--API(4)--DB(4) =: Gestionar lista favoritos
(8) 📚______ FrondEnd(8)--FETCH(7)--API(5)--DB(5) =: Cargar colección de listas de USUARIO
(9) ✏️______ FrondEnd(9)--FETCH(8)--API(6)--DB(6) =: Gestionar lista de usuario
(10) ⚙️____ FrondEnd(10)--FETCH(9)--API(7)--DB(7) =: Cargar preferencias de USUARIO
(11) 🧩____ FrondEnd(11)--FETCH(10)-API(8)--DB(8) =: Gestionar preferencias de USUARIO
```

---

## 🧮 SQL FUNCTION Y SP

```
📌 DB(1)--FUNCTION_LOGIN
📌 DB(2)--SP_NEW_USER
📌 DB(3)--FUNCTION_SHOW_FAVORITE
📌 DB(4)--SP_USER_ALTER_FAVORITE
📌 DB(5)--FUNCTION_SHOW_LIST
📌 DB(6)--SP_USER_ALTER_LIST
📌 DB(7)--FUNCTION_USER_PREFERENCES
📌 DB(8)--SP_USER_ALTER_PREFERENCES
```

---

## 🎯 OBJETIVOS

```
📂 Manejo de datos de login y registro de USUARIO y gestionar lista de preferencias del mismo mediante:
    * endPoints y fetch usando API TMDB.
    * Separacion de responsavilidades frondENd y backEnd
```

---

## 🔄 RECORRIDO LÓGICO

```
(1) 🔐 API(1)---checkData()---DB(1)---Token---res.
(2) 👤 API(2)---checkData()---DB(2)---res.
(6) ❤️ API(3)---checkToken()---DB(3)---res.
(7) 🛠️ API(4)---checkData()---checkToken()---DB(4)---res.
(8) 📚 API(5)---checkToken()---DB(5)---res.
(9) ✏️ API(6)---checkData()---checkToken()---DB(6)---res.
(10) ⚙️ API(7)---checkToken()---DB(7)---res.
(11) 🧩 API(8)---checkData()---checkToken()---DB(8)---res.
```

---

## 📁 Estructura de carpetas

```
📦 CineApp

├── 📁 src
│   |
│   ├── 📁 pages
│   │   ├── 📁 api
│   │   │   ├── login.js                   # login,
│   │   │   ├── register.js                # register,
│   │   │   ├── 📁 favoritos          # favoritos
│   │   │   │   ├── GET.js 
│   │   │   │   └── Update.js 
│   │   │   ├── 📁 listas             # listas personalizadas
│   │   │   │   ├── GET.js 
│   │   │   │   └── Update.js 
│   │   │   └── 📁 preferencias        # tema (claro/oscuro)
│   │   │       ├── GET.js 
│   │   │       └── Update.js 
│   │   └── 🧩 frontend
│   ├── 📁 backend
│   │   ├── 📁 controller
│   │   │   ├── 🔐 auth.js              # rutas de login/registro
│   │   │   ├── ❤️ favoritos.js         # rutas de favoritos
│   │   │   ├── 📚 listas.js            # rutas de listas
│   │   │   └── ⚙️ preferencias.js      # rutas de tema
│   │   ├── 📁 database
│   │   │   └── 🔌 db.js                # conexión SQL
│   │   ├── 📁 middlewares
│   │   │   └── 🛡️ authMiddleware.js         # JWT validator
│   │   └── 📁 utils
│   │       └── 🔧 helpers.js                # funciones auxiliares
│   │       
│   └── 🧩 frontend (carpetas listas para implementar)
│       
└── 🔐 .env    
                        # variables de entorno
```

---

## 🗄️ Diseño SQL (estructura de tablas)

📊 **Tabla: usuarios**
\- `id_usuario` (PK, int, AI)
\- `nombre` (varchar)
\- `correo` (varchar, UNIQUE)
\- `contrasena` (varchar)
\- `fecha_creacion` (timestamp)

📊 **Tabla: favoritos**
\- `id_favorito` (PK, int, AI)
\- `id_usuario` (FK)
\- `id_pelicula` (text)   <!-- ID externo de API TMDB-->

📊 **Tabla: listas**
\- `id_lista` (PK, int, AI)
\- `id_usuario` (FK)
\- `nombre_lista` (varchar)
\- `descripcion` (text)
\- `fecha_creacion` (timestamp)

📊 **Tabla: listas\_peliculas** (relacional)
\- `id` (PK, int, AI)
\- `id_lista` (FK)
\- `id_pelicula` (varchar)

📊 **Tabla: preferencias**
\- `id_preferencia` (PK, int, AI)
\- `id_usuario` (FK)
\- `tema` (varchar) — valores posibles: `'oscuro'`, `'claro'`

---

## 🧩 Diseño visual de JSON de FETCH(all)

```
🎞️ **Datos de película**
    {
        "id": 550,
        "title": "Fight Club",
        "poster_path": "/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "release_date": "1999-10-15",
        "vote_average": 8.4,
        "overview": "Un oficinista insomne y un vendedor de jabón forman un club de lucha secreto que evoluciona en algo mucho más grande.",
        "genre_ids": [18], 
        "original_language": "en"
    }

🔐 **Datos de LOGIN**
    {
        "email": "ejemplo@correo.com",
        "password": "claveSegura123"
    }

👤 **Datos de REGISTER**
    {
        "name": "Juan Pérez",
        "email": "juan.perez@correo.com",
        "password": "claveSegura123"
    }

🛠️ **Datos de GESTIÓN**
    {
        "token": "...token",
        "data": {
            ...pelicula
        }
    }
```

---

## 🧪 DESARROLLO POR SEGMENTOS

```
(1) 🔐 Login de usuarios

    1. EndPoint: POST /api/login
    2. Objetivo: Permitir que un usuario se autentique con su email y password
    3. Entradas esperadas:
        {
        "email": "ejemplo@correo.com",
        "password": "claveSegura123"
        }

    4. Flujo interno:
        ~ Validar email y password
        ~ Buscamos usuario en base de datos DB(1)
        ~ comparamos password
        ~ generamos un JWT
        ~ Devolver respuesta con el JWToken
    5. Respuesta esperada:
        {
            "success": true,
            "token": mfkljhurnbacnyu2k3h48*
        }
    6. Errores posibles:
        ~ Usuario no encontrado
        ~ password incorrecto
        ~ Error interno en la DB(1)
```

# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)


```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
