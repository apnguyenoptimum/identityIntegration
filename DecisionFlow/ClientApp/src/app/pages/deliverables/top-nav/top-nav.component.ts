import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Output() selected: EventEmitter<any> = new EventEmitter();

  onClick(e: any){
    this.selected.emit(e)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
