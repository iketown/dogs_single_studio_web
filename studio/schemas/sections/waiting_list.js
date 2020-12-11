export default {
  name: "waiting_list",
  type: "object",
  title: "Waiting List",
  description:
    "this section will display your waiting list which is created by adding Buyers ",
  preview: {
    select: { show: "show" },
    prepare({ show }) {
      return {
        title: "Waiting list",
        subtitle: `show ${show === "both" ? "waiting and confirmed" : show}`,
      };
    },
  },
  fields: [
    {
      name: "show",
      type: "string",
      title: "Show",
      options: {
        list: ["waiting", "confirmed", "both"],
      },
    },
  ],
};
