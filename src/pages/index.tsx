import { Box, Flex, SimpleGrid, Image, Heading, Text, Divider } from '@chakra-ui/react'

import { Header } from '../components/Header'

export default function Home() {
  return (
    <Flex flexDir="column" w="full" h="full" align="center">
      <Header>
        <Image src="./logo.svg" w="185px" h='45px' alt="WorldTrip Logo" mx="auto" />
      </Header>

      <Flex bg="blue.800" justify="center" align="center" w="full" p={4} mb="4rem">
        <Flex justify="space-between" align="center" w="70%">
          <Box>
            <Heading size="xl" color="white">
              5 Continentes,<br />
            infinitas possibilidades.
            </Heading>
            <Text color="gray.300" fontSize="lg" mt={4}>
              Chegou a hora de tirar do papel a viagem que você<br />
              sempre sonhou.
            </Text>
          </Box>

          <Image w="420" h="270" src="./airplane.svg" pos="relative" top="40px" d={["none", "none", "block"]} />
        </Flex>
      </Flex>

      <SimpleGrid spacing={50} columns={[2, null, 5]}>
        <TripType source="./cocktail.svg" title="Vida noturna" />
        <TripType source="./cocktail.svg" title="Praia" />
        <TripType source="./cocktail.svg" title="Moderna" />
        <TripType source="./cocktail.svg" title="Classico" />
        <TripType source="./cocktail.svg" title="E Mais..." />
      </SimpleGrid>

      <Divider p={0.5} bg="gray.800" w="150px" my="4rem" />

      <Heading size="xl" fontWeight="light" color="gray.600" textAlign="center" mx="auto">
        Vamos nessa?<br />
        Entao escolha seu continente
      </Heading>
    </Flex>
  )
}

type TripTypeProps = {
  source: string;
  title: string;
}

export function TripType({ source, title }: TripTypeProps) {
  return (
    <Flex align="center" justify="center" flexDir="column" p={2}>
      <Image src={source} boxSize="100px" />
      <Text fontWeight="bold" fontSize="lg" color="gray.700" mt={4}>{title}</Text>
    </Flex>
  )
}
