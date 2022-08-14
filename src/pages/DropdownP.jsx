import React from "react";
import SelectP from "../component/SelectP";

const DropdownP = () => {
  const handleUnitChange = () => {};

  return (
    <div>
      <SelectP onClick={handleUnitChange}>
        <SelectP.Trigger>단원을 선택해 주세요</SelectP.Trigger>
        <SelectP.OptionList>
          <SelectP.Option value={1}>자바</SelectP.Option>
          <SelectP.Option value={2}>파이썬</SelectP.Option>
          <SelectP.Option value={3}>자바스크립트</SelectP.Option>
        </SelectP.OptionList>
      </SelectP>
    </div>
  );
};
export default DropdownP;
