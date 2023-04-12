import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CutomInput";
import { advancedSchema } from "../schemas";
import CutomSelect from "./CustomSelect";
import CutomCheckbox from "./CutomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

export default function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {(isSubmitting) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username..."
            />
            <CutomSelect
              label="Your school"
              name="university"
              placeholder="Please select your university"
            >
              <option value="">Please select your university</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="fbü">Fenerbahçe Üniversitesi</option>
              <option value="odtü">Odtü</option>
              <option value="itü">İstanbul Teknik Üniversitesi</option>
            </CutomSelect>
            <CutomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Save
            </button>
            <Link className="formLink" to="/">Go Main Form</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
