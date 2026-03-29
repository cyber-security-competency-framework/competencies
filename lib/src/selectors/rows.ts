import { State, RowName } from '../models';

export const selectRows = (state: State) => state.rows;

export const selectRowTooltip = (state: State, row: RowName): string =>
    state.rowTooltips[row] || "";