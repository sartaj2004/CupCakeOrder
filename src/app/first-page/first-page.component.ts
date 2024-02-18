import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {
  constructor(private router: Router) { }

  goToSecondPage(quantity: number) {
    this.router.navigate(['/second-page'], { queryParams: { quantity } }).then(success => {
      if (success) {
        console.log('Navigation to Second Page successful');
      } else {
        console.error('Navigation to Second Page failed');
      }
    });
  }
}
