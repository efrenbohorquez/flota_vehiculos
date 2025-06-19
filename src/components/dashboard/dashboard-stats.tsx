import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardStats() {
  // En un caso real, estos datos vendrían de la base de datos
  const stats = [
    {
      title: "Total Vehículos",
      value: "24",
      description: "2 nuevos este mes",
    },
    {
      title: "Vehículos Disponibles",
      value: "18",
      description: "75% de la flota",
    },
    {
      title: "En Mantenimiento",
      value: "4",
      description: "2 programados",
    },
    {
      title: "Conductores Activos",
      value: "15",
      description: "3 con licencia por vencer",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
