import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import BarChartIcon from '@mui/icons-material/BarChart';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';

export const corporateLinks: any = [
    {
        label: 'Overview',
        path: '/corporate/dashboard',
        icon: () => <DashboardIcon />,
    },
    {
        label: 'Listings',
        path: '/corporate/listings',
        icon: () => <ViewListIcon />,
    },
    {
        label: 'Reports',
        path: '/corporate/reports',
        icon: () => <BarChartIcon />,
    },
    {
        label: 'Insights',
        path: '/corporate/insights',
        icon: () => <InsightsIcon />,
    },
    {
        label: 'Agency',
        path: '/corporate/agency',
        icon: () => <GroupIcon />,
    },
    {
        label: 'Agency Website',
        path: '/corporate/agencyWebsite',
        icon: () => <PublicIcon />,
    },

    {
        label: 'Add Property',
        path: '/corporate/addproperty',
        icon: () => <AddIcon />,
    },
];
