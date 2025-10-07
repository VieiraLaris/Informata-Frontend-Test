import { Component, inject } from '@angular/core';
import { TableService } from '../table-service';

@Component({
  selector: 'app-table-component',
  standalone: false,
  templateUrl: './table-component.html',
  styleUrl: './table-component.css'
})
export class TableComponent {

  public tableService = inject(TableService);
  public games = this.tableService.product;

  ngOnInit(){
    console.log(this.games());
  }

}
