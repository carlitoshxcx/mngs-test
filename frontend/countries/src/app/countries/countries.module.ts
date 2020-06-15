import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { TableComponent } from './table/table.component';
import { AbbreviationComponent } from './abbreviation/abbreviation.component';



@NgModule({
  declarations: [EditComponent, TableComponent, AbbreviationComponent],
  imports: [
    CommonModule
  ]
})
export class CountriesModule { }
