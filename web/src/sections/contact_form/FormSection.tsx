import React from "react";
import JTree from "@util/JTree";
import { Container } from "react-bootstrap";
import { useSections } from "@sections/useSections";
import ContactForm from "./ContactForm";
import FormWrapper from "./FormWrapper";
import QuestionWrap from "./QuestionWrap";

const preBuiltSections = {
  contact: <ContactForm />,
};

const FormSection: React.FC<SectionPickerI> = ({ section, index }) => {
  const { displaySections } = useSections();
  const { send_to_email, questions, success_page } = section;

  const getQuestionOrSection = (item) => {
    switch (item._type) {
      case "form_prebuilt_section":
        return preBuiltSections[item.section_type];
      case "inner_sections": {
        return displaySections(item.sections);
      }
      default:
        return <QuestionWrap question={item} />;
    }
  };
  return (
    <FormWrapper
      send_to_email={send_to_email}
      success_page_slug={success_page?.slug.current}
    >
      {questions.map((q) => getQuestionOrSection(q))}
      {/* <JTree data={section} /> */}
    </FormWrapper>
  );
};

export default FormSection;
