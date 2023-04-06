import "./App.css";
import { useState } from "react";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = ["angular", "bootstrap5", "ccsharp", "kompleweb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  // const [value, setValue] = useState(0);
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    // setValue(value + 1);
    setCourses([...courses, getRandomCourse()]);
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <div className="App">
      {/* <button onClick={handleClick}>Add Course</button>
    <div>Course Count: {value}</div> */}
      <button className="appButton" onClick={handleClick}>
        Add Course
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
