import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ConfigStateService, CurrentUserDto } from '@abp/ng.core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    TablerIconsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  constructor(private configState: ConfigStateService) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  private loadCurrentUser() {
    this.configState.getDeep$('currentUser').subscribe((user: CurrentUserDto) => {
      console.log(user);
    });
  }
}
