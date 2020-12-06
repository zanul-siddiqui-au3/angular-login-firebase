import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectorRef,
} from '@angular/core';

import { GithubServiceService } from '../../service/github-service.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: String;
  repos = [];

  constructor(
    private git: GithubServiceService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.repoUrl) {
      this.git.getRepos(this.repoUrl).subscribe((repoArr: []) => {
        this.repos = repoArr;
        this.ref.detectChanges();
      });
    }
  }
}
