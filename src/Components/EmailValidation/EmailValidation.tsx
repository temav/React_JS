import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, ErrorMessage } from "./StyledComponents";
import { Button } from "../StyledComponents/StyledComponents";

export const RenderField = ({ input, type, meta: { error } }) => (
  <div>
    <Input
      {...input}
      placeholder="somebody@example.com"
      type={type}
      error={error}
    />
    <ErrorMessage>{error}</ErrorMessage>
  </div>
);

export const ResetForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="text" component={RenderField} />
      <Button type="submit" disabled={pristine || submitting}>
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "resetPasswordForm",
})(ResetForm);
