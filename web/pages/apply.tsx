import BlockContent from "@components/blockContent/BlockContent";
import Layout from "@components/layout/Layout";
import UnderConstruction from "@components/layout/UnderConstruction";
import ContactForm from "@sections/contact_form/ContactForm";
import FormWrapper from "@sections/contact_form/FormWrapper";
import QuestionWrap from "@sections/contact_form/QuestionWrap";
import { useSections } from "@sections/useSections";
import { GetServerSideProps } from "next";
import React from "react";
import { Container } from "react-bootstrap";

import { getApplyPageData } from "@sanityQueries/applyPageQ";

const ApplyPage = ({
  application_form_standard,
  layout_info,
  form_success,
}) => {
  const { displaySections } = useSections();
  if (!application_form_standard)
    return <UnderConstruction {...{ layout_info }} />;
  // each question is either stock or custom
  // adding this from single site side.   hi.
  const {
    custom_questions = [],
    stock_questions = [],
    pre_text,
    post_text,
    pre_sections,
    pre_sections_refs,
    post_sections,
  } = application_form_standard;

  const questions = stock_questions.map(
    (q, index) => q || custom_questions[index]
  );
  const requiredQuestions = questions
    .filter((q) => q.required)
    .map((q) => q.question_main);
  const pre_sections_all =
    pre_sections_refs?.map(
      (section, index) => section || pre_sections[index]
    ) || [];
  return (
    <Layout {...{ layout_info }}>
      {displaySections(pre_sections_all)}
      <Container>
        <div style={{ margin: "2rem 0" }}>
          {pre_text && <BlockContent blocks={pre_text} />}
          <FormWrapper
            requiredQuestions={requiredQuestions}
            form_success={form_success}
          >
            {questions?.map((question, index) => {
              if (question._type === "form_contact_section")
                return <ContactForm key={index} />;

              return <QuestionWrap key={index} {...{ question }} />;
            })}
          </FormWrapper>
          {post_text && <BlockContent blocks={post_text} />}
        </div>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await getApplyPageData();
  return { props: data };
};

export default ApplyPage;
