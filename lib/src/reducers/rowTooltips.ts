import { RowName } from "../models";
import type { Action } from "redux";

export const ADD_ROW_TOOLTIPS = "ADD_ROW_TOOLTIPS";
export const CLEAR_ROW_TOOLTIPS = "CLEAR_ROW_TOOLTIPS";

export type RowTooltipsAction = {
  type: typeof ADD_ROW_TOOLTIPS;
  rowTooltips: Record<RowName, string>;
};

export const createRowTooltipsAction = (
  rowTooltips: Record<RowName, string>
): RowTooltipsAction => ({
  type: ADD_ROW_TOOLTIPS,
  rowTooltips,
});

export const rowTooltips = (
  state: Record<RowName, string> = {},
  action: Action<any>
): Record<RowName, string> => {
  switch (action.type) {
    case ADD_ROW_TOOLTIPS:
      const a = action as RowTooltipsAction;
      return { ...state, ...a.rowTooltips };
    case CLEAR_ROW_TOOLTIPS:
      return {};
    default:
      return state;
  }
};
