import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import bootstrap5 from "./images/bootstrap5.png";
import ccsharp from "./images/ccsharp.png";
import kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      {/* <img src={Angular} /> */}

      <Course
        image={Angular}
        title="Angular"
        description="Deserunt velit elit proident proident. Nostrud Lorem minim ea consequat reprehenderit officia id. Mollit aute nulla in culpa nostrud culpa. Deserunt in anim sunt ea deserunt."
      />
      <Course
        image={bootstrap5}
        title="Bootstrap 5"
        description="Deserunt velit elit proident proident. Nostrud Lorem minim ea consequat reprehenderit officia id. Mollit aute nulla in culpa nostrud culpa. Deserunt in anim sunt ea deserunt."
      />
      <Course
        image={ccsharp}
        title="Komple Web"
        description="Deserunt velit elit proident proident. Nostrud Lorem minim ea consequat reprehenderit officia id. Mollit aute nulla in culpa nostrud culpa. Deserunt in anim sunt ea deserunt."
      />
      <Course
        image={kompleweb}
        title="Frontend"
        description="Deserunt velit elit proident proident. Nostrud Lorem minim ea consequat reprehenderit officia id. Mollit aute nulla in culpa nostrud culpa. Deserunt in anim sunt ea deserunt."
      />
    </div>
  );
}

export default App;
