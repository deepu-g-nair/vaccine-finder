import React, { useState, useEffect } from "react";
import date from "date-and-time";
import Layout from "./Layout";

const DataFetch = () => {
  const [vacancy, setVacancy] = useState([""]);

  const now = new Date();
  const nxtDate = date.addDays(now, 1);
  const formatedDate = date.format(nxtDate, "DD-MM-YYYY ");

  useEffect(() => {
    fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=296&date=${formatedDate}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setVacancy(data.sessions);
      });
  });

  return (
    <div className="App">
      <Layout
        val={vacancy.map(
          (item) =>
            (item.available_capacity_dose1 > 0 ||
              item.available_capacity_dose2 > 0) &&
            item
        )}
      />
    </div>
  );
};

export default DataFetch;
