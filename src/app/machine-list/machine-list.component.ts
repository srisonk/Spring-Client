import { MachineDetailsComponent } from '../machine-details/machine-details.component';
import { Observable } from "rxjs";
import { MachineService } from "../machine.service";
import { Machine } from "../machine";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {
  machines: Machine[];
  constructor (private machineService: MachineService,
    private router: Router) {
    
  }

  ngOnInit(): void {
      this.machineService.getMachines().subscribe((data: Machine[]) => {
        console.log(data);
        this.machines = data;
      });
  }

  deleteMachine(id: number) {
    this.machineService.deleteMachine(id)
    .subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      error => console.log(error));
  }

  machineDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateMachine(id: number) {
    this.router.navigate(['update', id]);
  }
  
  /*
  machines: Observable<Machine[]>;
  //machines: Machine[];

  constructor(private machineService: MachineService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
    //this.machines=[{
    //  "id":1,
    //  "manufacturer":"Nike",
    //  "details":"Casual Machine"
    //},
    //{
    //  "id":2,
    //  "manufacturer":"Nike2",
    //  "details":"Casual Machine2"
    //}];
  }

  reloadData() {
    this.machines = this.machineService.getMachineList();
  }

  deleteMachine(id: number) {
    this.machineService.deleteMachine(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  machineDetails(id: number) {
    this.router.navigate(['details', id]);
  }
  */
}
