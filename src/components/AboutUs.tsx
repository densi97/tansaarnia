import { Button, Center, Container, Divider, Grid, Spoiler, Text, Title, useMantineTheme } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { donationStatus } from '../donationStatus';
import ProgressBar from 'progressbar.js';

function AboutUs() {

  const theme = useMantineTheme();
  const [showAllPhases, setshowAllPhases] = useState(false);
  const donationStatusInt: number = parseInt(donationStatus.replace(".", ""))

  return (
    <div style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
      <div className='anchor' id='about-us'></div>
      <Container>
        <Divider py={30} size="lg" label={<Title order={2}>Über uns</Title>} labelPosition="center" />
      </Container>

      <Center my={20}>
        <Container>
          <Text>
            wir, Djam Djoudi, Peter Kurda und Thomas Ludewig, ergreifen die Gelegenheit und erfüllen uns einen schon lange gehegten Herzenswunsch. Wir helfen nachhaltig und unterstützen ein wirklich gutes FLY&HELP-Bildungsprojekt in Komolo, in der Republik Tansania.
            <br /><br />
            Tatkräftig unterstütz werden wir hierbei von Adi Brittnacher und Fabian Denshorn, der unsere Internetseite gestaltet - ohne dass deren Aufwand in irgendeiner Form in Rechnung gestellt wird.
            <br /><br />
            Unser Ziel ist es, die bestehende <b>Schule in Komolo in mehreren Stufen auszubauen</b> – aktuell besuchen 734 Schüler/innen die Grundschule und werden in lediglich 7 Klassenräumen unterrichtet, die hoffnungslos (104 Schüler/innen in einem Klassenraum) überlastet sind – und die Klassengrößen durch den <b>Neubau einer Satellitenschule</b> (ca. 4 km entfernt) zu verkleinern.
            <br /><br />
            Durch den Neubau soll zudem auch den Kindern (148 Jungen & 171 Mädchen), die bis dahin nicht zur Schule gehen konnten, der Schulbesuch ermöglicht und für alle ein Grundstein für eine bessere Zukunft der Kinder und der Gesellschaft gelegt werden.
          </Text>
        </Container>
      </Center>

    </div>
  )
}

export default AboutUs