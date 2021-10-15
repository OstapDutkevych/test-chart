import {Component, Input} from '@angular/core';
export interface PeriodicElement {
    position: number;
    month: number;
    profit: string;
}

const ELEMENT_DATA: any[] = [];
@Component({
    selector: 'app-table',
    styleUrls: ['table.component.css'],
    templateUrl: 'table.component.html',
})


export class TableComponent {
    @Input() set dataTable(value : any){
        this.dataSource = value;
    }
    displayedColumns: string[] = ['position', 'month', 'profit'];
    dataSource = ELEMENT_DATA;
}