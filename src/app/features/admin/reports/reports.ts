import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface MonthlyPerformance {
  month: string;
  referrals: number;
  successful: number;
  rewards: number;
}

interface ProductPerformance {
  name: string;
  referrals: number;
  successful: number;
}

interface TopReferrer {
  position: number;
  name: string;
  initials: string;
  code: string;
  referrals: number;
  successful: number;
  rewards: number;
}

interface ReferralSource {
  name: string;
  referrals: number;
  percentage: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports {
  selectedPeriod = 'This Year';

  periods = [
    'This Month',
    'Last 3 Months',
    'Last 6 Months',
    'This Year',
  ];

  monthlyPerformance: MonthlyPerformance[] = [
    {
      month: 'Jan',
      referrals: 48,
      successful: 22,
      rewards: 11000,
    },
    {
      month: 'Feb',
      referrals: 55,
      successful: 26,
      rewards: 13000,
    },
    {
      month: 'Mar',
      referrals: 62,
      successful: 31,
      rewards: 15500,
    },
    {
      month: 'Apr',
      referrals: 70,
      successful: 34,
      rewards: 17000,
    },
    {
      month: 'May',
      referrals: 81,
      successful: 39,
      rewards: 19500,
    },
    {
      month: 'Jun',
      referrals: 92,
      successful: 44,
      rewards: 22000,
    },
    {
      month: 'Jul',
      referrals: 105,
      successful: 53,
      rewards: 26500,
    },
    {
      month: 'Aug',
      referrals: 128,
      successful: 67,
      rewards: 33500,
    },
    {
      month: 'Sep',
      referrals: 201,
      successful: 115,
      rewards: 57500,
    },
  ];

  productPerformance: ProductPerformance[] = [
    {
      name: 'Life Cover',
      referrals: 326,
      successful: 184,
    },
    {
      name: 'Retirement Annuity',
      referrals: 207,
      successful: 103,
    },
    {
      name: 'Pension Preservation',
      referrals: 148,
      successful: 76,
    },
    {
      name: 'Retrenchment Planning',
      referrals: 84,
      successful: 39,
    },
    {
      name: 'Last Will & Testament',
      referrals: 77,
      successful: 29,
    },
  ];

  topReferrers: TopReferrer[] = [
    {
      position: 1,
      name: 'Nomsa Dlamini',
      initials: 'ND',
      code: 'NOMSA24',
      referrals: 18,
      successful: 12,
      rewards: 6000,
    },
    {
      position: 2,
      name: 'Lerato Molefe',
      initials: 'LM',
      code: 'LERATO12',
      referrals: 15,
      successful: 10,
      rewards: 5000,
    },
    {
      position: 3,
      name: 'Bongani Nkosi',
      initials: 'BN',
      code: 'BONGANI08',
      referrals: 12,
      successful: 8,
      rewards: 4000,
    },
    {
      position: 4,
      name: 'Zanele Dube',
      initials: 'ZD',
      code: 'ZANELE21',
      referrals: 9,
      successful: 5,
      rewards: 2500,
    },
    {
      position: 5,
      name: 'Nokuthula Cele',
      initials: 'NC',
      code: 'NOKU31',
      referrals: 7,
      successful: 4,
      rewards: 2000,
    },
  ];

  referralSources: ReferralSource[] = [
    {
      name: 'Existing Customers',
      referrals: 379,
      percentage: 45,
    },
    {
      name: 'A-Winners',
      referrals: 194,
      percentage: 23,
    },
    {
      name: 'Social Media',
      referrals: 118,
      percentage: 14,
    },
    {
      name: 'Events',
      referrals: 76,
      percentage: 9,
    },
    {
      name: 'Newsletter / Blog',
      referrals: 42,
      percentage: 5,
    },
    {
      name: 'Other',
      referrals: 33,
      percentage: 4,
    },
  ];

  get totalReferrals(): number {
    return 842;
  }

  get successfulReferrals(): number {
    return 431;
  }

  get conversionRate(): number {
    return Math.round(
      (this.successfulReferrals /
        this.totalReferrals) *
      100
    );
  }

  get rewardsPaid(): number {
    return 174000;
  }

  get rewardsDue(): number {
    return 14000;
  }

  get maxMonthlyReferrals(): number {
    return Math.max(
      ...this.monthlyPerformance.map(
        (item) => item.referrals
      )
    );
  }

  get maxProductReferrals(): number {
    return Math.max(
      ...this.productPerformance.map(
        (item) => item.referrals
      )
    );
  }

  getMonthlyHeight(
    value: number
  ): number {
    return Math.max(
      8,
      (value /
        this.maxMonthlyReferrals) *
      100
    );
  }

  getSuccessfulHeight(
    value: number
  ): number {
    return Math.max(
      5,
      (value /
        this.maxMonthlyReferrals) *
      100
    );
  }

  getProductPercentage(
    value: number
  ): number {
    return (
      value /
      this.maxProductReferrals
    ) * 100;
  }

  getProductConversion(
    product: ProductPerformance
  ): number {
    if (!product.referrals) {
      return 0;
    }

    return Math.round(
      (product.successful /
        product.referrals) *
      100
    );
  }

  exportReport(): void {
    console.log(
      'Export report:',
      this.selectedPeriod
    );
  }
}