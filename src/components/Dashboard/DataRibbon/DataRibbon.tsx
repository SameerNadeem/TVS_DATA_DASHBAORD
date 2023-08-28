import React from 'react';
import { Box, Grid, Tooltip, Typography } from '@mui/material';
import DataCard from '@/components/Dashboard/DataCard';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Dashboard from '../../../pages/dashboard/Dashboard';
import scss from './DataRibbon.module.scss';
const DataRibbon = () => {
    return (
        <Grid container gap={2} className={scss.dataRibbon}>
            <Grid item>
                <DataCard
                    title={"MARKET CAP (000's)"}
                    value={"135,135,415"}
                    description={
                          "Equity Profile https://dps.psx.com.pk/company/SYS"
                    }
                />
            </Grid>
            <Grid item>
                <DataCard
                    title={"SHARES"}
                    value={"290,407,700"}
                    description={
                        "Equity Profile https://dps.psx.com.pk/company/SYS"
                    }
                />
            </Grid>
            <Grid item>
                <DataCard
                    title={"FREE FLOAT"}
                    value={"174,154,620"}
                    description={
                        "Equity Profile https://dps.psx.com.pk/company/SYS"
                    }
                />
            </Grid>
            <Grid item>
                <DataCard
                    title={"Transmission Rate"}
                    value={"59.97%"}
                    description={
                        "how many pitches become sales"
                    }
                />
            </Grid>
        </Grid>
    );
};

export default DataRibbon;



{/* <Paper sx={{padding:"1rem", height:"100%"}}>
   <div
   style={{
      display: "flex",
      justifyContent:"center",
      alignItems: "center",

   }}>
      <Typography fontSize={"h6"} color={"lightslategrey"}>
         Total Sales
      </Typography>
      <Tooltip
      title={
         <Typography fontSize={16}>
            The totals of all DataSoft Products in the current financial
            year which is 462
         </Typography>
      }
      >
         <IconButton>
            <InfoOutlinedIcon />
         </IconButton>
      </Tooltip>
      </div>
      <Typography fontSize={"h4"}> 462 </Typography>
</Paper>  */}