import MultiLink from "@util/router/MultiLink";

export const useParentLinks = () => {
  const getParentLink = (parent: {
    slug: { current: string };
    name: string;
  }) => {
    return (
      <MultiLink href={`/dog/[dog_slug]`} as={`/dog/${parent.slug.current}`}>
        <a>{parent.name}</a>
      </MultiLink>
    );
  };
  const getExternalParentLink = (parent: { link: string; name: string }) => {
    return (
      <a href={parent.link} target="_blank">
        {parent.name}
      </a>
    );
  };
  const getMomLink = (litter) => {
    const momRef = litter.dam_ref;
    const momRefExt = litter.dam_ext_ref;
    const momString = litter.dam_string;
    return momRef
      ? getParentLink(momRef)
      : momRefExt
      ? getExternalParentLink(momRefExt)
      : momString;
  };

  const getDadLink = (litter) => {
    const dadRef = litter.sire_ref;
    const dadRefExt = litter.sire_ext_ref;
    const dadString = litter.sire_string;
    return dadRef
      ? getParentLink(dadRef)
      : dadRefExt
      ? getExternalParentLink(dadRefExt)
      : dadString;
  };

  return {
    getParentLink,
    getExternalParentLink,
    getMomLink,
    getDadLink,
  };
};
