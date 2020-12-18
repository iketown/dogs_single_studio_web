import Custom404 from "@components/404";
import PromoPage from "@pages/PromoPage";
import { isDemo as projectIsDemo } from "../../../deploy_settings/isDemo";

export const isDemo = projectIsDemo;
// isDemo tells useDemo hook which routes to use
// if true, turns off all non-demo routes
// if false, turns off all demo routes

export const DemoOnly = ({ children }) => {
  if (!isDemo) return <Custom404 />;
  return children;
};

export const NonDemoOnly = ({ children }) => {
  if (isDemo) return <PromoPage />;
  return children;
};
