import {
  Activity,
  Server,
  Users,
  Clock,
  PlusCircle,
  CheckCircle,
  XCircle,
  TrendingUp,
} from "lucide-react";
import useThemeStore from "../../store/themeStore";
import { useAuthStore } from "../../store/authStore";
import { useState } from "react";

const Dashboard = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const user = useAuthStore((state) => state.user);

  const [urls, setUrls] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  const [urlStats, setUrlStats] = useState({});

  const stats = [
    {
      label: "Monitored Services",
      value: urls.length.toString(),
      icon: Server,
    },
    {
      label: "Total Uptime",
      value: urls.length > 0 ? "99.99%" : "0%",
      icon: Activity,
    },
    {
      label: "Average Response Time",
      value: urls.length > 0 ? "120ms" : "0ms",
      icon: Clock,
    },
    { label: "Team Members", value: "1", icon: Users },
  ];

  const handleAddUrl = () => {
    if (newUrl.trim()) {
      const trimmedUrl = newUrl.trim();
      setUrls((prevUrls) => [...prevUrls, trimmedUrl]);
      setUrlStats((prevStats) => ({
        ...prevStats,
        [trimmedUrl]: {
          uptime: "99.99%",
          responseTime: "120ms",
          status: "Operational",
        },
      }));
      setNewUrl("");
    }
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          <h1 className="text-2xl font-bold">Welcome, {user?.username}!</h1>
          <p
            className={`mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Monitor your services and keep track of their performance.
          </p>
        </div>

        <div
          className={`mt-8 mb-8 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } shadow rounded-lg`}
        >
          <div className="px-4 py-5 sm:p-6">
            <h3
              className={`text-lg leading-6 font-medium ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Add a URL to Monitor
            </h3>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Enter URL (e.g., https://www.google.com)"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                className={`mr-4 px-4 py-2 border rounded-lg w-full sm:max-w-md ${
                  isDarkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              />
              <button
                onClick={handleAddUrl}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
                  isDarkMode
                    ? "text-white bg-indigo-600 hover:bg-indigo-700"
                    : "text-white bg-indigo-500 hover:bg-indigo-600"
                }`}
              >
                <PlusCircle className="h-5 w-5 mr-2" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } overflow-hidden rounded-lg shadow`}
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon
                      className={`h-6 w-6 ${
                        isDarkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt
                        className={`text-sm font-medium truncate ${
                          isDarkMode ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {stat.label}
                      </dt>
                      <dd>
                        <div
                          className={`text-lg font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {stat.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 rounded-lg p-6`}>
          <div className="px-4 py-5 sm:p-6">
            <h3
              className={`text-xl leading-6 font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Monitored URLs
            </h3>
            <ul className="mt-4 divide-y divide-gray-200">
              {urls.length > 0 ? (
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          className={`px-6 py-3 text-center text-sm font-medium ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          #
                        </th>
                        <th
                          className={`px-6 py-3 text-center text-sm font-medium ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          URL
                        </th>
                        <th
                          className={`px-6 py-3 text-center text-sm font-medium ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          <CheckCircle
                            className={`h-5 w-5 inline-block mr-1 ${
                              isDarkMode ? "text-green-400" : "text-green-600"
                            }`}
                          />{" "}
                          Status
                        </th>
                        <th
                          className={`px-6 py-3 text-center text-sm font-medium ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          <Activity
                            className={`h-5 w-5 inline-block mr-1 ${
                              isDarkMode ? "text-yellow-400" : "text-yellow-600"
                            }`}
                          />{" "}
                          Uptime
                        </th>
                        <th
                          className={`px-6 py-3 text-center text-sm font-medium ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          <Clock
                            className={`h-5 w-5 inline-block mr-1 ${
                              isDarkMode ? "text-blue-400" : "text-blue-600"
                            }`}
                          />{" "}
                          Response Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {urls.map((url, index) => (
                        <tr
                          key={index}
                          className={`${
                            isDarkMode
                              ? "bg-gray-800 text-gray-300"
                              : "bg-white text-gray-700"
                          }`}
                        >
                          <td className="px-6 py-4 text-sm text-center">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 text-sm break-words text-center">
                            {url}
                          </td>
                          <td className="px-6 py-4 text-sm text-center">
                            {urlStats[url]?.status}
                          </td>
                          <td className="px-6 py-4 text-sm text-center">
                            {urlStats[url]?.uptime}
                          </td>
                          <td className="px-6 py-4 text-sm text-center">
                            {urlStats[url]?.responseTime}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  No URLs being monitored.
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
