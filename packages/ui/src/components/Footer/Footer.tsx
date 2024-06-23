import { Button, Container, AppShell, Flex, Group, Space, Text, rem, useMantineTheme } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { IconBrandGithub, IconSun, IconMoon } from '@tabler/icons-react';
// import { t } from 'i18next';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function AppFooter({ onThemeChange }: { onThemeChange: () => void }) {
    const theme = useMantineTheme();

    const [displaysStyles, cgDisplaysStyles] = useToggle(['', 'none']);
    const {t} = useTranslation();
    useEffect(() => {
        // function changeFooter() {
        //     cgDisplaysStyles();
        // }
        // window.addEventListener('changeFooter', changeFooter);

        // return () => {
        //     window.removeEventListener('changeFooter', changeFooter);
        // };
    }, []);

    return (
        <div id='footer' style={{
            padding: '2px',
            paddingTop: '16px',
        }}>
            <Container>
                <Flex justify='space-between' align='center' direction='row'>
                    <div>
                        {/* <Text size={21.5}>开源</Text> */}
                        <Group mt={rem('4px')} ml={rem('-2px')}>
                            <Button
                                onClick={() => {
                                    location.href = 'https://github.com/rotriw/rmjac';
                                }}
                                leftSection={<IconBrandGithub size={13} />}
                                variant='light'
                                color='gray'
                                radius='xs'
                                size='compact-xs'
                            >
                                Github Repo
                            </Button>
                            <Button
                                onClick={onThemeChange}
                                leftSection={
                                    <>
                                        <IconSun
                                            size={16}
                                            display={(() => {
                                                if (localStorage.getItem('mantine-color-scheme-value') === 'light') {
                                                    return 'none';
                                                }
                                            })()}
                                        />
                                        <IconMoon
                                            size={16}
                                            display={(() => {
                                                if (localStorage.getItem('mantine-color-scheme-value') === 'dark') {
                                                    return 'none';
                                                }
                                            })()}
                                        />
                                    </>
                                }
                                variant='light'
                                color='gray'
                                radius='xs'
                                size='compact-xs'
                            >
                                Change Style
                            </Button>

                            {/* <Button
                                // leftIcon={<IconBrandGithub size={13} />}
                                variant='light'
                                color='gray'
                                radius='xs'
                                size='xs'
                                compact
                                onClick={() => {i18n.changeLanguage('zh')}}
                            >
                                {t('changelanguage')}
                            </Button> */}
                        </Group>
                        <Space h={45}></Space>
                        <Text c='dimmed' fw={800} size='sm'>
                            Rotriw Status
                        </Text>
                        <Text c='dimmed' fw={800} size='xs' style={{
                            fontSize: '10px'
                        }}>
                            &copy; Rotriw 2024
                        </Text>
                        <Space h={45}></Space>
                    </div>
                </Flex>
            </Container>
        </div>
    );
}
