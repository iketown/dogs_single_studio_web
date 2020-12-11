export const validate = (requiredQuestions: string[]) => (values) => {
  const errors: any = {};
  const contactErrors: any = {};
  const { contact } = values;
  if (!contact?.email) contactErrors.email = "Email is Required";
  if (contact?.email && contact?.email?.trim() !== contact?.email2?.trim()) {
    contactErrors.email2 = "Emails must match";
  }
  errors.contact = contactErrors;
  requiredQuestions.forEach((q) => {
    if (!values[q]) errors[q] = "required";
  });
  return errors;
};
