import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ReferrerStatus = 'Active' | 'Inactive';

type EligibilityStatus =
  | 'Eligible'
  | 'Review Required'
  | 'Not Eligible';

interface Referrer {
  id: string;
  customerNumber: string;

  firstName: string;
  surname: string;

  mobile: string;
  email: string;

  referralCode: string;

  qualifyingProduct: string;

  policyInForce: boolean;
  premiumsUpToDate: boolean;

  totalReferrals: number;
  successfulReferrals: number;

  rewardsPaid: number;
  rewardsDue: number;

  status: ReferrerStatus;
  eligibility: EligibilityStatus;

  joinedDate: string;
}

@Component({
  selector: 'app-referrers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './referrers.html',
  styleUrl: './referrers.css',
})
export class Referrers {
  searchTerm = '';

  selectedStatus = 'All';
  selectedEligibility = 'All';

  statuses = [
    'All',
    'Active',
    'Inactive',
  ];

  eligibilityStatuses = [
    'All',
    'Eligible',
    'Review Required',
    'Not Eligible',
  ];

  referrers: Referrer[] = [
    {
      id: 'RFR-001',
      customerNumber: 'THU-2400318',

      firstName: 'Nomsa',
      surname: 'Dlamini',

      mobile: '082 456 7812',
      email: 'nomsa.dlamini@example.com',

      referralCode: 'NOMSA24',

      qualifyingProduct: 'Life Cover',

      policyInForce: true,
      premiumsUpToDate: true,

      totalReferrals: 18,
      successfulReferrals: 12,

      rewardsPaid: 6000,
      rewardsDue: 500,

      status: 'Active',
      eligibility: 'Eligible',

      joinedDate: '14 Mar 2024',
    },

    {
      id: 'RFR-002',
      customerNumber: 'THU-2400441',

      firstName: 'Lerato',
      surname: 'Molefe',

      mobile: '073 221 9044',
      email: 'lerato.molefe@example.com',

      referralCode: 'LERATO12',

      qualifyingProduct: 'Retirement Annuity',

      policyInForce: true,
      premiumsUpToDate: true,

      totalReferrals: 15,
      successfulReferrals: 10,

      rewardsPaid: 5000,
      rewardsDue: 0,

      status: 'Active',
      eligibility: 'Eligible',

      joinedDate: '02 Apr 2024',
    },

    {
      id: 'RFR-003',
      customerNumber: 'THU-2400512',

      firstName: 'Bongani',
      surname: 'Nkosi',

      mobile: '078 310 5572',
      email: 'bongani.nkosi@example.com',

      referralCode: 'BONGANI08',

      qualifyingProduct: 'Pension Preservation',

      policyInForce: true,
      premiumsUpToDate: true,

      totalReferrals: 12,
      successfulReferrals: 8,

      rewardsPaid: 4000,
      rewardsDue: 500,

      status: 'Active',
      eligibility: 'Eligible',

      joinedDate: '21 Apr 2024',
    },

    {
      id: 'RFR-004',
      customerNumber: 'THU-2400635',

      firstName: 'Zanele',
      surname: 'Dube',

      mobile: '071 885 4421',
      email: 'zanele.dube@example.com',

      referralCode: 'ZANELE21',

      qualifyingProduct: 'Life Cover',

      policyInForce: true,
      premiumsUpToDate: true,

      totalReferrals: 9,
      successfulReferrals: 5,

      rewardsPaid: 2500,
      rewardsDue: 0,

      status: 'Active',
      eligibility: 'Eligible',

      joinedDate: '08 May 2024',
    },

    {
      id: 'RFR-005',
      customerNumber: 'THU-2400714',

      firstName: 'Sibusiso',
      surname: 'Themba',

      mobile: '083 771 6509',
      email: 'sibusiso.themba@example.com',

      referralCode: 'SIBU14',

      qualifyingProduct: 'Retirement Annuity',

      policyInForce: true,
      premiumsUpToDate: false,

      totalReferrals: 6,
      successfulReferrals: 3,

      rewardsPaid: 1500,
      rewardsDue: 0,

      status: 'Active',
      eligibility: 'Review Required',

      joinedDate: '26 May 2024',
    },

    {
      id: 'RFR-006',
      customerNumber: 'THU-2400819',

      firstName: 'Ayanda',
      surname: 'Mkhize',

      mobile: '079 220 8163',
      email: 'ayanda.mkhize@example.com',

      referralCode: 'AYANDA19',

      qualifyingProduct: 'Life Cover',

      policyInForce: false,
      premiumsUpToDate: false,

      totalReferrals: 4,
      successfulReferrals: 2,

      rewardsPaid: 1000,
      rewardsDue: 0,

      status: 'Inactive',
      eligibility: 'Not Eligible',

      joinedDate: '11 Jun 2024',
    },

    {
      id: 'RFR-007',
      customerNumber: 'THU-2400931',

      firstName: 'Nokuthula',
      surname: 'Cele',

      mobile: '072 119 3488',
      email: 'nokuthula.cele@example.com',

      referralCode: 'NOKU31',

      qualifyingProduct: 'Last Will and Testament',

      policyInForce: true,
      premiumsUpToDate: true,

      totalReferrals: 7,
      successfulReferrals: 4,

      rewardsPaid: 2000,
      rewardsDue: 500,

      status: 'Active',
      eligibility: 'Eligible',

      joinedDate: '05 Jul 2024',
    },
  ];

