/* eslint-disable react/react-in-jsx-scope */
import Form from "../../ui/Form";
import { StyledFormRow } from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      maxBookLength,
      minBookLength,
      maxGuestsPerBook,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { updateSetting, isUpdating } = useUpdateSetting();
  function handleUpdate(e, field) {
    const value = e.target.value;
    updateSetting({ [field]: value });
  }
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <StyledFormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookLength}
          onBlur={(e) => handleUpdate(e, "minBookLength")}
          disabled={isUpdating}
        />
      </StyledFormRow>
      <StyledFormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookLength}
          onBlur={(e) => handleUpdate(e, "maxBookLength")}
          disabled={isUpdating}
        />
      </StyledFormRow>
      <StyledFormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBook}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBook")}
          disabled={isUpdating}
        />
      </StyledFormRow>
      <StyledFormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          disabled={isUpdating}
        />
      </StyledFormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
