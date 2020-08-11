import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too  !")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(4, "Password too short!").required("Required"),
});
const Basic = () => (
  <div class="container-fluid">
    <div className="row">
      <div class="col-md-4"></div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
          resetForm(true);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div class=" col-md-4">
            <br />
            <br />
            <br />
            <br />
            <div class="card">
              <form onSubmit={handleSubmit} class="card-body">
                <center>
                  <h1 class="card-title">Sign Up</h1>
                </center>

                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="name" />
                  </p>
                </div>
                <div class="form-group">
                  <label for="EmailAddress">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="email" />
                  </p>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="password" />
                  </p>
                </div>

                <button class="btn btn-lg btn-primary btn-block" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  </div>
);

export default Basic;
