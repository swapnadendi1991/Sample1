import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';




@Component({templateUrl: 'view-employee.component.html'})
export class ViewEmployeeComponent implements OnInit {
    
    private employees:any[]=[];

    constructor(
        
        private router: Router) { }

    ngOnInit() {
        this.employees = JSON.parse(localStorage.getItem("employees") || "[]");
        console.log("inside reg "+this.employees);
    }

    getEmployees(): any{
        
        return this.employees
    }

    editEmployee(id : any){
        this.router.navigate(['/login'],{ queryParams: { id: id } });
       
        
    }
    
    
}
