import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando la siembra de datos...')

  // Crear usuarios de prueba
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@personeria.gov.co' },
    update: {},
    create: {
      email: 'admin@personeria.gov.co',
      name: 'Administrador del Sistema',
      role: 'ADMIN',
      active: true,
    },
  })

  const managerUser = await prisma.user.upsert({
    where: { email: 'manager@personeria.gov.co' },
    update: {},
    create: {
      email: 'manager@personeria.gov.co',
      name: 'Gestor de Flota',
      role: 'MANAGER',
      active: true,
    },
  })

  // Crear conductores de prueba
  const driver1 = await prisma.driver.upsert({
    where: { identification: '12345678' },
    update: {},
    create: {
      identification: '12345678',
      name: 'Juan Carlos',
      lastName: 'Pérez García',
      licenseNumber: 'B1-12345678',
      licenseType: 'B1',
      licenseExpiry: new Date('2025-12-31'),
      phone: '+57 300 123 4567',
      email: 'juan.perez@personeria.gov.co',
      address: 'Calle 123 #45-67, Bogotá',
      emergencyContact: 'María Pérez',
      emergencyPhone: '+57 300 765 4321',
    },
  })

  const driver2 = await prisma.driver.upsert({
    where: { identification: '87654321' },
    update: {},
    create: {
      identification: '87654321',
      name: 'Ana María',
      lastName: 'Rodríguez López',
      licenseNumber: 'B2-87654321',
      licenseType: 'B2',
      licenseExpiry: new Date('2026-06-30'),
      phone: '+57 301 234 5678',
      email: 'ana.rodriguez@personeria.gov.co',
      address: 'Carrera 89 #12-34, Bogotá',
      emergencyContact: 'Carlos Rodríguez',
      emergencyPhone: '+57 302 567 8901',
    },
  })

  // Crear vehículos de prueba
  const vehicle1 = await prisma.vehicle.upsert({
    where: { plate: 'ABC-123' },
    update: {},
    create: {
      plate: 'ABC-123',
      brand: 'Toyota',
      model: 'Hilux',
      year: 2022,
      color: 'Blanco',
      chassisNumber: '12345678901234567',
      engineNumber: 'ENG123456789',
      fuelType: 'DIESEL',
      capacity: 5,
      mileage: 15000,
      status: 'AVAILABLE',
      acquisitionDate: new Date('2022-01-15'),
      lastMaintenanceDate: new Date('2024-12-01'),
      nextMaintenanceDate: new Date('2025-06-01'),
      insuranceExpiry: new Date('2025-12-31'),
      soatExpiry: new Date('2025-08-15'),
      technicalReviewExpiry: new Date('2025-10-30'),
      observations: 'Vehículo en excelente estado',
      createdById: adminUser.id,
    },
  })

  const vehicle2 = await prisma.vehicle.upsert({
    where: { plate: 'DEF-456' },
    update: {},
    create: {
      plate: 'DEF-456',
      brand: 'Chevrolet',
      model: 'Spark GT',
      year: 2021,
      color: 'Azul',
      chassisNumber: '98765432109876543',
      engineNumber: 'ENG987654321',
      fuelType: 'GASOLINE',
      capacity: 4,
      mileage: 28000,
      status: 'IN_USE',
      acquisitionDate: new Date('2021-03-20'),
      lastMaintenanceDate: new Date('2024-11-15'),
      nextMaintenanceDate: new Date('2025-05-15'),
      insuranceExpiry: new Date('2025-11-30'),
      soatExpiry: new Date('2025-07-20'),
      technicalReviewExpiry: new Date('2025-09-15'),
      observations: 'Vehículo asignado para trabajos administrativos',
      createdById: adminUser.id,
    },
  })

  // Crear asignaciones de vehículos
  await prisma.vehicleAssignment.create({
    data: {
      vehicleId: vehicle2.id,
      driverId: driver1.id,
      startDate: new Date('2024-12-01'),
      purpose: 'Comisiones administrativas',
      observations: 'Asignación temporal por 3 meses',
      status: 'ACTIVE',
    },
  })

  // Crear registros de mantenimiento
  await prisma.maintenanceReport.create({
    data: {
      vehicleId: vehicle1.id,
      type: 'PREVENTIVE',
      description: 'Cambio de aceite y filtros',
      date: new Date('2024-12-01'),
      mileage: 15000,
      cost: 250000,
      supplier: 'Taller Automotriz Central',
      invoice: 'FAC-2024-001',
      nextDate: new Date('2025-06-01'),
      observations: 'Mantenimiento realizado según cronograma',
      reportedById: managerUser.id,
      status: 'COMPLETED',
    },
  })
  // Crear registros de combustible
  await prisma.fuelRecord.create({
    data: {
      vehicleId: vehicle1.id,
      date: new Date('2024-12-15'),
      mileage: 15200,
      liters: 50.5,
      pricePerLiter: 12500,
      totalCost: 631250,
      station: 'Estación de Servicio Terpel - Calle 26',
      observations: 'Tanque lleno',
      recordedById: adminUser.id,
    },
  })
  // Crear registros de viajes
  await prisma.tripRecord.create({
    data: {
      vehicleId: vehicle2.id,
      driverId: driver1.id,
      startDate: new Date('2024-12-16T08:00:00'),
      endDate: new Date('2024-12-16T17:30:00'),
      origin: 'Sede Personería - Carrera 9 #51-33',
      destination: 'Alcaldía Local de Suba',
      purpose: 'Reunión de coordinación interinstitucional',
      startMileage: 28000,
      endMileage: 28045,
      distance: 45,
      observations: 'Viaje sin novedades',
      status: 'COMPLETED',
    },
  })

  console.log('✅ Datos de prueba creados exitosamente')
  console.log('📊 Resumen:')
  console.log(`   • Usuarios: 2`)
  console.log(`   • Conductores: 2`)
  console.log(`   • Vehículos: 2`)
  console.log(`   • Asignaciones: 1`)
  console.log(`   • Mantenimientos: 1`)
  console.log(`   • Registros de combustible: 1`)
  console.log(`   • Registros de viajes: 1`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error durante la siembra:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
