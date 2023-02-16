import { DEFINE_ROLES } from "@/constants";
const checkPermissions = (to: any) => {
  const isAuthenticated = true; // replace with your authentication check
  const requiredRoles = to.meta.roles; // roles required to access the route
};

export default checkPermissions;
