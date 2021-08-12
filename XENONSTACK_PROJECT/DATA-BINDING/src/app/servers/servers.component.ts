import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

allowNewServers = true;
serverCreationStatus = 'server was not created ';
serverName = " ";

constructor()
{

setTimeout(() => 
{

  this.allowNewServers = false;


}, 2000);

}

onServerCreation()
{

  this.serverCreationStatus = 'server was created and server name is '+this.serverName;

}

}
