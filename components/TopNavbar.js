import React from 'react'
import Link from 'next/link'
import * as Styled from './TopNavbar.styles';

const TopNavbar = () => {
  return (
    <Styled.TopNavbarContainer>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
    </Styled.TopNavbarContainer>
  )
}

export default TopNavbar