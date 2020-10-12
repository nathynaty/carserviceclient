import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-get-owner',
  templateUrl: './get-owner.component.html',
  styleUrls: ['./get-owner.component.css']
})
export class GetOwnerComponent implements OnInit {
  owners: Array<any>;

  constructor(private OwnerService: OwnerService) { }

  ngOnInit() {
    this.OwnerService.getAll().subscribe(data => {
      this.owners = data["_embedded"]["owners"];
    });

    
  }
}
