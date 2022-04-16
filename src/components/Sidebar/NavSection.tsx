import { Box, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { Children, ReactNode } from "react";
import { RiContactsLine, RiDashboard2Line } from "react-icons/ri";

interface NavSectionProps{
    title: string;
    children: ReactNode;
}
export function NavSection({title, children}:NavSectionProps) {
    return(
        <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
        <Stack spacing="4" mt="8" align="stretch">
            {Children}
        </Stack>
    </Box>
    )
}