import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  public show:boolean = true;
  public show2:boolean = false;
  public buttonName:any = 'Front End Projects';

  ngOnInit () {

  }

  toggle(){
    this.show = !this.show;

    this.show2 = !this.show2;

    
  if(this.show)

  this.buttonName = 'Backend Projects';

  else this.buttonName = 'Front End Projects';


  if(this.show2)

  this.buttonName = 'Backend Projects';

  else this.buttonName = 'Front End Projects';

  }

}
