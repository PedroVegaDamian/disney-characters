import { NgModule } from '@angular/core';

import { AppRoutesModule } from '../app.routes.module';
import { TheNavbarComponent } from './components/the-navbar/the-navbar.component';

@NgModule({
  imports: [AppRoutesModule],
  declarations: [TheNavbarComponent],
  exports: [TheNavbarComponent],
})
export class SharedModule {}
