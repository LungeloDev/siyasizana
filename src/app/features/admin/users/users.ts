import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type UserRole =
  | 'Administrator'
  | 'Programme Manager'
  | 'Adviser'
  | 'Viewer';

type UserStatus =
  | 'Active'
  | 'Inactive'
  | 'Pending';

interface AdminUser {
  id: string;

  firstName: string;
  surname: string;

  email: string;
  mobile: string;

  role: UserRole;
  status: UserStatus;

  lastLogin: string;
  createdDate: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  searchTerm = '';

  selectedRole = 'All';
  selectedStatus = 'All';

  roles = [
    'All',
    'Administrator',
    'Programme Manager',
    'Adviser',
    'Viewer',
  ];

  statuses = [
    'All',
    'Active',
    'Inactive',
    'Pending',
  ];

  users: AdminUser[] = [
    {
      id: 'USR-001',
      firstName: 'Phume',
      surname: 'Mthembu',
      email: 'phume@thuthuka-sa.co.za',
      mobile: '082 445 7812',
      role: 'Administrator',
      status: 'Active',
      lastLogin: 'Today, 08:42',
      createdDate: '12 Jan 2026',
    },
    {
      id: 'USR-002',
      firstName: 'Nomfundo',
      surname: 'Dlamini',
      email: 'nomfundo@thuthuka-sa.co.za',
      mobile: '073 881 2290',
      role: 'Programme Manager',
      status: 'Active',
      lastLogin: 'Today, 07:58',
      createdDate: '18 Jan 2026',
    },
    {
      id: 'USR-003',
      firstName: 'Sipho',
      surname: 'Nkosi',
      email: 'sipho@thuthuka-sa.co.za',
      mobile: '071 442 9031',
      role: 'Adviser',
      status: 'Active',
      lastLogin: 'Yesterday, 16:21',
      createdDate: '02 Feb 2026',
    },
    {
      id: 'USR-004',
      firstName: 'Thando',
      surname: 'Mokoena',
      email: 'thando@thuthuka-sa.co.za',
      mobile: '076 337 1182',
      role: 'Adviser',
      status: 'Active',
      lastLogin: '21 Sep 2026, 14:32',
      createdDate: '16 Feb 2026',
    },
    {
      id: 'USR-005',
      firstName: 'Lerato',
      surname: 'Zulu',
      email: 'lerato@thuthuka-sa.co.za',
      mobile: '083 621 4472',
      role: 'Viewer',
      status: 'Pending',
      lastLogin: 'Never',
      createdDate: '20 Sep 2026',
    },
    {
      id: 'USR-006',
      firstName: 'Ayanda',
      surname: 'Cele',
      email: 'ayanda@thuthuka-sa.co.za',
      mobile: '079 220 6643',
      role: 'Adviser',
      status: 'Inactive',
      lastLogin: '03 Aug 2026, 10:15',
      createdDate: '11 Mar 2026',
    },
  ];

  get filteredUsers(): AdminUser[] {
    const search =
      this.searchTerm
        .trim()
        .toLowerCase();

    return this.users.filter((user) => {
      const matchesSearch =
        !search ||
        user.id
          .toLowerCase()
          .includes(search) ||
        user.firstName
          .toLowerCase()
          .includes(search) ||
        user.surname
          .toLowerCase()
          .includes(search) ||
        user.email
          .toLowerCase()
          .includes(search) ||
        user.mobile
          .toLowerCase()
          .includes(search) ||
        user.role
          .toLowerCase()
          .includes(search);

      const matchesRole =
        this.selectedRole === 'All' ||
        user.role === this.selectedRole;

      const matchesStatus =
        this.selectedStatus === 'All' ||
        user.status === this.selectedStatus;

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );
    });
  }

  get totalUsers(): number {
    return this.users.length;
  }

  get activeUsers(): number {
    return this.users.filter(
      (user) =>
        user.status === 'Active'
    ).length;
  }

  get administrators(): number {
    return this.users.filter(
      (user) =>
        user.role === 'Administrator'
    ).length;
  }

  get pendingUsers(): number {
    return this.users.filter(
      (user) =>
        user.status === 'Pending'
    ).length;
  }

  getInitials(
    user: AdminUser
  ): string {
    return (
      user.firstName.charAt(0) +
      user.surname.charAt(0)
    ).toUpperCase();
  }

  hasActiveFilters(): boolean {
    return (
      this.searchTerm.trim() !== '' ||
      this.selectedRole !== 'All' ||
      this.selectedStatus !== 'All'
    );
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedRole = 'All';
    this.selectedStatus = 'All';
  }

  getStatusClass(
    status: UserStatus
  ): string {
    switch (status) {
      case 'Active':
        return 'status-active';

      case 'Inactive':
        return 'status-inactive';

      case 'Pending':
        return 'status-pending';

      default:
        return '';
    }
  }

  getRoleClass(
    role: UserRole
  ): string {
    switch (role) {
      case 'Administrator':
        return 'role-admin';

      case 'Programme Manager':
        return 'role-manager';

      case 'Adviser':
        return 'role-adviser';

      case 'Viewer':
        return 'role-viewer';

      default:
        return '';
    }
  }

  addUser(): void {
    console.log('Add user');
  }

  editUser(
    user: AdminUser
  ): void {
    console.log(
      'Edit user:',
      user
    );
  }

  toggleUserStatus(
    user: AdminUser
  ): void {
    if (user.status === 'Pending') {
      user.status = 'Active';
      return;
    }

    user.status =
      user.status === 'Active'
        ? 'Inactive'
        : 'Active';
  }
}