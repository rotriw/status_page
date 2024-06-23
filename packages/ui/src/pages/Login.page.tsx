import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import classes from './Login.module.css';
import React from 'react';

export function LoginPage() {
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                登录
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                还没有账号?{' '}
                <Anchor size="sm" component="button">
                    注册账号
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me" />
                    <Anchor component="button" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}