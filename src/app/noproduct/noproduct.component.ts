import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-noproduct',
  standalone: true,
  imports: [],
  templateUrl: './noproduct.component.html',
  styleUrl: './noproduct.component.css'
})
export class NoproductComponent {

  courseService = new MyserviceService()

  handleCourseClick(course : string){
    this.courseService.clickMe(course)
  }
}
