import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MaintenanceCalendar() {
  // En un caso real, estos datos vendrían de la base de datos
  const upcomingMaintenance = [
    {
      id: 1,
      vehicle: "ABC-123",
      type: "Mantenimiento Preventivo",
      date: "2025-06-20",
      priority: "media"
    },
    {
      id: 2,
      vehicle: "DEF-456",
      type: "Revisión Técnica",
      date: "2025-06-22",
      priority: "alta"
    },
    {
      id: 3,
      vehicle: "GHI-789",
      type: "Cambio de Aceite",
      date: "2025-06-25",
      priority: "baja"
    },
    {
      id: 4,
      vehicle: "JKL-012",
      type: "Inspección SOAT",
      date: "2025-06-28",
      priority: "alta"
    }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta":
        return "bg-red-100 text-red-800"
      case "media":
        return "bg-yellow-100 text-yellow-800"
      case "baja":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximos Mantenimientos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingMaintenance.map((maintenance) => (
            <div key={maintenance.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{maintenance.vehicle}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(maintenance.priority)}`}>
                    {maintenance.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {maintenance.type}
                </p>
              </div>
              <div className="text-sm text-gray-500">
                {formatDate(maintenance.date)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
