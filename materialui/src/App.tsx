import React from 'react';
import './App.css';
import { LessonTypography } from './components/LessonTypography';
import { LessonButton } from './components/LessonButton';
import { LessonButtonGroup } from './components/LessonButtonGroup';
import { LessonTextField } from './components/LessonTextField';
import { LessonRadioGroup } from './components/LessonRadioGroup';
import { LessonRadioExample } from './components/LessonRadioExample';
import { LessonSelect } from './components/LessonSelect';
import { LessonCheckbox } from './components/LessonCheckbox';
import { LessonAutoComplete } from './components/LessonAutoComplete';
import { LessonBox } from './components/LessonBox';
import { LessonStack } from './components/LessonStack';
import { LessonGrid } from './components/LessonGrid';
import { LessonCard } from './components/LessonCard';
import { LessonAccordion } from './components/LessonAccordion';
import { LessonAppBar } from './components/LessonAppBar';
import { LessonImageList } from './components/LessonImageList';
import { LessonPaper } from './components/LessonPaper';
import { LessonLink } from './components/LessonLink';
import { LessonBreadsCrump } from './components/LessonBreadsCrump';
import { LessonDrawer } from './components/LessonDrawer';
import { LessonBadge } from './components/LessonBadge';
import { LessonSpeedDial } from './components/LessonSpeedDial';
import { LessonBottomNavigation } from './components/LessonBottomNavigation';
import { LessonAvatar } from './components/LessonAvatar';
import { LessonList } from './components/LessonList';
import { LessonToolTip } from './components/LessonToolTip';
import { LessonAlert } from './components/LessonAlert';
import { LessonDialog } from './components/LessonDialog';
import { LessonSnackbar } from './components/LessonSnackbar';
import { LessonProgress } from './components/LessonProgress';
import { LessonSkeleton } from './components/LessonSkeleton';
import { LessonLoadingButton } from './components/LessonLoadingButton';
import { LessonTable } from './components/LessonTable';
import { LessonDatePicker } from './components/LessonDatePicker';
import { LessonDateRange } from './components/LessonDateRange';
import { LessonTabs } from './components/LessonTabs';
import { LessonMasonry } from './components/LessonMasonry';
import { LessonTimeLine } from './components/LessonTimeLine';
import { LessonCustomization } from './components/LessonCustomization';

import { createTheme, colors, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[500],
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LessonTypography/>
        <LessonButton/>
        {/* <LessonButtonGroup/> */}
        {/* <LessonTextField/> */}
        {/* <LessonRadioGroup /> */}
        {/* <LessonRadioExample /> */}
        {/* <LessonSelect /> */}
        {/* <LessonCheckbox /> */}
        {/* <LessonAutoComplete /> */}
        {/* <LessonBox /> */}
        {/* <LessonStack /> */}
        {/* <LessonGrid /> */}
        {/* <LessonCard /> */}
        {/* <LessonAccordion /> */}
        {/* <LessonAppBar /> */}
        {/* <LessonImageList /> */}
        {/* <LessonPaper /> */}
        <LessonLink />
        {/* <LessonBreadsCrump /> */}
        {/* <LessonDrawer /> */}
        {/* <LessonBadge /> */}
        {/* <LessonSpeedDial /> */}
        {/* <LessonBottomNavigation /> */}
        {/* <LessonAvatar /> */}
        {/* <LessonList /> */}
        {/* <LessonToolTip /> */}
        {/* <LessonAlert /> */}
        {/* <LessonDialog /> */}
        {/* <LessonSnackbar /> */}
        {/* <LessonProgress /> */}
        {/* <LessonSkeleton /> */}
        {/* <LessonLoadingButton /> */}
        {/* <LessonTable /> */}
        {/* <LessonDatePicker /> */}
        {/* <LessonDateRange /> */}
        {/* <LessonTabs /> */}
        {/* <LessonMasonry /> */}
        {/* <LessonTimeLine /> */}
        <LessonCustomization />
      </div>
    </ThemeProvider>
  );
}

export default App;
