import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition, Modal, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from './../assets/img/logo.png';
import Impressum from './Impressum';

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 100,
    maxWidth: "100vw"
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export default function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [imprintModalOpen, setimprintModalOpen] = useState(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        if (link.label === "Impressum") {
            setimprintModalOpen(true)
        } else {
          if (link.label === "Home") {
            var element = document.body;
          } else {
            var element = document.getElementById(link.link)!;
          }
          element && element.scrollIntoView({behavior: "smooth", block: 'start'});
        }  
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
        <Header height={HEADER_HEIGHT} className={classes.root}>
        <Container className={classes.header}>
            <img src={Logo} height={HEADER_HEIGHT - 20} />
            <Group spacing={5} className={classes.links}>
            {items}
            </Group>

            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

            <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
                <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
                </Paper>
            )}
            </Transition>
        </Container>
        </Header>
        <Modal opened={imprintModalOpen} onClose={() => {setimprintModalOpen(false)}} centered size="xl" title={<Title order={1}>Impressum</Title>}>
            <Impressum />
        </Modal>
    </>
  );
}