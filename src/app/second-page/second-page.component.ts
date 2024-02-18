import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {
  selectedFlavor!: string;
  subtotal!: number;
  quantity!: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quantity = params['quantity'];
      this.subtotal = params['quantity'] * 2;
    });
  }

  goToFirstPage() {
    this.router.navigate(['/']).then(success => {
      if (success) {
        console.log('Navigation to First Page successful');
      } else {
        console.error('Navigation to First Page failed');
      }
    });
  }

  goToThirdPage() {
    this.router.navigate(['/third-page'], { queryParams: { quantity: this.quantity,flavor: this.selectedFlavor, subtotal: this.subtotal } }).then(success => {
      if (success) {
        console.log('Navigation to Third Page successful');
      } else {
        console.error('Navigation to Third Page failed');
      }
    });
  }
}
