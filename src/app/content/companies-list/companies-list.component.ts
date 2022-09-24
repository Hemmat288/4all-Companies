import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/_models/company.models';
import { CompanyService } from 'src/app/_service/company.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companies;
  companyArray!:Company[];
  page:number=1;
  totalLength:any;
  searchText!:string;

  search(){
    this.companyArray= this.companies.filter(value => value.name.match(this.searchText)|| value.owner.name.match(this.searchText)|| value.description.match(this.searchText))
    this.companies=this.companyArray;
  }

  constructor(public companyService:CompanyService) {
    this.companies=companyService.GetAllCompanies()
  }
  searchas(){

    this.companies=this.companyService.GetAllCompanies();


  }
  ngOnInit(): void {
    this.search();
    this.searchas();
  }

}
