import { MenuItem } from './../../../../node_modules/primeng/api/menuitem.d';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Undo', icon: 'pi pi-refresh' },
      { label: 'Redo', icon: 'pi pi-search' },
    ];
  }
}
