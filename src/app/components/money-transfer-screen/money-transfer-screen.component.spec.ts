import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferScreenComponent } from './money-transfer-screen.component';

describe('MoneyTransferScreenComponent', () => {
  let component: MoneyTransferScreenComponent;
  let fixture: ComponentFixture<MoneyTransferScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoneyTransferScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneyTransferScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
