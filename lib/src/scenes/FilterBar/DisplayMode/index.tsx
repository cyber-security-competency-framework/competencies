import React, { useCallback } from "react";
import cx from "classnames";
import { DisplayMode } from "../../../models";
import { useDispatch, useSelector } from "react-redux";
import { selectDisplayMode } from "../../../selectors/filters";
import { createDisplayModeAction } from "../../../reducers";
import styled from '@emotion/styled';
import { colors } from '../../../helpers/styles';

type DisplayModeSwitchProps = {
  label: string;
  onClick: () => void;
  isSelected: boolean;
};

const DisplayModeSwitch: React.FC<DisplayModeSwitchProps> = ({
  label,
  isSelected,
  onClick,
}) => {
  return (
    <div
      tabIndex={0}
      onClick={onClick}
      className={cx("displayMode", isSelected ? "selected" : "")}
      onKeyDown={(event) => {
        if (event.keyCode === 32 || event.keyCode === 13) {
          onClick();
          event.preventDefault();
        }
      }}
    >
      {label}
    </div>
  );
};

export const DisplayModeFilter = () => {
  const currentMode = useSelector(selectDisplayMode);
  const dispatch = useDispatch();

  const selectMode = useCallback((mode: DisplayMode) => {
    dispatch(createDisplayModeAction(mode));
  }, []);

  return (
    <StyledDisplayModes c={colors}>
      <span className="label">View As:</span>
      <div className="toggles">
        <DisplayModeSwitch
          label="Matrix"
          isSelected={currentMode === "matrix"}
          onClick={() => selectMode("matrix")}
        />
        <DisplayModeSwitch
          label="List"
          isSelected={currentMode === "list"}
          onClick={() => selectMode("list")}
        />
      </div>
    </StyledDisplayModes>
  );
};

const StyledDisplayModes = styled.div<{c: typeof colors}>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-left: 1rem;

  .label {
    font-size: 0.8rem;
    opacity: 0.8;
    font-family: inherit;
  }

  .toggles {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  }

  .displayMode {
    cursor: pointer;
    border-radius: 5px;
    padding: 0.1rem 0.25rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;

    &:not(.selected) {
      opacity: 0.5;
    }

    &.selected {
      background-color: #FF6600;
      color: ${p => p.c.darkTheme};
      opacity: 1;
    }
  }
`;
