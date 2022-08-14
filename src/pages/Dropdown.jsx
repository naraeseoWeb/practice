import Select from "../component/Select";

const Dropdown = () => {
  const handleUnitChange = () => {};

  return (
    <div>
      <Select onChange={handleUnitChange}>
        <Select.Trigger>단원을 선택해주세요</Select.Trigger>
        <Select.OptionList>
          <Select.Option value={1}>자바</Select.Option>
          <Select.Option value={2}>파이썬</Select.Option>
          <Select.Option value={3}>자바스크립트</Select.Option>
        </Select.OptionList>
      </Select>
    </div>
  );
};

export default Dropdown;
