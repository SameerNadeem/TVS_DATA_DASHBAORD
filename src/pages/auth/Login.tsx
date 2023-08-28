import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const Login = () => {
  const { data: session } = useSession();

  const buttonStyles = {
    margin: '12px',
    fontWeight: 'bold',
  };

  const avatarStyles = {
    width: '50px',
    height: '50px',
    marginRight: '8px',
  };

  if (session) {
    return (
      <>
        <Avatar alt="User Avatar" src={session.user?.image as string} style={avatarStyles} />
        {/* <Button variant="outlined" color="inherit" style={buttonStyles} onClick={() => signOut()}>
          Sign Out
        </Button> */}
      </>
    );
  }

  return (
    <Button variant="outlined" color="success" style={buttonStyles} onClick={() => signIn()}>
      Sign In
    </Button>
  );
};

export default Login;
