<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Instrucciones para GitHub Copilot

## Contexto del Proyecto
Este es un Sistema de Gestión de Flota Vehicular para la Personería de Bogotá desarrollado con:
- Next.js 14 con App Router y TypeScript
- Prisma ORM con PostgreSQL
- NextAuth.js para autenticación
- Tailwind CSS + Shadcn/ui para el UI
- Arquitectura de componentes modulares

## Convenciones de Código

### TypeScript
- Usar tipos explícitos siempre que sea posible
- Preferir interfaces sobre tipos para objetos
- Usar enums para valores constantes
- Implementar validación con Zod

### React/Next.js
- Usar componentes funcionales con hooks
- Preferir Server Components cuando sea posible
- Usar "use client" solo cuando sea necesario
- Implementar error boundaries apropiados

### Styling
- Usar Tailwind CSS para todos los estilos
- Seguir el sistema de diseño de Shadcn/ui
- Mantener consistencia en espaciado y colores
- Usar variables CSS custom para temas

### Base de Datos
- Seguir el esquema de Prisma definido
- Usar transacciones para operaciones complejas
- Implementar validaciones a nivel de base de datos
- Manejar errores de base de datos apropiadamente

### Naming Conventions
- Componentes: PascalCase (ej: VehicleCard)
- Archivos: kebab-case (ej: vehicle-card.tsx)
- Variables: camelCase (ej: vehicleData)
- Constantes: UPPER_SNAKE_CASE (ej: API_ENDPOINTS)
- API Routes: kebab-case (ej: /api/vehicles/[id])

### Estructura de Archivos
- Agrupar componentes relacionados en carpetas
- Separar lógica de negocio en custom hooks
- Mantener components pequeños y enfocados
- Usar barrel exports (index.ts) en carpetas

### Autenticación y Seguridad
- Validar permisos en cada ruta protegida
- Usar middleware para protección de rutas
- Sanitizar inputs del usuario
- Implementar rate limiting en APIs

### Performance
- Usar React.memo para componentes pesados
- Implementar lazy loading para componentes grandes
- Optimizar imágenes con next/image
- Usar Server Actions cuando sea apropiado

### Error Handling
- Implementar try-catch en todas las funciones async
- Usar toast notifications para feedback al usuario
- Log errores del servidor apropiadamente
- Proveer fallbacks para componentes que fallan

## Dominio Específico

### Entidades Principales
- Vehicle: Vehículos de la flota
- Driver: Conductores registrados
- User: Usuarios del sistema
- Assignment: Asignaciones de vehículos
- Maintenance: Reportes de mantenimiento
- FuelRecord: Registros de combustible
- TripRecord: Registros de viajes

### Roles de Usuario
- ADMIN: Acceso completo
- MANAGER: Gestión de flota
- DRIVER: Solo sus asignaciones
- USER: Solo lectura

### Estados de Vehículo
- AVAILABLE: Disponible
- IN_USE: En uso
- MAINTENANCE: En mantenimiento
- OUT_OF_SERVICE: Fuera de servicio
- INACTIVE: Inactivo

### Patrones de Implementación
- Usar React Hook Form para formularios complejos
- Implementar optimistic updates donde sea apropiado
- Usar React Query para cache de datos
- Seguir el patrón Repository para acceso a datos

### Testing
- Escribir tests unitarios para lógica de negocio
- Usar testing-library para tests de componentes
- Mockear calls a la base de datos en tests
- Mantener coverage mínimo del 80%

## Ejemplos de Código Preferido

### Componente Típico
```tsx
interface VehicleCardProps {
  vehicle: Vehicle;
  onEdit?: (id: string) => void;
}

export function VehicleCard({ vehicle, onEdit }: VehicleCardProps) {
  // Lógica del componente
}
```

### Hook Personalizado
```tsx
export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Lógica del hook
  
  return { vehicles, loading, refetch };
}
```

### API Route
```tsx
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return new Response('Unauthorized', { status: 401 });
    
    // Lógica de la API
    
    return Response.json(data);
  } catch (error) {
    return new Response('Internal Error', { status: 500 });
  }
}
```
