"use client"

import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  const { data: session } = useSession()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Sistema de Gestión de Flota
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">
              {session?.user?.name}
            </span>
            <Button
              variant="outline"
              onClick={() => signOut()}
              className="text-sm"
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
