import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AddEmployeeService {
    constructor() { }
    private employees:any[]=[];
    private employee: any={};
    
    add(user: any) :any{
        
                // login successful if there's a jwt token in the response
                if (user) {
                   // this.employees = localStorage.getItem("employees")
                    // store user details
                    console.log("user ... "+ user.email);
                   
                    this.employees = JSON.parse(localStorage.getItem("employees") || "[]");
                     if(this.employees.find(e => e.email === user.email)){
                        let index = this.employees.findIndex(e => e.email === user.email);
                        this.employees.splice(index, 1);
                        this.employees.push(user);
                        localStorage.setItem('employees', JSON.stringify(this.employees));
                         return "User Updated Successfully";
                     }
                    this.employees.push(user);
                    
                    localStorage.setItem('employees', JSON.stringify(this.employees));
                    return "User Added Successfully";
                }else{
                    return "Failed";
                }
     }

     getEmployees() :any{
        return this.employees;
     }


    clearAll() {
        // remove user from local storage to log user out
        localStorage.removeItem('employees');
    }
}