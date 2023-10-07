import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Min 2 letters')
    .max(18, 'Max 18 letters')
    .required('Is required!'),
  number: Yup.number()
    .min(6, 'Min 6 symbols')
    // .max(10, 'Max 10 symbols')
    .required('Is required!'),
});

export const ContactForm = ({ onSubmit }) => {
  // onFormSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state);

  //   this.reset();
  // };

  return (
    <Formik
      initialValues={{
        number: 0,
        name: '',
      }}
      validationSchema={Schema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.labelName}>
          Name
          <Field
            className={css.inputName}
            type="text"
            name="name"
            placeholder="Enter name..."
          />
          <ErrorMessage name="name" />
        </label>
        <label className={css.labelTel}>
          Number
          <Field
            className={css.inputTel}
            type="tel"
            name="number"
            placeholder="Enter number..."
          />
          <ErrorMessage name="number" />
        </label>
        <button className={css.btnAddContact} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
