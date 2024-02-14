import { NgModule } from '@angular/core';

import { TimestampToDatePipe } from './timestampToDate.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TimestampToDatePipe],
  exports: [TimestampToDatePipe],
})
export class SharedModule {}
