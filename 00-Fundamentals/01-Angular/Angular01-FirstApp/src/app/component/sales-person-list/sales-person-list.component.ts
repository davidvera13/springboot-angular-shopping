import { Component, OnInit } from '@angular/core';
import {SalesPersons} from "../../objects/sales-persons";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPersons[] = [
    new SalesPersons("David", "Vera", "david.vera@9online.fr", 450000),
    new SalesPersons("Fox", "Mulder", "fm@9online.fr", 125000),
    new SalesPersons("Dana", "Scully", "ds@9online.fr", 96500),
    new SalesPersons("Walter", "Skinner", "ws@9online.fr", 25000000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
