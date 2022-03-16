import React from "react";
import OverViewContent from "../../components/organisms/Member/OverViewContent";
import Sidebar from "../../components/organisms/Member/Sidebar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverViewContent />
    </section>
  );
}
