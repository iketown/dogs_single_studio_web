import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const useVisit = (calledFrom: string) => {
  const { asPath, query } = useRouter();
  const { breeder_slug } = query;

  useEffect(() => {
    // const isDev = process.env.NODE_ENV === "development";
    // if (isDev) return;

    // if robot looking at front page, nevermind.
    if (asPath === "/") return;

    axios.post(`/api/visits`, { path: asPath, breeder_slug }).catch((err) => {
      console.log("axios err", err);
    });
  }, [asPath]);
};
