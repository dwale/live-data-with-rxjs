import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
