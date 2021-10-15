  import { Component } from '@angular/core';
  import {PeriodicElement, ProfitModel} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profit: ProfitModel;
  dataTable : PeriodicElement[]
  getProfit(event: ProfitModel) {
    this.profit = event;
  }

    getDataTable($event: PeriodicElement[]) {
        this.dataTable = $event;
    }
}
