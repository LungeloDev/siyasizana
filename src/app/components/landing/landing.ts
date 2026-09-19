import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Product {
  title: string;
  description: string;
  icon: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  mobileMenuOpen = false;

  products: Product[] = [
    {
      title: 'Life Cover',
      description: 'Protect the people who matter most.',
      icon: 'heart',
    },
    {
      title: 'Pension Preservation',
      description: 'Protect your retirement savings.',
      icon: 'chart',
    },
    {
      title: 'Retirement Annuity',
      description: 'Plan for a secure tomorrow.',
      icon: 'leaf',
    },
    {
      title: 'Retrenchment Planning',
      description: 'Prepare confidently for change.',
      icon: 'people',
    },
    {
      title: 'Last Will & Testament',
      description: 'Protect the legacy you leave behind.',
      icon: 'document',
    },
  ];

  steps: Step[] = [
    {
      number: '01',
      title: 'Refer',
      description:
        'Refer a family member, friend or colleague who may benefit from financial advice.',
      icon: 'people',
    },
    {
      number: '02',
      title: 'We Assist',
      description:
        'ThuthukaSA contacts your referral and assists them with their financial needs.',
      icon: 'document',
    },
    {
      number: '03',
      title: 'They Activate',
      description:
        'Your referral takes up a qualifying product and successfully pays three premiums.',
      icon: 'check',
    },
    {
      number: '04',
      title: 'You Earn',
      description:
        'Once the referral qualifies, your R500 referral fee becomes payable.',
      icon: 'gift',
    },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  scrollTo(sectionId: string): void {
    this.closeMobileMenu();

    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}