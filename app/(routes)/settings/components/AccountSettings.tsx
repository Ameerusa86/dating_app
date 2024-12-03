"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AccountSettingsProps = {
  email: string;
  password: string;
  onChange: (settings: { email?: string; password?: string }) => void;
};

const AccountSettings: React.FC<AccountSettingsProps> = ({
  email,
  password,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => onChange({ email: e.target.value })}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => onChange({ password: e.target.value })}
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
};

export default AccountSettings;
