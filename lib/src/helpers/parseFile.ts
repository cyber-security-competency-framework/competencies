import { State, ColumnName, RowName } from "../models";
import { matchColumn, matchElement, matchRow, isH2, matchTooltip, stripTooltip } from "./matcher";

type ParseLineState = Pick<State, 'columns' | 'rows' | 'elements' | 'rowTooltips'>

type ParseLineProps = {
  state: ParseLineState;
  lastRow: string;
  lastColumn: string;
};

const MAX_LINES = 10_000;

export const parseFile = (
  fileContents: string
): ParseLineState => {
  const allLines = getLinesInFile(fileContents);
  const lines = allLines.length > MAX_LINES ? allLines.slice(0, MAX_LINES) : allLines;

  const props: ParseLineProps = {
    state: {
      elements: {},
      rows: new Set(),
      columns: new Set(),
      rowTooltips: {},
    },
    lastRow: "",
    lastColumn: "",
  };

  for (let line of lines) {
    parseLine(line, props);
  }

  return props.state;
};

const getLinesInFile = (fileContents: string) => {
  return fileContents.split("\n");
};

/**
 * parseLine
 * ----------------------------------------------------------------------------
 * handle getting content out of a line
 */
const parseLine = (line: string, props: ParseLineProps) => {
  const { lastRow } = props;

  // nothing to do if we aren't yet on the competencies
  const rowHeader = matchRow(line);
  if (!lastRow && !rowHeader) {
    return;
  }

  // reset if this is a header that doesn't meet criteria
  if (lastRow && isH2(line) && !rowHeader) {
    props.lastRow = "";
    return;
  }
  // if it is a row header
  if (rowHeader) {
    return parseRow(props, rowHeader);
  }

  // if this is a category, set that value here
  const columnHeader = matchColumn(line);
  if (columnHeader) {
    return parseColumn(props, columnHeader);
  }

  // if this is a competency, create it
  const element = matchElement(line);
  if (element) {
    return parseElement(element, props);
  }
};

/**
 * parseCategory
 * ----------------------------------------------------------------------------
 * parse out the content of the competency category
 */
const parseColumn = (props: ParseLineProps, column: ColumnName) => {
  const { state } = props;
  const name = stripTooltip(column);
  props.lastColumn = name;

  if (!state.columns.has(name)) {
    state.columns.add(name);
  }

  return;
};

/**
 * parseRow
 * ----------------------------------------------------------------------------
 * parse out the content of the competency row
 */
const parseRow = (props: ParseLineProps, row: RowName) => {
  const { state } = props;
  const name = stripTooltip(row);
  const tooltip = matchTooltip(row);
  props.lastRow = name;

  if (!state.rows.has(name)) {
    state.rows.add(name);
  }

  if (tooltip) {
    state.rowTooltips[name] = tooltip;
  }

  return;
};

/**
 * parseCompetency
 * ----------------------------------------------------------------------------
 * parse the content of the competency itself
 */
const parseElement = (element: string, props: ParseLineProps) => {
  const { state } = props;

  const tooltip = matchTooltip(element);
  const name = stripTooltip(element);
  const id = name;

  if (state.elements[id]) {
    state.elements[id].belongsToRows.push(props.lastRow);
  } else {
    state.elements[id] = {
      id,
      name,
      tooltip: tooltip || undefined,
      belongsToRows: [props.lastRow],
      column: props.lastColumn,
      originRow: props.lastRow
    };
  }
};
