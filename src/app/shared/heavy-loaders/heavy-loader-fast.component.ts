import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello World!</h1>
  `
})
export class HeavyLoaderFastComponent {
  constructor () {}
}
