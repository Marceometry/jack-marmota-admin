import { AudioLines, Cog, LayoutDashboard, ListMusic } from 'lucide-react'
import { Route } from 'next'

type RouteList<T extends string = string> = {
  [key in T]: Route
}

type DashboardRoutes = 'HOME' | 'SONGS' | 'SETLISTS' | 'EQUIPMENTS'

export const SIDEBAR_ROUTES: RouteList<DashboardRoutes> = {
  HOME: '/',
  SONGS: '/songs',
  SETLISTS: '/setlists',
  EQUIPMENTS: '/equipments',
}

type Routes = DashboardRoutes | 'LOGIN' | 'NEW_SETLIST'

export const ROUTES: RouteList<Routes> = {
  ...SIDEBAR_ROUTES,
  NEW_SETLIST: '/setlists/new',
  LOGIN: '/',
}

export const ROUTE_LABELS = {
  [ROUTES.HOME]: 'Dashboard',
  [ROUTES.SONGS]: 'Músicas',
  [ROUTES.SETLISTS]: 'Setlists',
  [ROUTES.NEW_SETLIST]: 'Nova setlist',
  [ROUTES.EQUIPMENTS]: 'Equipamentos',
}

export const ROUTE_ICONS = {
  [ROUTES.HOME]: LayoutDashboard,
  [ROUTES.SONGS]: AudioLines,
  [ROUTES.SETLISTS]: ListMusic,
  [ROUTES.EQUIPMENTS]: Cog,
}
