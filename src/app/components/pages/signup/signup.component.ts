import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private route: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  handleSubmit(values: NgForm) {
    const { email, password } = values.form.value;
    this.auth
      .signUp(email, password)
      .then((user) => {
        this.route.navigate(['/']);
        this.toast.success('SignUp Successfully 1');
      })
      .catch((err) => {
        this.toast.error(err.message);
      });
  }
}
