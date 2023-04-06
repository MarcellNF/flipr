import * as React from 'react';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import {Tooltip} from "@mui/material";

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function FliprBottomBar() {
    return (
        <AppBar position="fixed" color="primary" sx={{top: 'auto', bottom: 0}}>
            <Toolbar>
                <Tooltip title="Coming soon" arrow>
                    <IconButton color="inherit" aria-label="ope drawer">
                        <MenuIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Coming soon" arrow>
                    <StyledFab color="secondary" aria-label="add">
                        <AddIcon/>
                    </StyledFab>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}