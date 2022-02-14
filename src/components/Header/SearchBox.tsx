import {  Input, Icon, Flex  } from "@chakra-ui/react";
import { RiSearchLine} from 'react-icons/ri'

export function SearchBox() {
    return (
        <Flex
            as="label"
            flex="1"
            paddingY="4"
            paddingX="8"
            marginLeft="6"
            maxWidth={400}
            alignSelf="center"
            position="relative"
            color="gray.200"
            borderRadius="full"
            backgroundColor="gray.800"
        >
            <Input
                color="gray.50"
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Buscar na Plataforma"
                _placeholder={{ color: "gray.400" }}
            />

            <Icon as={RiSearchLine} fontSize="20" />

        </Flex>
    );
}