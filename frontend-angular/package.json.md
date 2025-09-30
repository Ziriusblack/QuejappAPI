# Frontend Angular - QuejappAPI

Frontend independiente desarrollado con Angular para el proyecto QuejappAPI.

## Características

- Angular 19 (última versión)
- Integración con Supabase
- Autenticación completa (Login/Registro)
- Dashboard protegido con guards
- Diseño moderno y responsivo
- TypeScript

## Estructura del Proyecto

```
frontend-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/          # Componente de inicio de sesión
│   │   │   ├── register/       # Componente de registro
│   │   │   └── dashboard/      # Dashboard principal
│   │   ├── services/
│   │   │   └── supabase.service.ts  # Servicio de Supabase
│   │   ├── guards/
│   │   │   └── auth.guard.ts   # Guard de autenticación
│   │   ├── app.routes.ts       # Configuración de rutas
│   │   └── app.ts              # Componente raíz
│   ├── environments/
│   │   ├── environment.ts      # Variables de entorno desarrollo
│   │   └── environment.prod.ts # Variables de entorno producción
│   └── styles.scss             # Estilos globales
├── package.json
└── angular.json
```

## Instalación

```bash
cd frontend-angular
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

## Construcción

Para construir el proyecto para producción:

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`.

## Rutas

- `/` - Redirige a `/login`
- `/login` - Página de inicio de sesión
- `/register` - Página de registro
- `/dashboard` - Dashboard principal (requiere autenticación)

## Servicios

### SupabaseService

Proporciona métodos para:
- `signUp(email, password)` - Registro de usuarios
- `signIn(email, password)` - Inicio de sesión
- `signOut()` - Cerrar sesión
- `currentUser` - Observable con el usuario actual
- `getSupabaseClient()` - Cliente de Supabase para operaciones adicionales

## Seguridad

- Las rutas protegidas utilizan el `authGuard`
- Las credenciales se almacenan de forma segura mediante Supabase
- Los tokens de autenticación se gestionan automáticamente

## Tecnologías

- Angular 19
- TypeScript
- SCSS
- Supabase JS Client
- RxJS
