import { Component } from '@angular/core';

class PhotoController{

  private _currentIndex = 0;

  private _maxIndex = 0;

  private _urls: string[];

  constructor() {
    this._urls = [ "https://images.alphacoders.com/605/thumb-350-605592.png",
                    "https://images5.alphacoders.com/481/thumb-350-481903.png",
                    "https://images4.alphacoders.com/474/thumb-350-47438.png",
                    "https://images2.alphacoders.com/516/thumb-350-516664.jpg",
                    "https://images4.alphacoders.com/476/thumb-350-47698.png",
                    "https://images4.alphacoders.com/678/thumb-350-678317.jpg",
    ];
    this._maxIndex = this._urls.length -1;
  }

  public getNextUrl(direita: boolean): string{
    
    this._currentIndex = direita ? this._currentIndex + 1 : this._currentIndex - 1;

    if(direita && this._currentIndex >= this._maxIndex )
      this._currentIndex = 0;

    if((!direita) && this._currentIndex <= 0 )
      this._currentIndex = this._maxIndex;
      
    return this._urls[this._currentIndex];
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'FakePhotoScape';
  currentUrl: string = "https://images.alphacoders.com/605/thumb-350-605592.png";

  private _photo: PhotoController = new PhotoController();

  changePhotoRight(){
    this.currentUrl = this._photo.getNextUrl(true);
  }

  changePhotoLeft(){
    this.currentUrl = this._photo.getNextUrl(false);
  }

}
