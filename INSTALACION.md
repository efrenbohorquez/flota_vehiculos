# Guía de Instalación - Sistema de Gestión de Flota Vehicular

## 🚨 PASOS CRÍTICOS DE INSTALACIÓN

### 1. Instalación de Dependencias

Ejecuta el siguiente comando en tu terminal desde la raíz del proyecto:

```bash
npm install
```

Si encuentras errores, intenta con:

```bash
npm install --legacy-peer-deps
```

### 2. Configurar Variables de Entorno

1. Copia el archivo de ejemplo:
   ```bash
   cp .env.example .env
   ```

2. Edita el archivo `.env` con tus configuraciones:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/flota_personeria"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="genera-una-clave-secreta-muy-larga-y-aleatoria"
   NODE_ENV="development"
   ```

### 3. Configurar PostgreSQL

#### Opción A: Local
1. Instala PostgreSQL en tu máquina
2. Crea una base de datos llamada `flota_personeria`
3. Actualiza la `DATABASE_URL` en el archivo `.env`

#### Opción B: Docker
```bash
docker run --name postgres-flota \
  -e POSTGRES_DB=flota_personeria \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  -d postgres:15-alpine
```

### 4. Configurar Prisma

```bash
# Generar el cliente de Prisma
npx prisma generate

# Aplicar el esquema a la base de datos
npx prisma db push

# Poblar con datos de prueba (opcional)
npm run db:seed
```

### 5. Ejecutar la Aplicación

```bash
# Modo desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:3000
```

### 6. Credenciales de Acceso

Una vez que la aplicación esté ejecutándose:

- **URL**: http://localhost:3000
- **Email**: admin@personeria.gov.co
- **Contraseña**: admin123

## 🔧 Solución de Problemas

### Error: Cannot find module
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de Prisma
```bash
npx prisma generate
npx prisma db push
```

### Error de TypeScript
```bash
npm run build
```

### Error de Puerto en Uso
```bash
# Cambiar puerto en package.json o usar:
npm run dev -- -p 3001
```

## 📝 Verificación de Instalación

1. ✅ Node.js 18+ instalado
2. ✅ PostgreSQL corriendo
3. ✅ Variables de entorno configuradas
4. ✅ Dependencias instaladas sin errores
5. ✅ Base de datos creada y migrada
6. ✅ Aplicación ejecutándose en http://localhost:3000
7. ✅ Login exitoso con credenciales de prueba

## 🚀 Próximos Pasos

Una vez que tengas la aplicación ejecutándose:

1. Explora el dashboard principal
2. Revisa la gestión de vehículos
3. Configura usuarios adicionales
4. Personaliza según tus necesidades

## 📞 Soporte

Si encuentras problemas durante la instalación:
1. Verifica que todos los requisitos estén cumplidos
2. Revisa los logs de error en la consola
3. Consulta la documentación de cada tecnología
4. Busca ayuda en la comunidad

¡Tu sistema de gestión de flota está listo para usar! 🎉
