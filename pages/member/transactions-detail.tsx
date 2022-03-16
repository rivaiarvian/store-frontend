import React from "react";
import Sidebar from "../../components/organisms/Member/Sidebar";
import TransactionsDetailContent from "../../components/organisms/Member/TransactionsDetailContent";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsDetailContent />
    </section>
  );
}
