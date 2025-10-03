'use client'

import { Box, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BigClockIcon } from '../../ui/icons'
import LocalTime from './LocalTime'
import './Footer.scss'

function Footer () {
  const [currentYear, setCurrentYear] = useState(null)
  useEffect(() => setCurrentYear(new Date().getFullYear()), [])

  return (
    <Box marginTop={'auto'}>
      <div className={'FooterStub'}></div>

      <Flex
        className={'Footer'}
        maxW={'container.maxNavigationW'}
        ml={'auto'}
        mr={'auto'}
        h={'auto'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div className={'Footer__TimezoneContainer'}>
          <BigClockIcon className={'Footer__ClockIcon'} w={'35px'} h={'34px'}/>
          <LocalTime className={'Footer__LocalTime'}/>
        </div>

        <div className={'Footer__CopyrightBlock'}>
          <p className={'Footer__Copyright'}>@ {currentYear} Build Union</p>
        </div>
      </Flex>
    </Box>
  )
}

export default Footer
