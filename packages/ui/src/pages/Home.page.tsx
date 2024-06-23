import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import React from 'react';
import { ActionIcon, Card, rem, Space, Text, Image, Group, Badge, Button, useMantineTheme, useMantineColorScheme, Progress, Tooltip, Container } from '@mantine/core';
import { IconAdjustments, IconCheck, IconExclamationCircle } from '@tabler/icons-react';

export function DataProgress({details}: {details: any[]}) {
    return details.map((item, index) => { // if index is first or last value = 0.875, nor value = 0.75
        return <>
            <Tooltip label={item.ping} position="bottom">
                <Progress.Section 
                    value={index === 0 || index === details.length - 1 ? 0.875 : 0.75} 
                    color={item.status === 'online' ? 
                    "rgba(70, 133, 89, 0.85)" : 
                    "rgba(133, 70, 70, 1)"}
                />
            </Tooltip>
            <Progress.Section 
                value={index === details.length - 1 ? 0 : 0.25} 
                color="rgba(0,0,0,0)"
            />
        </>
    });

}

export function ShowGroup({child}: any) {
    const {colorScheme} = useMantineColorScheme();
    return child.map((item: any, index: any) => {
        return <Card.Section withBorder style={{
            padding: '20px',
            borderTop: index === 0 ? 'none' : ''
        }}>
            <Text style={{alignItems: 'center', justifyItems: 'center', display: 'flex'}} c={colorScheme === 'dark' ? 'rgba(234,234,234,100)' : 'rgb(25, 28, 36)'} fw={600} size='sm'>
                <ActionIcon variant="filled" color={item.status === 'online' ? "rgba(70, 133, 89, 0.85)" : "rgba(133, 70, 70, 1)"}
                style={{ minWidth: "5px", minHeight: "15px", width: "1px", height: "1px", borderRadius: '100000px', boxShadow: item.status === 'online' ? "0 4px 15px rgba(70, 133, 89, 0.55)" : "0 4px 15px rgba(133, 70, 70, 0.55)" }} 
                aria-label="status-s">
                </ActionIcon><div style={{width: '3px'}}></div>
                {item.name}&nbsp;&nbsp;
                <Badge variant="light" color={item.status === 'online' ? "rgba(70, 133, 89, 1)" : "rgba(133, 70, 70, 1)"} radius="sm" size='sm'>{item.status === 'online' ? "在线" : "离线"}</Badge>&nbsp;
                <Badge variant="light" color={item.status === 'online' ? "rgba(70, 133, 89, 1)" : "rgba(133, 70, 70, 1)"} radius="sm" size='sm' fw={600}>{item.uptime}</Badge>&nbsp;
                <Badge variant="light" color={item.status === 'online' ? "rgba(70, 133, 89, 1)" : "rgba(133, 70, 70, 1)"} radius="sm" size='sm' fw={600}>证书过期: {item.cert}</Badge>&nbsp;
            </Text>
            <Text c='dimmed' fw={600} size='xs' >{item.link}</Text>
            <Space h={5} />
            <Progress.Root styles={{
                root: {
                    background: 'rgba(0, 0, 0, 0)'
                },
                section: {
                    borderRadius: '20px',
                    
                }
            }} size={35}>
                <DataProgress details={item.details} />
            </Progress.Root>
            
        </Card.Section>
    });
}

export function ShowData({sdata}: any) {
    return sdata.map((item: any) => {
        return <Card mt={10} shadow="sm" style={{paddingTop: 0}} radius="md" withBorder>
            <ShowGroup child={item.child} />
            <Card.Section style={{
                    padding: '10px',
                    textAlign: 'right'
            }} >
                <Text c='dimmed' fw={600} size='xs'><span style={{color: item.status === 'online' ? "rgba(70, 133, 89, 1)" : "rgba(133, 70, 70, 1)"}}>{item.status === 'online' ? "全部在线" : "部分离线"}</span> · {item.group} · 数据来源: {item.source}</Text>
            </Card.Section>
        </Card>
    });
}

export function HomePage() {
    const iss = window.web.iss;
    const updtime = window.web.updtime;
    const sdata = window.web.sdata;
    const {colorScheme} = useMantineColorScheme();

    const onlinestatus = iss ? <>
        <div style={{textAlign: 'center'}}>
            <div style={{display: 'inline-block'}}><ActionIcon variant="filled" color="rgba(70, 133, 89, 0.85)" style={{ width: rem(35), height: rem(35), borderRadius: '100000px', boxShadow: "0 4px 15px rgba(70, 133, 89, 0.55)" }} aria-label="Status">
                <IconCheck style={{ width: '70%', height: '70%' }} size="35px" stroke={1.75} />
            </ActionIcon>
            <Space h="xs" />
            <Text fw={800} size='25px' c={colorScheme === 'dark' ? 'rgba(234,234,234,100)' : 'rgb(25, 28, 36)'}>All Services are online</Text>
            <Space h={7} />
            <Text fw={500} size='15px' c={'dimmed'}>Last Updated: {updtime}</Text>
            
            </div>
        </div>
    </> : <>
        <div style={{textAlign: 'center'}}>
            <ActionIcon variant="filled" color="rgba(133, 70, 70, 1)" style={{ width: rem(35), height: rem(35), borderRadius: '100000px', boxShadow: "0 4px 15px rgba(133, 70, 70, 0.55)" }} aria-label="Status">
                <IconExclamationCircle style={{ width: '70%', height: '70%' }} size="35px" stroke={1.75} />
            </ActionIcon>
            <Space h="xs" />
            <Text fw={800} size='25px' c={colorScheme === 'dark' ? 'rgba(234,234,234,100)' : 'rgb(25, 28, 36)'}>Some services are down</Text>
            <Space h={7} />
            <Text fw={500} size='15px' c={'dimmed'}>Last Updated: {updtime}</Text>
            
        </div>
    </>;
    return (
        <>
            {onlinestatus}
            <Container mt={'20px'}>
                <ShowData sdata={sdata} />
            </Container>
        </>
    );
}
