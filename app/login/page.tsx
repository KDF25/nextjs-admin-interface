import styles from "@/app/ui/login/login.module.scss";
import { FC } from "react";
import { LoginForm } from "@/app/ui";

const LoginPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
