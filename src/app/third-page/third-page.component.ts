import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent {
  quantity!: number;
  selectedFlavor!: string;
  subtotal!: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quantity = params['quantity'];
      this.selectedFlavor = params['flavor'];
      this.subtotal = params['subtotal'];
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

  goToSecondPage() {
    this.router.navigate(['/second-page'], {
      queryParams: {
        quantity: this.quantity,
        flavor: this.selectedFlavor,
        subtotal: this.subtotal
      }
    });
  }

  sendOrder() {
    // Send order logic goes here
    console.log("Order sent!");
  }
}
