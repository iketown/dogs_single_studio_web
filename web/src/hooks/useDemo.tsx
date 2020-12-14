import { useRouter } from "next/router";

export const useDemo = () => {
  const router = useRouter();
  const isDemo = router.route.includes("/demo/");
  return { isDemo };
};
