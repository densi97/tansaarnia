import { Anchor, Center, Container, Space, Title, useMantineTheme } from '@mantine/core'
import React from 'react'
import { Mail } from 'tabler-icons-react'

function Contact() {
  const theme = useMantineTheme();
  return (
    <div id="contact">
      <Container>
        <Center mt={20}>
          <Title order={2} my={20}>Fragen? Schreiben Sie uns eine Mail!</Title>
        </Center>
      </Container>

      <Center>
        <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="300">
          <Mail size={100} color={theme.primaryColor} />
        </div>
      </Center>

      <Center>
        <Anchor href='mailto:info@tansaarnia.com?subject=TanSAARnia'>info@tansaarnia.com</Anchor>
      </Center>
      
      <Space h="xl" />

    </div>
  )
}

export default Contact