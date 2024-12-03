"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type PreferencesSettingsProps = {
  theme: "light" | "dark";
  notifications: boolean;
  onChange: (settings: {
    theme?: "light" | "dark";
    notifications?: boolean;
  }) => void;
};

const PreferencesSettings: React.FC<PreferencesSettingsProps> = ({
  theme,
  notifications,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Theme</Label>
        <Select
          value={theme}
          onValueChange={(value) =>
            onChange({ theme: value as "light" | "dark" })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={notifications}
          onCheckedChange={(checked) =>
            onChange({ notifications: checked as boolean })
          }
        />
        <Label>Enable Notifications</Label>
      </div>
    </div>
  );
};

export default PreferencesSettings;
