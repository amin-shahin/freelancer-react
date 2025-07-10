import React from "react";
import Table from "../../ui/Table";
import Loader from "../../ui/Loader";
import ProposalRow from "./ProposalRow";
import Empty from "../../ui/Empty";

function ProposalTable({ proposals ,isLoading}) {
  if (isLoading) return <Loader />;
  if (proposals.length === 0) return <Empty name={"درخواستی"} />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>هزینه</th>
        <th>زمان تحویل</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
     
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
