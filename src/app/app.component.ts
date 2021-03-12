import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  Email: string=null;
  Password: string=null;
  First_Name: string=null;
  Last_Name: string=null;
  Phone_Number: string=null;
  Address: string=null;
  Aadhar_Card: string=null;
  Gender: string=null;
  Date_of_Birth: string=null;
  Submit()
  {
    alert("Hello World");
    alert("this.Password");
    alert("this.Email");
    alert("this.First_Name");
    alert("this.Last_Name");
    alert("this.Phone_Number");
    alert("this.Address");
    alert("this.Aadhar_Card");
    alert("this.Gender");
    alert("this.Date_of_Birth");
  }
}
