import { fetchUser, updateUser } from "@/app/lib";
import styles from "@/app/ui/dashboard/users/userId/userId.module.scss";
import avatar from "@/public/noavatar.png";
import Image from "next/image";
import { FC } from "react";

interface UserIdPageProps {
  params: { id: string };
}

const UserIdPage: FC<UserIdPageProps> = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || avatar} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" defaultValue={String(user.isAdmin)}>
              Yes
            </option>
            <option value="false" defaultValue={String(!user.isAdmin)}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" defaultValue={String(user.isActive)}>
              Yes
            </option>
            <option value="false" defaultValue={String(!user.isActive)}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserIdPage;
