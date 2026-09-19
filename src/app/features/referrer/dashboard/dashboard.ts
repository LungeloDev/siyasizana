import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MyReferral {
  id: string;
  name: string;
  initials: string;
  date: string;
  status:
  | 'Submitted'
  | 'In Progress'
  | 'Qualified'
  | 'Reward Paid';
}

@Component({
  selector: 'app-referrer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class ReferrerDashboard {
  referralCode = 'NOMSA24';

  copied = false;

  referrals: MyReferral[] = [
    {
      id: 'REF-0048',
      name: 'Thando M.',
      initials: 'TM',
      date: '09 Sep 2026',
      status: 'Submitted',
    },
    {
      id: 'REF-0039',
      name: 'Sipho K.',
      initials: 'SK',
      date: '27 Aug 2026',
      status: 'In Progress',
    },
    {
      id: 'REF-0028',
      name: 'Ayanda Z.',
      initials: 'AZ',
      date: '05 Aug 2026',
      status: 'Qualified',
    },
    {
      id: 'REF-0017',
      name: 'Nandi M.',
      initials: 'NM',
      date: '14 Jul 2026',
      status: 'Reward Paid',
    },
  ];

  async copyReferralCode(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.referralCode);

      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 1800);
    } catch {
      this.copied = false;
    }
  }

  getStatusClass(status: MyReferral['status']): string {
    switch (status) {
      case 'Reward Paid':
        return 'status-paid';

      case 'Qualified':
        return 'status-qualified';

      case 'In Progress':
        return 'status-progress';

      default:
        return 'status-submitted';
    }
  }
}