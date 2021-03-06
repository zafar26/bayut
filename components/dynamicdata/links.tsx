import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import BarChartIcon from '@mui/icons-material/BarChart';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
//
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import DomainAddIcon from '@mui/icons-material/DomainAdd';

export const corporateLinks: any = [
    // {
    //     label: 'Overview',
    //     path: '/corporate/dashboard',
    //     icon: () => <DashboardIcon />,
    // },
    {
        label: 'Manage Property Listings',
        path: '/corporate/listings',
        icon: () => <ViewListIcon />,
    },
    {
        label: 'Add Property',
        path: '/corporate/addproperty',
        icon: () => <DomainAddIcon />,
    },
    // {
    //     label: 'Reports',
    //     path: '/corporate/reports',
    //     icon: () => <BarChartIcon />,
    // },
    // {
    //     label: 'Insights',
    //     path: '/corporate/insights',
    //     icon: () => <InsightsIcon />,
    // },
    {
        label: 'User Listings',
        path: '/corporate/agency',
        icon: () => <GroupIcon />,
    },
    {
        label: 'Add User',
        path: '/corporate/agency/adduser',
        icon: () => <GroupAddIcon />,
    },
    // {
    //     label: 'Agency Wbsite',
    //     path: '/corporate/agencyWebsite',
    //     icon: () => <PublicIcon />,
    // },

    
];

export const clientLinks: any = [
    {
        label: 'Home',
        path: '/',
        icon: () => <HomeIcon />,
    },
    {
        label: 'Properties',
        path: '/property',
        icon: () => <ApartmentIcon />,
    },
    {
        label: 'Contact Us',
        path: '/contactus',
        icon: () => <ContactPhoneIcon />,
    },
    {
        label: 'Login',
        authLabel: 'My Account',
        authPath: '/corporate/myaccount',
        path: '/corporate/login',
        icon: () => <SupervisedUserCircleIcon />,
    },
];
