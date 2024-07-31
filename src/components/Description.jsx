import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Description() {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: '30px', fontWeight: 'bolder' }}>
                        HR Employee
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'normal' }}>
                        Enjoy your selection of potential candidates.
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

