import React from "react";
import Sidebar from "../../components/organisms/Member/Sidebar";
import TransactionsContent from "../../components/organisms/Member/TransactionsContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
}
