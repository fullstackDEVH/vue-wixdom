import { DEFINE_ROLES } from "@/constants";
const checkPermissions = (to: any) => {
  const isAuthenticated = true;

  const requiredRoles = to.meta.roles;
  //  return roles current user
  if (!isAuthenticated) {
    return { name: "auth" };
  } else if (
    !requiredRoles.some((role: string) => DEFINE_ROLES.includes(role))
  ) {
    return { name: "community" };
  }
};

export default checkPermissions;
