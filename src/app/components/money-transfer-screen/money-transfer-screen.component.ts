import { Component } from '@angular/core';

@Component({
  selector: 'app-money-transfer-screen',
  templateUrl: './money-transfer-screen.component.html',
  styleUrl: './money-transfer-screen.component.scss'
})
export class MoneyTransferScreenComponent {
  cartItems = [
    { name: 'Product name', description: 'Brief description', price: '$12' },
    { name: 'Second product', description: 'Brief description', price: '$8' },
    { name: 'Third item', description: 'Brief description', price: '$5' }
  ];

  promoCode = 'EXAMPLECODE';
  promoInput = '';
  promoDiscount = '$5';
  total = '$20';

  formData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: ''
  };

  applyPromoCode(): void {
    if (this.promoInput === this.promoCode) {
      alert('Promo code applied!');
    } else {
      alert('Invalid promo code.');
    }
  }

  onSubmit(): void {
    alert('Form submitted!');
    console.log(this.formData);
  }
}
