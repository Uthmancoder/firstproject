import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
   title : string = "Home Page"
   image : string = "https://edu.sqi.ng/wp-content/uploads/2023/04/sqi-graduate.jpg"
   searchText : string = ""

   searchInput(enteredText : any){
  //  console.log("Entered Text : ", enteredText)
   let  inptext = (<HTMLInputElement>enteredText.target).value
   this.searchText = inptext
   }

   productArray = [
    {
      name : "Product 1",
      price : 2000,
      image : "https://edu.sqi.ng/wp-content/uploads/2023/05/software-developer.jpg",
      category : "clothing",
      isAvailable : false
    },
    {
      name : "Product 2",
      price : 3000,
      image : "https://edu.sqi.ng/wp-content/uploads/2023/05/hardware-engineer.jpg",
      category : "Recreation",
      isAvailable : true
    },
    {
      name : "Product 3",
      price : 4000,
      image : "https://edu.sqi.ng/wp-content/uploads/2024/01/commisioner-for-education-400x250.jpg",
      category : "Sport",
      isAvailable : false
    },
    {
      name : "Product 4",
      price : 4000,
      image : "https://edu.sqi.ng/wp-content/uploads/2024/01/commisioner-for-education-400x250.jpg",
      category : "Foods",
      isAvailable : true
    }
   ]
}
