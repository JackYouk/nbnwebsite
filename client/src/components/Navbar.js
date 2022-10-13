import * as React from 'react';
import { Toolbar, Menu, Container, Button, MenuItem } from '@mui/material';

import { Image } from 'mui-image';

import northbayLogo from '../images/northbayLogo.png';

import { Link } from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import ComputerIcon from '@mui/icons-material/Computer';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
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
        <Container maxWidth="inherit" className='navbarNoScroll' style={{ position: 'sticky', backgroundColor: 'lightgrey', zIndex: '77', padding: '1vh' }}>
            <Toolbar>
                {/* LOGO ----------------------- */}
                <Link to='/'>
                    <img src={northbayLogo} alt='northbay networks logo' />
                </Link>

                {/* SERVICES BTN ------------------- */}
                <div>
                <Link to='/services' style={{ textDecoration: 'none'}}>
                    <Button
                        variant="text"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        style={{ color: '#01334d', fontWeight: 'bold', marginLeft: '5vh' }}
                    >
                        Services
                    </Button>
                </Link>
                    
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <Link to='/services/epl' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <MenuItem onClick={handleClose} disableRipple>
                                <ComputerIcon />
                                IT Asset Managment
                            </MenuItem>
                        </Link>

                        <Link to='/services/data-destruction' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <MenuItem onClick={handleClose} disableRipple>
                                <RestoreFromTrashIcon />
                                Secure Data Destruction
                            </MenuItem>
                        </Link>

                        <Link to='/services/ewaste' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <MenuItem onClick={handleClose} disableRipple>
                                <RotateLeftIcon />
                                eWaste Recycling
                            </MenuItem>
                        </Link>

                        <Link to='/services/smarthands' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <MenuItem onClick={handleClose} disableRipple>
                                <DomainDisabledIcon />
                                IT/Office Setup & Decom
                            </MenuItem>
                        </Link>

                        <Link to='/services/logistics' style={{ textDecoration: 'none', color: 'rgb(55, 65, 81)' }}>
                            <MenuItem onClick={handleClose} disableRipple>
                                <LanguageIcon />
                                Logistics
                            </MenuItem>
                        </Link>

                        {/* <Divider sx={{ my: 0.5 }} /> */}
                    </StyledMenu>

                    {/* SALES BTN---------------------------- */}
                    <Link to='/sales' style={{ textDecoration: 'none', marginLeft: '5vh' }}>
                        <Button color='primary' variant="text" style={{ color: '#01334d', fontWeight: 'bold' }}>Sales</Button>
                    </Link>

                    {/* ABOUT US BTN---------------------------- */}
                    <Link to='/about' style={{ textDecoration: 'none', marginLeft: '5vh' }}>
                        <Button color='primary' variant="text" style={{ color: '#01334d', fontWeight: 'bold' }}>About Us</Button>
                    </Link>

                    {/* Contact BTN---------------------------- */}
                    <Link to='/contact' style={{ textDecoration: 'none', marginLeft: '5vh' }}>
                        <Button color='primary' variant="contained" style={{ backgroundColor: '#01334d', color: 'white', fontWeight: 'bold' }}>Contact Us</Button>
                    </Link>
                </div>

            </Toolbar>
        </Container>
    );
}

export default Navbar;