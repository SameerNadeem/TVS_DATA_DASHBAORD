import React from 'react';
import { signIn } from 'next-auth/react';
import Box from '@mui/material/Box';
import { useSession } from 'next-auth/react';
import Login from '../Login';
import YoutubeEmbed from './YoutubeEmbed';
import { fontSize } from '@mui/system';
const SignIn = () => {
    const {data:  session} = useSession();
    return (
<Box
sx={{
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
}}   
>
    <h2> {session ? "Welcome To TechVista Explored" : "Please Log Into TechVista Explored"}</h2>
    <Login />
    
    <div className="video-responsive">

    <YoutubeEmbed embedId="EPONvOs1rCw" />
    

   </div>
   <div className="video-text">
    <p
        style={{
          fontSize: '16px',
          lineHeight: '1.5',

          color: '#333',
          backgroundColor: '#f8f8f8',
          padding: '20px',
          borderRadius: '8px',
          marginTop: '20px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        >
      Techvista Systems is a forward-thinking technology company known for its innovative solutions. 
      With a focus on cutting-edge technologies, Techvista empowers businesses with digital tools for growth. 
      Their skilled team offers end-to-end services, from software development to digital transformation. 
      By tailoring solutions to individual needs, Techvista drives success across various industries globally.
</p>

  </div>
</Box>
    );
};
export default SignIn;