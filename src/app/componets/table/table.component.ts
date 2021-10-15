import {Component, Input} from '@angular/core';
import {PeriodicElement} from "../../models";


const ELEMENT_DATA: any[] = [];
@Component({
    selector: 'app-table',
    styleUrls: ['table.component.css'],
    templateUrl: 'table.component.html',
})


export class TableComponent {
    @Input() set dataTable(value : PeriodicElement[]){
        this.dataSource = value;
    }
    displayedColumns: string[] = ['position', 'month', 'profit'];
    dataSource = ELEMENT_DATA;
}