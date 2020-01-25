import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbCheckboxModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { BkLineChartModule } from '@uibakery/kit';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbCheckboxModule,
    NbButtonModule,
    NbIconModule,
    BkLineChartModule
  ],
  exports: [NbCardModule, NbCheckboxModule, NbButtonModule, NbIconModule, BkLineChartModule]
})
export class SharedModule { }
