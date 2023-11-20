import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: async () => await import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: async () => await import('./dashboard/pages/change-detection/change-detection.component')
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: async () => await import('./dashboard/pages/control-flow/control-flow.component')
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: async () => await import('./dashboard/pages/defer-options/defer-options.component')
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: async () => await import('./dashboard/pages/defer-views/defer-views.component')
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: async () => await import('./dashboard/pages/user/user.component')
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: async () => await import('./dashboard/pages/users/users.component')
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: async () => await import('./dashboard/pages/view-transition/view-transition.component')
      },
      {
        path: '', redirectTo: 'control-flow', pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dashboard'

  }
]
