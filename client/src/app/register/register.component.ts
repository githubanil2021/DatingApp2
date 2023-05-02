import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   @Output() cancelRegister = new EventEmitter();
  
  model:any={}
  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
      //console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: () =>{
        console.log('register component');
         
        this.cancel();
      },
      error: error=>this.toastr.error(error.errors) 
    });
  }

  cancel(){
    console.log('regiser cancelled');
    this.cancelRegister.emit(false);
  }



}
