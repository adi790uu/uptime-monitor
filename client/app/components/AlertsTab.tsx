import { useState } from 'react'
import { Bell, Plus, Trash2 } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Switch } from "@/app/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"

const initialAlerts = [
  { id: 1, name: 'Main Website Down', url: 'https://example.com', condition: 'Status is down', channel: 'Email' },
  { id: 2, name: 'API High Latency', url: 'https://api.example.com', condition: 'Response time > 1000ms', channel: 'Slack' },
]

export default function AlertsTab() {
  const [alerts, setAlerts] = useState(initialAlerts)
  const [newAlertName, setNewAlertName] = useState('')
  const [newAlertUrl, setNewAlertUrl] = useState('')
  const [newAlertCondition, setNewAlertCondition] = useState('')
  const [newAlertChannel, setNewAlertChannel] = useState('')

  const addAlert = () => {
    if (newAlertName && newAlertUrl && newAlertCondition && newAlertChannel) {
      setAlerts([...alerts, {
        id: alerts.length + 1,
        name: newAlertName,
        url: newAlertUrl,
        condition: newAlertCondition,
        channel: newAlertChannel
      }])
      setNewAlertName('')
      setNewAlertUrl('')
      setNewAlertCondition('')
      setNewAlertChannel('')
    }
  }

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Configure Alerts</CardTitle>
          <CardDescription>Set up alerts for your monitored URLs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="alert-name">Alert Name</Label>
              <Input
                id="alert-name"
                value={newAlertName}
                onChange={(e) => setNewAlertName(e.target.value)}
                placeholder="Enter alert name"
              />
            </div>
            <div>
              <Label htmlFor="alert-url">URL</Label>
              <Input
                id="alert-url"
                value={newAlertUrl}
                onChange={(e) => setNewAlertUrl(e.target.value)}
                placeholder="https://example.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="alert-condition">Condition</Label>
              <Select value={newAlertCondition} onValueChange={setNewAlertCondition}>
                <SelectTrigger id="alert-condition">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Status is down">Status is down</SelectItem>
                  <SelectItem value="Response time > 1000ms">Response time > 1000ms</SelectItem>
                  <SelectItem value="Status code is 5xx">Status code is 5xx</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="alert-channel">Notification Channel</Label>
              <Select value={newAlertChannel} onValueChange={setNewAlertChannel}>
                <SelectTrigger id="alert-channel">
                  <SelectValue placeholder="Select channel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Email">Email</SelectItem>
                  <SelectItem value="Slack">Slack</SelectItem>
                  <SelectItem value="SMS">SMS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addAlert}>
            <Plus className="mr-2 h-4 w-4" /> Add Alert
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{alert.name}</span>
                <Button variant="ghost" size="sm" onClick={() => removeAlert(alert.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>{alert.url}</CardDescription>
            </CardHeader>
            <CardContent>
              <p><strong>Condition:</strong> {alert.condition}</p>
              <p><strong>Notification Channel:</strong> {alert.channel}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
