import useSWR from "swr";
import { ColumnDescription } from "react-bootstrap-table-next";
import moment from "moment";
import axios from "axios";
//
//
const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useMCSegments = () => {
  const { data, error } = useSWR(`/api/mailer/segments`, fetcher);
  return { segments: data?.segments };
};

export const getSegmentMembers = async (segmentIds: string[]) => {
  const response = await axios.post(`/api/mailer/segments`, { segmentIds });
  return response;
};

export const useColumns = () => {
  const { data, error } = useSWR(`/api/mailer/segments`, fetcher);
  const segmentCols =
    data?.segments?.map((seg) => ({
      dataField: `segment_${seg.id}`,
      text: seg.name,
      sort: true,
    })) || [];
  const columns: ColumnDescription[] = [
    {
      dataField: "kennel_name",
      text: "Kennel",
      sort: true,
      style: { fontSize: "12px" },
      headerStyle: { background: "yellow", width: "5rem" },
    },
    {
      dataField: "_updatedAt",
      text: "Updated",
      sort: true,
      headerStyle: { width: "5rem" },
      style: { fontSize: "10px" },
      formatter: (val) => moment(val).fromNow(),
    },
    ...segmentCols,
  ];
  return { columns, segments: data?.segments, error };
};
