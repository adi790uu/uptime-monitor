import { MoreHorizontal, ExternalLink } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

const urls = [
  {
    name: "Main Website",
    url: "https://example.com",
    status: "up",
    lastChecked: "2 minutes ago",
    responseTime: 123,
  },
  {
    name: "API Endpoint",
    url: "https://api.example.com",
    status: "slow",
    lastChecked: "5 minutes ago",
    responseTime: 789,
  },
  {
    name: "User Dashboard",
    url: "https://dashboard.example.com",
    status: "down",
    lastChecked: "1 minute ago",
    responseTime: 0,
  },
  {
    name: "Payment Gateway",
    url: "https://payments.example.com",
    status: "up",
    lastChecked: "3 minutes ago",
    responseTime: 234,
  },
];

export default function MonitoringTable() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>URL Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Checked</TableHead>
            <TableHead>Response Time</TableHead>
            <TableHead className="sr-only">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {urls.map((url) => (
            <TableRow
              key={url.name}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <TableCell className="font-medium">
                {url.name}
                <a
                  href={url.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink className="h-4 w-4 inline" />
                </a>
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    url.status === "up"
                      ? "bg-green-100 text-green-800"
                      : url.status === "slow"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {url.status}
                </span>
              </TableCell>
              <TableCell>{url.lastChecked}</TableCell>
              <TableCell className="font-mono">{url.responseTime} ms</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" className="float-right">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
