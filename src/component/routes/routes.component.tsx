import { SupportPage } from "./../../pages/support-page/support-page.component";
import { MerchantPage } from "./../../pages/merchant-page/merchant-page.component";
import { FAQPage } from "./../../pages/faq/faq.component";

const routes = [
  {
    path: "/",
    exact: true,
    component: MerchantPage,
  },
  {
    path: "/support",
    component: SupportPage,
  },
  {
    path: "/faq",
    component: FAQPage,
  },
];

export default routes;
