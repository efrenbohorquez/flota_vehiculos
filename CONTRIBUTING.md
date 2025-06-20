# Contribuir al Sistema de Gestión de Flota Vehicular

¡Gracias por tu interés en contribuir al proyecto! Esta guía te ayudará a empezar.

## 🚀 Configuración del Entorno de Desarrollo

### Prerrequisitos
- Node.js ≥ 18.0.0
- Docker y Docker Compose
- Git
- Editor de código (recomendado: VS Code)

### Instalación Local
```bash
# Clonar el repositorio
git clone https://github.com/efrenbohorquez/flota_vehiculos.git
cd flota_vehiculos

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Levantar la base de datos
docker-compose up -d db

# Aplicar migraciones y poblar datos
npm run db:push
npm run db:seed

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Flujo de Trabajo

### 1. Fork y Branch
```bash
# Fork del repositorio en GitHub
# Clonar tu fork
git clone https://github.com/TU_USUARIO/flota_vehiculos.git

# Crear rama para tu feature
git checkout -b feature/nueva-funcionalidad
```

### 2. Desarrollo
```bash
# Trabajar en tu feature
# Hacer commits frecuentes con mensajes descriptivos
git commit -m "feat: agregar módulo de reportes"

# Mantener actualizada tu rama
git fetch upstream
git rebase upstream/master
```

### 3. Testing
```bash
# Ejecutar tests (cuando estén disponibles)
npm test

# Verificar linting
npm run lint

# Verificar build
npm run build
```

### 4. Pull Request
- Asegurar que tu código sigue las convenciones del proyecto
- Incluir tests para nuevas funcionalidades
- Actualizar documentación si es necesario
- Crear PR con descripción detallada

## 📋 Estándares de Código

### Convenciones de Naming
- **Componentes**: PascalCase (`VehicleCard`)
- **Archivos**: kebab-case (`vehicle-card.tsx`)
- **Variables**: camelCase (`vehicleData`)
- **Constantes**: UPPER_SNAKE_CASE (`API_ENDPOINTS`)

### Estructura de Commits
Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(scope): descripción

feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: formato, no afecta lógica
refactor: refactoring de código
test: agregar tests
chore: mantenimiento
```

### Estructura de Archivos
```
src/
├── app/              # Pages y API routes (App Router)
├── components/       # Componentes reutilizables
│   ├── ui/          # Componentes base
│   └── dashboard/   # Componentes específicos
├── lib/             # Utilidades y configuración
├── types/           # Definiciones TypeScript
└── hooks/           # Custom hooks
```

## 🎯 Áreas de Contribución

### 🔥 Funcionalidades Prioritarias
- [ ] Módulo de reportes avanzados
- [ ] Sistema de notificaciones
- [ ] API REST completa
- [ ] Dashboard de métricas en tiempo real
- [ ] Módulo de inventario de repuestos

### 🧪 Testing
- [ ] Tests unitarios para componentes
- [ ] Tests de integración para API
- [ ] Tests E2E con Playwright
- [ ] Coverage mínimo del 80%

### 📱 UI/UX
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)
- [ ] Accesibilidad (WCAG 2.1)
- [ ] Internacionalización (i18n)

### ⚡ Performance
- [ ] Optimización de imágenes
- [ ] Cache strategies
- [ ] Bundle optimization
- [ ] Database query optimization

### 🔐 Seguridad
- [ ] Rate limiting
- [ ] Input validation
- [ ] RBAC avanzado
- [ ] Audit logs

## 🐛 Reportar Issues

### Antes de Crear un Issue
1. Buscar issues existentes
2. Verificar que sea reproducible
3. Tener información del entorno

### Template de Bug Report
```markdown
**Descripción del Bug**
Descripción clara del problema.

**Pasos para Reproducir**
1. Ir a '...'
2. Hacer click en '...'
3. Scroll hasta '...'
4. Ver error

**Comportamiento Esperado**
Lo que esperabas que pasara.

**Screenshots**
Si aplica, agregar screenshots.

**Entorno:**
 - OS: [e.g. Windows 11]
 - Browser: [e.g. Chrome 90]
 - Node Version: [e.g. 18.0.0]
```

## 📚 Recursos

### Documentación
- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org)

### Herramientas de Desarrollo
- [VS Code Extensions](./.vscode/extensions.json)
- [Prisma Studio](http://localhost:5555)
- [GitHub Copilot](https://copilot.github.com/)

## 💬 Comunidad

### Canales de Comunicación
- **Issues**: Para bugs y feature requests
- **Discussions**: Para preguntas y ideas
- **Email**: efrenbohorquez@personeria.gov.co

### Código de Conducta
- Ser respetuoso y profesional
- Mantener discusiones constructivas
- Ayudar a otros desarrolladores
- Seguir las mejores prácticas

## 🏆 Reconocimiento

Los contribuidores serán reconocidos en:
- README del proyecto
- Página de créditos
- Release notes
- LinkedIn posts (con permiso)

---

¡Gracias por contribuir al Sistema de Gestión de Flota Vehicular! 🚗💨
