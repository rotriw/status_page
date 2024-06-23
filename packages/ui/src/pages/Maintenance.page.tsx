import { Card, Text, ActionIcon, Badge, useMantineColorScheme, Space, rem, Button, Alert } from '@mantine/core';
import { IconArrowRight, IconCheck, IconHammer } from '@tabler/icons-react';
import React from 'react';

export function MaintenancePage() {
    const {colorScheme} = useMantineColorScheme();
    return (<>
        <div style={{textAlign: 'center'}}>
            <div style={{display: 'inline-block'}}><ActionIcon variant="filled" color="#3A548F" style={{ width: rem(35), height: rem(35), borderRadius: '100000px', boxShadow: "0 4px 15px #3A548F55" }} aria-label="Status">
                <IconHammer style={{ width: '70%', height: '70%' }} size="25px" stroke={1.75} />
            </ActionIcon>
            <Space h="xs" />
            <Text fw={800} size='25px' c={colorScheme === 'dark' ? 'rgba(234,234,234,100)' : 'rgb(25, 28, 36)'}>Maintenance</Text>
            
            </div>
        </div>
    <Card shadow="sm" ml={'20%'} mr={'20%'} mt={'25px'} padding="lg" radius="md" withBorder>
            <Card.Section pl={20} pr={15} pb={15} pt={15}>
                <Text style={{alignItems: 'center', justifyItems: 'baseline', display: 'flex'}} c={colorScheme === 'dark' ? 'rgba(234,234,234,100)' : 'rgb(25, 28, 36)'} fw={600} size='sm'>
                    <ActionIcon variant="filled" color="rgba(70, 133, 89, 0.85)"
                    style={{ minWidth: "5px", minHeight: "15px", width: "1px", height: "1px", borderRadius: '100000px', boxShadow: "0 4px 15px rgba(70, 133, 89, 0.55)" }} 
                    aria-label="status-s">
                    </ActionIcon><div style={{width: '10px'}}></div>
            你说的对，但是原神&nbsp;&nbsp;
            <Badge variant="light" color="rgba(70, 133, 89, 1)" radius="sm" size='sm'>没想好这里放什么</Badge>&nbsp;
            </Text>
            <Space h={10} />
            <Text c={colorScheme === 'dark' ? 'rgba(234,234,234,100)' : 'rgb(25, 28, 36)'} size='sm'>
                为了更好的用户体验，我们将于2021年10月1日进行服务器迁移，迁移期间可能会出现短暂的访问中断，我们会尽快恢复访问。
            </Text>
            <Space h={10} />
                <Button
                    rightSection={<IconArrowRight size={13} />}
                    variant='default'
                    radius='sm'
                    fullWidth={false}
                    w={'15%'}
                    size='compact-xs'
                >
                    查看详情
                </Button>
            </Card.Section>
            <Card.Section withBorder={true} bg="rgba(70, 133, 89, 0.05)"  pl={20} pr={15} pb={15} pt={15}>
            <Text style={{alignItems: 'center', justifyItems: 'baseline', display: 'flex'}} c={colorScheme === 'dark' ? 'rgba(234,234,234,100)' : 'rgb(25, 28, 36)'} fw={600} size='sm'>
                    <ActionIcon variant="filled" color="rgba(70, 133, 89, 0.55)"
                    style={{ minWidth: "5px", minHeight: "15px", width: "1px", height: "1px", borderRadius: '100000px', boxShadow: "0 4px 15px rgba(70, 133, 89, 0.55)" }} 
                    aria-label="status-s">
                    </ActionIcon><div style={{width: '10px'}}></div>
                    当前进度
            </Text>
            <Space h={10} />
            <Text style={{alignItems: 'center', justifyItems: 'baseline', display: 'flex'}} c={'rgba(70, 133, 89)'} fw={600} size='sm'>
                    已完成维护
            </Text>
            </Card.Section>
        </Card>
    </>)
}