import { Clock, Globe, AlertTriangle, ArrowUpCircle } from "lucide-react";

const cards = [
  { title: "Total URLs", value: "24", icon: Globe, color: "text-blue-500" },
  {
    title: "Uptime",
    value: "99.9%",
    icon: ArrowUpCircle,
    color: "text-green-500",
  },
  {
    title: "Avg. Response Time",
    value: "287 ms",
    icon: Clock,
    color: "text-yellow-500",
  },
  {
    title: "Active Alerts",
    value: "2",
    icon: AlertTriangle,
    color: "text-red-500",
  },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {card.title}
            </h3>
            <card.icon className={`h-8 w-8 ${card.color}`} />
          </div>
          <p className="text-3xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
