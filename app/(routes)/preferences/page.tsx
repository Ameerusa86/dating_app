"use client";

import AgeRangeSelector from "./components/AgeRangeSelector";
import InterestsSelector from "./components/InterestsSelector";
import DistanceSlider from "./components/DistanceSlider";
import { useState } from "react";

type Preferences = {
  ageRange: [number, number];
  interests: string[];
  distance: number;
};

const PreferencesPage: React.FC = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    ageRange: [18, 35],
    interests: [],
    distance: 50,
  });

  const handleSave = (): void => {
    alert("Preferences saved successfully!");
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Match Preferences
      </h1>

      {/* Preferences Form */}
      <div className="space-y-6">
        {/* Age Range Selector */}
        <AgeRangeSelector
          value={preferences.ageRange}
          onChange={(range: [number, number]) =>
            setPreferences({ ...preferences, ageRange: range })
          }
        />

        {/* Interests Selector */}
        <InterestsSelector
          value={preferences.interests}
          onChange={(interests: string[]) =>
            setPreferences({ ...preferences, interests })
          }
        />

        {/* Distance Slider */}
        <DistanceSlider
          value={preferences.distance}
          onChange={(distance: number) =>
            setPreferences({ ...preferences, distance })
          }
        />

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default PreferencesPage;
