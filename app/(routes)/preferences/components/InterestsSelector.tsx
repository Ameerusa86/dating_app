"use client";

type InterestsSelectorProps = {
  value: string[];
  onChange: (interests: string[]) => void;
};

const InterestsSelector: React.FC<InterestsSelectorProps> = ({
  value,
  onChange,
}) => {
  const interestsOptions = ["Movies", "Sports", "Music", "Travel", "Fitness"];

  const toggleInterest = (interest: string) => {
    if (value.includes(interest)) {
      onChange(value.filter((i) => i !== interest));
    } else {
      onChange([...value, interest]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Interests
      </label>
      <div className="flex flex-wrap gap-2 mt-2">
        {interestsOptions.map((interest) => (
          <button
            key={interest}
            type="button"
            onClick={() => toggleInterest(interest)}
            className={`px-4 py-2 rounded-md ${
              value.includes(interest)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-600`}
          >
            {interest}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InterestsSelector;
