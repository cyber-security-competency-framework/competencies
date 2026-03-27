import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RowFilters } from "./RowFilters";
import EXPAND_COLLAPSE_ICON from '../../../res/down_caret.png';
import { ColumnFilters } from "./ColumnFilters";
import { UploadButton } from "../../components/UploadButton";
import { selectHasElements } from "../../selectors/elements";
import { ClearButton } from "./ClearButton";
import { DiffToggle } from './DiffToggle';
import { DisplayModeFilter } from './DisplayMode';
import { OptionType } from '../../models';
import styled from '@emotion/styled';
import { fontFamilies, colors } from '../../helpers/styles';


export type FilterBarProps = {
  title: string;
  // subtitle: string;
  logo?: string;
  enabledOptions: OptionType[];
}

export const FilterBar: React.FC<FilterBarProps> = ({ title, logo, enabledOptions }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const hasCompetencies = useSelector(selectHasElements);

  // if no options are enabled, no point in showing the sidebar
  if (enabledOptions.length === 0) { return null;}

  return (
    <StyledFilterBar c={colors} f={fontFamilies} className={isCollapsed ? "collapsed" : ""}>
      <div className="scrollContent">
        {!isCollapsed &&
          <>
          <h1 className="title">{title.split('\n').map((line, i, arr) => <React.Fragment key={i}>{line}{i < arr.length - 1 && <br/>}</React.Fragment>)}</h1>

          {hasCompetencies &&
            <>
              { enabledOptions.includes('displayMode') && <DisplayModeFilter /> }
              { enabledOptions.includes('filters') &&
                <>
                <RowFilters />
                <ColumnFilters />
                </>
              }

              { enabledOptions.includes('diff') && <DiffToggle /> }
            </>
          }

          {hasCompetencies && enabledOptions.includes('upload') && (
            <div className="upload">
              <UploadButton theme="light" label="Upload Another File" />
              <ClearButton />
            </div>
          )}

          </>}
      </div>

      <button
        title="collapse the sidebar"
        className="collapse"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <img aria-hidden="true" src={logo || EXPAND_COLLAPSE_ICON} className={logo ? "logo-icon" : "chevron-icon"}></img>
      </button>

    </StyledFilterBar>
  );
};

const StyledFilterBar = styled.div<{ c: typeof colors, f: typeof fontFamilies }>`
  height: 100vh;
  background-color: ${p => p.c.darkTheme};
  color: ${p => p.c.light};
  font-family: ${p => p.f.bodyFont};
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  min-width: 14vw;

  .scrollContent {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
    &::-webkit-scrollbar { display: none; }
  }

  &.collapsed {
    max-width: 4rem;
    min-width: 2rem;

    .label,
    .title,
    .levelFilter,
    .displayMode,
    .upload {
      display: none;
    }

    .collapse .chevron-icon {
      transform: rotate(-90deg);
    }
  }

  .label {
    margin-bottom: 0.25rem;
    font-size: 0.8rem;
    opacity: 0.8;
    font-family: ${p => p.f.headerFont};
  }

  .title {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .collapse {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: none;
    background-color: ${p => p.c.darkTheme};
    border: 2px solid #0047AB;
    position: absolute;
    left: calc(100% - 2rem);
    top: -1px;
    cursor: pointer;

    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0 0 0 2px ${p => p.c.lightTheme}, 0 0 0 4px ${p => p.c.dark};
    }

    .logo-icon {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    .chevron-icon {
      width: 100%;
      height: 100%;
      transform-origin: 50% 50%;
      transform: rotate(90deg);
      filter: invert(1);
    }
  }

  h1, h2 {
    font-family: ${p => p.f.headerFont};
  }

  .upload {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 0.8rem;
    padding-bottom: 1rem;
    padding: 1rem 0.5rem;
    box-sizing: border-box;

    label {
      flex-grow: 1;
      margin-right: 1rem;
    }
  }
`;