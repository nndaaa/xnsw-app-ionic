import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DeviceEditComponent } from 'src/app/pages/device-edit/device-edit.component';
import { DeviceInfoComponent } from 'src/app/pages/device-info/device-info.component';

@NgModule({
  declarations: [DeviceInfoComponent, DeviceEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule

  ],
  providers: [
  ],
  entryComponents: [
    DeviceInfoComponent,
    DeviceEditComponent
  ]
})
export class ModalModule { }
