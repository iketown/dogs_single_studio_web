import { useRouter } from "next/router";
import { useBreederCtx } from "../components/layout/BreederContext";
import { isDemo } from "../../util/router/demo_settings";

export const useDemo = () => {
  const router = useRouter();
  const query = router.query;

  const breeder_slug = query.breeder_slug;

  const mixedPush = (href: string, as: string) => {
    const mixedHref = isDemo ? `/demo/[breeder_slug]${href}` : href;
    const mixedAs = isDemo ? `/demo/${breeder_slug}${as}` : href;
    router.push(mixedHref, mixedAs);
  };
  return { isDemo, mixedPush };
};
