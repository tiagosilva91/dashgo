import { Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiContactsLine, RiDatabaseLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export default function SideBarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDatabaseLine} href="/dashboard">Dashborad</NavLink>
                <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
            </NavSection>

            <NavSection title="AUTOMACAO">
                <NavLink icon={RiInputMethodLine}href="/form">Formulário</NavLink>
                <NavLink icon={RiGitMergeLine}href="/automation">Automação</NavLink>
            </NavSection>
        </Stack>
    );
}