import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Group } from '@mantine/core';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
    const [opened, { toggle }] = useDisclosure();
  return (
      <MantineProvider defaultColorScheme={"dark"}>
          <AppShell
              header={{ height: 60 }}
              navbar={{
                  width: 300,
                  breakpoint: 'sm',
                  collapsed: { mobile: !opened },
              }}
              padding="md"
          >
              <AppShell.Header>
                  <Group h="100%" px="md">
                      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                      <div>Epic Seven Teams Database</div>
                  </Group>
              </AppShell.Header>

              <AppShell.Navbar p="md">
                  <Navbar />
              </AppShell.Navbar>

              <AppShell.Main>
                  <Component {...pageProps} />
              </AppShell.Main>
          </AppShell>

      </MantineProvider>
  )
}
