import { createStyles, Overlay, Container, Title, Button, Text, Image, Group } from '@mantine/core';
import ChildImage from '../assets/img/Child.jpg';
import Logo from '../assets/img/logo.png';
import FlyAndHelpLogo from '../assets/img/fly_and_help_logo-transparent.png';
import { donationStatus, donationStatus_Independent, donationStatus_Project, donationStatus_Used } from '../donationStatus';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      `url(${ChildImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title1: {
    color: theme.primaryColor,
    fontSize: 40,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  title2: {
    color: theme.colors.lightgreen[0],
    fontSize: 40,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  logo: {
    width: 200,

    [theme.fn.smallerThan('sm')]: {
      width: 100
    },

    [theme.fn.smallerThan('xs')]: {
      width: 75
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  donationStatus: {
    color: theme.primaryColor,
    fontSize: 80,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 60,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 60,
      lineHeight: 1.3,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 0.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function HeroContentLeft({ setModalOpen }: { setModalOpen: (b: boolean) => void }) {
  const { classes } = useStyles();

  return (
    <div className={classes.hero} id="hero">
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .45) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Group>
          <Image src={Logo} className={classes.logo} my={20} />
          <Image src={FlyAndHelpLogo} className={classes.logo} my={20} />
        </Group>
        <Title className={classes.title1}>KULTURELLE BILDUNG</Title>
        <Title className={classes.title2}>IST ZUKUNFT</Title>
        <Title order={3} className={classes.description} mt="xl">
          Aktueller Spendenstand¹:
        </Title>
        <Text size="xs" color={"white"}>¹Spendenstand wird manuell aktualisiert.</Text>

        <Title order={1} className={classes.donationStatus} mt="xl">{donationStatus}€</Title>

        <Text size="sm" color={"white"}>{donationStatus_Used}€ bereits eingesetzt:<br />{donationStatus_Project}€ über das Projekt<br />{donationStatus_Independent}€ von unabhängigen Spendern</Text>



        <Button variant="gradient" size="xl" radius="xl" className={classes.control} onClick={() => { setModalOpen(true) }}>
          JETZT SPENDEN
        </Button>
      </Container>
    </div>
  );
}