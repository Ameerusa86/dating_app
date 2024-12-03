"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type PrivacySettingsProps = {
  publicProfile: boolean;
  onChange: (settings: { publicProfile?: boolean }) => void;
};

const PrivacySettings: React.FC<PrivacySettingsProps> = ({
  publicProfile,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={publicProfile}
        onCheckedChange={(checked) =>
          onChange({ publicProfile: checked as boolean })
        }
      />
      <Label>Make Profile Public</Label>
    </div>
  );
};

export default PrivacySettings;
