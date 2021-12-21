import { Component, OnInit } from '@angular/core';
import { LPollingService } from '../l-polling.service';

@Component({
  selector: 'app-upload-progress',
  templateUrl: './upload-progress.component.html',
  styleUrls: ['./upload-progress.component.scss'],
})
export class UploadProgressComponent implements OnInit {
  status = '';

  constructor(private lPollingService: LPollingService) {}

  ngOnInit(): void {}

  checkStatus() {
    this.lPollingService.checkStatus().subscribe((res) => {
      console.log(res);
    });
  }
}
