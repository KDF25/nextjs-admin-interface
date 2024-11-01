import { NextAuthConfig } from "next-auth";
import { paths } from "./config";

export const authConfig: NextAuthConfig = {
  providers: [],
  pages: {
    signIn: paths.login,
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith(paths.dashboard);

      // if (isOnDashboard) {
      //   return isLoggedIn;
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL(paths.dashboard, request.nextUrl));
      // }

      return true;
    },
  },
};
