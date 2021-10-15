import {Component, OnInit, Input} from '@angular/core';
import {ChartDataSets, ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {ProfitModel} from "../../models";


@Component({
    selector: 'line-chart',
    templateUrl: 'chart-line.component.html',
})
export class ChartLineComponent implements OnInit{
    @Input() set profit(value: ProfitModel) {
        if(value){
            this.lineChartData[0]?.data?.push(value.profit)
            this.lineChartLabels.push(value.month)
        }

    }
    public lineChartData: ChartDataSets[] = [
        { data: [65, 100,60,70,90, 50, 90,60,70], label: 'Series A' },
    ];
    public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

    public lineChartOptions: { responsive: boolean } = {
        responsive: true,
    }
    public lineChartColors: Color[] = [
        {
            borderColor: 'blue',
            backgroundColor: 'rgba(219,28,187,0.3)',
        },
    ];
    public lineChartLegend = true;
    public lineChartType = 'line' as ChartType;
    public lineChartPlugins = [];

    constructor() { }

    ngOnInit() {}
}
