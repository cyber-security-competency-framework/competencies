import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { FilterBar } from "./scenes/FilterBar";
import { ListView } from "./scenes/ListView";
import { MatrixView } from "./scenes/MatrixView";
import { UploadView } from "./scenes/UploadView";
import { loadFiles } from "./thunks/load";
import {
  createDisplayModeAction,
  createEnableRenderHtmlAction,
} from "./reducers";
import { MarkdownToMatrixProps } from "index";
import { colors, parseCustomTheme } from "./helpers/styles";
import { EXCLUDE_HEADERS } from "./helpers/matcher";
import { config } from "./helpers/config";
import {
  createDisableCollapsingAction,
  createSetSingleFileOnlyAction,
} from "./reducers";

export const App: React.FC<MarkdownToMatrixProps> = ({
  enabledOptions = ["filters", "displayMode"],
  title,
  subtitle: _subtitle,
  logo,
  fileUrls,
  customTheme,
  defaultMode,
  renderHtml,
  excludeHeaders,
  wrapperElement,
  disableCollapsing,
  headingWrapperElement,
  singleFileOnly,
}) => {
  const allowUpload = enabledOptions.includes("upload");

  // load files if any were provided
  const dispatch = useDispatch();

  if (singleFileOnly) {
    useEffect(() => {
      dispatch(createSetSingleFileOnlyAction());
    });
  }

  if (fileUrls && fileUrls.length > 0) {
    useEffect(() => {
      dispatch(loadFiles(fileUrls));
    }, [fileUrls]);
  }

  // set the default mode
  if (defaultMode) {
    useEffect(() => {
      dispatch(createDisplayModeAction(defaultMode));
    });
  }

  // don't allow collapsing
  if (disableCollapsing) {
    useEffect(() => {
      dispatch(createDisableCollapsingAction());
    });
  }

  if (renderHtml) {
    useEffect(() => {
      dispatch(createEnableRenderHtmlAction());
    });
  }

  if (excludeHeaders) {
    useEffect(() => {
      for (let exHead of excludeHeaders) {
        EXCLUDE_HEADERS.push(exHead);
      }
    });
  }

  if (customTheme) {
    parseCustomTheme(customTheme);
  }

  if (wrapperElement) {
    config.wrapper = wrapperElement;
  }

  if (headingWrapperElement) {
    config.headingWrapper = headingWrapperElement;
  }

  return (
    <StyledLayout c={colors}>
      <FilterBar
        title={title || ""}
        logo={logo}
        enabledOptions={enabledOptions}
      />
      <StyledMain c={colors}>
        <ListView />
        <MatrixView />
        {allowUpload && <UploadView />}
      </StyledMain>
    </StyledLayout>
  );
};

const StyledLayout = styled.div<{ c: typeof colors }>`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  color: ${(p) => p.c.dark};
`;

const StyledMain = styled.div<{ c: typeof colors }>`
  flex: 1;
  overflow: auto;
  background-color: ${(p) => p.c.light};
`;
