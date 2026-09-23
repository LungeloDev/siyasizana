import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ProductStatus = 'Active' | 'Inactive';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;

  referralFee: number;

  totalReferrals: number;
  successfulReferrals: number;

  status: ProductStatus;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  searchTerm = '';
  selectedStatus = 'All';

  statuses = [
    'All',
    'Active',
    'Inactive',
  ];

  products: Product[] = [
    {
      id: 'PRD-001',
      name: 'Life Cover',
      description:
        'Life cover solutions available to ThuthukaSA customers.',
      category: 'Protection',
      icon: 'shield',

      referralFee: 500,

      totalReferrals: 326,
      successfulReferrals: 184,

      status: 'Active',
    },

    {
      id: 'PRD-002',
      name: 'Pension Preservation',
      description:
        'Preservation solutions for customers moving or protecting retirement savings.',
      category: 'Retirement',
      icon: 'wallet',

      referralFee: 500,

      totalReferrals: 148,
      successfulReferrals: 76,

      status: 'Active',
    },

    {
      id: 'PRD-003',
      name: 'Retirement Annuity',
      description:
        'Long-term retirement planning solutions for qualifying customers.',
      category: 'Retirement',
      icon: 'chart',

      referralFee: 500,

      totalReferrals: 207,
      successfulReferrals: 103,

      status: 'Active',
    },

    {
      id: 'PRD-004',
      name: 'Retrenchment Planning',
      description:
        'Financial planning support for customers navigating retrenchment.',
      category: 'Financial Planning',
      icon: 'briefcase',

      referralFee: 500,

      totalReferrals: 84,
      successfulReferrals: 39,

      status: 'Active',
    },

    {
      id: 'PRD-005',
      name: 'Last Will and Testament',
      description:
        'Estate planning support to help customers prepare their last will and testament.',
      category: 'Estate Planning',
      icon: 'document',

      referralFee: 500,

      totalReferrals: 77,
      successfulReferrals: 29,

      status: 'Active',
    },
  ];

  get filteredProducts(): Product[] {
    const search =
      this.searchTerm
        .trim()
        .toLowerCase();

    return this.products.filter(
      (product) => {
        const matchesSearch =
          !search ||
          product.name
            .toLowerCase()
            .includes(search) ||
          product.category
            .toLowerCase()
            .includes(search) ||
          product.id
            .toLowerCase()
            .includes(search);

        const matchesStatus =
          this.selectedStatus === 'All' ||
          product.status ===
          this.selectedStatus;

        return (
          matchesSearch &&
          matchesStatus
        );
      }
    );
  }

  get totalProducts(): number {
    return this.products.length;
  }

  get activeProducts(): number {
    return this.products.filter(
      (product) =>
        product.status === 'Active'
    ).length;
  }

  get totalReferrals(): number {
    return this.products.reduce(
      (total, product) =>
        total + product.totalReferrals,
      0
    );
  }

  get successfulReferrals(): number {
    return this.products.reduce(
      (total, product) =>
        total +
        product.successfulReferrals,
      0
    );
  }

  getConversionRate(
    product: Product
  ): number {
    if (!product.totalReferrals) {
      return 0;
    }

    return Math.round(
      (
        product.successfulReferrals /
        product.totalReferrals
      ) * 100
    );
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = 'All';
  }

  hasActiveFilters(): boolean {
    return (
      this.searchTerm.trim() !== '' ||
      this.selectedStatus !== 'All'
    );
  }

  getStatusClass(
    status: ProductStatus
  ): string {
    return status === 'Active'
      ? 'status-active'
      : 'status-inactive';
  }

  editProduct(
    product: Product
  ): void {
    console.log(
      'Edit product:',
      product
    );
  }

  addProduct(): void {
    console.log('Add product');
  }
}