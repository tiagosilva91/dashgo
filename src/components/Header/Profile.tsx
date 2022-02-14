import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box textAlign="right" mr="4">
                <Text>Tiago Silva</Text>
                <Text color="gray.300" fontSize="small">tiagofef@gmail.com</Text>
            </Box>

            <Avatar size="md" name="Tiago Silva" src="https://github.com/tiagosilva91.png" />

        </Flex>
    );
}