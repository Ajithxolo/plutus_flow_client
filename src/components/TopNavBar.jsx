import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Box, Flex, Text, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import LogoutButton from './LogoutButton';

const TopNavBar = () => {
  const bgColor = useColorModeValue('teal.500', 'teal.700'); // Light/Dark mode support
  const buttonBg = useColorModeValue('red.100', 'red.800');
  const buttonHoverBg = useColorModeValue('pink.200', 'pink.600');
  const textColor = useColorModeValue('black', 'gray.100');

  return (
    <Box bg={bgColor} color={textColor} px={4} py={2}>
      <Flex justify="space-between" align="center">
        {/* Left-aligned text */}
        <Text fontSize="xl" fontWeight="bold" textColor='white'>
          PlutusFlow
        </Text>

        {/* Right-aligned user profile dropdown */}
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg={buttonBg}
            _hover={{ bg: buttonHoverBg }}
            color={textColor}
          >
            Profile
          </MenuButton>
          <MenuList>
            <MenuItem>Edit Profile</MenuItem>
            <LogoutButton />
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default TopNavBar;