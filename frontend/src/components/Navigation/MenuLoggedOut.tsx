import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import {useNavigate} from "react-router-dom";
import LoginDialog from "../Login/LoginDialog";

type MenuLoggedOutProps = {
    open: boolean,
    handleLogin: (username: string, password: string) => void,
}

export default function MenuLoggedOut(props: MenuLoggedOutProps) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    return (
        <List>
            <ListItem key={"Login"} disablePadding sx={{display: 'block'}}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                    onClick={handleClickOpen}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <Tooltip title="Login" placement="right">
                            <LoginIcon/>
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary={"Login"} sx={{opacity: props.open ? 1 : 0}}/>
                </ListItemButton>
                <LoginDialog open={open} handleClose={handleClose} handleLogin={props.handleLogin} />
            </ListItem>

            <ListItem key={"Register"} disablePadding sx={{display: 'block'}}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                    onClick={() => navigate("/register")}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <Tooltip title="Register" placement="right">
                            <HowToRegIcon/>
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary={"Register"} sx={{opacity: props.open ? 1 : 0}}/>
                </ListItemButton>
            </ListItem>
        </List>
    );
}