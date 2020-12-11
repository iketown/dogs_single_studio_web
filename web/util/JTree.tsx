import React from "react";
import JSONTREE from "react-json-tree";

const JTree: React.FC<{ data: any }> = ({ data }) => {
  const isDev = process.env.NODE_ENV === "development";
  return isDev ? <JSONTREE data={data} hideRoot /> : null;
};

export default JTree;
