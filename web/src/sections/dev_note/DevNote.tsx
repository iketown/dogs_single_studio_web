import BlockContent from "@components/blockContent/BlockContent";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import styled from "styled-components";

const QuestionMark = styled.div<{ show: boolean }>`
  overflow: visible;
  position: relative;
  .question {
    position: absolute;
    z-index: 5;
    top: 0;
    right: 2rem;
    font-size: 2rem;
    transform: ${(p) =>
      p.show ? "translateY(-50%) scale(1)" : "translateY(-50%) scale(0)"};
    color: #00ff08;
    cursor: pointer;
    transition: 0.3s all;
    :hover {
      opacity: 1;
      transform: translateY(-50%) scale(1.4);
    }
  }
`;
const DevNote: React.FC<SectionPickerI> = ({ section, index }) => {
  const slug = section.slug?.current;
  const [showNote, setShowNote] = useState(false);
  useEffect(() => {
    const status = localStorage.getItem(slug);
    if (!status || status === "show") {
      setShowNote(true);
    } else {
      setShowNote(false);
    }
  }, []);
  const handleToggle = () => {
    localStorage.setItem(slug, showNote ? "hide" : "show");
    setShowNote((old) => !old);
  };
  return (
    <>
      <QuestionMark onClick={handleToggle} show={!showNote}>
        <div className="question">
          <FaQuestionCircle />
        </div>
      </QuestionMark>
      <Modal show={showNote} onHide={handleToggle}>
        <Modal.Header>Developer's note</Modal.Header>
        <Modal.Body>
          <BlockContent blocks={section.blockContent} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleToggle}>
            {section.buttonText?.toUpperCase() || "OK"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DevNote;
