import { FC, ReactNode } from "react";
import { paths } from "@/app/config";

export interface ISidebarItem{
    title:string;
    list: IListItem[]
}

export interface IListItem{
    title: string,
    path: paths,
    icon: ReactNode
}