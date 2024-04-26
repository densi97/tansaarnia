import { Anchor, Center, Container, Divider, Grid, Text, Title, useMantineTheme } from '@mantine/core'
import React, { useEffect } from 'react'
import { Books, CurrencyEuro, FileDownload, Heart, Users } from 'tabler-icons-react'
// @ts-ignore
import Flyer from '../assets/Flyer_TanSAARnia.pdf';
import ProgressBar from 'progressbar.js';

function Project() {
  const theme = useMantineTheme();

  useEffect(() => {
    let progress1 = new ProgressBar.Circle("#progress-container-1", {
      strokeWidth: 10,
      easing: 'easeInOut',
      color: '#ffffff',
      duration: 1400,
      trailWidth: 2,
    });
    progress1.animate(1);
    progress1.setText("100%")

    let progress2 = new ProgressBar.Circle("#progress-container-2", {
      strokeWidth: 10,
      easing: 'easeInOut',
      color: '#ffffff',
      duration: 1400,
      trailWidth: 2,
    });
    progress2.animate(0.1);
    progress2.setText("10%")
  }, []);

  return (
    <div style={{ backgroundColor: theme.colors.lightblue[6], paddingBottom: "2rem" }}>
      <div className='anchor' id='project'></div>
      <Container>
        <Divider py={20} size="lg" color='white' label={<Title order={2} color='white'>Projekt</Title>} labelPosition="center" />
      </Container>

      <Center mt={40} pb={20}>
        <Title order={3} style={{ color: "white" }}>Hier sehen Sie den Fortschritt des Projektes:</Title>
      </Center>

      <div data-aos="fade-up">
        <Grid align={"center"} justify="center">
          <Grid.Col xs={2} offsetXs={1} span={6}>
            <div id="progress-container-1" className='progress'></div>
          </Grid.Col>
          <Grid.Col xs={5} span={6}>
            <Text color='white'>
              <b>Bisher ermöglicht:</b><br />
              <ul>
                <li>2 Klassenräume mit Lehrerbüro</li>
                <li>46 Schulbänke für 2 Klassenzimmer</li>
                <li>1 Toilettenblock</li>
                <li>2 Tische und Stühle für Lehrer</li>
              </ul>
            </Text>
          </Grid.Col>
        </Grid>
      </div>

      <div data-aos="fade-up">
        <Grid align={"center"} justify="center">
          <Grid.Col xs={2} offsetXs={1} span={6}>
            <div id="progress-container-2" className='progress'></div>
          </Grid.Col>
          <Grid.Col xs={5} span={6}>
            <Text color='white'>
              <b>Nächste Schritte:</b><br />
              <ul>
                <li>Aufbau weiterer Klassenzimmer</li>
                <li>Bau einer Wasseraufbereitungsanlage</li>
              </ul>
            </Text>
          </Grid.Col>
        </Grid>
      </div>

      <Container mt={40} mb={20}>
        <Grid align={"stretch"}>
          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <Books size={100} color={theme.white} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <div data-aos="fade-left">
              <Title mb={10} order={3} style={{ color: "white" }}>Bildung für Mädchen wie Jungs</Title>
              <Text color='white'>
                Wir werden die Grundschule der Gemeinde Kinder Komolo in Tansania ausbauen. Die Hälfte der Schüler(innen) sind Mädchen. Neben der Chancengleichheit ist es Fakt, dass besonders Mütter mit Schulbildung in Familien wesentlich auf die Ausbildung der ­Kinder achten und somit die Basis für deren Chancen und die weiterer Generationen legen.
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <Users size={100} color={theme.white} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <div data-aos="fade-left">
              <Title mb={10} order={3} style={{ color: "white" }}>Kulturelle Vielfalt</Title>
              <Text color='white'>
                Das Verhältnis aller in Tansania gelebten Religionen ist an dieser Schule ausgewogen. Das ist ein weiterer Baustein die Bildung zur kulturellen Teilhabe genau hier zu fördern.
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <Heart size={100} color={theme.white} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <div data-aos="fade-left">
              <Title mb={10} order={3} style={{ color: "white" }}>Langfristige, nachhaltige Zusammenarbeit</Title>
              <Text color='white'>
                Wir wollen nicht einmal spenden und diese Menschen dann vergessen. Es ist ein mehrstufiges Vorhaben.
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <CurrencyEuro size={100} color={theme.white} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <div data-aos="fade-left">
              <Title mb={10} order={3} style={{ color: "white" }}>Alle Spenden fließen zu 100 % in die Projekte</Title>
              <Text color='white'>
                Es fallen keine Verwaltungskosten an. Diese werden über Sponsoren bzw. Reiner Meutsch privat abgedeckt.
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <FileDownload size={100} color={theme.white} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <Anchor href={Flyer} target='_blank'>
              <div data-aos="fade-left">
                <Title mb={10} order={3} style={{ color: "white" }}>Download Flyer</Title>
                <Text color='white'>
                  Hier können Sie den Flyer herunterladen.
                </Text>
              </div>
            </Anchor>
          </Grid.Col>

        </Grid>
      </Container>
    </div>
  )
}

export default Project