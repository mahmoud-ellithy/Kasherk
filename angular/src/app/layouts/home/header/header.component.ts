import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { MatDialog } from '@angular/material/dialog';
import { navItems } from '../sidebar/sidebar-data';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppSettings } from 'src/app/config';
import { ConfigStateService } from '@abp/ng.core';
import { map } from 'rxjs/operators';

interface LanguageInfo {
  language: string;
  code: string;
  icon: string;
  displayName?: string;
}

interface notifications {
  id: number;
  icon: string;
  color: string;
  title: string;
  time: string;
  subtitle: string;
}

interface profiledd {
  id: number;
  title: string;
  link: string;
  new?: boolean;
}

interface apps {
  id: number;
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    MaterialModule,
  ],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  public selectedLanguage: LanguageInfo = {
    language: 'English',
    code: 'en',
    icon: '/assets/images/flag/icon-flag-en.svg',
  };

  public languages: LanguageInfo[] = [];

  constructor(
    private settings: CoreService,
    private vsidenav: CoreService,
    public dialog: MatDialog,
    private configState: ConfigStateService
  ) {}

  ngOnInit() {
    this.loadLanguages();
  }

  private loadLanguages() {
    this.configState.getDeep$('localization.languages')
      .pipe(
        map((languages: any[]) => {
          if (!languages || !Array.isArray(languages)) return [];
          
          return languages.map(lang => ({
            language: lang.displayName || lang.cultureName,
            code: lang.cultureName,
            icon: this.getFlagIcon(lang.cultureName),
            displayName: lang.displayName
          }));
        })
      )
      .subscribe(languages => {
        if (languages && languages.length > 0) {
          this.languages = languages;
          
          // Set the selected language based on current culture
          const currentLang = this.configState.getDeep('localization.currentCulture.cultureName');
          if (currentLang) {
            const lang = this.languages.find(l => l.code === currentLang);
            if (lang) this.selectedLanguage = lang;
          }
        }
      });
  }

  private getFlagIcon(cultureName: string): string {
    if (!cultureName) return '/assets/images/flag/icon-flag-en.svg';
    
    // Map culture names to flag icons
    const flagMap: {[key: string]: string} = {
      'en': '/assets/images/flag/icon-flag-en.svg',
      'ar': '/assets/images/flag/icon-flag-sa.svg',
      'fr': '/assets/images/flag/icon-flag-fr.svg',
      'de': '/assets/images/flag/icon-flag-de.svg',
      'es': '/assets/images/flag/icon-flag-es.svg',
      // Add more mappings as needed
    };
    
    const baseName = cultureName.split('-')[0];
    return flagMap[baseName] || '/assets/images/flag/icon-flag-en.svg';
  }

  options = this.settings.getOptions();
  
  setDark() {
    this.settings.toggleTheme();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppSearchDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeLanguage(lang: LanguageInfo): void {
    this.selectedLanguage = lang;
    
    // Change the language using ABP's ConfigStateService
    this.configState.refreshAppState().subscribe(() => {
      const currentLang = this.configState.getDeep('localization.currentCulture.cultureName');
      if (currentLang !== lang.code) {
        // Update the language in localStorage and reload the page
        localStorage.setItem('currentLanguage', lang.code);
        window.location.reload();
      }
    });
  }

  notifications: notifications[] = [
    {
      id: 1,
      icon: 'a-b-2',
      color: 'primary',
      time: '8:30 AM',
      title: 'Launch Admin',
      subtitle: 'Just see the my new admin!',
    },
    {
      id: 2,
      icon: 'calendar',
      color: 'accent',
      time: '8:21 AM',
      title: 'Event today',
      subtitle: 'Just a reminder that you have event',
    },
    {
      id: 3,
      icon: 'settings',
      color: 'warning',
      time: '8:05 AM',
      title: 'Settings',
      subtitle: 'You can customize this template',
    },
    {
      id: 4,
      icon: 'a-b-2',
      color: 'success',
      time: '7:30 AM',
      title: 'Launch Templates',
      subtitle: 'Just see the my new admin!',
    },
    {
      id: 5,
      icon: 'exclamation-circle',
      color: 'error',
      time: '7:03 AM',
      title: 'Event tomorrow',
      subtitle: 'Just a reminder that you have event',
    },
  ];

  profiledd: profiledd[] = [
    {
      id: 1,
      title: 'My Profile',
      link: '/',
    },
    {
      id: 2,
      title: 'My Subscription',
      link: '/',
    },
    {
      id: 3,
      title: 'My Invoice',
      new: true,
      link: '/',
    },
    {
      id: 4,
      title: ' Account Settings',
      link: '/',
    },
    {
      id: 5,
      title: 'Sign Out',
      link: '/authentication/login',
    },
  ];

  apps: apps[] = [
    {
      id: 1,
      icon: 'solar:chat-line-line-duotone',
      color: 'primary',
      title: 'Chat Application',
      subtitle: 'Messages & Emails',
      link: '/apps/chat',
    },
    {
      id: 2,
      icon: 'solar:checklist-minimalistic-line-duotone',
      color: 'accent',
      title: 'Todo App',
      subtitle: 'Completed task',
      link: '/apps/todo',
    },
    {
      id: 3,
      icon: 'solar:bill-list-line-duotone',
      color: 'success',
      title: 'Invoice App',
      subtitle: 'Get latest invoice',
      link: '/apps/invoice',
    },
    {
      id: 4,
      icon: 'solar:calendar-line-duotone',
      color: 'error',
      title: 'Calendar App',
      subtitle: 'Get Dates',
      link: '/apps/calendar',
    },
    {
      id: 5,
      icon: 'solar:smartphone-2-line-duotone',
      color: 'warning',
      title: 'Contact Application',
      subtitle: '2 Unsaved Contacts',
      link: '/apps/contacts',
    },
    {
      id: 6,
      icon: 'solar:ticket-line-duotone',
      color: 'primary',
      title: 'Tickets App',
      subtitle: 'Create new ticket',
      link: '/apps/tickets',
    },
    {
      id: 7,
      icon: 'solar:letter-line-duotone',
      color: 'accent',
      title: 'Email App',
      subtitle: 'Get new emails',
      link: '/apps/email/inbox',
    },
    {
      id: 8,
      icon: 'solar:book-2-line-duotone',
      color: 'warning',
      title: 'Courses',
      subtitle: 'Create new course',
      link: '/apps/courses',
    },
  ];
}

@Component({
  selector: 'search-dialog',
  standalone: true,
  imports: [RouterModule, MaterialModule, TablerIconsModule, FormsModule],
  templateUrl: 'search-dialog.component.html',
})
export class AppSearchDialogComponent {
  searchText: string = '';
  navItems = navItems;

  navItemsData = navItems.filter((navitem) => navitem.displayName);

  // filtered = this.navItemsData.find((obj) => {
  //   return obj.displayName == this.searchinput;
  // });
}
