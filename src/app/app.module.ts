import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {TextFieldModule} from "@angular/cdk/text-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {ChartsModule} from "ng2-charts";
import {MatButtonModule} from "@angular/material/button";
import {ChartLineComponent, FormInputsComponent} from "./componets";
import {TableComponent} from "./componets/table/table.component";
import {CdkTableModule} from "@angular/cdk/table";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    FormInputsComponent,
    ChartLineComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatInputModule,
    TextFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    AppRoutingModule,
    ChartsModule,
    CdkTableModule,
      MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
