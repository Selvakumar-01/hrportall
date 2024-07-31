import { Card, Divider, Grid, Typography, Button, TextField, TableContainer, Table } from '@mui/material';
import * as React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import python from './python.png';
import react from './react.png';
import node from './node.png';
import javascript from './javascript.jpg';

export default function Posted() {
    return (
        <>
            <Grid>
                <TableContainer sx={{ overflowX: 'auto' }}>
                    <Table sx={{ minWidth: '996px' }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Card sx={{ p: 2 }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: 'bolder' }}>
                                                Posted Jobs
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Button variant="text">View All</Button>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>

                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                placeholder="Search"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <SearchIcon
                                                                sx={{ cursor: 'pointer' }}
                                                            />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Button variant="outlined" startIcon={<FilterListIcon />}>
                                                Filters
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider orientation="horizontal" flexItem />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={4}>
                                            <Grid container spacing={2} ml={2}>
                                                <Box sx={{ width: '100%' }}>
                                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                        <Tabs aria-label="basic tabs example">
                                                            <Tab label="Active Jobs" />
                                                            <Tab label="Inactive Jobs" />
                                                            <Tab label="Completed Jobs" />
                                                        </Tabs>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Grid container spacing={1} sx={{ ml: 0 }}>
                                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <Card>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} xl={0.5} >
                                                            </Grid>
                                                            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5} >
                                                                <img src={python} alt="Python" style={{ width: '65%', height: 'auto' }} />
                                                            </Grid>
                                                            <Grid item xs={7.5} sm={7.5} md={7.5} lg={7.5} xl={7.5}>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '200' }}>
                                                                    Python Developer
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: 'bolder' }}>
                                                                    #001
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Divider orientation="horizontal" flexItem />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container spacing={0} alignItems="center" justifyContent="center">
                                                            <Grid item xs={12} sx={{ textAlign: 'center', my: 2 }}>
                                                                <Typography variant="body2">Senior Developers</Typography>
                                                                <Card sx={{ backgroundColor: '#f0f8ff', p: 2, display: 'inline-block' }}>
                                                                    <Typography variant="h4" sx={{ my: 1 }}>258</Typography>
                                                                </Card>
                                                                <Typography variant="body2">Total Applicants</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Divider orientation="horizontal" flexItem />
                                                            </Grid>
                                                            <Grid item xs={8} sx={{ textAlign: 'left', display: 'flex', alignItems: 'center', pl: 2, py: 1 }}>
                                                                <ArrowUpwardIcon color="primary" />
                                                                <Typography variant="body2" color="primary" sx={{ ml: 1 }}>28% vs Last month</Typography>
                                                            </Grid>
                                                            <Grid item xs={4} sx={{ textAlign: 'right', pr: 2, py: 1 }}>
                                                                <Typography variant="body2">6 mins ago</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <Card>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} xl={0.5} >
                                                            </Grid>
                                                            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5} >
                                                                <img src={react} alt="React" style={{ width: '65%', height: 'auto' }} />
                                                            </Grid>
                                                            <Grid item xs={7.5} sm={7.5} md={7.5} lg={7.5} xl={7.5}>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '200' }}>
                                                                    React Developer
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: 'bolder' }}>
                                                                    #002
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Divider orientation="horizontal" flexItem />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container spacing={0} alignItems="center" justifyContent="center">
                                                            <Grid item xs={12} sx={{ textAlign: 'center', my: 2 }}>
                                                                <Typography variant="body2">Senior Developers</Typography>
                                                                <Card sx={{ backgroundColor: '#f5f5dc', p: 2, display: 'inline-block' }}>
                                                                    <Typography variant="h4" sx={{ my: 1 }}>140</Typography>
                                                                </Card>
                                                                <Typography variant="body2">Total Applicants</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Divider orientation="horizontal" flexItem />
                                                            </Grid>
                                                            <Grid item xs={8} sx={{ textAlign: 'left', display: 'flex', alignItems: 'center', pl: 2, py: 1 }}>
                                                                <ArrowUpwardIcon color="primary" />
                                                                <Typography variant="body2" color="primary" sx={{ ml: 1 }}>90% vs Last month</Typography>
                                                            </Grid>
                                                            <Grid item xs={4} sx={{ textAlign: 'right', pr: 2, py: 1 }}>
                                                                <Typography variant="body2">14 mins ago</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <Card>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} xl={0.5} >
                                                            </Grid>
                                                            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5} >
                                                                <img src={node} alt="NodeJS" style={{ width: '65%', height: 'auto' }} />
                                                            </Grid>
                                                            <Grid item xs={7.5} sm={7.5} md={7.5} lg={7.5} xl={7.5}>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '200' }}>
                                                                    NodeJS Developer
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: 'bolder' }}>
                                                                    #003
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Divider orientation="horizontal" flexItem />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container spacing={0} alignItems="center" justifyContent="center">
                                                            <Grid item xs={12} sx={{ textAlign: 'center', my: 2 }}>
                                                                <Typography variant="body2">Senior Developers</Typography>
                                                                <Card sx={{ backgroundColor: '#e6e6fa', p: 2, display: 'inline-block' }}>
                                                                    <Typography variant="h4" sx={{ my: 1 }}>250</Typography>
                                                                </Card>
                                                                <Typography variant="body2">Total Applicants</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Divider orientation="horizontal" flexItem />
                                                            </Grid>
                                                            <Grid item xs={8} sx={{ textAlign: 'left', display: 'flex', alignItems: 'center', pl: 2, py: 1 }}>
                                                                <ArrowUpwardIcon color="primary" />
                                                                <Typography variant="body2" color="primary" sx={{ ml: 1 }}>52% vs Last month</Typography>
                                                            </Grid>
                                                            <Grid item xs={4} sx={{ textAlign: 'right', pr: 2, py: 1 }}>
                                                                <Typography variant="body2">6 mins ago</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <Card>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} xl={0.5} >
                                                            </Grid>
                                                            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5} >
                                                                <img src={javascript} alt="JavaScript" style={{ width: '100%', height: 'auto' }} />
                                                            </Grid>
                                                            <Grid item xs={7.5} sm={7.5} md={7.5} lg={7.5} xl={7.5}>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '200' }}>
                                                                    JS Developer
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: 'bolder' }}>
                                                                    #004
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Divider orientation="horizontal" flexItem />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container spacing={0} alignItems="center" justifyContent="center">
                                                            <Grid item xs={12} sx={{ textAlign: 'center', my: 2 }}>
                                                                <Typography variant="body2">Senior Developers</Typography>
                                                                <Card sx={{ backgroundColor: '#fdfd99', p: 2, display: 'inline-block' }}>
                                                                    <Typography variant="h4" sx={{ my: 1 }}>114</Typography>
                                                                </Card>
                                                                <Typography variant="body2">Total Applicants</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Divider orientation="horizontal" flexItem />
                                                            </Grid>
                                                            <Grid item xs={8} sx={{ textAlign: 'left', display: 'flex', alignItems: 'center', pl: 2, py: 1 }}>
                                                                <ArrowUpwardIcon color="primary" />
                                                                <Typography variant="body2" color="primary" sx={{ ml: 1 }}>41% vs Last month</Typography>
                                                            </Grid>
                                                            <Grid item xs={4} sx={{ textAlign: 'right', pr: 2, py: 1 }}>
                                                                <Typography variant="body2">41 mins ago</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Card>
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
