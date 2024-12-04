import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Plus, Trash2 } from "lucide-react";

export default function URLsTab() {
  const [urls, setUrls] = useState([
    { id: 1, name: "Main Website", url: "https://example.com" },
    { id: 2, name: "API Endpoint", url: "https://api.example.com" },
  ]);
  const [newUrlName, setNewUrlName] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const addUrl = () => {
    if (newUrlName && newUrl) {
      setUrls([
        ...urls,
        { id: urls.length + 1, name: newUrlName, url: newUrl },
      ]);
      setNewUrlName("");
      setNewUrl("");
    }
  };

  const removeUrl = (id: number) => {
    setUrls(urls.filter((url) => url.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Add New URL</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="url-name">URL Name</Label>
            <Input
              id="url-name"
              value={newUrlName}
              onChange={(e) => setNewUrlName(e.target.value)}
              placeholder="Enter URL name"
            />
          </div>
          <div>
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="https://example.com"
            />
          </div>
        </div>
        <Button onClick={addUrl} className="mt-4">
          <Plus className="mr-2 h-4 w-4" /> Add URL
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>URL</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {urls.map((url) => (
              <TableRow key={url.id}>
                <TableCell>{url.name}</TableCell>
                <TableCell>{url.url}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeUrl(url.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
