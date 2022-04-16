import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

//Receber a propriedade
interface ProfileProps {
    showProfileData: boolean;
}
export function Profile({showProfileData = true}: ProfileProps) {
    return(
        <Flex align="center">
            {showProfileData && (
                    <Box mr="4" textAlign="right">
                    <Text>Alesandra Mempis</Text>
                    <Text color="gray.300" fontSize="small">
                        alesandramempis@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar 
                size="md" 
                name="Alesandra Mempis" 
                src="https://avatars.githubusercontent.com/u/69330371?s=400&u=faec0d6656d8575ec4f2f6dbe3725767ab071287&v=4" 
            />
        </Flex>
    )
}