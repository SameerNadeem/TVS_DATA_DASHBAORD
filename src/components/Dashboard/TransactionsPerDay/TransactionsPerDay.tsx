import React from 'react';
import { Box, Card, Grid, Paper, Typography } from '@mui/material';
import scss from './TransactionCardType.module.scss';
import DataRibbon from '@/components/Dashboard/DataRibbon';
import { useTheme } from '@mui/system';
import DataChart from '@/components/DataChart';
import { lineChartData } from '@/components/mockData';
export type TransactionCardType = {
    title: string;
    value: string;
    changeValue: string;
};


const TransactionsPerDay = () => {
    const theme = useTheme();

    return (
        <Grid container gap={2} className={scss.wrapper}>
            <Paper className={scss.transactions}>
                <div className={scss.chart}>
                    <Typography>Customer Engagement Rate</Typography>
                    <DataChart type={"line"} data={lineChartData}/>
                    
                </div>
                <div className={scss.cardWrapper}>
                    <Card className={scss.card} variant={'outlined'}>
                        <div className={scss.cardTitle}>
                            <Typography>Revenue growth </Typography>
                        </div>
                        <div className={scss.cardValue}>
                            <Typography> 2023 Financial Year</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>
                                16.27%
                            </Typography>
                        </div>
                    </Card>
                    <Card className={scss.card} variant={"outlined"}>
                        <div className={scss.cardTitle}>
                            <Typography>Customers served</Typography>
                        </div>
                        <div className={scss.cardValue}>
                            <Typography>Top-tier global brands</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>
                                300+
                            </Typography>
                        </div>
                    </Card>
                    <Card className={scss.card} variant={'outlined'}>
                        <div className={scss.cardTitle}>
                            <Typography>Techvista Employees</Typography>
                        </div>
                        <div className={scss.cardValue}>
                            <Typography>3 Continents</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>
                                4500+
                            </Typography>
                        </div>
                    </Card>
                </div>
            </Paper>
        </Grid>
    );
};

export default TransactionsPerDay;
