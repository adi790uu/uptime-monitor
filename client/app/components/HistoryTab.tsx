import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

const historyData = [
  {
    id: 1,
    url: "https://example.com",
    status: "up",
    responseTime: 120,
    timestamp: "2023-06-15 10:30:00",
  },
  {
    id: 2,
    url: "https://api.example.com",
    status: "down",
    responseTime: 0,
    timestamp: "2023-06-15 10:25:00",
  },
  {
    id: 3,
    url: "https://blog.example.com",
    status: "up",
    responseTime: 250,
    timestamp: "2023-06-15 10:20:00",
  },
  {
    id: 4,
    url: "https://store.example.com",
    status: "slow",
    responseTime: 1500,
    timestamp: "2023-06-15 10:15:00",
  },
];

export default function HistoryTab() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedUrl, setSelectedUrl] = useState("");

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">History</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <Label htmlFor="start-date">Start Date</Label>
            <div className="relative">
              <Input
                id="start-date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="pl-10"
              />
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="end-date">End Date</Label>
            <div className="relative">
              <Input
                id="end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="pl-10"
              />
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="url-select">Select URL</Label>
            <Select value={selectedUrl} onValueChange={setSelectedUrl}>
              <SelectTrigger id="url-select">
                <SelectValue placeholder="Select a URL" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All URLs</SelectItem>
                <SelectItem value="https://example.com">
                  https://example.com
                </SelectItem>
                <SelectItem value="https://api.example.com">
                  https://api.example.com
                </SelectItem>
                <SelectItem value="https://blog.example.com">
                  https://blog.example.com
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button>Apply Filters</Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>URL</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Response Time</TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historyData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.url}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === "up"
                        ? "bg-green-100 text-green-800"
                        : item.status === "slow"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell>{item.responseTime} ms</TableCell>
                <TableCell>{item.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
