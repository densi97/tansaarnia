import { Button, Center, Container, Divider, Grid, Spoiler, Text, Title, useMantineTheme } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { donationStatus } from '../donationStatus';
import ProgressBar from 'progressbar.js';

function AboutUs() {

  const theme = useMantineTheme();
  const [showAllPhases, setshowAllPhases] = useState(false);
  const donationStatusInt: number = parseInt(donationStatus.replace(".", ""))

  return (
    <div style={{ paddingBottom: "1rem" }}>
      <div className='anchor' id='about-us'></div>
      <Container>
        <Divider py={30} size="lg" label={<Title order={2}>Über uns</Title>} labelPosition="center" />
      </Container>

      <Center my={20}>
        <Container>
          <Text align='center'>
            wir, Djam Djoudi, Peter Kurda und Thomas Ludewig, ergreifen die Gelegenheit und erfüllen uns einen schon lange gehegten Herzenswunsch. Wir helfen nachhaltig, und unterstützen ein wirklich gutes Bildungsprojekt in Komolo, in der Republik Tansania. Die dortige Schule werden wir in mehreren Stufen ausbauen, das Vorhandene sanieren und damit einen Grundstein für eine bessere Zukunft der Kinder und dortigen Gesellschaft legen.
          </Text>
        </Container>
      </Center>

    </div>
  )
}

export default AboutUs