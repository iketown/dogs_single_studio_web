import { useRouter } from "next/router";
import { useBreederCtx } from "../components/layout/BreederContext";

export const useDemo = () => {
  const router = useRouter();
  const isDemo = router.route.includes("/demo/");
  const query = router.query;

  const breeder_slug = query.breeder_slug;

  const mixedPush = (href: string, as: string) => {
    const mixedHref = isDemo ? `/demo/[breeder_slug]${href}` : href;
    const mixedAs = isDemo ? `/demo/${breeder_slug}${as}` : href;
    router.push(mixedHref, mixedAs);
  };
  return { isDemo, mixedPush };
};
