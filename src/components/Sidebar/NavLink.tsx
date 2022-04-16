import { Text, Link, Icon, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import { ElementType } from "react";
import { RiContactsLine } from "react-icons/ri";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
}

export function NavLink({icon, children, ...rest }: NavLinkProps) {
    return(
        <Link display="flex" alignItems="center" {...rest}>
            <Icon as={RiContactsLine} fontSize="20" />
            <Text ml="4" fontWeight="medium"> {children}</Text>
        </Link>
    )
}