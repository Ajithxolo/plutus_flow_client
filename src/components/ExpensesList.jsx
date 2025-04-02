import React from 'react';
import { useFetchExpensesQuery } from '../gql_generated/index';
import { Box, Heading, Text, List, ListItem, Spinner, Alert, AlertIcon, Flex, Spacer } from '@chakra-ui/react';
import CreateExpenseButton from './CreateExpenseButton';
const ExpensesList = () => {
  const { data, error, isLoading } = useFetchExpensesQuery();

  if (isLoading) return <Spinner size="xl" />;
  if (error) return (
    <Alert status="error">
      <AlertIcon />
      {error.message}
    </Alert>
  );

  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Spacer />
        <Box p={4}>
          <CreateExpenseButton onClick={() => console.log('Create Expense')} />
        </Box>
      </Flex>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading as="h1" size="lg" mb={4}>Expenses List</Heading>
        <List spacing={3}>
          {data?.expenses.map(expense => (
            <ListItem key={expense.id} p={3} shadow="sm" borderWidth="1px" borderRadius="md">
              <Heading as="h2" size="md">{expense.title}</Heading>
              <Text>{expense.description}</Text>
              <Text fontWeight="bold">Amount: ${expense.amount}</Text>
              <Text>Date: {new Date(expense.date).toLocaleDateString()}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default ExpensesList;