"use client";

type DistanceSliderProps = {
  value: number;
  onChange: (distance: number) => void;
};

const DistanceSlider: React.FC<DistanceSliderProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Distance (in km)
      </label>
      <input
        type="range"
        min={1}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-2"
      />
      <p className="text-gray-700 dark:text-gray-300 mt-1">{value} km</p>
    </div>
  );
};

export default DistanceSlider;
