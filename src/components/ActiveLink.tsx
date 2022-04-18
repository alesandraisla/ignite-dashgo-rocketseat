import Link, {LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

// se for receber um text, qualquer coisa, numero, outroas componentes o tipo tem que ser reactNode
//agora se so pode receber só um component op tipo tem que ser reactElement
interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({
    children, 
    shouldMatchExactHref = false,
    ...rest
}: ActiveLinkProps) {
    const { asPath } = useRouter()

    let isActive = false;
    
    if(shouldMatchExactHref && 
        (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if(!shouldMatchExactHref &&
        (asPath.startsWith(String(rest.href)) ||
        asPath.startsWith(String(rest.as)))) {
            isActive = true;
        }

    return(
        <Link {...rest}>
            {/* //clonando o elemento e modificando */}
            {cloneElement(children,{
                color: isActive ? 'pink.400' : 'gray.50'
            } )}
        </Link>
    )
}