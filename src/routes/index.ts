import { AudioLines, Cog, LayoutDashboard } from 'lucide-react'
import { Route } from 'next'

type RouteList<T extends string> = {
  [key in T]: Route
}

type DashboardRoutes = 'HOME' | 'SONGS' | 'EQUIPMENTS'

export const DASHBOARD_ROUTES: RouteList<DashboardRoutes> = {
  HOME: '/',
  SONGS: '/songs',
  EQUIPMENTS: '/equipments',
}

export const DASHBOARD_ROUTE_LABELS = {
  [DASHBOARD_ROUTES.HOME]: 'Dashboard',
  [DASHBOARD_ROUTES.SONGS]: 'Músicas',
  [DASHBOARD_ROUTES.EQUIPMENTS]: 'Equipamentos',
}

export const DASHBOARD_ROUTE_ICONS = {
  [DASHBOARD_ROUTES.HOME]: LayoutDashboard,
  [DASHBOARD_ROUTES.SONGS]: AudioLines,
  [DASHBOARD_ROUTES.EQUIPMENTS]: Cog,
}

type Routes = DashboardRoutes | 'LOGIN'

export const ROUTES: RouteList<Routes> = {
  ...DASHBOARD_ROUTES,
  LOGIN: '/',
}
