import { Button } from "@chakra-ui/react";

type Props = {
  readonly onClickHandler: () => {};
};

export default function CustomButton(props: Props): JSX.Element {
  const { onClickHandler } = props;

  return (
    <Button colorScheme="blue" onClick={onClickHandler}>
      登録
    </Button>
  );
}
