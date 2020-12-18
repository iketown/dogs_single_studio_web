export const addCategories = (categories) => (object) => {
  let newCategories;
  if (object.categories) {
    newCategories = [...object.categories, ...categories].filter(
      (cat, i, arr) => arr.findIndex((c) => c === cat) === i
    );
  } else {
    newCategories = categories;
  }
  return { ...object, categories: newCategories };
};
