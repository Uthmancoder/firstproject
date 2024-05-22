import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { NoproductComponent } from '../noproduct/noproduct.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, NoproductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 
  selectedCourse : string = ""
  
   CoursesArray = [
    {
      id : 1,
      name : "Html Complete Course",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HVNHQmF6XqXS0xqpvfcJFY3cQIAQEB3XmJ_edOZdMQ&s",
      description : "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quasi obcaecati nihil corporis doloremque repellendus omnis perspiciatis? Explicabo, voluptate ullam nesciunt quas at delectus obcaecati expedita blanditiis labore, cupiditate dignissimos.",
      category : "premium"
    },
    {
      id : 2,
      name : "Css Complete Course",
      image : "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      description : "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quasi obcaecati nihil corporis doloremque repellendus omnis perspiciatis? Explicabo, voluptate ullam nesciunt quas at delectus obcaecati expedita blanditiis labore, cupiditate dignissimos.",
      category : "Free"
    },
    {
      id : 3,
      name : "Javascript Complete Course",
      image : "https://static.javatpoint.com/images/javascript/javascript_logo.png",
      description : "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quasi obcaecati nihil corporis doloremque repellendus omnis perspiciatis? Explicabo, voluptate ullam nesciunt quas at delectus obcaecati expedita blanditiis labore, cupiditate dignissimos.",
      category : "Free"
    },
    {
      id : 4,
      name : "Vue Complete Course",
      image : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      description : "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quasi obcaecati nihil corporis doloremque repellendus omnis perspiciatis? Explicabo, voluptate ullam nesciunt quas at delectus obcaecati expedita blanditiis labore, cupiditate dignissimos.",
      category : "premium"
    },
    {
      id : 5,
      name : "React Complete Course",
      image : "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
      description : "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quasi obcaecati nihil corporis doloremque repellendus omnis perspiciatis? Explicabo, voluptate ullam nesciunt quas at delectus obcaecati expedita blanditiis labore, cupiditate dignissimos.",
      category : "premium"
    },
    {
      id : 6,
      name : "Angular Complete Course",
      image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png",
      description : "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quasi obcaecati nihil corporis doloremque repellendus omnis perspiciatis? Explicabo, voluptate ullam nesciunt quas at delectus obcaecati expedita blanditiis labore, cupiditate dignissimos.",
      category : "premium"
    },
  ]
  searchText: string = ""

  AllCourses  = this.CoursesArray

  PremiumCourses = this.CoursesArray.filter((course)=> course.category === "premium")
  freeCourses = this.CoursesArray.filter((course)=> course.category === "Free")

  allCourses : number = this.AllCourses.length;
  premiumCourses : number = this.PremiumCourses.length;
  FreeCourses : number = this.freeCourses.length

  SelectCourse(course : string){
    console.log("Selected Course : ", course)
    if (course === "All Course") {
       this.CoursesArray = this.AllCourses
    }else if(course === "Premium Course"){
      this.CoursesArray = this.PremiumCourses
    }else if(course === "Free Course"){
      this.CoursesArray = this.freeCourses
    }
  }
  onInit(){
    this.selectedCourse = "All Course"
  }
  
  SearchInput(enteredText : any){
    //  console.log("Entered Text : ", enteredText)
     let  inptext = (<HTMLInputElement>enteredText.target).value
     this.searchText = inptext

     console.log("Received Text : ", this.searchText)

      let filteredCourses =  this.CoursesArray.filter((course)=> course.name.includes(this.searchText))
      console.log("Filtered Course : ", filteredCourses)
      if (filteredCourses) {
        this.CoursesArray = filteredCourses
      }else{
        this.CoursesArray = this.AllCourses
      }
     } 

      purchaseProduct = new MyserviceService()
    
      AddToCart(name : string){
        this.purchaseProduct.clickMe(name)
      }

  }


