import React from "react";
import SelectF from "../component/SelectF";

const DropdownF = () => {
  return (
    <div>
      <SelectF>
        <SelectF.Trigger>단원을 선택해주세요</SelectF.Trigger>
        <SelectF.Option>
          <SelectF.OptionList value={1}>자바</SelectF.OptionList>
          <SelectF.OptionList value={2}>파이썬</SelectF.OptionList>
          <SelectF.OptionList value={3}>자바스크립트</SelectF.OptionList>
        </SelectF.Option>
      </SelectF>
    </div>
  );
};

export default DropdownF;
