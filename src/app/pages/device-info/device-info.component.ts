import { ModalService } from './../../service/modal.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss'],
})
export class DeviceInfoComponent implements OnInit {
  @Input() deviceInfo: {};
  info: {};
  constructor(
    private navParams: NavParams,
    private modalService: ModalService
    ) { }

  ngOnInit() {
    this.info = this.navParams.get('deviceInfo');
  }
  dismissModal(value) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalService.dismissModal(value);
  }
  deviceEdit = () => {
    this.modalService.deviceEditModal(this.deviceInfo);
  }
}
