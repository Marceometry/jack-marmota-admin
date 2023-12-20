import { AudioLines, Cog, LayoutDashboard, ListMusic } from 'lucide-react'
import { Route } from 'next'

type RouteList<T extends string = string> = {
  [key in T]: Route
}

type DashboardRoutes = 'HOME' | 'SONGS' | 'SONG_LISTS' | 'EQUIPMENTS'

export const SIDEBAR_ROUTES: RouteList<DashboardRoutes> = {
  HOME: '/',
  SONGS: '/songs',
  SONG_LISTS: '/lists',
  EQUIPMENTS: '/equipments',
}

type Routes = DashboardRoutes | 'LOGIN' | 'NEW_SONG_LIST'

export const ROUTES: RouteList<Routes> = {
  ...SIDEBAR_ROUTES,
  NEW_SONG_LIST: '/lists/new',
  LOGIN: '/',
}

export const ROUTE_LABELS = {
  [ROUTES.HOME]: 'Dashboard',
  [ROUTES.SONGS]: 'Músicas',
  [ROUTES.SONG_LISTS]: 'Listas',
  [ROUTES.NEW_SONG_LIST]: 'Nova lista',
  [ROUTES.EQUIPMENTS]: 'Equipamentos',
}

export const ROUTE_ICONS = {
  [ROUTES.HOME]: LayoutDashboard,
  [ROUTES.SONGS]: AudioLines,
  [ROUTES.SONG_LISTS]: ListMusic,
  [ROUTES.EQUIPMENTS]: Cog,
}
