
const NumberInput = ({ value, onChange, ...rest }) => {
  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.valueAsNumber || 0)}
        min={0}
        {...rest}
      />
    </>
  );
};

export default NumberInput;
