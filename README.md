# Sistema de Gestión de Flota Vehicular - Personería de Bogotá

Sistema integral para la gestión de la flota vehicular de la Personería de Bogotá, desarrollado con Next.js 14, TypeScript, Prisma y PostgreSQL.

## 🚀 Características Principales

- **Gestión de Vehículos**: Registro completo de vehículos con documentación
- **Control de Conductores**: Gestión de conductores y licencias
- **Mantenimientos**: Programación y seguimiento de mantenimientos
- **Asignaciones**: Control de asignación de vehículos
- **Combustible**: Registro de consumo y gastos
- **Reportes**: Dashboards y reportes detallados
- **Autenticación**: Sistema seguro con roles de usuario

## 🛠️ Tecnologías

- **Frontend**: Next.js 14 con App Router
- **Backend**: API Routes de Next.js
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Autenticación**: NextAuth.js
- **UI**: Tailwind CSS + Shadcn/ui
- **Lenguaje**: TypeScript
- **Validación**: Zod

## 📋 Requisitos Previos

- Node.js 18.0 o superior
- PostgreSQL 12 o superior
- npm, yarn o pnpm

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd flota_personeria
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```
   
   Si hay problemas con la instalación, intenta:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   
   Editar el archivo `.env` con tus configuraciones:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/flota_personeria"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="tu-secreto-super-seguro-aqui"
   ```

4. **Configurar la base de datos**
   ```bash
   # Generar el cliente Prisma
   npx prisma generate
   
   # Ejecutar las migraciones
   npx prisma db push
   
   # Opcional: Poblar con datos de prueba
   npm run db:seed
   ```

5. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   ├── auth/              # Páginas de autenticación
│   ├── dashboard/         # Dashboard principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── dashboard/         # Componentes del dashboard
│   ├── providers/         # Providers de contexto
│   └── ui/               # Componentes UI base
├── lib/                  # Utilidades y configuraciones
│   ├── auth.ts           # Configuración de NextAuth
│   ├── db.ts             # Cliente de Prisma
│   └── utils.ts          # Utilidades generales
└── types/                # Definiciones de tipos TypeScript

prisma/
├── schema.prisma         # Esquema de la base de datos
└── seed.ts              # Datos de prueba
```

## 🔐 Autenticación

El sistema utiliza NextAuth.js con autenticación por credenciales. 

**Credenciales de prueba:**
- Email: `admin@personeria.gov.co`
- Contraseña: `admin123`

## 📊 Modelo de Datos

### Entidades Principales

- **Users**: Usuarios del sistema (administradores, conductores, etc.)
- **Vehicles**: Información de vehículos
- **Drivers**: Conductores registrados
- **VehicleAssignments**: Asignaciones de vehículos
- **MaintenanceReports**: Reportes de mantenimiento
- **FuelRecords**: Registros de combustible
- **TripRecords**: Registros de viajes

## 🚦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecutar en modo desarrollo
npm run build        # Construir para producción
npm run start        # Ejecutar en modo producción

# Base de datos
npm run db:push      # Aplicar esquema a la base de datos
npm run db:migrate   # Crear y aplicar migraciones
npm run db:studio    # Abrir Prisma Studio
npm run db:seed      # Poblar con datos de prueba

# Calidad de código
npm run lint         # Ejecutar ESLint
```

## 🔒 Roles y Permisos

- **ADMIN**: Acceso completo al sistema
- **MANAGER**: Gestión de vehículos y reportes
- **DRIVER**: Acceso limitado a sus asignaciones
- **USER**: Acceso de solo lectura

## 📱 Funcionalidades por Módulo

### Dashboard
- Estadísticas generales de la flota
- Gráficos de estado de vehículos
- Actividad reciente
- Próximos mantenimientos

### Gestión de Vehículos
- CRUD completo de vehículos
- Gestión de documentos (SOAT, seguros, etc.)
- Historial de mantenimientos
- Estados y disponibilidad

### Gestión de Conductores
- Registro de conductores
- Control de licencias y vencimientos
- Historial de asignaciones

### Mantenimientos
- Programación de mantenimientos
- Tipos: preventivo, correctivo, emergencia
- Control de costos y proveedores
- Alertas de vencimientos

### Reportes
- Reportes de uso de combustible
- Costos de mantenimiento
- Eficiencia de la flota
- Exportación a PDF/Excel

## 🚀 Despliegue

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm run build
npm run start
```

### Docker (Opcional)
```bash
docker build -t flota-personeria .
docker run -p 3000:3000 flota-personeria
```

## 🤝 Contribución

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:
- Email: soporte@personeria.gov.co
- Teléfono: +57 (1) 123-4567

---

**Desarrollado para la Personería de Bogotá** | **Versión 1.0.0**
