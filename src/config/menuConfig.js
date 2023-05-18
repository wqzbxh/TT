const menuItems = [
    {
        id:1,
        icon: "dashboard2",
        label: "Dashboard",
        href: "/home",
    },
    {
        id:2,
        icon: "zhengzaijinhang1",
        label: "TimeTracker",
        href: "/tracker",
    },
    {
        id:3,
        icon: "xiangmu2",
        label: "Project",
        href: "/projects",
    },
    {
        id:4,
        icon: "yuangong",
        label: "Team",
        href: "/team",
    },
    {
        id:5,
        icon: "yuangong",
        label: "Customer",
        href: "/customer",
    },
    {
        id:6,
        icon: "tongji",
        label: "Statistics",
        href: "/statistics",
    },
    {
        id:7,
        icon: "jihua2",
        label: "Planne",
        href: "/planne",
        children:[{
            id:8,
            icon: "settings-fill",
            label: "PlanneChildren1",
            href: "planne_time",
        },{
            id:9,
            icon: "settings-fill",
            label: "PlanneChildren2",
            href: "/planne_task",
            
        }]
    },
    {
        id:10,
        icon: "profilefill",
        label: "Profile",
        href: "/customer",
        children:[{
            id:1,
            icon: "settings-fill",
            label: "ProfileChildren1",
            href: "#",
        },{
            id:11,
            icon: "settings-fill",
            label: "ProfileChildren2",
            href: "#",
        }]
    },
    {
        id:12,
        icon: "settings-fill",
        label: "Settings",
        href: "/setting",
    },
];

export default menuItems;