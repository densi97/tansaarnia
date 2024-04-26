import { Center, Container, Divider, Title, useMantineTheme } from '@mantine/core'
import React from 'react'

function Location() {
  const theme = useMantineTheme();

  return (
    <div>
      <div className='anchor' id='location'></div>
      <Container>
        <Divider py={20} size="lg" label={<Title order={2}>Lage</Title>} labelPosition="center" />
      </Container>

      <div style={{ height: "480px", overflow: "hidden", backgroundColor: theme.colors.lightblue[6] }}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1cWDFi_B4Q1AskVOJcQjxOjncsaVctjaQ" width="100%" height="480" style={{ marginTop: -48 }} frameBorder={0}></iframe>
      </div>
    </div>
  )
}

export default Location