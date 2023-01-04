import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type Props = {
  readonly inputWidth: string;
  readonly isRequired: boolean;
  readonly labelName: string;
  readonly placeholder: string;
  readonly onChange: (value: string) => void;
};

export default function CustomForm(props: Props): JSX.Element {
  const { inputWidth, isRequired, labelName, placeholder, onChange } = props;

  return (
    <>
      <FormControl isRequired={isRequired}>
        <FormLabel>{labelName}</FormLabel>
        <Input
          placeholder={placeholder}
          width={inputWidth}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          }}
        />
      </FormControl>
    </>
  );
}
