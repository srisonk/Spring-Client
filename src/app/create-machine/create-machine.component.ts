import { MachineService } from '../machine.service';
import { Machine } from '../machine';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-machine',
  templateUrl: './create-machine.component.html',
  styleUrls: ['./create-machine.component.css']
})
export class CreateMachineComponent implements OnInit {

  machine: Machine = new Machine();
  submitted = false;

  constructor(private machineService: MachineService,
    private router: Router) { }

  ngOnInit() {
  }

  newMachine(): void {
    this.submitted = false;
    this.machine = new Machine();
  }

  save() {
    this.machineService
    .createMachine(this.machine).subscribe(data => {
      console.log(data)
      this.machine = new Machine();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/machine']);
  }

}
