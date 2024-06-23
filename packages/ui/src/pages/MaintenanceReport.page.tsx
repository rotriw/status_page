import { Card, Text, ActionIcon, Badge, Space, Button, useMantineColorScheme } from "@mantine/core";


export function MaintenanceReport() {
    const {colorScheme} = useMantineColorScheme();
    
    return (<>

    <Card shadow="sm" ml={'20%'} mr={'20%'} mt={'25px'} padding="lg" radius="md" withBorder>
                <Text c={colorScheme === 'dark' ? 'rgba(234,234,234,100)' : 'rgb(25, 28, 36)'} fw={600} size='lg'>
            你说的对，但是原神
            </Text>
            <Text c={'dimmed'} fw={600} size="sm">Oct 10 2023 - Oct 11 2023</Text>
            <Space h={10} />
            <Text c={colorScheme === 'dark' ? 'rgba(234,234,234,100)' : 'rgb(25, 28, 36)'} size='sm'>
                为了更好的用户体验，我们将于2021年10月1日进行服务器迁移，迁移期间可能会出现短暂的访问中断，我们会尽快恢复访问。
            </Text>
        </Card>
    </>)
}