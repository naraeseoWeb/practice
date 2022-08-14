import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";

const SelectContext = createContext(null);

const SelectP = ({ onChange, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState(null);
  const [selectedText, setSelectedText] = useState(null);

  useEffect(() => {
    // console.log(selected, selectedText);
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

const OptionList = ({ children }) => {
  const context = useContext(SelectContext);

  return context.isOpen && <Ul>{children}</Ul>;
};

const Option = ({ value, children }) => {
  const context = useContext(SelectContext);

  return (
    <Li
      onClick={() => {
        context.setSelected(value);
        context.setSelectedText(children);
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

export default SelectP;
SelectP.Trigger = Trigger;
SelectP.OptionList = OptionList;
SelectP.Option = Option;
