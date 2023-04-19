import React from "react";
import { useSelector } from "react-redux";

export default function CourseForm() {
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });

  console.log(name, description, cost);
  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Add Course</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input className="input is-expanded" />
          </div>
          <div className="field">
            <label className="label">Description</label>
            <textarea className="input is-expanded" />
          </div>
          <div className="field">
            <label className="label">Price</label>
            <input className="input is-expanded" type="number" />
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
}
