import {CssBaseline} from "@mui/material";
import NavigationAppBar from "./NavigationAppBar";
import NavigationDrawer from "./NavigationDrawer";
import * as React from "react";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function NavigationApp() {

    const theme = useTheme();
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <NavigationAppBar open={openDrawer} handleDrawerOpen={handleDrawerOpen}/>
            <NavigationDrawer open={openDrawer} handleDrawerClose={handleDrawerClose} theme={theme}/>
        </Box>
    );
}