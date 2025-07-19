### TU BASE DE DATOS DE PELICULAS ###

# titulo # Cinefilo Interactivo

    ** Tecnologias y Herramientas utilizadas **

    Astro
    Tailwind
    node.js
    expres 
    mmsql
    JSON web token (JWT)
    Dotenv  para manejo de variables de entorno
    Principios SOLID para arquitectura de codigo
---

 ## FUNCIONES Y OBJETIVOS

    (1)______ DB(1)--API(1)--FETCH(1)--(1) =: Iniciar cession
    (2)______ DB(2)--API(2)--FETCH(2)--(2) =: Crear nuevo Usuario
    (3)_____________________ FETCH(3)--(3) =: Cargar catalogo de Pleiculas
    (4)_____________________ FETCH(4)--(4) =: Buscar peliculas por titulo (con debounce)
    (5)_______________________________ (5) =: Ver detalles de palicula
    (6)______ (6)--FETCH(5)--API(3)--DB(3) =: Cargar lista favoritos
    (7)______ (7)--FETCH(6)--API(4)--DB(4) =: Gestionar lista favoritos
    (8)______ (8)--FETCH(7)--API(5)--DB(5) =: Cargar coleccion de listas de USUARIO
    (9)______ (9)--FETCH(8)--API(6)--DB(6) =: Gestionar lista de usuario
    (10)____ (10)--FETCH(9)--API(7)--DB(7) =: Cargar preferencias de USUARIO
    (11)____ (11)--FETCH(10)-API(8)--DB(8) =: Gestionar preferencias de USUARIO
---

## SQL FUNCTION Y SP

    DB(1)--FUNCTION_LOGIN
    DB(2)--SP_NEW_USER
    DB(3)--FUNCTION_SHOW_FAVORITE
    DB(4)--SP_USER_ALTER_FAVORITE
    DB(5)--FUNCTION_SHOW_LIST
    DB(6)--SP_USERa_ALTER_FAVORITE
    DB(7)--FUNCTION_USER_PREFERENCES
    DB(8)--SP_USER_ALTER_PREFERENCES
---

## OBJETIVOS

    * Manejo de datos de login y registro de USUARIO y gestionar lista de preferencias del mismo mdiante:
        * endPoints ={ 
            /login = API(1)
            /register = API(2)
            /userData = API(3, 5, 7)
            /gestion = API(4, 6, 8) 
        }
---

## RECORRIDO LOGICO

    (1)_____ API(1)---checkData()---DB(1)---Token---res.
    (2)_____ API(2)---checkData()---DB(2)---res.
    (6)_____ API(3)---checkToken()---DB(3)---res.
    (7)_____ API(4)---checkData()---checkToken()---DB(4)---res.
    (8)_____ API(5)---checkToken()---DB(5)---res.
    (9)_____ API(6)---checkData()---checkToken()---DB(6)---res.
    (10)____ API(7)---checkToken()---DB(7)---res.
    (11)____ API(8)---checkData()---checkToken()---DB(8)---res.
---

## 📁 Estructura de carpetas

    📦 CineApp
    |
    ├── 📁 backend
    │   ├── 📁 controllers
    │   │   ├── authController.js          # login, register
    │   │   ├── favoritosController.js     # favoritos
    │   │   ├── listasController.js        # listas personalizadas
    │   │   └── preferenciasController.js  # tema (claro/oscuro)
    │   ├── 📁 routes
    │   │   ├── authRoutes.js              # rutas de login/registro
    │   │   ├── favoritosRoutes.js         # rutas de favoritos
    │   │   ├── listasRoutes.js            # rutas de listas
    │   │   └── preferenciasRoutes.js      # rutas de tema
    │   ├── 📁 database
    │   │   └── conexion.js                # conexión SQL
    │   ├── 📁 middlewares
    │   │   └── authMiddleware.js       # JWT validator
    │   ├── 📁 utils
    │   │   └── helpers.js              # funciones auxiliares
    │   ├── index.js                    # entrada principal del backend
    │   └── .env                               # variables de entorno
    │ 
    ├── 📁 frontend (no detallado)
---

## 🗄️ Diseño SQL (estructura de tablas)

📊 **Tabla: usuarios**
    - `id_usuario` (PK, int, AI)
    - `nombre` (varchar)
    - `correo` (varchar, UNIQUE)
    - `contrasena` (varchar)
    - `fecha_creacion` (timestamp)

📊 **Tabla: favoritos**
    - `id_favorito` (PK, int, AI)
    - `id_usuario` (FK)
    - `id_pelicula` (text)   <!-- ID externo de API TMDB-->

📊 **Tabla: listas**
    - `id_lista` (PK, int, AI)
    - `id_usuario` (FK)
    - `nombre_lista` (varchar)
    - `descripcion` (text)
    - `fecha_creacion` (timestamp)

📊 **Tabla: listas_peliculas** (relacional)
    - `id` (PK, int, AI)
    - `id_lista` (FK)
    - `id_pelicula` (varchar)

📊 **Tabla: preferencias**
    - `id_preferencia` (PK, int, AI)
    - `id_usuario` (FK)
    - `tema` (varchar) — valores posibles: `'oscuro'`, `'claro'`

---
    🔐 Todas las relaciones entre tablas están referenciadas mediante `id_usuario`.

    📅 Se usan `timestamp` para registrar fechas automáticamente.

    🎬 Las películas se identifican mediante un ID externo (En esta aportunidad es **TMDB**).

## Disenio viasul de JSON de FETCH(all)

    ** Datos de pelicula **
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

    ** Datos de LOGIN **
        {
            "email": "ejemplo@correo.com",
            "password": "claveSegura123"
        }

    ** Datos de REGISTER **
        {
            "name": "Juan Pérez",
            "email": "juan.perez@correo.com",
            "password": "claveSegura123"
        }

    ** Datos de GESTION **
        {
            "token": "...token",
            "data": {
                ...pelicula
            }
        }
---

## DESARROLLO POR SEGMENTOS

    (1)_____ Login de usuarios

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

