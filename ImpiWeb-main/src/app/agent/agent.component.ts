import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentServiceService } from '../agent-service.service';
import { Agent } from './agent.model';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  displayedColumns: string[] = ['agentName', 'agentNumber', 'refMobileNumber', 'status'];
  dataSource: Agent[];
  searchTerm: string;
  isLoadingOrders: boolean;

  constructor(private agentService: AgentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.isLoadingOrders = true;
    this.agentService.getAllAgents().subscribe((agents: Agent[]) => {
      console.log(agents);
      this.dataSource = agents;
    });
    this.isLoadingOrders = false;
  }
  getAllAgents() {
    this.isLoadingOrders = true;
    this.agentService.getAllAgents().subscribe((agents: Agent[]) => {
      console.log(agents);
      this.dataSource = agents;
    });
    this.isLoadingOrders = false;
  }
  
  getPendingAgents() {
    this.isLoadingOrders = true;
    this.agentService.getPendingAgents().subscribe((agents: Agent[]) => {
      console.log(agents);
      this.dataSource = agents;
    });
    this.isLoadingOrders = false;
  }

  // tslint:disable-next-line:typedef
  onSelect(agent: any) {
    console.log(agent);
    // @ts-ignore
    this.router.navigate(['/agent-details'], { fragment: agent } );
    console.log('*******about to route****');
  }
  
}


