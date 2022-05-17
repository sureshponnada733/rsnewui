// @ts-ignore
import Typewriter from 't-writer.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.scss']
})
export class HomebannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white'
    })
    
    writer
      .type('24/7 ROADSIDE ASSISTANCE')
      .rest(1500)
      .changeOps({ deleteSpeed: 110 })
      .remove(24)

      .type('BATTERY JUMPSTART') 
           .rest(1500)
      .changeOps({ deleteSpeed: 110 })
      .remove(17)

      .type('MINOR REPAIR')
      .rest(1500)
      .changeOps({ deleteSpeed: 110 })
            .remove(12)

      .type('KEY LOCK ASSISTANCE')
      .rest(1500)
      .changeOps({ deleteSpeed: 110 })
      .remove(19)
      .clear()
      .start()
  }

}
