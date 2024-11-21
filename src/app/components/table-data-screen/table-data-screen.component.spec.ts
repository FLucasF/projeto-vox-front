import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataScreenComponent } from './table-data-screen.component';

describe('TableDataScreenComponent', () => {
  let component: TableDataScreenComponent;
  let fixture: ComponentFixture<TableDataScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDataScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDataScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
