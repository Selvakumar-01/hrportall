import { Card, Grid } from '@mui/material'
import React from 'react'
import Design from '../components/Design';
import Dashboard from './Dashboard'

export default function DD() {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Card sx={{ p: 2 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Design />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Dashboard />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}