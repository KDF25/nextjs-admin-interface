export interface IUser {
    id: string,
    username: string;
    email: string;
    createdAt: string; 
    password: string,
    img: string,
    isAdmin: boolean,
    isActive: boolean,
}

export interface IUserData {
    username?: string;
    email?: string | null;
    password?: string;
    phone?: string;
    address?: string;
    isAdmin?: boolean;
    isActive?: boolean;
  }
  