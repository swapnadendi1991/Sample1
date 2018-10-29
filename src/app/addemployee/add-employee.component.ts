import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


import { AlertService, AddEmployeeService } from '../_services';

@Component({templateUrl: 'add-employee.component.html'})
export class AddEmployeeComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    private employees:any[]=[];
    id:any;
    private employee :any={};
    

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private addEmployeeService: AddEmployeeService,
        private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            age: ['', Validators.required],
            designation: ['', Validators.required],
            email: ['', Validators.required],
            salary: ['', Validators.required]
        });
        this.route.queryParams.subscribe(paramsId => {
            
                        this.id = paramsId.id;
        });
        this.filterRecord(this.id );
        
       // this.authenticationService.clearAll();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    filterRecord(id : any){
        if(id){
            this.employees = JSON.parse(localStorage.getItem("employees") || "[]");
            console.log("employees.."+JSON.stringify(this.employees) +"  "+ id);
            this.employee = this.employees.find(e => e.email === id);
            console.log("employee.."+JSON.stringify(this.employee));
        }
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
       
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
         var status = this.addEmployeeService.add(this.loginForm.value);
        
            this.alertService.error(status);
        
        
    }
    
}
