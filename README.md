# Conversor UF/CLP

Aplicación full-stack que permite consultar y convertir valores entre Unidades de Fomento (UF) y Pesos Chilenos (CLP), consumiendo la tasa del día.

Este proyecto está dividido en dos partes principales: el `backend` que provee la API de conversión y el `frontend` que consume esta API y presenta la interfaz de usuario.

## Tecnologías Utilizadas

### Backend
- **NestJS**: Framework de Node.js eficiente y escalable para construir aplicaciones del lado del servidor.
- **TypeScript**: Superset de JavaScript que añade tipado estático.

### Frontend
- **Vue 3**: Framework progresivo para la construcción de interfaces de usuario.
- **Tailwind CSS**: Framework CSS de utilidades para un diseño rápido, limpio y responsivo.
- **Vue Router**: Enrutador oficial para la navegación entre las vistas de la aplicación.
- **Pinia**: Gestor de estado oficial de Vue para el manejo centralizado de datos.
- **Axios**: Cliente HTTP para realizar las peticiones a la API del backend.

## Instrucciones de Instalación y Ejecución

Para ejecutar la aplicación correctamente, es necesario levantar primero el backend y luego el frontend.

### 1. Backend

Abre una terminal y ejecuta los siguientes comandos:

```bash
cd backend
npm install
npm run start:dev
```

El servidor del backend estará disponible en `http://localhost:3000`.

### 2. Frontend

Abre **otra ventana de terminal** (manteniendo el backend en ejecución) y ejecuta los siguientes comandos desde la raíz del proyecto:

```bash
cd frontend
npm install
npm run dev
```

La aplicación web del frontend estará disponible en `http://localhost:5173` (puerto por defecto de Vite).
