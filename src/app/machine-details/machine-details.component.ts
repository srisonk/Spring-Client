import { Machine } from '../machine';
import { Component, OnInit, Input } from '@angular/core';
import { MachineService } from '../machine.service';
import { MachineListComponent } from '../machine-list/machine-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.css']
})
export class MachineDetailsComponent implements OnInit {
  id: number;
  machine: Machine[];

  constructor(private route: ActivatedRoute, private router: Router,
    private machineService: MachineService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.machineService.getMachine(this.id)
    .subscribe(data => {
      console.log(data)
      this.machine = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['machine']);
  }
}
