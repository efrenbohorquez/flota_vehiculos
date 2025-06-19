import { Vehicle, Driver, User, VehicleAssignment, MaintenanceReport, FuelRecord, TripRecord } from "@prisma/client"

// Tipos extendidos para incluir relaciones
export type VehicleWithRelations = Vehicle & {
  createdBy: User
  updatedBy?: User | null
  assignments: VehicleAssignment[]
  maintenanceReports: MaintenanceReport[]
  fuelRecords: FuelRecord[]
  tripRecords: TripRecord[]
}

export type AssignmentWithRelations = VehicleAssignment & {
  vehicle: Vehicle
  user?: User | null
  driver?: Driver | null
}

export type MaintenanceWithRelations = MaintenanceReport & {
  vehicle: Vehicle
  reportedBy: User
}

export type TripWithRelations = TripRecord & {
  vehicle: Vehicle
  driver?: Driver | null
  user?: User | null
}

// Tipos para formularios
export type VehicleFormData = Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt' | 'createdById' | 'updatedById'>

export type DriverFormData = Omit<Driver, 'id' | 'createdAt' | 'updatedAt'>

export type MaintenanceFormData = Omit<MaintenanceReport, 'id' | 'createdAt' | 'updatedAt' | 'reportedById'>

// Tipos para respuestas de API
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Tipos para dashboard
export interface DashboardStats {
  totalVehicles: number
  availableVehicles: number
  inMaintenanceVehicles: number
  activeDrivers: number
  pendingMaintenances: number
  monthlyFuelCost: number
}

export interface VehicleStatusCount {
  status: string
  count: number
  percentage: number
}

// Tipos para filtros
export interface VehicleFilters {
  status?: string
  brand?: string
  fuelType?: string
  year?: number
  search?: string
}

export interface MaintenanceFilters {
  type?: string
  status?: string
  vehicleId?: string
  dateFrom?: string
  dateTo?: string
}

// Enums del sistema
export const VehicleStatus = {
  AVAILABLE: 'AVAILABLE',
  IN_USE: 'IN_USE',
  MAINTENANCE: 'MAINTENANCE',
  OUT_OF_SERVICE: 'OUT_OF_SERVICE',
  INACTIVE: 'INACTIVE'
} as const

export const UserRole = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  DRIVER: 'DRIVER',
  USER: 'USER'
} as const

export const MaintenanceType = {
  PREVENTIVE: 'PREVENTIVE',
  CORRECTIVE: 'CORRECTIVE',
  EMERGENCY: 'EMERGENCY',
  INSPECTION: 'INSPECTION'
} as const

export const FuelType = {
  GASOLINE: 'GASOLINE',
  DIESEL: 'DIESEL',
  GAS: 'GAS',
  ELECTRIC: 'ELECTRIC',
  HYBRID: 'HYBRID'
} as const
