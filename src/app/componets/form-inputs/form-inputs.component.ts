import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import * as moment from "moment";
import {ProfitModel} from "../../models";

@Component({
  selector: 'app-form-inputs',
  templateUrl: 'form-inputs.component.html',
  styleUrls: ['form-inputs.component.css']
})
export class FormInputsComponent implements OnInit {

  @Output() profit: EventEmitter<ProfitModel> = new EventEmitter<ProfitModel>();
  @Output() dataTable: EventEmitter<any[]> = new EventEmitter<any[]>();
  elemsTable:any[] =[]
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    exitData: ['', Validators.required],
    entryData: ['', Validators.required],
    entryPrice: ['', Validators.required],
    exitPrice: ['', Validators.required],
    profit: ['0.0'],
  });

  ngOnInit() {}

  sendProfit(): void{
    let entryPrice = this.getValueFromGroup('entryPrice')?.value
    let exitPrice = this.getValueFromGroup('exitPrice')?.value

    this.getValueFromGroup('profit')?.patchValue(entryPrice - exitPrice)

    const emitObj:ProfitModel = {
      month: this.getValueFromGroup('entryData')?.value.toLocaleString("en-US", { month: "long" }),
      profit: this.getValueFromGroup('profit')?.value,
    }

    const elemTable = {
      month: this.getValueFromGroup('entryData')?.value,
      profit:this.getValueFromGroup('profit')?.value,
      position: this.elemsTable.length + 1
    }
    console.log(this.elemsTable.length + 1)
    this.elemsTable = [...this.elemsTable, elemTable]
    this.dataTable.emit(this.elemsTable);
    this.profit.emit(emitObj)
    this.profileForm.reset()
  }
  getErrorMessage(pickerInput: string): string {
    if (!pickerInput || pickerInput === '' ) {
      return 'Please choose a date.';
    }
    return this.isMyDateFormat(pickerInput);
  }
  isMyDateFormat(date: string): string {
    if (date.length !== 10) {
      return 'Invalid input: Please input a string in the form of mm-dd-yy';
    } else {
      const da = date.split('-');
      if (da.length !== 3 || da[0].length !== 4 || da[1].length !== 2 || da[2].length !== 2) {
        return 'Invalid input: Please input a string in the form of mm-dd-yy';
      } else if (moment(date).isValid()) {
        return 'Invalid date: Please input a date no later than today';
      } else if (!moment(date).isValid()) {
        return 'Invalid date: Please input a date with a valid month and date.';
      }
    }
    return 'Unknown error.';
  }

  getValueFromGroup(control:string){
    return this.profileForm.get(control);
  }
}