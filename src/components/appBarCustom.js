import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';

export default function AppBarCustom() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Books API
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
