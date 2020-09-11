import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SlideDataService } from './slide-data.service';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderButtonComponent } from './carousel/slider-button/slider-button.component';
import { SlideComponent } from './carousel/slide/slide.component';
import { SliderHeaderComponent } from './carousel/slider-header/slider-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SliderButtonComponent,
    SlideComponent,
    SliderHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SlideDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
