import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function VehicleStatusChart() {
  // En un caso real, usaríamos una librería como Recharts
  const vehicleStatus = [
    { status: "Disponible", count: 18, color: "bg-green-500" },
    { status: "En Uso", count: 2, color: "bg-blue-500" },
    { status: "Mantenimiento", count: 4, color: "bg-yellow-500" },
    { status: "Fuera de Servicio", count: 0, color: "bg-red-500" },
  ]

  const total = vehicleStatus.reduce((sum, item) => sum + item.count, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estado de Vehículos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {vehicleStatus.map((item) => {
            const percentage = total > 0 ? (item.count / total) * 100 : 0
            
            return (
              <div key={item.status} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{item.status}</span>
                  <span>{item.count} vehículos</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-6 text-center">
          <div className="text-2xl font-bold">{total}</div>
          <div className="text-sm text-gray-500">Total de Vehículos</div>
        </div>
      </CardContent>
    </Card>
  )
}
