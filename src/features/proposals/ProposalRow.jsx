import React from "react";
import toTruncateText from "../../utils/toTruncateText";
import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/convertToPersianNumber";
import convertDateToLocalDate from "../../utils/convertDateToLocalDate";

function ProposalRow({ index, proposal }) {
  const { description, price, duration ,status} = proposal;
  const statusStyle = [
    {
      className: "badge--danger",
      text: "رد شده",
    },
    {
      className: "badge--secondary",
      text: "در انتظار تایید",
    },
    {
      className: "badge--success",
      text: "تایید",
    },
  ];
  return (
    <Table.Row key={proposal._id}>
      <td>{index + 1}</td>
      <td>{toTruncateText(description, 60)}</td>
      <td>{toPersianNumbersWithComma(price) + " ریال "}</td>
      <td className="flex items-center ">{duration} روز</td>
      <td className="">
      <span className={`badge  ${statusStyle[status].className}`}>
          {statusStyle[status].text}
        </span>
        </td>
    </Table.Row>
  );
}

export default ProposalRow;
