import { Button, Paper, Text, Group, CloseButton } from '@mantine/core';

export function CookiesBanner({showCookieBanner, setShowCookieBanner}: {showCookieBanner: boolean, setShowCookieBanner: () => void}) {
  return (
    <>
    {showCookieBanner && 
        <Paper withBorder p="lg" radius="md" shadow="md" id='cookieBanner'>
        <Group position="apart" mb="xs">
            <Text size="md" weight={500}>
            Diese Webseite nutzt Cookies.
            </Text>
            <CloseButton mr={-9} mt={-9} onClick={() => {setShowCookieBanner()}} />
        </Group>
        <Text color="dimmed" size="xs">
            Durch die weitere Nutzung der Seite stimmen Sie unserer Datenschutzverordnung, sowie der Vewendung von Cookies zu. <a href="https://cookiesandyou.com/" target="_blank">Weitere Informationen</a>
        </Text>
        <Group position="right" mt="xs">
            <Button variant="outline" size="xs" onClick={() => {setShowCookieBanner()}}>
            Akzeptieren
            </Button>
        </Group>
        </Paper>
    }
    </>
  );
}