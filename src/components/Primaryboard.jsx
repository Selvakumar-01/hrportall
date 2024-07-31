import { Grid } from '@mui/material'
import React from 'react'
import Meetinginfo from './Meetinginfo'
import Posted from './Posted'
import Candidate from './Candidate'

export default function Primaryboard() {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                            <Meetinginfo />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{mt:4}} >
                            <Posted />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{mt:4}} >
                            <Candidate />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

