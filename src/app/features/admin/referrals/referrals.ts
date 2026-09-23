import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ReferralStatus =
  | 'New'
  | 'Contacted'
  | 'Consultation'
  | 'Product Activated'
  | 'Qualified'
  | 'Paid';

type RewardStatus =
  | 'Pending'
  | 'Due'
  | 'Paid';

interface Referral {
  id: string;

  leadFirstName: string;
  leadSurname: string;
  leadMobile: string;
  leadEmail: string;

  referrerName: string;
  referrerCode: string;

  product: string;
  dateReferred: string;

  status: ReferralStatus;

  premiumsPaid: number;

  rewardStatus: RewardStatus;
  rewardAmount: number;
}

@Component({
  selector: 'app-referrals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './referrals.html',
  styleUrl: './referrals.css',
})
export class Referrals {
  searchTerm = '';

  selectedStatus = 'All';
  selectedRewardStatus = 'All';

  statuses = [
    'All',
    'New',
    'Contacted',
    'Consultation',
    'Product Activated',
    'Qualified',
    'Paid',
  ];

  rewardStatuses = [
    'All',
    'Pending',
    'Due',
    'Paid',
  ];

  referrals: Referral[] = [
    {
      id: 'REF-0048',

      leadFirstName: 'Thando',
      leadSurname: 'Mokoena',
      leadMobile: '082 445 7812',
      leadEmail: 'thando@example.com',

      referrerName: 'Nomsa Dlamini',
      referrerCode: 'NOMSA24',

      product: 'Life Cover',
      dateReferred: '09 Sep 2026',

      status: 'New',

      premiumsPaid: 0,

      rewardStatus: 'Pending',
      rewardAmount: 500,
    },

    {
      id: 'REF-0047',

      leadFirstName: 'Sipho',
      leadSurname: 'Khumalo',
      leadMobile: '071 554 9201',
      leadEmail: 'sipho@example.com',

      referrerName: 'Lerato Molefe',
      referrerCode: 'LERATO12',

      product: 'Retirement Annuity',
      dateReferred: '05 Sep 2026',

      status: 'Consultation',

      premiumsPaid: 0,

      rewardStatus: 'Pending',
      rewardAmount: 500,
    },

    {
      id: 'REF-0046',

      leadFirstName: 'Ayanda',
      leadSurname: 'Zulu',
      leadMobile: '076 342 1887',
      leadEmail: 'ayanda@example.com',

      referrerName: 'Bongani Nkosi',
      referrerCode: 'BONGANI08',

      product: 'Pension Preservation',
      dateReferred: '22 Aug 2026',

      status: 'Qualified',

      premiumsPaid: 3,

      rewardStatus: 'Due',
      rewardAmount: 500,
    },

    {
      id: 'REF-0045',

      leadFirstName: 'Nandi',
      leadSurname: 'Mthembu',
      leadMobile: '083 118 5534',
      leadEmail: 'nandi@example.com',

      referrerName: 'Nomsa Dlamini',
      referrerCode: 'NOMSA24',

      product: 'Last Will and Testament',
      dateReferred: '14 Aug 2026',

      status: 'Contacted',

      premiumsPaid: 0,

      rewardStatus: 'Pending',
      rewardAmount: 500,
    },

    {
      id: 'REF-0042',

      leadFirstName: 'Lwazi',
      leadSurname: 'Cele',
      leadMobile: '072 901 4456',
      leadEmail: 'lwazi@example.com',

      referrerName: 'Nomsa Dlamini',
      referrerCode: 'NOMSA24',

      product: 'Life Cover',
      dateReferred: '02 Aug 2026',

      status: 'Product Activated',

      premiumsPaid: 2,

      rewardStatus: 'Pending',
      rewardAmount: 500,
    },

    {
      id: 'REF-0038',

      leadFirstName: 'Zanele',
      leadSurname: 'Dube',
      leadMobile: '079 332 6611',
      leadEmail: 'zanele@example.com',

      referrerName: 'Lerato Molefe',
      referrerCode: 'LERATO12',

      product: 'Life Cover',
      dateReferred: '18 Jul 2026',

      status: 'Paid',

      premiumsPaid: 3,

      rewardStatus: 'Paid',
      rewardAmount: 500,
    },

    {
      id: 'REF-0034',

      leadFirstName: 'Sibusiso',
      leadSurname: 'Themba',
      leadMobile: '081 224 8910',
      leadEmail: 'sibusiso@example.com',

      referrerName: 'Bongani Nkosi',
      referrerCode: 'BONGANI08',

      product: 'Retrenchment Planning',
      dateReferred: '03 Jul 2026',

      status: 'Paid',

      premiumsPaid: 3,

      rewardStatus: 'Paid',
      rewardAmount: 500,
    },
  ];

  get filteredReferrals(): Referral[] {
    const search = this.searchTerm
      .trim()
      .toLowerCase();

    return this.referrals.filter((referral) => {
      const matchesSearch =
        !search ||
        referral.id.toLowerCase().includes(search) ||
        referral.leadFirstName
          .toLowerCase()
          .includes(search) ||
        referral.leadSurname
          .toLowerCase()
          .includes(search) ||
        referral.referrerName
          .toLowerCase()
          .includes(search) ||
        referral.referrerCode
          .toLowerCase()
          .includes(search) ||
        referral.product
          .toLowerCase()
          .includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        referral.status === this.selectedStatus;

      const matchesReward =
        this.selectedRewardStatus === 'All' ||
        referral.rewardStatus ===
        this.selectedRewardStatus;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesReward
      );
    });
  }

  get totalReferrals(): number {
    return this.referrals.length;
  }

  get activeReferrals(): number {
    return this.referrals.filter(
      (referral) =>
        referral.status !== 'Paid' &&
        referral.status !== 'Qualified'
    ).length;
  }

  get qualifiedReferrals(): number {
    return this.referrals.filter(
      (referral) =>
        referral.rewardStatus === 'Due'
    ).length;
  }

  get feesDue(): number {
    return this.referrals
      .filter(
        (referral) =>
          referral.rewardStatus === 'Due'
      )
      .reduce(
        (total, referral) =>
          total + referral.rewardAmount,
        0
      );
  }

  getLeadInitials(
    referral: Referral
  ): string {
    return (
      referral.leadFirstName.charAt(0) +
      referral.leadSurname.charAt(0)
    ).toUpperCase();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = 'All';
    this.selectedRewardStatus = 'All';
  }

  hasActiveFilters(): boolean {
    return (
      this.searchTerm.trim() !== '' ||
      this.selectedStatus !== 'All' ||
      this.selectedRewardStatus !== 'All'
    );
  }

  getStatusClass(
    status: ReferralStatus
  ): string {
    switch (status) {
      case 'New':
        return 'status-new';

      case 'Contacted':
        return 'status-contacted';

      case 'Consultation':
        return 'status-consultation';

      case 'Product Activated':
        return 'status-activated';

      case 'Qualified':
        return 'status-qualified';

      case 'Paid':
        return 'status-paid';

      default:
        return '';
    }
  }

  getRewardClass(
    status: RewardStatus
  ): string {
    switch (status) {
      case 'Pending':
        return 'reward-pending';

      case 'Due':
        return 'reward-due';

      case 'Paid':
        return 'reward-paid';

      default:
        return '';
    }
  }

  viewReferral(
    referral: Referral
  ): void {
    console.log(
      'View referral:',
      referral
    );
  }
}