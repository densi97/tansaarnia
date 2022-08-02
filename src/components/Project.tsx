import { Anchor, Center, Container, Divider, Grid, Text, Title, useMantineTheme } from '@mantine/core'
import React from 'react'
import { Books, CurrencyEuro, FileDownload, Heart, Users } from 'tabler-icons-react'
// @ts-ignore
import Flyer from '../assets/Flyer_TanSAARnia.pdf';

function Project() {
  const theme = useMantineTheme();

  return (
    <div>
      <div className='anchor' id='project'></div>
      <Container>
        <Divider my={30} size="lg" label={<Title order={2}>Projekt</Title>} labelPosition="center" />
      </Container>

      <Container my={20}>
        <Grid align={"stretch"}>
          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <Books size={100} color={theme.primaryColor} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <div data-aos="fade-left">
              <Title mb={10} order={3}>Bildung für Mädchen wie Jungs</Title>
              <Text>
                Wir werden die Grundschule der Gemeinde Kinder Komolo in Tansania ausbauen. Die Hälfte der Schüler(innen) sind Mädchen. Neben der Chancengleichheit ist es Fakt, dass besonders Mütter mit Schulbildung in Familien wesentlich auf die Ausbildung der ­Kinder achten und somit die Basis für deren Chancen und die weiterer Generationen legen.
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <Users size={100} color={theme.primaryColor} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <div data-aos="fade-left">
              <Title mb={10} order={3}>Kulturelle Vielfalt</Title>
              <Text>
                Das Verhältnis aller in Tansania gelebten Religionen ist an dieser Schule ausgewogen. Das ist ein weiterer Baustein die Bildung zur kulturellen Teilhabe genau hier zu fördern.
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <Heart size={100} color={theme.primaryColor} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <div data-aos="fade-left">
              <Title mb={10} order={3}>Langfristige, nachhaltige Zusammenarbeit</Title>
              <Text>
                Wir wollen nicht einmal spenden und diese Menschen dann vergessen. Es ist ein mehrstufiges Vorhaben.
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <CurrencyEuro size={100} color={theme.primaryColor} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <div data-aos="fade-left">
              <Title mb={10} order={3}>Alle Spenden fließen zu 100 % in die Projekte</Title>
              <Text>
                Es fallen keine Verwaltungskosten an. Diese werden über Sponsoren bzw. Reiner Meutsch privat abgedeckt.
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col xs={3} span={12} my={10}>
            <Center style={{ height: "100%" }}>
              <div data-aos="fade-up">
                <FileDownload size={100} color={theme.primaryColor} />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={9} span={12} my={10}>
            <Anchor href={Flyer} target='_blank'>
              <div data-aos="fade-left">
                <Title mb={10} order={3}>Download Flyer</Title>
                <Text>
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