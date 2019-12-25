import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() public url: string = "";
  @Input() public alt: string = "";
  
  @Input() public title: string = "";
  @Input() public description: string = "";

  constructor() { }

  ngOnInit() {
  }

}
