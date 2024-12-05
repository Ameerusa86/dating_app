"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AccountSettings from "./components/AccountSettings";
import PreferencesSettings from "./components/PreferencesSettings";
import PrivacySettings from "./components/PrivacySettings";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SettingsPage: React.FC = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<{
    email: string;
    password: string;
    theme: "light" | "dark";
    notifications: boolean;
    publicProfile: boolean;
  }>({
    email: "user@example.com",
    password: "",
    theme: "light", // Initialize as "light" or "dark"
    notifications: true,
    publicProfile: true,
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (): Promise<void> => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
    setIsSaving(false);

    // Trigger toast notification
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully.",
    });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Settings</h1>

      <Card className="space-y-6 p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <AccountSettings
            email={settings.email}
            password={settings.password}
            onChange={(updatedSettings) =>
              setSettings({ ...settings, ...updatedSettings })
            }
          />
        </CardContent>

        <CardHeader>
          <CardTitle className="text-lg font-bold">Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <PreferencesSettings
            theme={settings.theme}
            notifications={settings.notifications}
            onChange={(updatedSettings) =>
              setSettings({ ...settings, ...updatedSettings })
            }
          />
        </CardContent>

        <CardHeader>
          <CardTitle className="text-lg font-bold">Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <PrivacySettings
            publicProfile={settings.publicProfile}
            onChange={(updatedSettings) =>
              setSettings({ ...settings, ...updatedSettings })
            }
          />
        </CardContent>

        <div className="text-center mt-6">
          <Button
            variant="default"
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center justify-center gap-2"
          >
            {isSaving && (
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
            )}
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;
