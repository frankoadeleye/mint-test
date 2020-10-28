import { Svg } from "./../../assets/svg";

const { wallet } = Svg;

export const SideBarPaymentData = [
  {
    icon: wallet,
    name: "All Payments",
    route: "/all-payments",
  },
];

export const SideBarOrdersData = [
  {
    icon: wallet,
    name: "All Payments",
    route: "/all-payments",
  },
  {
    icon: wallet,
    name: "Reconcilled Payments",
    route: "/reconcilled-payments",
  },
  {
    icon: wallet,
    name: "Un - Reconcilled Payments",
    route: "/unreconcilled-payments",
  },
];
