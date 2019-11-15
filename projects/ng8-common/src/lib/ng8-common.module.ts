import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Ng8MaterialModule } from '@ng8/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    Ng8MaterialModule
  ],
  exports: [HeaderComponent]
})
export class Ng8CommonModule { }
