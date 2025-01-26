/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { StyledFormRow } from "../../ui/FormRow";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({ cabin = {}, closeForm = null }) {
  const { id: editId, ...editValues } = cabin;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  console.log(errors);
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries("cabins");
      reset();
    },
    onerror: (err) => {
      toast.error(err.message);
    },
  });
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ id, newCabinData }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin edited successfully");
      queryClient.invalidateQueries("cabins");
      closeForm();
    },
    onerror: (err) => {
      toast.error(err.message);
    },
  });
  const isWorking = isCreating || isEditing;
  function onSubmit(data) {
    // console.log(data);
    const image = typeof data.image === "string" ? data.image : data.image[0];
    isEditSession
      ? editCabin({ newCabinData: { ...data, image }, id: editId })
      : createCabin({ ...data, image: image });
  }
  function onError(errors) {
    const errorValues = Object.values(errors);
    errorValues.forEach((error) => {
      toast.error(error.message);
    });
    // console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <StyledFormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: isEditSession ? false : "This field is required",
          })}
          disabled={isWorking}
        />
      </StyledFormRow>

      <StyledFormRow
        label="Maximum Capacity"
        error={errors?.maxCapacity?.message}
      >
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: isEditSession ? false : "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
          disabled={isWorking}
        />
      </StyledFormRow>

      <StyledFormRow
        label="Regular Price"
        error={errors?.regularPrice?.message}
      >
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: isEditSession ? false : "This field is required",
            min: { value: 1, message: "Price should be at least 1" },
          })}
          disabled={isWorking}
        />
      </StyledFormRow>

      <StyledFormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: isEditSession ? false : "This field is required",
            validate: (value) => {
              return (
                value <= getValues().regularPrice ||
                "Discount should be less than the regular price"
              );
              //   console.log(getValues().regularPrice, value);
            },
          })}
          disabled={isWorking}
        />
      </StyledFormRow>

      <StyledFormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: isEditSession ? false : "This field is required",
          })}
          disabled={isWorking}
        />
      </StyledFormRow>

      <StyledFormRow label="Cabin Photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image")}
          disabled={isWorking}
        />
      </StyledFormRow>

      <StyledFormRow>
        <Button
          variation="secondary"
          type={isEditSession ? "" : "reset"}
          disabled={isWorking}
          onClick={isEditSession && closeForm}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession
            ? "Edit Cabin"
            : isCreating
            ? "Creating"
            : "Create cabin"}
        </Button>
      </StyledFormRow>
    </Form>
  );
}

export default CreateCabinForm;
