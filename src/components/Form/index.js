import React from 'react';
import { useFormik } from 'formik';
import { TextArea, Container, Form } from "./styles";

const WebhookForm = () => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="message">Post the JSON webhook</label>
        <TextArea
          id="message"
          name="message"
          type="textarea"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <button type="submit">Post</button>
      </Form>
    </Container>
  );

};

export default WebhookForm;