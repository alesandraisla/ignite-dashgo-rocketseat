import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react"
import { RiNotificationLine, RiSearch2Line, RiUser2Line } from 'react-icons/ri'

export function Header() {
    return(
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text
                fontSize="3x1"
                fontWeight="bold"
                letterSpacing="light"
                w="64"
            >
                dashgo
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>
            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input 
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: 'gray.400'}}    
                />
                <Icon as={RiSearch2Line} fontSize="20" />
            </Flex>
            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                    spacing="8"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"    
                >
                    <Icon as={RiNotificationLine} fontSize="20"/>
                    <Icon as={RiUser2Line} fontSize="20"/>
                </HStack>
                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Alesandra Mempis</Text>
                        <Text color="gray.300" fontSize="small">
                            alesandramempis@gmail.com
                        </Text>
                    </Box>
                    <Avatar 
                        size="md" 
                        name="Alesandra Mempis" 
                        src="https://avatars.githubusercontent.com/u/69330371?s=400&u=faec0d6656d8575ec4f2f6dbe3725767ab071287&v=4" 
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}