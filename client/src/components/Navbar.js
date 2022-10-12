import * as React from 'react';
import { Toolbar, Menu, Container, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Image } from 'mui-image';

import northbayLogo from '../images/northbayLogo.png';

import { Link } from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import ComputerIcon from '@mui/icons-material/Computer';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

// NAVBAR --------------------------------------------

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Container maxWidth="xl" className='navbarNoScroll' style={{ position: 'fixed' }}>
            <Toolbar>
                <Link to='/'>
                    <Image
                        src={northbayLogo}
                        height="80"
                        width="300"
                        fit='contain'
                        duration={100}
                        easing=
                        'cubic-bezier(0.7, 0, 0.6, 1)'
                        showLoading=
                        {false}
                        errorIcon=
                        {true}
                        shift={null}
                        distance="100px"
                        shiftDuration={10}
                        bgColor="inherit"
                        margin={3}
                    />
                </Link>

                <Link to='/' style={{ textDecoration: 'none', marginLeft: '5vh' }}>
                    <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="outlined"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        style={{ backgroundColor: 'grey', color: 'white' }}
                    >
                        Services
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} disableRipple>
                            <RestoreFromTrashIcon />
                            Secure Data Destruction
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <RotateLeftIcon />
                            eWaste Recycling
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <DomainDisabledIcon />
                            Office Setup & Decom
                        </MenuItem>
                        
                        <MenuItem onClick={handleClose} disableRipple>
                            <LanguageIcon />
                            Logistics
                        </MenuItem>
                        {/* <Divider sx={{ my: 0.5 }} /> */}
                        <MenuItem onClick={handleClose} disableRipple>
                            <ComputerIcon />
                            IT Asset Managment
                        </MenuItem>
                    </StyledMenu>
                </Link>

                <Link to='/' style={{ textDecoration: 'none', marginLeft: '5vh' }}>
                    <Button color='primary' variant="outlined" style={{ backgroundColor: 'grey', color: 'white' }}>Our Team</Button>
                </Link>

                <Link to='/' style={{ textDecoration: 'none', marginLeft: '5vh' }}>
                    <Button color='primary' variant="outlined" style={{ backgroundColor: 'grey', color: 'white' }}>About Us</Button>
                </Link>
            </Toolbar>
        </Container>
    );
}

export default Navbar;