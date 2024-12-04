import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

export default function SettingsTab() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackNotifications, setSlackNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [defaultFrequency, setDefaultFrequency] = useState("5");
  const [timeZone, setTimeZone] = useState("UTC");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Choose how you want to receive alerts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="slack-notifications">Slack Notifications</Label>
            <Switch
              id="slack-notifications"
              checked={slackNotifications}
              onCheckedChange={setSlackNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications">SMS Notifications</Label>
            <Switch
              id="sms-notifications"
              checked={smsNotifications}
              onCheckedChange={setSmsNotifications}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Default Monitoring Settings</CardTitle>
          <CardDescription>Set default values for new monitors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="default-frequency">Default Check Frequency</Label>
            <Select
              value={defaultFrequency}
              onValueChange={setDefaultFrequency}
            >
              <SelectTrigger id="default-frequency">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Every 1 minute</SelectItem>
                <SelectItem value="5">Every 5 minutes</SelectItem>
                <SelectItem value="15">Every 15 minutes</SelectItem>
                <SelectItem value="30">Every 30 minutes</SelectItem>
                <SelectItem value="60">Every 60 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="time-zone">Time Zone</Label>
            <Select value={timeZone} onValueChange={setTimeZone}>
              <SelectTrigger id="time-zone">
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UTC">UTC</SelectItem>
                <SelectItem value="America/New_York">Eastern Time</SelectItem>
                <SelectItem value="America/Chicago">Central Time</SelectItem>
                <SelectItem value="America/Denver">Mountain Time</SelectItem>
                <SelectItem value="America/Los_Angeles">
                  Pacific Time
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            Manage your API keys for integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="slack-api-key">Slack API Key</Label>
            <Input
              id="slack-api-key"
              type="password"
              value="••••••••••••••••"
              readOnly
            />
          </div>
          <div>
            <Label htmlFor="twilio-api-key">Twilio API Key</Label>
            <Input
              id="twilio-api-key"
              type="password"
              value="••••••••••••••••"
              readOnly
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Regenerate API Keys</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="account-email">Email Address</Label>
            <Input id="account-email" type="email" value="user@example.com" />
          </div>
          <div>
            <Label htmlFor="account-password">Password</Label>
            <Input id="account-password" type="password" value="••••••••••••" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Account Settings</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
