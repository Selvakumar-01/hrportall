import React from 'react';
import { Grid, Stack, IconButton, Card } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TuneIcon from '@mui/icons-material/Tune';



export default function Navbar() {
    return (
        <>
            <Grid container spacing={0}>
                <Card sx={{ top: 0, left: 0, width: '80px', height: '100vh', ml: 0 }}>
                    <Stack direction="column" spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                        <IconButton sx={{ color: 'blue' }}>
                            <AppsIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'green' }}>
                            <DescriptionIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'red' }}>
                            <ContactsIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'purple' }}>
                            <ContentPasteSearchIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'orange' }}>
                            <BusinessCenterIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'teal' }}>
                            <PlaylistAddCheckIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'pink' }}>
                            <HandshakeIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'brown' }}>
                            <SupportAgentIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'grey' }}>
                            <TuneIcon />
                        </IconButton>
                    </Stack>
                </Card>
            </Grid>
        </>
    );
}
