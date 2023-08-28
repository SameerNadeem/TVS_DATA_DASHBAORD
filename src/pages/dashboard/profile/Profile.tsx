import React from 'react';
import Typography from '@mui/material/Typography';
import { Paper, Grid, Box, Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();

  return (
    <Box>
      <Typography variant="h4" sx={{ paddingBottom: 4 }}>
        Hey {session ? session?.user?.name : 'User'}, welcome to your profile
      </Typography>
      <Paper sx={{ padding: '1rem 2rem' }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                sx={{
                  height: 100,
                  width: 100,
                  marginBottom: 2,
                }}
                src={session?.user?.image as string}
              />
              <Typography variant="h6" gutterBottom>
                Name: {session?.user?.name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Email: {session?.user?.email}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;




// import { useSession } from "next-auth/react";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import { Box } from "@mui/system";
// import Typography from "@mui/material/Typography";
// import Avatar from "@mui/material/Avatar";
// import React, { useState, FormEvent } from "react";
// import { Button } from "@mui/material";
// import { FormControlLabel } from "@mui/material";
// import { CheckBox } from "@mui/icons-material";

// const Profile = () => {
//   const { data: session } = useSession();
  
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <Box>
//         <Typography variant="h4" sx={{ paddingBottom: 4 }}>
//           Hey {session ? session?.user?.name : "User"}, welcome to your profile
//         </Typography>
//         <Paper sx={{ padding: "1rem 2rem" }}>
//           <Grid container justifyContent="center">
//             <Grid item xs={12} sm={8} md={6}>
//               <Box display="flex" flexDirection="column" alignItems="center">
//                 <Avatar
//                   sx={{
//                     height: 100,
//                     width: 100,
//                     marginBottom: 2,
//                   }}
//                   src={session?.user?.image as string}
//                 />
//               </Box>
//               <form
//                 onSubmit={handleSubmit}
//                 style={{ maxWidth: 600, margin: "0 auto" }}
//               >
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       fullWidth
//                       label="First Name"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleFormChange}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       fullWidth
//                       label="Last Name"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleFormChange}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       type="email"
//                       label="Email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleFormChange}
//                     />

//                   </Grid>
//                   <Grid item xs={12}>

//                   </Grid>
//                 </Grid>
//               </form>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Box>
//     </>
//   );
// };

// export default Profile;


                  {/* </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                    /> */}

                  //   <Button type="button" variant="outlined" color="primary">
                  //   Save Changes
                  // </Button>