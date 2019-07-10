import React from "react";

function Calender() {
  let tempDate = new Date();
  let date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate()

  return (

    <span className="Cal">{date}</span>

  );
}
export default Calender;