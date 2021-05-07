import React, { useState } from 'react';
import { Continent } from '../types'

import Link from 'next/link'

import { Flex, Text, Heading } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

type SwiperProps = {
  items: Continent[]
}

export function SwiperComponent({ items }: SwiperProps) {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  items.map(item => (
    slides.push(
      <SwiperSlide key={`slide-${item.id}`} tag="li">
        <Link href={`/continents/${item.id}`}>
          <Flex
            backgroundImage={`url(${item.cover_img})`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            w="100%"
            h="450px"
            justifyContent={"center"}
            alignItems={"center"}
            flexDir="column"
            px={16}
            alt={`Slide ${item.id}`}
            color='black'
          >
            <Heading textAlign={["start", null, null]} fontSize={["lg", "2xl"]}>{item.name}</Heading>
            <Text fontSize={["sm", "lg"]}>{item.short_description}</Text>
          </Flex>
        </Link>
      </SwiperSlide>
    )
  ))

  return (
    <React.Fragment>
      <Swiper
        id="main"
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>

    </React.Fragment>
  );
}

