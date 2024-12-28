export const CheckBox = ({ checked, setChecked, label }) => {
  return (
    <div className="flex items-center gap-1 ">
      <input
        className="w-4 h-4 border-2 bg-red accent-violet-900"
        type="checkbox"
        name="border-bottom"
        id="border-bottom"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="border-bottom">{label}</label>
    </div>
  );
};
