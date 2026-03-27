import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { State } from "../models";
import {
  elements,
  hiddenColumns,
  hiddenRows,
  columns,
  rows,
  rowTooltips,
  displayMode,
  similarityGraph,
  enableDiffs,
  renderHtml,
  disableCollapsing,
  singleFileOnly,
} from "../reducers";

const rootReducer = combineReducers({
  elements,
  columns,
  rows,
  rowTooltips,
  hiddenColumns,
  hiddenRows,
  displayMode,
  similarityGraph,
  enableDiffs,
  renderHtml,
  disableCollapsing,
  singleFileOnly,
});

export const store = createStore<State, any, any, any>(
  rootReducer,
  applyMiddleware(thunk)
);
