import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userEmail = null;
  constructor(
    private Auth: AuthService,
    private Toast: ToastrService,
    private route: Router
  ) {
    this.Auth.getUser().subscribe(
      (user) => {
        this.userEmail = user?.email;
      },
      (error) => {
        this.Toast.error('Something Went Wrong');
      }
    );
  }

  ngOnInit(): void {}

  async handleSignOut() {
    try {
      const response = await this.Auth.signOut();
      this.route.navigate(['/signin']);
      this.Toast.info('Login Again to continue');
      this.userEmail = null;
    } catch (error) {
      this.Toast.error('Something went wrong ..');
    }
  }
}
