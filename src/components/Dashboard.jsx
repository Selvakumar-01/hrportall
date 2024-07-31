import { Grid, Table, TableContainer } from '@mui/material'
import React from 'react'
import Primaryboard from './Primaryboard'
import SecondaryBar from './SecondaryBar'

export default function Dashboard() {
    return (
        <>
            <Grid container spacing={0}>
                <TableContainer sx={{ overflowX: 'auto' }}>
                    <Table sx={{ minWidth: '996px' }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Grid container spacing={0}>
                                    <Grid item xs={9} sm={9} md={9} lg={9} xl={9} sx={{ mt: 3 }} >
                                        <Primaryboard />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ mt: 3 }} >
                                        <SecondaryBar />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Table>
                </TableContainer>
            </Grid>

        </>
    )
}