import React from 'react';
import { Grid, Button, Card, Typography, Avatar, TableContainer, Table } from '@mui/material';
import ironman from './ironman.jpg';
import captain from './captain.jpg';
import thor from './thor.jpg';
import hulk from './hulk.jpeg';
import hawk from './hawk.jpeg';
import black from './black.jpeg'

export default function SecondaryBar() {
    return (
        <>
            <Grid>
                <TableContainer sx={{ overflowX: 'auto' }}>
                    <Table sx={{ minWidth: '200px' }}>
                        <Grid container spacing={2}>
                            <Grid item container xs={12} spacing={1} ml={1}>
                                <Grid item xs={9}>
                                    <Typography variant="h6">Upcoming</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="text">View All</Button>
                                </Grid>
                                <Grid item container xs={12} spacing={1} alignItems="center">
                                    <Grid item xs={2}>
                                        <Card style={{ backgroundColor: '#f0f8ff', padding: '10px' }}>
                                            <Typography variant="body1">07</Typography>
                                            <Typography variant="body2">Feb</Typography>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography variant="body1">Interview with Designer</Typography>
                                        <Typography variant="body2">Crowdbotics by Thomas</Typography>
                                        <Typography variant="body2">3:30 PM to 4:00 PM</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button variant="contained">Details</Button>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Card style={{ backgroundColor: '#f5f5dc', padding: '10px' }}>
                                            <Typography variant="body1">09</Typography>
                                            <Typography variant="body2">Feb</Typography>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography variant="body1">Interview with Developer</Typography>
                                        <Typography variant="body2">Crowdbotics by Shelby</Typography>
                                        <Typography variant="body2">2:30 PM to 3:00 PM</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button variant="contained">Details</Button>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Card style={{ backgroundColor: '#e6e6fa', padding: '10px' }}>
                                            <Typography variant="body1">11</Typography>
                                            <Typography variant="body2">Feb</Typography>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography variant="body1">Interview with Engineer</Typography>
                                        <Typography variant="body2">Crowdbotics by Authur</Typography>
                                        <Typography variant="body2">3:30 PM to 4:00 PM</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button variant="contained">Details</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} spacing={1} ml={1} mt={1}>
                                <Grid item xs={9}>
                                    <Typography variant="h6">Activity</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="text">View All</Button>
                                </Grid>

                                <Grid item container xs={12} spacing={1} alignItems="center">
                                    <Grid item xs={2} ml={1}>
                                        <Avatar alt="User" src={ironman} />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="body1">John Doe</Typography>
                                        <Typography variant="body2">Python Developer</Typography>
                                        <Typography variant="body2">Interview with Stark</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={12} spacing={1} alignItems="center">
                                    <Grid item xs={2} ml={1}>
                                        <Avatar alt="User" src={captain} />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="body1">John Doe</Typography>
                                        <Typography variant="body2">Python Developer</Typography>
                                        <Typography variant="body2">Interview with Steve</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={12} spacing={1} alignItems="center">
                                    <Grid item xs={2} ml={1}>
                                        <Avatar alt="User" src={thor} />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="body1">John Doe</Typography>
                                        <Typography variant="body2">Python Developer</Typography>
                                        <Typography variant="body2">Interview with Thor</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} spacing={1} ml={1}>
                                <Grid item xs={9}>
                                    <Typography variant="h6">Hiring Candidates</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="text">View All</Button>
                                </Grid>
                                <Grid item container xs={12} spacing={1} alignItems="center">
                                    <Grid item xs={2} ml={1}>
                                        <Avatar alt="User" src={hulk} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1">John Doe</Typography>
                                        <Typography variant="body2">Senior Python Developer</Typography>
                                        <Typography variant="body2">Reviewed by Banner</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained">Details</Button>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={12} spacing={1} alignItems="center">
                                    <Grid item xs={2} ml={1}>
                                        <Avatar alt="User" src={hawk} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1">John Doe</Typography>
                                        <Typography variant="body2">Senior Python Developer</Typography>
                                        <Typography variant="body2">Reviewed by Clint</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained">Details</Button>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={12} spacing={1} alignItems="center">
                                    <Grid item xs={2} ml={1}>
                                        <Avatar alt="User" src={black} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1">John Doe</Typography>
                                        <Typography variant="body2">Senior Python Developer</Typography>
                                        <Typography variant="body2">Reviewed by RomanOff</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained">Details</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Table>
                </TableContainer>
            </Grid>

        </>
    );
}
