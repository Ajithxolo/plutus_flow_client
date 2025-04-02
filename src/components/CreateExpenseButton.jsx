import { Box, Button } from "@chakra-ui/react";

const CreateExpenseButton = ({ onClick }) => {
  return (
    <Button
      colorScheme="teal"
      size="lg"
      onClick={onClick}
    >
      Create Expense
    </Button>
  );
}
export default CreateExpenseButton;