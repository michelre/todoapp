import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-message',
  templateUrl: './footer-message.component.html',
  styleUrls: ['./footer-message.component.scss']
})
export class FooterMessageComponent implements OnInit {

  @Input() text: String;

  constructor() {
  }

  ngOnInit() {
  }

}
