import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'RandomQuoteApp';
  myimage :string ="assets/images/Quote1.jpg";

 

  url ='https://api.quotable.io/random';
  constructor (public http: HttpClient){}
    getdataz(){
      fetch(this.url)
    .then(function(data){
      
      return data.json();
     
    })
    .then(function(data){
      
      document.getElementById("randomans").innerHTML = data.content;
      // document.getElementById("authorz").innerHTML = data.author;
    })
    .catch(function err(){
      alert("Try Again ");
    })    
  }
  }
 
    
  
    


