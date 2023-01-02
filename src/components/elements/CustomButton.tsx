import { Button } from "@chakra-ui/react";

type Props = {
  readonly onClickHandler: () => {};
  readonly label: string;
};

export default function CustomButton(props: Props): JSX.Element {
  const { onClickHandler, label } = props;

  return (
    <Button colorScheme="blue" onClick={onClickHandler}>
      {label}
    </Button>
  );
}
