import { ReactNode } from 'react'

import { Flex, Box, Tooltip, Image, Heading, Text, SimpleGrid, IconButton } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { FiChevronLeft } from 'react-icons/fi'

import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import { Continent as TContinent } from '../../types'

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

      <Flex w="60%" align="center" justify="space-between" my="4rem">
        <Text color="gray.600" w="50%" fontSize="xl">
          {continent.long_description}
        </Text>

        <Flex>
          <ContinentInfoCard value={50} title="Paises" />
          <ContinentInfoCard value={50} title="Paises" />
          <ContinentInfoCard value={50} title="Paises">
          </ContinentInfoCard>
        </Flex>
      </Flex>
    </Flex>
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
