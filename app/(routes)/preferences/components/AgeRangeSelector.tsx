"use client";

type AgeRangeSelectorProps = {
  value: [number, number];
  onChange: (range: [number, number]) => void;
};

const AgeRangeSelector: React.FC<AgeRangeSelectorProps> = ({
  value,
  onChange,
}) => {
  const [minAge, maxAge] = value;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Age Range
      </label>
      <div className="flex items-center space-x-4 mt-2">
        <input
          type="number"
          min={18}
          max={100}
          value={minAge}
          onChange={(e) => onChange([Number(e.target.value), maxAge])}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span className="text-gray-700 dark:text-gray-300">to</span>
        <input
          type="number"
          min={18}
          max={100}
          value={maxAge}
          onChange={(e) => onChange([minAge, Number(e.target.value)])}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default AgeRangeSelector;
