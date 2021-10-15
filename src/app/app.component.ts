  import { Component } from '@angular/core';
  import {ProfitModel} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profit: ProfitModel;
  dataTable : any
  getProfit(event: ProfitModel) {
    this.profit = event;
  }

    getDataTable($event: any[]) {
        this.dataTable = $event;
    }
}
