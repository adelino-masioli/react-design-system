import axios from 'axios';
import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo';

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)
    async function handleSignIn(event: FormEvent){
        event.preventDefault()

        await axios.post('/sessions', {
            email: 'login@email.com',
            password: '123456',
        });

        setIsUserSignedIn(true)
    }
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
     <header className='flex flex-col items-center'>
      <Logo/>
        <Heading size='lg' className='mt-4'>Ignite Lab</Heading>
        <Text size='lg' className='text-gray-400 mt-1'>Design System</Text>
      </header>

      <form onSubmit={handleSignIn} className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4">
        {isUserSignedIn && <Text>Logged in</Text>}
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibol'>Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="email@email.com" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibol'>Your password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember"  className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text className='font-semibol'>Remember-me</Text>
        </label>

        <Button type='submit' className='mt-4'>Access dashboard</Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="#" className='text-gray-400 underline hover:text-gray-200 transition-colors'>Forgot your password?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="#" className='text-gray-400 underline hover:text-gray-200 transition-colors'>Don't have an account yet? Sign Up</a>
        </Text>
      </footer>
    </div>
  )
}