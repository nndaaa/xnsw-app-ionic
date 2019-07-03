import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
import { ModalService } from './../service/modal.service';
import { ModalController, NavParams, NavController  } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DeviceService } from './../service/device.service';
import { DeviceInfoComponent } from '../pages/device-info/device-info.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  options: ZBarOptions = {
    text_title: '设备码扫描',
    text_instructions: '请以红线对齐条形码或二维码中部',
    flash: 'off',
    drawSight: true
  };
  constructor(
    private zbar: ZBar,
    private modalController: ModalController,
    private toastController: ToastController,
    private deviceService: DeviceService,
    private router: Router,
    public modalService: ModalService,
    ) { }

  scanZbar = () => {
    this.zbar.scan(this.options)
      .then(result => {
        this.presentToast(result);
        this.deviceService.deviceFind({qrCode: result}).subscribe(res => {
          if (res.data[0].qrCode !== undefined) {
            this.presentModal(res.data[0]);
          } else {
            this.presentToast('设备未找到!');
          }
        });
      })
      .catch(error => {
        this.presentToast(error); // Error message
      });
  }

  scanQrcode = () => {
    // this.navCtrl.navigateForward('/tabs/tab1/deviceedit');
        this.deviceService.deviceFind({qrCode: 'M702QEGBSA07010615'}).subscribe(res => {
          if (res.data[0].qrCode !== undefined) {
            console.log(res.data[0]);
            this.modalService.deviceInfoModal(res.data[0]);

          } else {
            this.presentToast('设备未找到!');
          }
        });
  }


  async presentModal(result) {
    this.presentToast('扫描成功!');
    const modal = await this.modalController.create({
      component: DeviceInfoComponent,
      componentProps: {
        deviceInfo: result
      }
    });
    return await modal.present();
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1200
    });
    toast.present();
  }
}
