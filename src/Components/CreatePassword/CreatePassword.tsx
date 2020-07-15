import * as React from "react";
import { useState } from "react";
import { Field, reduxForm } from "redux-form";
import {
  PasswordInput,
  PasswordField,
  ShowPasswordButton,
  Input,
  ErrorMessage,
} from "./StyledComponents";
import { Button } from "../StyledComponents/StyledComponents";
export const RenderField = ({ input, meta: { error } }) => {
  let [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <PasswordField>
      <PasswordInput>
        <Input
          {...input}
          placeholder="Input new password..."
          type={showPassword ? "text" : "password"}
          error={error}
        />
        <ShowPasswordButton
          showPassword={showPassword}
          type="button"
          onClick={handleClickShowPassword}
        ></ShowPasswordButton>
      </PasswordInput>
      <ErrorMessage>
        {error &&
          JSON.parse(error).map((item, index) => <p key={index}>{item}</p>)}
      </ErrorMessage>
    </PasswordField>
  );
};

export const PasswordForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="password" component={RenderField} />
      <Button type="submit" disabled={pristine || submitting}>
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "resetPasswordForm",
})(PasswordForm);
