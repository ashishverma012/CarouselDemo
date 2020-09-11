import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideDataService {
  getSlides(): object{
    return  [
      { url: 'assets/images/mobile-internet.png', text: 'Mobile internet', link: 'https://www.google.com'},
      { url: 'assets/images/home-internet.png', text: 'Home internet', link: ''},
      { url: 'assets/images/get-a-device.jpg', text: 'Get a device', link: ''},
      { url: 'assets/images/phone-line.jpg', text: 'Add a phone-line', link: ''},
      { url: 'assets/images/upgrade.jpg', text: 'Upgrade', link: ''}
    ];
  }
}
