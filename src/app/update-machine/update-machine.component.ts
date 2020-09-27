import { Component, OnInit } from '@angular/core';
import { Machine } from '../machine';
import { ActivatedRoute, Router } from '@angular/router';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-update-machine',
  templateUrl: './update-machine.component.html',
  styleUrls: ['./update-machine.component.css']
})
export class UpdateMachineComponent implements OnInit {

  id: number;
  //machine: Machine = new Machine();
  machine: Machine[];

  constructor(private route: ActivatedRoute, private router: Router,
    private machineService: MachineService) { }

  ngOnInit() {
    //this.machine = new Machine();

    this.id = this.route.snapshot.params['id'];

    this.machineService.getMachine(this.id)
    .subscribe((data) => {
      this.machine = data;
      console.log(data);
      //this.machine = data[this.machine.id,this.machine.manufacturer,this.machine.details];
      
    }, error => console.log(error));
  }

  updateMachine() {
    this.machineService.updateMachine(this.id, this.machine)
    .subscribe(data => {
      console.log(data);
      //this.machine = new Machine();
      this.machine = data;
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateMachine();
  }

  gotoList() {
    this.router.navigate(['/machine']);
  }

}
