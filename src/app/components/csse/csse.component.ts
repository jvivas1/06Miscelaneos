import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csse',
  template: `
    <p>
      csse works!
    </p>
  `,
  styles: [`
      p{
        color:red;
        font-size:20px;
      }
    `]
})
export class CsseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
