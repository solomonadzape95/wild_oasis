/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from "styled-components";

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 1.2rem;

  padding: 1.2rem 0;

  &:has(button) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
export default function FormRowVertical({ label, error, children }) {
  return (
    <FormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </FormRow>
  );
}
