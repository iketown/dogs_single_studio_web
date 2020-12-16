import moment from "moment";

export default {
  name: "buyer",
  type: "document",
  title: "Puppy Buyer",
  initialValue: {
    joinListDate: moment().format(),
  },
  preview: {
    select: {
      firstName: "firstName",
      lastName: "lastName",
      depositDate: "depositDate",
      adopter_id: "_id",
      puppyImg: "reservation.whelp_ref.photos.0",
      puppyName: "reservation.whelp_ref.name",
    },
    prepare({
      firstName,
      lastName,
      depositDate,
      adopter_id,
      puppyImg,
      puppyName,
    }) {
      return {
        title: `${lastName} / ${firstName}`,
        subtitle: `${
          depositDate
            ? "dep:" + moment(depositDate).format("MM/DD/YY")
            : "no deposit"
        }${puppyName ? " ➡︎ " + puppyName : ""}`,
        media: puppyImg,
      };
    },
  },
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "phone",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "joinListDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "depositDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "color_prefs",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "sex_pref",
      type: "string",
      options: {
        list: ["male", "female", "none"],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "reservation",
      type: "object",
      //TODO make it impossible to reserve a puppy that has already been reserved.
      fields: [
        { name: "whelp_ref", type: "reference", to: { type: "whelp" } },
        {
          name: "reservation_date",
          type: "datetime",
          description:
            "when buyer chooses this pup, so pup displays as no longer available",
        },
        {
          name: "receipt_date",
          type: "datetime",
          description: "when the pup is physically transferred to buyer",
        },
      ],
    },
  ],
};
