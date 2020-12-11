import React, { useState, useEffect } from "react";
// assign to email groups.
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import JTree from "@util/JTree";
import { useColumns, useMCSegments } from "./useMailChimpApi";

const BreederTable: React.FC<{ data: any[] }> = ({ data }) => {
  const { columns, error } = useColumns();
  const { segments } = useMCSegments();

  const rows = data?.map((breeder) => {
    const segFields = segments?.reduce((obj, seg) => {
      obj[`segment_${seg.id}`] = true;
      return obj;
    }, {});
    return { ...breeder, ...segFields };
  });
  return (
    <div>
      Breeder table
      <JTree data={{ segments }} />
      <ToolkitProvider bootstrap4 keyField="_id" columns={columns} data={rows}>
        {({ baseProps }) => (
          <BootstrapTable
            remote
            {...baseProps}
            onTableChange={(...args) => console.log("args", args)}
          />
        )}
      </ToolkitProvider>
    </div>
  );
};

export default BreederTable;
