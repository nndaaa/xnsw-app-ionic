
import { ModalModule } from './../module/modal/modal.module';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DeviceInfoComponent } from '../pages/device-info/device-info.component';
import { DeviceEditComponent } from 'src/app/pages/device-edit/device-edit.component';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modalController: ModalController) { }

  async deviceInfoModal(result) {
    const modalDeviceInfo = await this.modalController.create({
      component: DeviceInfoComponent,
      componentProps: {
        deviceInfo: result
      }
    });
    return await modalDeviceInfo.present();
  }
  async deviceEditModal(result) {
    const modalDeviceEdit = await this.modalController.create({
      component: DeviceEditComponent,
      componentProps: {
        deviceInfo: result
      }
    });
    return await modalDeviceEdit.present();
  }

  dismissModal = (name) => {
    this.modalController.dismiss(name);
  }
}
