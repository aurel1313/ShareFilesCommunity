import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <div>
      <h1>Connectez-vous</h1>
      <button onClick={() => signIn('github')}>Se connecter avec GitHub</button>
      <button onClick={() => signIn('google')}>Se connecter avec Google</button>
      <button onClick={() => signIn('discord')}>Se connecter avec Discord</button>
    </div>
  );
}