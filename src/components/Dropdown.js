import React, { useEffect, useState, useRef } from "react";
import theme from "../theme";
import { Button } from "../styles";
import styled from "styled-components";

const Dropdown = ({
  value,
  options,
  placeholder,
  onChange,
  dropDownStyles = { left: "50%", top: "100%", transform: "translate(-50%)" }
}) => {
  const node = useRef();

  const { left, top, transform } = dropDownStyles;

  const [open, setOpen] = useState(false);

  const DropDownContainer = styled.div`
    position: relative;
  `;

  const DropDownMenu = styled.ul`
    position: absolute;
    list-style: none;
    padding-left: 0;
    position: absolute;
    top: ${() => (top ? top : "100%")};
    margin: 0;
    transform: ${() => (transform ? transform : "translateX(-50%)")};
    width: 100px;
    background-color: ${theme.colors.athensGray};
    left: ${() => (left ? left : "50%")};
  `;

  const DropDownMenuItem = styled.li`
    width: 100%;
    padding: 0.6em 0.9em;
    background-color: ${theme.colors.athensGray};
  `;

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <DropDownContainer ref={node} className="dropdown">
      <Button
        bg="transparent"
        border="0"
        p={0}
        mb="0"
        onClick={e => setOpen(!open)}
      >
        {value || placeholder}
      </Button>
      {open && (
        <DropDownMenu>
          {options.map(opt => (
            <DropDownMenuItem onClick={e => handleChange(opt)}>
              {opt}
            </DropDownMenuItem>
          ))}
        </DropDownMenu>
      )}
    </DropDownContainer>
  );
};

export default Dropdown;
