"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import OverviewCards from "../components/OverviewCards";
import MonitoringTable from "../components/MonitoringTable";
import URLsTab from "../components/URLsTab";
import HistoryTab from "../components/HistoryTab";
import AlertsTab from "../components/AlertsTab";
import SettingsTab from "../components/SettingsTab";
import ProfilePage from "../profile/page";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabContent = {
    Dashboard: (
      <>
        <OverviewCards />
        <MonitoringTable />
      </>
    ),
    URLs: <URLsTab />,
    History: <HistoryTab />,
    Alerts: <AlertsTab />,
    Settings: <SettingsTab />,
    Profile: <ProfilePage />,
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {tabContent[activeTab]}
        </motion.div>
      </main>
    </div>
  );
}
