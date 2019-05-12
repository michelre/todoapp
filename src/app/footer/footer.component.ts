import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {FooterMessageComponent} from "../footer-message/footer-message.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input() elems: Number[];
  @ContentChild(FooterMessageComponent) footerMessageComponent: FooterMessageComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('changes');
  }

  ngDoCheck(): void {
    //console.log('doCheck');
  }

  ngAfterContentInit() {
    this.footerMessageComponent.text = 'foobar';
  }

  ngAfterContentChecked() {
    //console.log('ngAfterContentChecked')
    this.footerMessageComponent.text = 'foobar';
  }

}
