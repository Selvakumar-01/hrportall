import { Card, Divider, Grid, Typography, Avatar, Button, Box, Table, TableContainer } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import image from './image.jpg'

export default function Meetinginfo() {
    return (
        <>
            <Grid>
                <TableContainer sx={{ overflowX: 'auto' }}>
                    <Table sx={{ minWidth: '996px' }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Card sx={{ p: 2 }}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={11.5} sm={11.5} md={11.5} lg={11.5} xl={11.5}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: 'bolder' }}>
                                                Today Interview meeting Info
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} xl={0.5}>
                                            <MoreVertIcon sx={{ cursor: 'pointer' }} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider orientation="horizontal" flexItem />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={4}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                                    <Grid container spacing={2} direction="column" alignItems="center">
                                                        <Grid item>
                                                            <Avatar alt="John Smith" src={image} sx={{ width: 100, height: 100 }} />
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h6">SelvaKumar</Typography>
                                                            <Typography variant="body2">Software Engineer</Typography>
                                                        </Grid>
                                                        <Grid item container spacing={1} justifyContent="center">
                                                            <Grid item>
                                                                <CalendarTodayIcon />
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant="body2">02nd Aug 2024</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item container spacing={1} justifyContent="center">
                                                            <Grid item>
                                                                <AccessTimeIcon />
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant="body2">10.30 A.M</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <Typography variant="body2">1st Level:8/10</Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant="body2">Interviewer:Stella</Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Divider />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant="body2">2nd Level:9/10</Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant="body2">Interviewer:Smith</Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Divider />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant="body2">3rd Level:Waiting</Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant="body2">Interviewer:Stephan</Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Divider />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant="body2">Meet Via:G-Meet</Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography variant="body2">Attendees:Johnson</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Box >
                                                        <Grid container spacing={1} sx={{ pb: 2, mt: 2 }}>
                                                            <Grid item xs={6} direction={'row'} textAlign={'right'}>
                                                                <Button variant="outlined" >
                                                                    Reschedule Meeting
                                                                </Button>
                                                            </Grid>
                                                            <Grid item xs={6} direction={'row'} textAlign={'left'} >
                                                                <>
                                                                    <Button variant="contained">
                                                                        Join Meeting
                                                                    </Button>
                                                                </>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Table>
                </TableContainer>
            </Grid>

        </>
    );
}
