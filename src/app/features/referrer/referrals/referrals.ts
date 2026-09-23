import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

type ReferralStatus =
  | 'Submitted'
  | 'In Progress'
  | 'Qualified'
  | 'Reward Paid';

interface Referral {
  id: string;
  name: string;
  initials: string;
  date: string;
  product: string;
  status: ReferralStatus;
  reward: number;
}

@Component({
  selector: 'app-referrals',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
  ],
  templateUrl: './referrals.html',
  styleUrl: './referrals.css',
})
export class Referrals {
  searchTerm = '';
  selectedStatus = 'All';

  statuses = [
    'All',
    'Submitted',
    'In Progress',
    'Qualified',
    'Reward Paid',
  ];

  referrals: Referral[] = [
    {
      id: 'REF-0048',
      name: 'Thando M.',
      initials: 'TM',
      date: '09 Sep 2026',
      product: 'Life Cover',
      status: 'Submitted',
      reward: 0,
    },
    {
      id: 'REF-0039',
      name: 'Sipho K.',
      initials: 'SK',
      date: '27 Aug 2026',
      product: 'Retirement Annuity',
      status: 'In Progress',
      reward: 0,
    },
    {
      id: 'REF-0028',
      name: 'Ayanda Z.',
      initials: 'AZ',
      date: '05 Aug 2026',
      product: 'Pension Preservation',
      status: 'Qualified',
      reward: 500,
    },
    {
      id: 'REF-0017',
      name: 'Nandi M.',
      initials: 'NM',
      date: '14 Jul 2026',
      product: 'Last Will and Testament',
      status: 'Reward Paid',
      reward: 500,
    },
    {
      id: 'REF-0012',
      name: 'Lerato P.',
      initials: 'LP',
      date: '28 Jun 2026',
      product: 'Life Cover',
      status: 'Reward Paid',
      reward: 500,
    },
    {
      id: 'REF-0009',
      name: 'Bongani N.',
      initials: 'BN',
      date: '11 Jun 2026',
      product: 'Retrenchment Planning',
      status: 'In Progress',
      reward: 0,
    },
    {
      id: 'REF-0005',
      name: 'Zanele D.',
      initials: 'ZD',
      date: '20 May 2026',
      product: 'Retirement Annuity',
      status: 'Reward Paid',
      reward: 500,
    },
    {
      id: 'REF-0002',
      name: 'Sibusiso T.',
      initials: 'ST',
      date: '07 May 2026',
      product: 'Life Cover',
      status: 'In Progress',
      reward: 0,
    },
  ];

  get filteredReferrals(): Referral[] {
    const search = this.searchTerm
      .trim()
      .toLowerCase();

    return this.referrals.filter((referral) => {
      const matchesStatus =
        this.selectedStatus === 'All' ||
        referral.status === this.selectedStatus;

      const matchesSearch =
        !search ||
        referral.name.toLowerCase().includes(search) ||
        referral.id.toLowerCase().includes(search) ||
        referral.product.toLowerCase().includes(search);

      return matchesStatus && matchesSearch;
    });
  }

  get totalReferrals(): number {
    return this.referrals.length;
  }

  get inProgressCount(): number {
    return this.referrals.filter(
      (referral) =>
        referral.status === 'Submitted' ||
        referral.status === 'In Progress'
    ).length;
  }

  get successfulCount(): number {
    return this.referrals.filter(
      (referral) =>
        referral.status === 'Qualified' ||
        referral.status === 'Reward Paid'
    ).length;
  }

  get totalRewards(): number {
    return this.referrals
      .filter(
        (referral) =>
          referral.status === 'Reward Paid'
      )
      .reduce(
        (total, referral) =>
          total + referral.reward,
        0
      );
  }

  setStatus(status: string): void {
    this.selectedStatus = status;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = 'All';
  }

  getStatusClass(
    status: ReferralStatus
  ): string {
    switch (status) {
      case 'Submitted':
        return 'status-submitted';

      case 'In Progress':
        return 'status-progress';

      case 'Qualified':
        return 'status-qualified';

      case 'Reward Paid':
        return 'status-paid';

      default:
        return '';
    }
  }
}