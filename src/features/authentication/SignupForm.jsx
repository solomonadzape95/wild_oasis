/* eslint-disable react/react-in-jsx-scope */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { StyledFormRow } from "../../ui/FormRow";
import Input from "../../ui/Input";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  function onSubmit(e) {
    e.preventDefault();
    console.log(getValues());
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </StyledFormRow>

      <StyledFormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email",
            },
          })}
        />
      </StyledFormRow>

      <StyledFormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "The password should be at least 8 characters",
            },
          })}
        />
      </StyledFormRow>

      <StyledFormRow
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) => {
              return (
                value === getValues().password || "The passwords must match"
              );
            },
          })}
        />
      </StyledFormRow>

      <StyledFormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </StyledFormRow>
    </Form>
  );
}

export default SignupForm;
