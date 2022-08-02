import { Button, Center, Container, Divider, Grid, Spoiler, Text, Title, useMantineTheme } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { donationStatus } from '../donationStatus';
import ProgressBar from 'progressbar.js';

function AboutUs() {

  const theme = useMantineTheme();
  const [showAllPhases, setshowAllPhases] = useState(false);

  useEffect(() => {
    let progress = new ProgressBar.Circle("#progress-container-1", {
      strokeWidth: 10,
      easing: 'easeInOut',
      color: '#ffffff',
      duration: 1400,
      trailWidth: 2,
    });
    progress.animate(parseFloat((parseInt(donationStatus.replace(".", "")) / 31000).toFixed(2)));
    progress.setText((parseFloat((parseInt(donationStatus.replace(".", "")) / 31000).toFixed(2)) * 100).toString() + "%")
  }, []);

  return (
    <div style={{ backgroundColor: theme.colors.lightblue[6] }}>
      <div className='anchor' id='about-us'></div>
      <Container>
        <Divider py={30} size="lg" color="white" label={<Title order={2} style={{ color: "white" }} >Über uns</Title>} labelPosition="center" />
      </Container>

      <Center my={20}>
        <Container>
          <Text align='center' color="white">
            wir, Djam Djoudi, Peter Kurda und Thomas Ludewig, ergreifen die Gelegenheit und erfüllen uns einen schon lange gehegten Herzenswunsch. Wir helfen nachhaltig, und unterstützen ein wirklich gutes Bildungsprojekt in Komolo, in der Republik Tansania. Die dortige Schule werden wir in mehreren Stufen ausbauen, das Vorhandene sanieren und damit einen Grundstein für eine bessere Zukunft der Kinder und dortigen Gesellschaft legen.
          </Text>
        </Container>
      </Center>

      <Center mt={40} pb={20}>
        <Title order={4} style={{ color: "white" }}>Hier sehen Sie den Fortschritt des Projektes:</Title>
      </Center>

      <Grid align={"center"} justify="center">
        <Grid.Col xs={2} offsetXs={1} span={6}>
          <div id="progress-container-1" className='progress'></div>
        </Grid.Col>
        <Grid.Col xs={5} span={6}>
          <Text color={"white"}>
            <b>Phase 1:</b><br />
            Bau von 2 Klassenzimmern (mit Schulbänken) und 1 Lehrerzimmer
            <br />
            Aktueller Stand: <b>{donationStatus}€</b> / 31.000€
          </Text>
        </Grid.Col>
      </Grid>

      {!showAllPhases &&
      <Center pb={40}>
        <Button variant='light' onClick={() => { setshowAllPhases(true) }}>Weitere Phasen anzeigen</Button>
      </Center>
      }

      {showAllPhases &&
        <>
          <Grid align={"center"} justify="center" my={20}>
            <Grid.Col span={6}>
              <Text align='center' color={"white"}>
                <b>Phase 2:</b><br />
                Bau von 3 Klassenzimmern und Lieferung von Möbeln (Schreibtische und Tische)
              </Text>
            </Grid.Col>
          </Grid>

          <Grid align={"center"} justify="center" my={20}>
            <Grid.Col span={6}>
              <Text align='center' color={"white"}>
                <b>Phase 3:</b><br />
                Renovierung von 7 Klassenzimmern und einem Wasser Tank
              </Text>
            </Grid.Col>
          </Grid>

          <Grid align={"center"} justify="center" my={20}>
            <Grid.Col span={6}>
              <Text align='center' color={"white"}>
                <b>Phase 4:</b><br />
                Bau eines Toilettenblocks mit 18 Grubenlatrinen
              </Text>
            </Grid.Col>
          </Grid>

          <Grid align={"center"} justify="center" my={20} pb={40}>
            <Grid.Col span={6}>
              <Text align='center' color={"white"}>
                <b>Phase 5:</b><br />
                Erneuerung des Regenwassertanks und Installation von Regenrinnen für die Regenwassernutzung
              </Text>
            </Grid.Col>
          </Grid>
        </>
      }
    </div>
  )
}

export default AboutUs