  get filteredReferrers(): Referrer[] {
    const search =
      this.searchTerm
        .trim()
        .toLowerCase();

    return this.referrers.filter(
      (referrer) => {
        const matchesSearch =
          !search ||
          referrer.id
            .toLowerCase()
            .includes(search) ||
          referrer.customerNumber
            .toLowerCase()
            .includes(search) ||
          referrer.firstName
            .toLowerCase()
            .includes(search) ||
          referrer.surname
            .toLowerCase()
            .includes(search) ||
          referrer.mobile
            .toLowerCase()
            .includes(search) ||
          referrer.email
            .toLowerCase()
            .includes(search) ||
          referrer.referralCode
            .toLowerCase()
            .includes(search);

        const matchesStatus =
          this.selectedStatus === 'All' ||
          referrer.status ===
          this.selectedStatus;

        const matchesEligibility =
          this.selectedEligibility === 'All' ||
          referrer.eligibility ===
          this.selectedEligibility;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesEligibility
        );
      }
    );
  }

  get totalReferrers(): number {
    return this.referrers.length;
  }

  get activeReferrers(): number {
    return this.referrers.filter(
      (referrer) =>
        referrer.status === 'Active'
    ).length;
  }

  get eligibleReferrers(): number {
    return this.referrers.filter(
      (referrer) =>
        referrer.eligibility === 'Eligible'
    ).length;
  }

  get totalRewardsPaid(): number {
    return this.referrers.reduce(
      (total, referrer) =>
        total + referrer.rewardsPaid,
      0
    );
  }

  getInitials(
    referrer: Referrer
  ): string {
    return (
      referrer.firstName.charAt(0) +
      referrer.surname.charAt(0)
    ).toUpperCase();
  }

  getSuccessRate(
    referrer: Referrer
  ): number {
    if (!referrer.totalReferrals) {
      return 0;
    }

    return Math.round(
      (
        referrer.successfulReferrals /
        referrer.totalReferrals
      ) * 100
    );
  }

  hasActiveFilters(): boolean {
    return (
      this.searchTerm.trim() !== '' ||
      this.selectedStatus !== 'All' ||
      this.selectedEligibility !== 'All'
    );
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = 'All';
    this.selectedEligibility = 'All';
  }

  getStatusClass(
    status: ReferrerStatus
  ): string {
    return status === 'Active'
      ? 'status-active'
      : 'status-inactive';
  }

  getEligibilityClass(
    status: EligibilityStatus
  ): string {
    switch (status) {
      case 'Eligible':
        return 'eligibility-eligible';

      case 'Review Required':
        return 'eligibility-review';

      case 'Not Eligible':
        return 'eligibility-ineligible';

      default:
        return '';
    }
  }

  viewReferrer(
    referrer: Referrer
  ): void {
    console.log(
      'View referrer:',
      referrer
    );
  }
}