import { FuncSeviceService } from './../../service/func-sevice.service';
import { DeviceService } from './../../service/device.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss'],
})
export class DeviceEditComponent implements OnInit {
  @Input() deviceInfo: {};
  info: any = {};
  deviceId = '';
  constructor(
    public navParams: NavParams,
    public modalController: ModalController,
    public deviceService: DeviceService,
    public funcSevice: FuncSeviceService
    ) { }

  ngOnInit() {
    this.info = this.navParams.get('deviceInfo');
    this.deviceId = this.info._id;
  }
  dismissModal = (value) => {
    this.modalController.dismiss();
  }
  deviceEdit = () => {
    delete this.info._id;
    const payload = {id: this.deviceId, value: this.info };
    this.deviceService.deviceEdit(payload).subscribe(res => {
      this.funcSevice.presentToast('修改成功！');
      this.modalController.dismiss();
    });
  }
}
