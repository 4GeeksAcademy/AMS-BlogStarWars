# Star Wars Blog

Este proyecto es una aplicación web construida con React que permite a los usuarios explorar el universo de Star Wars a través de la API de SWAPI.tech. Los usuarios pueden ver información sobre personajes, vehículos y planetas, así como guardar elementos como favoritos.

## Estructura del Proyecto

La aplicación está organizada de la siguiente manera:

```
starwars-blog
├── public
│   └── index.html          # Plantilla HTML principal
├── src
│   ├── components          # Componentes reutilizables
│   │   ├── Navbar.js       # Barra de navegación
│   │   ├── Card.js         # Tarjeta de entidad
│   │   ├── DetailModal.js   # Modal de detalles
│   │   └── FavoritesList.js # Lista de favoritos
│   ├── context             # Contexto para manejar favoritos
│   │   └── FavoritesContext.js
│   ├── pages               # Páginas de la aplicación
│   │   ├── Home.js         # Página principal
│   │   └── Detail.js       # Página de detalles
│   ├── services            # Servicios para realizar fetch a la API
│   │   └── swapi.js
│   ├── App.js              # Componente principal de la aplicación
│   ├── index.js            # Punto de entrada de la aplicación
│   └── styles.css          # Estilos personalizados
├── package.json            # Configuración del proyecto
└── README.md               # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu_usuario/starwars-blog.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd starwars-blog
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para iniciar la aplicación, ejecuta el siguiente comando:
```
npm start
```
Esto abrirá la aplicación en tu navegador predeterminado en `http://localhost:3000`.

## Funcionalidades

- **Explorar Entidades**: Visualiza personajes, vehículos y planetas de Star Wars.
- **Favoritos**: Guarda elementos en una lista de favoritos y elimínalos cuando lo desees.
- **Detalles**: Obtén información detallada sobre cada entidad en un modal.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.