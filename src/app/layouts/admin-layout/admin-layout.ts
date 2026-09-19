import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  icon:
  | 'dashboard'
  | 'referrals'
  | 'referrers'
  | 'products'
  | 'reports'
  | 'users';
}

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  sidebarOpen = false;
  profileOpen = false;
  notificationsOpen = false;

  navItems: NavItem[] = [
    {
      label: 'Dashboard',
      route: '/admin/dashboard',
      icon: 'dashboard',
    },
    {
      label: 'Referrals',
      route: '/admin/referrals',
      icon: 'referrals',
    },
    {
      label: 'Referrers',
      route: '/admin/referrers',
      icon: 'referrers',
    },
    {
      label: 'Products',
      route: '/admin/products',
      icon: 'products',
    },
    {
      label: 'Reports',
      route: '/admin/reports',
      icon: 'reports',
    },
    {
      label: 'Users',
      route: '/admin/users',
      icon: 'users',
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
    this.notificationsOpen = false;
  }

  toggleNotifications(): void {
    this.notificationsOpen = !this.notificationsOpen;
    this.profileOpen = false;
  }
}