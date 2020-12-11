import { fontCombos } from "@util/font_combos";
import { motion } from "framer-motion";
import GoogleFonts from "next-google-fonts";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { BreederCtxProvider } from "./BreederContext";
import Footer from "./footer/Footer";
import NavBar from "./NavBar";

const FooterPusher = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 7rem;
`;

const FontHandler = styled.div<{ fonts: any }>`
  h1,
  h2,
  h3,
  h4,
  h5 {
    ${(p) => p.fonts?.headings};
    opacity: 0.9;
  }
  .inlineHeading {
    ${(p) => p.fonts?.headings};
    opacity: 0.9;
  }
  .heading1 {
    font-size: 40px;
  }
  .heading2 {
    font-size: 38.4px;
  }
  .heading3 {
    font-size: 28px;
  }
  .heading4 {
    font-size: 24px;
  }
  .title {
    ${(p) => p.fonts?.titleScript}
  }
  blockquote {
    ${(p) => p.fonts?.paragraphs};
    font-style: italic;
    opacity: 0.8;
  }
  p,
  ul,
  li {
    ${(p) => p.fonts?.paragraphs};
    opacity: 0.95;
  }
`;

const ColorCSSVariables = styled.div<{
  darkA: string;
  darkB: string;
  darkAccent: string;
  lightA: string;
  lightB: string;
}>`
  --color-darkA: ${(p) => p.darkA};
  --color-darkB: ${(p) => p.darkB};
  --color-darkAccent: ${(p) => p.darkAccent};
  --color-lightA: ${(p) => p.lightA};
  --color-lightB: ${(p) => p.lightB};
  --color-black: #111;
  --color-white: #fff;
  --color-female: hotpink;
  --color-male: #5079ff;
`;

export const contentVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 1 } },
  // exit: { opacity: 0, transition: { duration: 0.2 } },
};

const Layout: React.FC<{ layout_info: LayoutI }> = ({
  layout_info,
  children,
}) => {
  const { asPath } = useRouter();
  if (!layout_info)
    return (
      <div>
        <h2>missing layout info</h2>
        {children}
      </div>
    );
  const fontComboKey =
    (layout_info && layout_info.font_combo) || "quattroCento";
  const fonts = fontCombos[fontComboKey];
  const googString = fonts?.goog.map((fam) => `family=${fam}`).join("&");

  const { darkA, darkB, darkAccent, lightA, lightB } =
    layout_info.palette || {};
  return (
    <BreederCtxProvider breeder={layout_info}>
      <GoogleFonts
        href={`https://fonts.googleapis.com/css2?${googString}&family=Neucha&display=swap`}
      />
      <ColorCSSVariables {...{ darkA, darkB, darkAccent, lightA, lightB }}>
        <FontHandler {...{ fonts }}>
          <NavBar {...{ layout_info }} />
          <FooterPusher>
            <div>
              <div style={{ padding: "30px", background: "whitesmoke" }} />
              <motion.div
                animate="in"
                initial="initial"
                exit="exit"
                variants={contentVariants}
              >
                {children}
                {/* <JTree data={{ layout_info }} /> */}
              </motion.div>
            </div>
            <Footer />
          </FooterPusher>
        </FontHandler>
      </ColorCSSVariables>
    </BreederCtxProvider>
  );
};

export default Layout;
