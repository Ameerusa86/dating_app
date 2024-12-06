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
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type PreferencesSettingsProps = {
  theme: "light" | "dark";

  notifications: boolean;

  onChange: (updatedSettings: {
    theme?: "light" | "dark";

    notifications?: boolean;
  }) => void;
};

const PreferencesSettings: React.FC<PreferencesSettingsProps> = ({
  notifications,
  onChange,
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering until the component is mounted
  }

  return (
    <div className="space-y-4">
      {/* Theme Selector */}
      <div>
        <Label htmlFor="theme-selector">Theme</Label>
        <Select
          value={theme || "light"} // Provide a default value to avoid undefined
          onValueChange={(value) => {
            setTheme(value as "light" | "dark"); // Update the theme using next-themes
            onChange({ theme: value as "light" | "dark" }); // Notify parent component
          }}
        >
          <SelectTrigger id="theme-selector">
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent className="bg-background">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Notifications Toggle */}
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
