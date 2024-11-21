import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-data-screen',
  templateUrl: './table-data-screen.component.html',
  styleUrl: './table-data-screen.component.scss'
})
export class TableDataScreenComponent {
  employees = [
    { name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: 'Portland, USA', phone: '(171) 555-2222', selected: false },
    { name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Berlin, Germany', phone: '(313) 555-5735', selected: false },
    { name: 'Maria Anders', email: 'mariaanders@mail.com', address: 'Paris, France', phone: '(503) 555-9931', selected: false },
    { name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'Madrid, Spain', phone: '(204) 619-5731', selected: false },
    { name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Turin, Italy', phone: '(480) 631-2097', selected: false }
  ];

  modalTitle = '';
  currentEmployee = { name: '', email: '', address: '', phone: '' };

  @ViewChild('employeeModal') employeeModal!: ElementRef;

  openModal(employee?: any) {
    if (employee) {
      this.modalTitle = 'Edit Employee';
      this.currentEmployee = { ...employee };
    } else {
      this.modalTitle = 'Add Employee';
      this.currentEmployee = { name: '', email: '', address: '', phone: '' };
    }
    const modal = this.employeeModal.nativeElement;
    modal.style.display = 'block';
    modal.classList.add('show');
  }

  closeModal() {
    const modal = this.employeeModal.nativeElement;
    modal.style.display = 'none';
    modal.classList.remove('show');
  }

  saveEmployee() {
    if (this.modalTitle === 'Add Employee') {
      this.employees.push({ ...this.currentEmployee, selected: false });
    } else {
      const index = this.employees.findIndex(e => e.email === this.currentEmployee.email);
      if (index !== -1) this.employees[index] = { ...this.currentEmployee, selected: false };
    }
    this.closeModal();
  }

  onDelete(employee: any) {
    this.employees = this.employees.filter(e => e !== employee);
  }

  onDeleteSelected() {
    this.employees = this.employees.filter(e => !e.selected);
  }

  toggleSelectAll(event: any) {
    const checked = event.target.checked;
    this.employees.forEach(e => e.selected = checked);
  }
}
