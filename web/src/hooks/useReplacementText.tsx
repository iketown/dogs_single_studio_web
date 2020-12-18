import { useMemo, useCallback } from "react";
import { useBreederCtx } from "@components/layout/BreederContext";

export const useReplacementText = () => {
  const { breeder } = useBreederCtx();

  const getReplacementBlocks = useCallback((section: Section) => {
    const replacement_text_id = section.replacement_text_id;
    if (!replacement_text_id) return null;
    const replacementObj =
      replacement_text_id &&
      breeder.replacement_text?.find(
        (breederRT) => breederRT.replacement_text_id === replacement_text_id
      );
    const _replacementBlocks = replacementObj?.blockContent || null;
    return _replacementBlocks;
  }, []);

  return { getReplacementBlocks };
};
