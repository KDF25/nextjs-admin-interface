import { IBarItem, IProduct, ITransaction, IUser } from "../types";

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

export const usersData = [
  {
      username: "Bob Smith",
      email: "bob.smith@example.com",
      createdAt: "10.02.2024", 
      role: "User",
      status: "Inactive",
  },
  {
      username: "Charlie Brown",
      email: "charlie.brown@example.com",
      createdAt: "05.03.2024",
      role: "User",
      status: "Active",
  },
  {
      username: "Diana Prince",
      email: "diana.prince@example.com",
      createdAt: "20.04.2024",
      role: "Editor",
      status: "Pending",
  },
  {
      username: "Fiona Glenanne",
      email: "fiona.glenanne@example.com",
      createdAt: "15.06.2024",
      role: "User",
      status: "Active",
  },
  {
      username: "George Weasley",
      email: "george.weasley@example.com",
      createdAt: "01.07.2024",
      role: "User",
      status: "Inactive",
  },
  {
      username: "Hannah Baker",
      email: "hannah.baker@example.com",
      createdAt: "12.08.2024",
      role: "User",
      status: "Active",
  },
  {
      username: "Ian Malcolm",
      email: "ian.malcolm@example.com",
      createdAt: "25.09.2024",
      role: "Viewer",
      status: "Active",
  },
  {
      username: "Jane Doe",
      email: "jane.doe@example.com",
      createdAt: "10.10.2024",
      role: "User",
      status: "Pending",
  },
];


export const productsData: IProduct[] = [
  {
      title: "Samsung Galaxy S21 Smartphone",
      desc: "6.2-inch display, 8GB RAM, 128GB storage, triple camera",
      price: 699,
      createdAt: "15.03.2024",
      stock: 25,
  },
  {
      title: "Apple MacBook Air M1",
      desc: "13-inch Retina display, Apple M1 chip, 8GB RAM, 256GB SSD",
      price: 999,
      createdAt: "20.04.2024",
      stock: 15,
  },
  {
      title: "Sony WH-1000XM4 Wireless Headphones",
      desc: "Noise-canceling, 30 hours battery life, Bluetooth 5.0",
      price: 299,
      createdAt: "10.02.2024",
      stock: 40,
  },
  {
      title: "Dell XPS 13 Laptop",
      desc: "13.4-inch FHD+ display, Intel i7, 16GB RAM, 512GB SSD",
      price: 1199,
      createdAt: "05.05.2024",
      stock: 10,
  },
  {
      title: "Apple iPad Pro 11-inch",
      desc: "Liquid Retina display, Apple M1 chip, 128GB storage, Wi-Fi",
      price: 799,
      createdAt: "22.06.2024",
      stock: 30,
  },
  {
      title: "Canon EOS R6 Mirrorless Camera",
      desc: "20.1 MP, 4K video, 5-axis image stabilization",
      price: 2499,
      createdAt: "08.07.2024",
      stock: 5,
  },
  {
      title: "LG OLED55CXPUA 55-inch TV",
      desc: "4K OLED display, HDR, Dolby Vision, AI ThinQ",
      price: 1299,
      createdAt: "14.08.2024",
      stock: 7,
  },
  {
      title: "Microsoft Surface Pro 7",
      desc: "12.3-inch touch screen, Intel i5, 8GB RAM, 128GB SSD",
      price: 749,
      createdAt: "30.09.2024",
      stock: 20,
  },
  {
      title: "Bose SoundLink Revolve+ Speaker",
      desc: "Portable Bluetooth speaker, 360-degree sound, water-resistant",
      price: 299,
      createdAt: "18.10.2024",
      stock: 35,
  },
  {
      title: "GoPro HERO10 Action Camera",
      desc: "5.3K video, waterproof, HyperSmooth 4.0 stabilization",
      price: 499,
      createdAt: "25.10.2024",
      stock: 12,
  },
];