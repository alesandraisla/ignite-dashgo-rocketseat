import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SiderBarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    //toda vez que tiver troca de caminho
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])
    
    return(
        <SiderBarDrawerContext.Provider value={disclosure}>
            {children}
        </SiderBarDrawerContext.Provider>
    )
}

export const useSideBarDrawer = () => useContext(SiderBarDrawerContext)

