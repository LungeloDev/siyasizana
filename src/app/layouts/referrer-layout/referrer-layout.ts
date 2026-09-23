import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  icon: 'home' | 'refer' | 'referrals' | 'rewards' | 'profile';
}

@Component({
  selector: 'app-referrer-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './referrer-layout.html',
  styleUrl: './referrer-layout.css',
})
export class ReferrerLayout {
  sidebarOpen = false;
  profileOpen = false;

  navItems: NavItem[] = [
    {
      label: 'Dashboard',
      route: '/referrer/dashboard',
      icon: 'home',
    },
    {
      label: 'Make a Referral',
      route: '/referrer/new',
      icon: 'refer',
    },
    {
      label: 'My Referrals',
      route: '/referrer/referrals',
      icon: 'referrals',
    },
    // {
    //   label: 'My Rewards',
    //   route: '/referrer/rewards',
    //   icon: 'rewards',
    // },
    {
      label: 'My Profile',
      route: '/referrer/profile',
      icon: 'profile',
    },
  ];

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  toggleProfile(): void {
    this.profileOpen = !this.profileOpen;
  }
}