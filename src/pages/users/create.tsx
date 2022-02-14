import { Box, Flex, Heading, Divider, Stack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import Link from 'next/link';

export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                <Box
                    flex="1" //ocupar toda largura possivel
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                >
                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
                    <Divider my="6" borderColor="gray.600" />
                    <Stack spacing="8">
                        <SimpleGrid minChildWidth="240px"
                         spacing="8"
                         w="100%"
                         >
                             <Input name="name" label="Nome Completo"/>
                             <Input name="email" type="email" label="E-mail"/>

                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px"
                         spacing="8"
                         w="100%"
                         >
                             <Input name="password" type="password" label="Senha"/>
                             <Input name="password" type="password" label="Confirmação da Senha"/>

                        </SimpleGrid>

                    </Stack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                        <Link href="/users" passHref>
                            <Button as='a' colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                            <Button colorScheme="pink">Salvar</Button>

                        </HStack>

                    </Flex>
                </Box>
            </Flex>
        </Box>

    );
}