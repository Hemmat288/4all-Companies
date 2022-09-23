import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { CompaniesListComponent } from './content/companies-list/companies-list.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { WelcomeHeaderComponent } from './content/welcome-header/welcome-header.component';
import { FormsModule } from '@angular/forms';
import { OurTeamComponent } from './content/our-team/our-team.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CompanyDetailsComponent,
    CompaniesListComponent,
    ContactUsComponent,
    WelcomeHeaderComponent,
    OurTeamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
