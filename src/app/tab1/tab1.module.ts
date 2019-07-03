
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ZBar} from '@ionic-native/zbar/ngx';
import { ModalModule } from './../module/modal/modal.module';
@NgModule({
  imports: [
    ModalModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab1Page },
    ])
  ],
  providers: [
    ZBar,
  ],
  declarations: [Tab1Page],
  entryComponents: []
})
export class Tab1PageModule {}
