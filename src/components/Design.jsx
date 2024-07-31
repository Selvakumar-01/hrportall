import React from 'react'
import { Grid } from '@mui/material'
import Description from './Description'
import Graph from './Graph'


export default function Design() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={11} sx={{ mt: 10 }}>
                    <Description />
                </Grid>
                <Grid item xs={11} >
                    <Graph />
                </Grid>
            </Grid>

        </>
    )
}

