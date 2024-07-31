import { Button, Card, Divider, Grid, InputAdornment, TextField, Typography, TableContainer, Table } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Candidate() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#dedede',
                contrastText: '#000000' // Example contrast text color, adjust as needed
            }
        }
    });

    const jobApplications = [
        {
            jobId: "001",
            name: "John Smith",
            position: "Java Developer",
            firstLevel: "8/10",
            secondLevel: "9/10",
            thirdLevel: "7/10",
            fourthLevel: "8/10",
            totalMarks: "32/40",
            status: "Active",
            actions: "Viewed"
        },
        {
            jobId: "002",
            name: "Alice Johnson",
            position: "React Developer",
            firstLevel: "9/10",
            secondLevel: "8/10",
            thirdLevel: "9/10",
            fourthLevel: "9/10",
            totalMarks: "35/40",
            status: "Hired",
            actions: "Viewed"
        },
        {
            jobId: "003",
            name: "Michael Brown",
            position: "iOS Developer",
            firstLevel: "7/10",
            secondLevel: "8/10",
            thirdLevel: "8/10",
            fourthLevel: "7/10",
            totalMarks: "30/40",
            status: "Rejected",
            actions: "Yet to View"
        },
        {
            jobId: "004",
            name: "Sarah Davis",
            position: "UI/UX Developer",
            firstLevel: "8/10",
            secondLevel: "7/10",
            thirdLevel: "8/10",
            fourthLevel: "9/10",
            totalMarks: "32/40",
            status: "Active",
            actions: "Viewed"
        },
        {
            jobId: "005",
            name: "David Wilson",
            position: "Java Developer",
            firstLevel: "9/10",
            secondLevel: "9/10",
            thirdLevel: "8/10",
            fourthLevel: "8/10",
            totalMarks: "34/40",
            status: "Hired",
            actions: "Viewed"
        },
        {
            jobId: "006",
            name: "Emma Martinez",
            position: "React Developer",
            firstLevel: "7/10",
            secondLevel: "8/10",
            thirdLevel: "7/10",
            fourthLevel: "7/10",
            totalMarks: "29/40",
            status: "Rejected",
            actions: "Yet to View"
        },
        {
            jobId: "007",
            name: "James Garcia",
            position: "iOS Developer",
            firstLevel: "8/10",
            secondLevel: "9/10",
            thirdLevel: "8/10",
            fourthLevel: "8/10",
            totalMarks: "33/40",
            status: "Active",
            actions: "Viewed"
        },
        {
            jobId: "008",
            name: "Olivia Miller",
            position: "UI/UX Developer",
            firstLevel: "9/10",
            secondLevel: "9/10",
            thirdLevel: "9/10",
            fourthLevel: "9/10",
            totalMarks: "36/40",
            status: "Hired",
            actions: "Viewed"
        },
        {
            jobId: "009",
            name: "Benjamin Lee",
            position: "Java Developer",
            firstLevel: "7/10",
            secondLevel: "7/10",
            thirdLevel: "8/10",
            fourthLevel: "7/10",
            totalMarks: "29/40",
            status: "Rejected",
            actions: "Yet to View"
        },
        {
            jobId: "010",
            name: "Sophia Anderson",
            position: "React Developer",
            firstLevel: "8/10",
            secondLevel: "8/10",
            thirdLevel: "8/10",
            fourthLevel: "9/10",
            totalMarks: "33/40",
            status: "Active",
            actions: "Viewed"
        }
    ];

    console.log(jobApplications);

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
                                                Candidate Status
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
                                    </Grid>
                                    <Grid container spacing={1} sx={{ mt: 2 }}>
                                        <TableContainer>
                                            <Table>
                                                <Grid container spacing={0} >
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} data-testid={"Payment-List-Header"}>
                                                        <ThemeProvider theme={theme}>
                                                            <Card sx={{ marginTop: "0px !important", padding: "4px 0px !important", marginBottom: "0px !important", background: "#D7DBDD", color: "black", fontFamily: 'sans-serif', fontSize: '12.5px', fontWeight: 'bold', borderRadius: 0, borderTopRightRadius: 12, borderTopLeftRadius: 12 }}>
                                                                <Grid container spacing={0} >
                                                                    <Grid item xs={1.2} sm={1.2} md={1.2} lg={1.2} xl={1.2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                        <Typography variant="body1">
                                                                            Job ID
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={1.6} sm={1.6} md={1.6} lg={1.6} xl={1.6} sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                                                                        <Typography variant="body1">
                                                                            Name
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={1.6} sm={1.6} md={1.6} lg={1.6} xl={1.6} sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                                                                        <Typography variant="body1">
                                                                            Position
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                                                                        <Typography variant="body1">
                                                                            1st Level
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                                                                        <Typography variant="body1">
                                                                            2nd Level
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                                                                        <Typography variant="body1">
                                                                            3rd Level
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                                                                        <Typography variant="body1">
                                                                            4th Level
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={1.4} sm={1.4} md={1.4} lg={1.4} xl={1.4} sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                                                                        <Typography variant="body1">
                                                                            Total Marks
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={1.2} sm={1.2} md={1.2} lg={1.2} xl={1.2} sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                                                                        <Typography variant="body1">
                                                                            Status
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                                                                        <Typography variant="body1">
                                                                            Action
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Card>
                                                        </ThemeProvider>
                                                    </Grid>
                                                </Grid>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <TableContainer>
                                                <Table>
                                                    <Card>
                                                        <Grid container spacing={2}>
                                                            {jobApplications.map((data) => (
                                                                <>
                                                                    <Grid item xs={1.1} sm={1.1} md={1.1} lg={1.1} xl={1.1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                        <Typography variant="body1">{data.jobId}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem />
                                                                    <Grid item xs={1.6} sm={1.6} md={1.6} lg={1.6} xl={1.6} sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                                                        <Typography variant="body1">{data.name}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem />
                                                                    <Grid item xs={1.6} sm={1.6} md={1.6} lg={1.6} xl={1.6} sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                                                        <Typography variant="body1">{data.position}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem />
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                        <Typography variant="body1">{data.firstLevel}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem />
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                        <Typography variant="body1">{data.secondLevel}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem />
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                        <Typography variant="body1">{data.thirdLevel}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem />
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                        <Typography variant="body1">{data.fourthLevel}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem />
                                                                    <Grid item xs={1.4} sm={1.4} md={1.4} lg={1.4} xl={1.4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                        <Typography variant="body1">{data.totalMarks}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem />
                                                                    <Grid item xs={1.2} sm={1.2} md={1.2} lg={1.2} xl={1.2} sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                                                        <Typography variant="body1">{data.status}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem />
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                                                        <Typography variant="body1">{data.actions}</Typography>
                                                                    </Grid>
                                                                    <Divider orientation="horizontal" flexItem sx={{ my: 1 }} />
                                                                </>
                                                            ))}
                                                        </Grid>
                                                    </Card>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Table>
                </TableContainer>
            </Grid>

        </>
    )
}

