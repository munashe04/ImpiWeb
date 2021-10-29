import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentServiceService } from '../agent-service.service';
import { Agent } from '../agent/agent.model';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})
export class AgentDetailsComponent implements OnInit {
alert : boolean = false;
alertDecline : boolean = false;
  @Input() agent: Agent;
 
 displayedColumns: string[] = ['agentName', 'agentNumber', 'refMobileNumber', 'status'];
  
  isImagesLoading: boolean;
  isImage1Loaded: boolean;
  isImage2Loaded: boolean;
  id : string;

  constructor(private route: ActivatedRoute, private router: Router,private agentService: AgentServiceService ) { }

  ngOnInit(): void {
    // @ts-ignore
    // console.log(this.route.snapshot.paramMap.get('order'));
    console.log( this.route.snapshot.fragment);
    this.agent = Object.assign(this.route.snapshot.fragment, this.agent);
   
    this.isImagesLoading = true;
    console.log('*******order casting with items****' + this.agent);
    console.log(this.agent);
  }

  updateImageLoaded1() {
    console.log('*******updateImageLoaded1****');
    this.isImage1Loaded = true;
    if (this.isImage1Loaded && this.isImage2Loaded){
      this.isImagesLoading = false;
    }
  }
  // tslint:disable-next-line:typedef
  updateImageLoaded2() {
    console.log('*******updateImageLoaded2****');
    this.isImage2Loaded = true;
    if (this.isImage1Loaded && this.isImage2Loaded){
      this.isImagesLoading = false;
    }
  }

  // tslint:disable-next-line:typedef
  backToAgents() {
    console.log('*******about go back to agents****');
    // @ts-ignore
    this.router.navigate(['/agents'] );
  }
  deleteAgent(id){
    this.agentService.deleteAgent(id).subscribe();
    this.alertDecline = true;

  }
  approveAgent(id){
    this.agentService.approveAgent(id).subscribe();
    this.alert = true;
  }
  backToAgent() {
    console.log('*******about go back to agents****');
    // @ts-ignore
    this.router.navigate(['/agents'] );
  }



}
