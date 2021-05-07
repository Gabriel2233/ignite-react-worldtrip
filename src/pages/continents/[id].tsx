import { ReactNode } from 'react'

import { Flex, Box, Image, Heading, Text, SimpleGrid, IconButton } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { FiChevronLeft } from 'react-icons/fi'

import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import { Continent as TContinent, Country } from '../../types'

type ContinentProps = {
  continent: TContinent
}

export default function Continents({ continent }: ContinentProps) {
  const { back } = useRouter()

  console.log(continent)

  return (
    <Flex flexDir="column" w="full" h="full" align="center">
      <Header>
        <IconButton variant="unstyled" aria-label="Go back" icon={<FiChevronLeft />} onClick={() => back()} />

        <Image src="../logo.svg" w="185px" h='45px' alt="WorldTrip Logo" mx="auto" />
      </Header>

      <Flex
        backgroundImage={`url(${continent.cover_img})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        w="100%"
        h="500px"
        direction="column-reverse"
        justifyContent={["center", "flex-start"]}
        alignItems={["center", "flex-start"]}
        pl="8"
        pb="8"
      >
        <Text
          fontSize="48px"
          fontWeight="600"
          color="gray.500"
        >{continent.name}</Text>
      </Flex>

      <Flex w="80%" align="center" justify="space-between" my="4rem" flexDir={["column", "row", "row"]}>
        <Text color="gray.600" w={["80%", "60%", "50%"]} fontSize={["md", "lg", "xl"]} my="1rem">
          {continent.long_description}
        </Text>

        <Flex>
          <ContinentInfoCard value={50} title="Paises" />
          <ContinentInfoCard value={50} title="Paises" />
          <ContinentInfoCard value={50} title="Paises">
          </ContinentInfoCard>
        </Flex>
      </Flex>

      <Flex w="80%" flexDir="column">
        <Heading size="xl" color="gray.700" my={4}>Cidades +100</Heading>

        <SimpleGrid columns={[1, 2, 4]} gap={10}>
          {continent.countries.map(data => (
            <CityCard {...data} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export function CityCard({ id, capital, flag, name, image }: Country) {
  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" key={id} my="2rem">
      <Image src={image} alt={name} h="175px" w="100%" />
      <Flex w="100%" p={3} align="center" justify="space-between">
        <div>
          <Text fontWeight="bold" fontSize="lg" mb={4} color="gray.800">{name}</Text>
          <Text fontSize="md" color="gray.600">{capital}</Text>
        </div>

        <Image boxSize="50px" borderRadius="50%" src={flag} alt={name} />
      </Flex>
    </Box>
  )
}

type ContinentInfoCardProps = {
  value: number;
  title: string;
  children?: ReactNode
}

export function ContinentInfoCard({ value, title, children }: ContinentInfoCardProps) {
  return (
    <Box size="100px" textAlign="center" mx="1.75rem">
      <Heading size="xl" color="yellow.500" mb={4}>{value}</Heading>
      <Text size="lg" color="gray.800" fontWeight="semibold">{title}{children}</Text>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch("http://localhost:4000/continents")
  const continents = await data.json()

  const paths = continents.map((c: TContinent) => {
    return {
      params: { id: String(c.id) }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await fetch(`http://localhost:4000/continents/${params.id}`)
  const continent = await data.json()

  return {
    props: {
      continent
    }
  }
}
