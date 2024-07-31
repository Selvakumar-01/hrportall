import React from 'react'
import { Grid, Stack, TextField, Typography, IconButton, Avatar, Card } from "@mui/material"
import DetailsIcon from '@mui/icons-material/Details';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';




export default function Header() {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Card sx={{ p: 2 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} md={3} lg={4} xl={2}>
                                <Stack direction="row">
                                    <DetailsIcon />
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bolder' }}>
                                        Talent Acquisition
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
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
                            <Grid item xs={0} sm={0} md={2} lg={4} xl={4}>

                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Stack direction="row" spacing={2} justifyContent="space-around">
                                    <IconButton sx={{ color: 'yellow' }}>
                                        <Brightness5Icon />
                                    </IconButton>
                                    <IconButton sx={{ color: 'blue' }}>
                                        <FileUploadIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: 'green' }}>
                                        <ChatBubbleOutlineIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: 'red' }}>
                                        <NotificationsIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: 'purple' }}>
                                        <SettingsIcon />
                                    </IconButton>
                                    <Avatar alt="SK" src="/path/to/avatar.png" sx={{ width: 40, height: 40, mt: 2 }} />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

