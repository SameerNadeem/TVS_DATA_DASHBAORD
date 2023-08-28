import React from 'react';
import {Grid, Paper} from '@mui/material';
import scss from './TransactionBottomRow.module.scss';
import { doughnutChartData1 } from '../../mockData';
import { doughnutChartData2 } from '../../mockData';
import { doughnutChartData3 } from '../../mockData';
import { doughnutChartData4 } from '../../mockData';

import DataChart from '@/components/DataChart';
const TransactionBottomRow = () => {
    return(

        <Grid container className={scss.bottomRow}>
            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Project Phases</p>
                    <DataChart type={"doughnut"} data={doughnutChartData1}/>
                </Paper>
            </Grid>
            <Grid>
                <Paper className={scss.dataCard}>
                    <p>IT Company Employmente</p>
                    <DataChart type={"doughnut"} data={doughnutChartData2}/>
                </Paper>
            </Grid>
            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Office Locations</p>
                    <DataChart type={"doughnut"} data={doughnutChartData3}/>
                </Paper>
            </Grid>
            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Profit Margins</p>
                    <DataChart type={"doughnut"} data={doughnutChartData4}/>
                </Paper>
            </Grid>



        </Grid>
        
    );
};

export default TransactionBottomRow;
