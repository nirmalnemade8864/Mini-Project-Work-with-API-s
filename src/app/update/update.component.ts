import { Component, OnInit } from '@angular/core';
import {RestServiceService } from '../rest-service.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private rest:RestServiceService) { }

  ngOnInit(): void {
  }

}
