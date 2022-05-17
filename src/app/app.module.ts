import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnavbarModule } from './mainnavbar/mainnavbar.module';
import { HomebannerComponent } from './homebanner/homebanner.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BookserviceComponent } from './bookservice/bookservice.component';
import { SubscriptionplanComponent } from './subscriptionplan/subscriptionplan.component';
import { CarepartnerComponent } from './carepartner/carepartner.component';
import { ServicepartnerComponent } from './servicepartner/servicepartner.component';
import { TestowlComponent } from './testowl/testowl.component';
import { PopularnewsComponent } from './popularnews/popularnews.component';
import { GooglereviewsComponent } from './googlereviews/googlereviews.component';
import { FooterComponent } from './footer/footer.component';
import { FooterrewardsComponent } from './footerrewards/footerrewards.component';
import { FooterdescriptionComponent } from './footerdescription/footerdescription.component';
import { FooterlinksComponent } from './footerlinks/footerlinks.component';
import { FootercopyrightsComponent } from './footercopyrights/footercopyrights.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomebannerComponent,
    LandingpageComponent,
    BookserviceComponent,
    SubscriptionplanComponent,
    CarepartnerComponent,
    ServicepartnerComponent,
    TestowlComponent,
    PopularnewsComponent,
    GooglereviewsComponent,
    FooterComponent,
    FooterrewardsComponent,
    FooterdescriptionComponent,
    FooterlinksComponent,
    FootercopyrightsComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainnavbarModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
