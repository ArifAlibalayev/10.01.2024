import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";

function AddPage() {



function addElement(item) {
  fetch('http://localhost:4500/', {  
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item) 
  })
}
  return (
    <section id="AddPage">
      <Formik
        initialValues={{
          serviceIcon: Yup.string,
          serviceTitle: Yup.string,
          serviceDescription: Yup.string,
        }}
        validationSchema={Yup.object({
          serviceIcon: Yup.string().required("Required"),
          serviceTitle: Yup.string()
            .max(20, "Must be 10 characters or less")
            .required("Required"),
          serviceDescription: Yup.string()
          .max(100, "Must be 100 characters or less")
          .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addElement(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="FormCss">
          <label htmlFor="serviceIcon">Service Icon</label>
          <Field name="serviceIcon" type="text" />
          <ErrorMessage name="serviceIcon" className="ErrorCss"/>

          <label htmlFor="serviceTitle">Service Title</label>
          <Field name="serviceTitle" type="text" />
          <ErrorMessage name="serviceTitle" />

          <label htmlFor="serviceDescription">Service Description</label>
          <Field name="serviceDescription" type="text" />
          <ErrorMessage name="serviceDescription" />

          <button type="submit">Add Service</button>
        </Form>
      </Formik>
    </section>
  );
}

export default AddPage;
