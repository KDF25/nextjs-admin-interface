import { paths } from "./routes";
import { ISidebarItem } from "@/app/types";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";

export const sidebarItems: ISidebarItem[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: paths.dashboard,
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: paths.users,
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: paths.products,
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: paths.transactions,
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: paths.revenue,
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: paths.reports,
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: paths.teams,
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: paths.settings,
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: paths.help,
        icon: <MdHelpCenter />,
      },
    ],
  },
];
