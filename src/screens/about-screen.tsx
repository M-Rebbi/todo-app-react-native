import React from 'react';
import {ScrollView, Box, Text, VStack, Icon, Image, useColorModeValue } from 'native-base';
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box';
import Navbar from '../components/navbar';
import MastHead from '../components/masthead';
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox 
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <MastHead 
        title="About this app" 
        image={require('../assets/about-masthead.png')}
      >
        <Navbar/>
      </MastHead>
      <ScrollView 
        borderTopLeftRadius='20px'
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50','primary.900')}
        mt='-20px'
        pt='30px'
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems='center'> 
            <Image 
              source={require('../assets/profile-image.png')}
              borderRadius="full"
              resizeMode='cover'
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize='md' w="full">This is my first React Native application</Text>
            <LinkButton 
              colorScheme={useColorModeValue('blue','red')} 
              href='https://www.github.com/M-Rebbi'
              size='lg'
              borderRadius='full'
              leftIcon={
                <Icon 
                  as={Feather} 
                  name="github"
                  size="sm"
                  opacity={0.5}
                />
              }
            >Go to my Github profile</LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen;