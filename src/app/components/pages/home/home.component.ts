import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubServiceService } from 'src/app/service/github-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = null;
  userName = '';
  error = null;
  constructor(
    private git: GithubServiceService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  handleFind() {
    this.git.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      },
      (err) => {
        this.error = err;
        this.ref.detectChanges();
      }
    );
  }
}
