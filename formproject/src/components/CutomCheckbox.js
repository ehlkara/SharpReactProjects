import { useField } from "formik";
import React from "react";

export default function CutomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkBox">
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of use.</span>
      </div>
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}
