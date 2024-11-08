"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.scss";
import { useFormState } from "react-dom";
import { FC } from "react";

export const LoginForm: FC = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};
