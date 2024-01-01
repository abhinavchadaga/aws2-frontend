import {
  Button,
  Container,
  Paper,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

export function AuthenticationTitle() {
  return (
    <Container size={420} my={40}>
      <Title ta="center">AWS - Model Trainer</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Sign in or create a new user to get started!
      </Text>

      <Paper withBorder shadow="md" p={20} mt={20} radius="md">
        <TextInput
          styles={{
            label: { marginBottom: '10px' },
          }}
          label="Username"
          placeholder="username here..."
          required
        />
        <Button fullWidth mt={'lg'}>
          Sign in
        </Button>
        <Button variant={'default'} fullWidth mt={'sm'}>
          Create New User
        </Button>
      </Paper>
    </Container>
  );
}
