import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { Label } from './ContactForm.styled';
import { Input, BtnAddContact, ErrorMsg } from './ContactForm.styled';

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
  return (
    <Formik
      initialValues={{
        number: '',
        name: '',
      }}
      validationSchema={Schema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Input type="text" name="name" placeholder="Enter name..." />
          <ErrorMsg component="div" name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" placeholder="Enter number..." />
          <ErrorMsg component="div" name="number" />
        </Label>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </Form>
    </Formik>
  );
};
