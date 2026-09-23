import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type RewardStatus = 'Paid' | 'Qualified' | 'Pending';

interface Reward {
  id: string;
  referralName: string;
  initials: string;
  qualifiedDate: string;
  paymentDate?: string;
  amount: number;
  status: RewardStatus;
}

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rewards.html',
  styleUrl: './rewards.css',
})
export class Rewards {
  rewards: Reward[] = [
    {
      id: 'REF-0017',
      referralName: 'Nandi M.',
      initials: 'NM',
      qualifiedDate: '25 Jul 2026',
      paymentDate: '31 Jul 2026',
      amount: 500,
      status: 'Paid',
    },
    {
      id: 'REF-0012',
      referralName: 'Lerato P.',
      initials: 'LP',
      qualifiedDate: '20 Jul 2026',
      paymentDate: '31 Jul 2026',
      amount: 500,
      status: 'Paid',
    },
    {
      id: 'REF-0005',
      referralName: 'Zanele D.',
      initials: 'ZD',
      qualifiedDate: '23 Jun 2026',
      paymentDate: '30 Jun 2026',
      amount: 500,
      status: 'Paid',
    },
    {
      id: 'REF-0028',
      referralName: 'Ayanda Z.',
      initials: 'AZ',
      qualifiedDate: '16 Sep 2026',
      amount: 500,
      status: 'Qualified',
    },
    {
      id: 'REF-0039',
      referralName: 'Sipho K.',
      initials: 'SK',
      qualifiedDate: 'Pending',
      amount: 500,
      status: 'Pending',
    },
    {
      id: 'REF-0009',
      referralName: 'Bongani N.',
      initials: 'BN',
      qualifiedDate: 'Pending',
      amount: 500,
      status: 'Pending',
    },
  ];

  get paidRewards(): number {
    return this.rewards
      .filter((reward) => reward.status === 'Paid')
      .reduce((total, reward) => total + reward.amount, 0);
  }

  get qualifiedRewards(): number {
    return this.rewards
      .filter((reward) => reward.status === 'Qualified')
      .reduce((total, reward) => total + reward.amount, 0);
  }

  get pendingRewards(): number {
    return this.rewards
      .filter((reward) => reward.status === 'Pending')
      .reduce((total, reward) => total + reward.amount, 0);
  }

  get totalRewardValue(): number {
    return (
      this.paidRewards +
      this.qualifiedRewards +
      this.pendingRewards
    );
  }

  get paidCount(): number {
    return this.rewards.filter(
      (reward) => reward.status === 'Paid'
    ).length;
  }

  getStatusClass(status: RewardStatus): string {
    switch (status) {
      case 'Paid':
        return 'status-paid';

      case 'Qualified':
        return 'status-qualified';

      case 'Pending':
        return 'status-pending';

      default:
        return '';
    }
  }
}