import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'gerardo'
  public nameUpper: string = 'GERARDO'
  public fullName: string = 'GerarDO ZentenO'
  public customDate: Date = new Date();
}
