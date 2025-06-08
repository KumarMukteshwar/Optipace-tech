import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryHeader from "../components/SummaryHeader";
import StatCard from "../components/StatCard";
import Calendar from "../components/Calendar";
import QueueChart from "../components/QueueChart";
import KPIChart from "../components/KPIChart";
import DueSummary from "../components/DueSummary";
import Table from "../components/Table";
import dashboardData from "../data/dashboardData.json";

const Dashboard = () => {
  const { summary, cards, queues, kpi, dueSummary } = dashboardData;
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "report":
        return <Table />;
      case "dashboard":
      default:
        return (
          <>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
              <SummaryHeader title={summary.title} outstanding={summary.overallOutstanding} />
              <div className="lg:ml-4">
                <Calendar calendar={summary.calendar} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
              {cards.map(card => (
                <StatCard icon={card.icon} key={card.id} title={card.title} total={card.total} amount={card.amount} />
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
              <QueueChart data={queues} />
              <KPIChart data={kpi} />
            </div>

            <DueSummary data={dueSummary} />
          </>
        );
    }
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content area with sidebar and dashboard */}
      <div className="flex">
        <div className="w-20">
          <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
        </div>
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
