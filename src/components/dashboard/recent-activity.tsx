import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  // En un caso real, estos datos vendrían de la base de datos
  const activities = [
    {
      id: 1,
      type: "maintenance",
      description: "Mantenimiento preventivo - ABC123",
      time: "Hace 2 horas",
      status: "completed"
    },
    {
      id: 2,
      type: "assignment",
      description: "Vehículo asignado a Juan Pérez - DEF456",
      time: "Hace 4 horas",
      status: "active"
    },
    {
      id: 3,
      type: "fuel",
      description: "Recarga de combustible - GHI789",
      time: "Hace 6 horas",
      status: "completed"
    },
    {
      id: 4,
      type: "alert",
      description: "Alerta: Revisión técnica próxima a vencer - JKL012",
      time: "Hace 1 día",
      status: "warning"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600"
      case "active":
        return "text-blue-600"
      case "warning":
        return "text-yellow-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(activity.status)}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
