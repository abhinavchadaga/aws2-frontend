import {
  Button,
  Container,
  Paper,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateNewUserMutation } from '../redux/api/apiSlice';
import { AppStage, setAppState } from '../redux/appState/appStateSlice';
import { setCurrentUser } from '../redux/user/userSlice';

export function LoginPage() {
  const dispatch = useDispatch();
  const [usernameValue, setUsernameValue] = useState('');
  const [createNewUser, { isLoading: isCreateNewUserLoading }] =
    useCreateNewUserMutation();
  const onCreateNewUserClicked = async () => {
    try {
      const result = await createNewUser(usernameValue).unwrap();
      const { user: newlyCreatedUser } = result;
      setUsernameValue('');
      dispatch(setCurrentUser(newlyCreatedUser));
      dispatch(setAppState(AppStage.DASHBOARD));
    } catch (err) {
      console.error(err);
    }
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(event.currentTarget.value);
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">AWS - Model Trainer</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Sign in or create a new user to get started!
      </Text>

      <Paper withBorder shadow="md" p={20} mt={20} radius="md">
        <TextInput
          value={usernameValue}
          onChange={onChangeUsername}
          styles={{
            label: { marginBottom: '10px' },
          }}
          label="Username"
          placeholder="username here..."
          required
        />
        <Button fullWidth mt={'lg'} onClick={() => alert('signed in!')}>
          Sign in
        </Button>
        <Button
          variant={'default'}
          fullWidth
          mt={'sm'}
          onClick={onCreateNewUserClicked}
          loading={isCreateNewUserLoading}
        >
          Create New User
        </Button>
      </Paper>
    </Container>
  );
}
