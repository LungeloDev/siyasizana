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
                    import('./features/admin/referrals/referrals')
                        .then(m => m.Referrals),
                title: 'Referrals | Siyasizana',
            },

            {
                path: 'referrers',
                loadComponent: () =>
                    import('./features/admin/referrers/referrers')
                        .then(m => m.Referrers),
                title: 'Referrers | Siyasizana',
            },

            {
                path: 'products',
                loadComponent: () =>
                    import('./features/admin/products/products')
                        .then(m => m.Products),
                title: 'Products | Siyasizana',
            },

            {
                path: 'reports',
                loadComponent: () =>
                    import('./features/admin/reports/reports')
                        .then(m => m.Reports),
                title: 'Reports | Siyasizana',
            },

            {
                path: 'users',
                loadComponent: () =>
                    import('./features/admin/users/users')
                        .then(m => m.Users),
                title: 'Users | Siyasizana',
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
                        './features/referrer/new/new'
                    ).then(m => m.New),
                title: 'Make a Referral | Siyasizana',
            },

            {
                path: 'referrals',
                loadComponent: () =>
                    import(
                        './features/referrer/referrals/referrals'
                    ).then(m => m.Referrals),

                title: 'My Referrals | Siyasizana',
            },

            // {
            //     path: 'rewards',
            //     loadComponent: () =>
            //         import(
            //             './features/referrer/rewards/rewards'
            //         ).then(m => m.Rewards),

            //     title: 'My Rewards | Siyasizana',
            // },

            {
                path: 'profile',
                loadComponent: () =>
                    import(
                        './features/referrer/profile/profile'
                    ).then(m => m.Profile),

                title: 'My Profile | Siyasizana',
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