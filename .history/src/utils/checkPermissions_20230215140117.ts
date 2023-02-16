import { DEFINE_ROLES } from "@/constants";
const checkPermissions = (to: any) => {
  const isAuthenticated = true; // replace with your authentication check
  const requiredRoles = to.meta.roles;
  if (!isAuthenticated) {
    return { name: "login" }; // redirect to the login page if the user is not authenticated
  } else if (!requiredRoles.some((role) => userRoles.includes(role))) {
    return { name: "home" }; // redirect to the home page if the user does not have the necessary roles
  } // roles required to access the route
};

export default checkPermissions;
