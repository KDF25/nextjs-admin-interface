"use client";

import { FC } from "react";
import styles from "./loginForm.module.scss";

export const LoginForm: FC = () => {
  return (
    <form className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
    </form>
  );
};
