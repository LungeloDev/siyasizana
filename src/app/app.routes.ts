import { Routes } from '@angular/router';

export const routes: Routes = [

    // Public
    {
        path: '',
        loadComponent: () =>
            import('./components/landing/landing')
                .then(m => m.Landing),
        title: 'Siyasizana | ThuthukaSA',
    },

    {
        path: 'login',
        loadComponent: () =>
            import('./components/auth/login/login')
                .then(m => m.Login),
        title: 'Login | Siyasizana',
    },

    {
        path: 'register',
        loadComponent: () =>
            import('./components/auth/register/register')
                .then(m => m.Register),
        title: 'Register | Siyasizana',
    },


    // Admin
    {
        path: 'admin',

        loadComponent: () =>
            import('./layouts/admin-layout/admin-layout')
                .then(m => m.AdminLayout),

        children: [

            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./features/admin/dashboard/dashboard')
                        .then(m => m.Dashboard),
                title: 'Dashboard | Siyasizana',
            },

            {
                path: 'referrals',
                loadComponent: () =>
                    import('./shared/feature-placeholder/feature-placeholder')
                        .then(m => m.FeaturePlaceholder),

                data: {
                    title: 'Referrals',
                    eyebrow: 'Referral Management',
                    audience: 'admin',
                    description:
                        'Manage and track referrals submitted through the Siyasizana Referral Programme.',
                },
            },

            {
                path: 'referrers',
                loadComponent: () =>
                    import('./shared/feature-placeholder/feature-placeholder')
                        .then(m => m.FeaturePlaceholder),

                data: {
                    title: 'Referrers',
                    eyebrow: 'Customer Management',
                    audience: 'admin',
                    description:
                        'Manage participating ThuthukaSA customers and their referral activity.',
                },
            },

            {
                path: 'products',
                loadComponent: () =>
                    import('./shared/feature-placeholder/feature-placeholder')
                        .then(m => m.FeaturePlaceholder),

                data: {
                    title: 'Products',
                    eyebrow: 'Product Management',
                    audience: 'admin',
                    description:
                        'Manage the financial products associated with the Siyasizana Referral Programme.',
                },
            },

            {
                path: 'reports',
                loadComponent: () =>
                    import('./shared/feature-placeholder/feature-placeholder')
                        .then(m => m.FeaturePlaceholder),

                data: {
                    title: 'Reports & Analytics',
                    eyebrow: 'Programme Insights',
                    audience: 'admin',
                    description:
                        'View referral performance, conversions, rewards and programme insights.',
                },
            },

            {
                path: 'users',
                loadComponent: () =>
                    import('./shared/feature-placeholder/feature-placeholder')
                        .then(m => m.FeaturePlaceholder),

                data: {
                    title: 'Users',
                    eyebrow: 'Access Management',
                    audience: 'admin',
                    description:
                        'Manage authorised users who have access to the Siyasizana management portal.',
                },
            },

            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },

        ],
    },

    // Referrer
    {
        path: 'referrer',

        loadComponent: () =>
            import('./layouts/referrer-layout/referrer-layout')
                .then(m => m.ReferrerLayout),

        children: [

            {
                path: 'dashboard',
                loadComponent: () =>
                    import(
                        './features/referrer/dashboard/dashboard'
                    ).then(m => m.ReferrerDashboard),

                title: 'My Dashboard | Siyasizana',
            },

            {
                path: 'new',
                loadComponent: () =>
                    import(
                        './shared/feature-placeholder/feature-placeholder'
                    ).then(m => m.FeaturePlaceholder),

                data: {
                    title: 'Make a Referral',
                    eyebrow: 'New Referral',
                    audience: 'referrer',
                    description:
                        'Refer a family member, friend or colleague to ThuthukaSA.',
                },
            },

            {
                path: 'referrals',
                loadComponent: () =>
                    import(
                        './shared/feature-placeholder/feature-placeholder'
                    ).then(m => m.FeaturePlaceholder),

                data: {
                    title: 'My Referrals',
                    eyebrow: 'Referral Activity',
                    audience: 'referrer',
                    description:
                        'View and follow the progress of referrals you have submitted.',
                },
            },

            {
                path: 'rewards',
                loadComponent: () =>
                    import(
                        './shared/feature-placeholder/feature-placeholder'
                    ).then(m => m.FeaturePlaceholder),

                data: {
                    title: 'My Rewards',
                    eyebrow: 'Siyasizana Rewards',
                    audience: 'referrer',
                    description:
                        'Track qualifying, pending and paid Siyasizana referral rewards.',
                },
            },

            {
                path: 'profile',
                loadComponent: () =>
                    import(
                        './shared/feature-placeholder/feature-placeholder'
                    ).then(m => m.FeaturePlaceholder),

                data: {
                    title: 'My Profile',
                    eyebrow: 'My Account',
                    audience: 'referrer',
                    description:
                        'Manage your Siyasizana account and personal information.',
                },
            },

            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },

        ],
    },

    // Fallback
    {
        path: '**',
        redirectTo: '',
    },

];