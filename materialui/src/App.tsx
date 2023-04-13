import React from 'react';
import './App.css';
import { LessonTypography } from './components/LessonTypography';
import { LessonButton } from './components/LessonButton';
import { LessonButtonGroup } from './components/LessonButtonGroup';
import { LessonTextField } from './components/LessonTextField';
import { LessonRadioGroup } from './components/LessonRadioGroup';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography/> */}
      {/* <LessonButton/> */}
      {/* <LessonButtonGroup/> */}
      {/* <LessonTextField/> */}
      <LessonRadioGroup />
    </div>
  );
}

export default App;
