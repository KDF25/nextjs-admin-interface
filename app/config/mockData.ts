import { IBarItem, ITransaction } from "../types";

export const transactionList: ITransaction[] = [
  { logo: "", name: "Alice", status: "Completed", date: "10.24.2024", amount: 3200 },
  { logo: "", name: "Bob", status: "Pending", date: "10.21.2024", amount: 1500 },
  { logo: "", name: "Charlie", status: "Canceled", date: "10.20.2024", amount: 4500 },
  { logo: "", name: "Diana", status: "Completed", date: "10.18.2024", amount: 2900 },
  { logo: "", name: "Eve", status: "Failed", date: "10.17.2024", amount: 1800 },
  { logo: "", name: "Frank", status: "Completed", date: "10.15.2024", amount: 6000 },
  { logo: "", name: "Grace", status: "Pending", date: "10.14.2024", amount: 3100 },
  { logo: "", name: "Hannah", status: "Canceled", date: "10.13.2024", amount: 2100 },
  { logo: "", name: "Ian", status: "Completed", date: "10.12.2024", amount: 3700 },
  { logo: "", name: "Jack", status: "Failed", date: "10.11.2024", amount: 5300 },
  ];

export const chartData =  [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];


export const rightBarItems: IBarItem[] = [
  {
    notification: "🔥 Available Now",
    title: "How to use the new version of the admin dashboard?",
    subtitle: "Takes 4 minutes to learn",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.",
    button: "Watch"
  },
  {
    notification: "🚀 Coming Soon",
    title: "New server actions are available, partial pre-rendering is coming up!",
    subtitle: "Boost your productivity",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.",
    button: "Learn"
  }

]