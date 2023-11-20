import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { routes } from '../../../app.routes'

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidemenu.component.html'
})
export class SidemenuComponent {
  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route.path !== '**' && route.path !== '' && !route.path?.includes(':'))
}
