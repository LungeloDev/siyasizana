import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface RecentReferral {
  id: string;
  customer: string;
  initials: string;
  referrer: string;
  product: string;
  date: string;
  status:
  | 'New'
  | 'Contacted'
  | 'Consultation'
  | 'Converted';
}

interface TopReferrer {
  name: string;
  initials: string;
  referrals: number;
  converted: number;
  earned: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  currentDate = new Date();

  recentReferrals: RecentReferral[] = [
    {
      id: 'REF-0048',
      customer: 'Thando Mokoena',
      initials: 'TM',
      referrer: 'Nomsa Dlamini',
      product: 'Life Cover',
      date: '09 Sep 2026',
      status: 'New',
    },
    {
      id: 'REF-0047',
      customer: 'Sipho Khumalo',
      initials: 'SK',
      referrer: 'Lerato Molefe',
      product: 'Retirement Annuity',
      date: '08 Sep 2026',
      status: 'Consultation',
    },
    {
      id: 'REF-0046',
      customer: 'Ayanda Zulu',
      initials: 'AZ',
      referrer: 'Bongani Nkosi',
      product: 'Pension Preservation',
      date: '08 Sep 2026',
      status: 'Converted',
    },
    {
      id: 'REF-0045',
      customer: 'Nandi Mthembu',
      initials: 'NM',
      referrer: 'Nomsa Dlamini',
      product: 'Last Will & Testament',
      date: '07 Sep 2026',
      status: 'Contacted',
    },
  ];

  topReferrers: TopReferrer[] = [
    {
      name: 'Nomsa Dlamini',
      initials: 'ND',
      referrals: 18,
      converted: 12,
      earned: 6000,
    },
    {
      name: 'Lerato Molefe',
      initials: 'LM',
      referrals: 15,
      converted: 10,
      earned: 5000,
    },
    {
      name: 'Bongani Nkosi',
      initials: 'BN',
      referrals: 12,
      converted: 8,
      earned: 4000,
    },
  ];

  getStatusClass(status: RecentReferral['status']): string {
    switch (status) {
      case 'Converted':
        return 'status-converted';

      case 'Consultation':
        return 'status-consultation';

      case 'Contacted':
        return 'status-contacted';

      default:
        return 'status-new';
    }
  }
}