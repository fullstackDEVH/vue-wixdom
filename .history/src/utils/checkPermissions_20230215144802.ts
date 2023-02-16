import { DEFINE_ROLES } from "@/constants";
const checkPermissions = (to: any) => {
  const isAuthenticated = true;
  //  return roles current user
  const requiredRoles = to.meta.roles;
  console.log(requiredRoles);
  if (!isAuthenticated) {
    return { name: "auth" };
  } else if (
    !requiredRoles.some((role: string) => DEFINE_ROLES.includes(role))
  ) {
    return { name: "community" };
  }
};

export default checkPermissions;
