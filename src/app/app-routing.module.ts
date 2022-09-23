import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './content/companies-list/companies-list.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { OurTeamComponent } from './content/our-team/our-team.component';
import { HomeComponent } from './home/home/home.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactUsComponent },
  {path:'details',component:CompanyDetailsComponent},
  {path:'companies_list',component:CompaniesListComponent},
  {path:'ourTeam',component:OurTeamComponent},
  {path:'details/:id',component:CompanyDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
