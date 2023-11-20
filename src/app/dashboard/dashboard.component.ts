import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { SidemenuComponent } from '../shared/heavy-loaders/sidemenu/sidemenu.component'

@Component({
  standalone: true,
  imports: [RouterOutlet, SidemenuComponent],
  templateUrl: './dashboard.component.html'
})
export default class DashboardComponent {

}
