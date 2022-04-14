import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome Here';
  para='Let us learn the basics of angular';
  isSelected:boolean= true;
  text='Rajesh'
  c:number=1;
  cities:string[]=[];
  customers=[
    {
      'name': 'Andrew',
      'city':'Mumbai',
      'membership':'Gold'
    },
    {
      'name': 'Richard',
      'city':'Delhi',
      'membership':'Silver'
    },
    {
      'name': 'Shalini',
      'city':'Mumbai',
      'membership':'Gold'
    },
    {
      'name': 'Richa',
      'city':'Pune',
      'membership':'Premium'
    }
    ,
    {
      'name': 'Snehal',
      'city':'Chennai',
      'membership':'default'
    }
  ];
  constructor(){
    console.log('app constructor');
  }
  ngOnInit(): void {
    console.log('app ng on init ')
  }

  show()
  {
    alert('hey i am clicked');
    this.text = `Button clicked ${this.c++} times`;
  }
}
