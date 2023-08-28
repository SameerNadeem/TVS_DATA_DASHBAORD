import React from 'react';

import {Box, Grid, IconButton, Paper, Tooltip, Typography} from '@mui/material';
import { fontSize } from '@mui/system';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import scss from "./DataCard.module.scss";
export type DataCardProps ={
    title: string;
    value: string;
    description: string;
}
const DataCard=(props: DataCardProps)=>{
const{title,value,description}=props;
return(
    <Paper className={scss.datacard}>
        <div className={scss.header}>
            <Typography fontSize={"h6"} color={"lightslategray"}>
                {title}
            </Typography >
            <Tooltip
            title={
                <Typography
                fontSize={16}>
                    {`${description}`}
                </Typography>
            }>
                <IconButton>
                    <   InfoOutlinedIcon />
                </IconButton>
            </Tooltip>
        </div>
        <Typography fontSize={"h4"}>{value}</Typography>
    </Paper>
)};

export default DataCard;
