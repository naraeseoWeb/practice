import styled from "styled-components";
import React, { createContext, useContext, useEffect, useState } from "react";
// import data from "../pages/data";

const SelectContext = createContext(null);

const Select = ({ onChange, children }) => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(null);

  useEffect(() => {
    // console.log(selected);
    // console.log(selectedText);
  }, [selected, selectedText]);

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selected,
        setSelected,
        selectedText,
        setSelectedText,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

const Trigger = ({ children }) => {
  const context = useContext(SelectContext);

  return (
    <Button onClick={() => context.setIsOpen((prev) => !prev)}>
      {context.selectedText ? context.selectedText : children}
    </Button>
  );
};

const OptionList = (props) => {
  const context = useContext(SelectContext);

  return context.isOpen && <Ul>{props.children}</Ul>;
};

const Option = ({ value, children }) => {
  const context = useContext(SelectContext);

  return (
    <Li
      onClick={() => {
        context.setSelected(value);
        context.setSelectedText(String(children));
        context.setIsOpen(false);
      }}
    >
      {children}
    </Li>
  );
};

const Button = styled.button`
  color: #ec7807;
  background-color: #fff;
  border: 1px solid #ec7807;
  cursor: pointer;
  width: 200px;
  font-size: 20px;
  box-sizing: border-box;
  overflow: visible;
  line-height: 30px;
  border-radius: 5px;

  &:hover {
    background-color: #ec7807;
    color: #fff;
  }
`;

const Ul = styled.ul`
  width: 200px;
  border-radius: 5px;
  border: 1px solid gray;
`;

const Li = styled.li`
  width: 100%;
  text-indent: 10px;
  line-height: 30px;
`;

export default Select;
Select.Trigger = Trigger;
Select.OptionList = OptionList;
Select.Option = Option;
