import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { clientContext } from '../context/ClientContext';
import { ShoppingCart } from "@mui/icons-material";
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Favorites from './User/Favorites';
import { adminContext } from '../context/AdminContext';
import { useAuth } from '../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    //    ! поиск
    const { getProducts } = React.useContext(adminContext);
    const getProductsClient = React.useContext(clientContext);

    const navigate = useNavigate();
    let obj = new URLSearchParams(window.location.search);
    const filterPhones = (key, value) => {
        obj.set(key, value);
        let newUrl = `${window.location.pathname}?${obj.toString()}`;
        navigate(newUrl);
        getProducts();
        getProductsClient.getProducts();
    };
    // ! cart
    const { productsCountInCart, productsCountInFavorites, getFavorite } = React.useContext(clientContext);
    //  ! favorites
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // ! account
    const { currentUser, logout, adminEmail } = useAuth();

    // ! >
    // ! localstorage acc
    let user = JSON.parse(localStorage.getItem('users'))
    if (!user) {
        let guest = {
            username: 'guest',
            displayName: null,
            photoUrl: null,
        }
        localStorage.setItem('users', JSON.stringify(guest))
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

            {
                currentUser ? (

                    <Button onClick={logout}>
                        <h6 className="text3">{currentUser.email}</h6>
                        <LogoutIcon />
                    </Button>

                ) : (
                    <Link to="/register">
                        <Button >
                            Войти
                            <AccountCircle
                                style={{ color: "rgba(169, 169, 169, 0.748)" }}
                            />
                        </Button>
                    </Link>
                )}

        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Link to="/cart">
                <MenuItem>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge
                            style={{ color: "black" }}
                            badgeContent={productsCountInCart}
                            color="error"
                        >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <p style={{ color: '#1a1a1a' }} >Корзина</p>
                </MenuItem>
            </Link>
            <MenuItem onClick={() => {
                handleOpen();
                getFavorite();
            }}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={productsCountInFavorites} color="error">
                        <BookmarkBorderIcon />
                    </Badge>
                </IconButton>
                <p>Избранное</p>
            </MenuItem>
            <MenuItem onClick={() => {
                navigate('/purchaseHistory')
            }}>
                <IconButton
                    size="large"
                    color="inherit"
                    style={{ color: "black" }}

                >
                    <Badge color="error">
                        <ListAltIcon />
                    </Badge>
                </IconButton>
                <p>Покупки</p>
            </MenuItem>
            <MenuItem onClick={() => {
                navigate('/views')
            }}>
                <IconButton
                    onClick={() => navigate('/views')}
                    size="large"
                    aria-label="show 17 new notifications"
                    style={{ color: "black" }}
                >
                    <Badge color="error">
                        <HistoryIcon />
                    </Badge>
                </IconButton>
                <p>История</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Профиль</p>
            </MenuItem>
        </Menu>
    );



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className='my-navbar'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                            onClick={() => navigate('/')}
                        >
                            <img className='nav-logo'
                                src="data:image/png;base64,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"
                                alt="" />
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                onChange={(e) => {
                                    filterPhones(`q`, e.target.value);
                                }}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        {currentUser ? (
                            currentUser.email === adminEmail ? (
                                <Link to="/admin">
                                    <Button>Admin</Button>
                                </Link>
                            ) : null
                        ) : null}
                        <Link to='/products'>
                            <Button style={{ color: '#000' }}>Наши продукты</Button>
                        </Link>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit"
                            >
                                <Link to="/cart">
                                    <Badge
                                        style={{ color: "rgba(102, 102, 102, 0.644)" }}
                                        badgeContent={productsCountInCart}
                                        color="error"
                                    >
                                        <ShoppingCart />
                                    </Badge>
                                </Link>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                style={{ color: "rgba(102, 102, 102, 0.644)" }}
                            >
                                <Badge badgeContent={productsCountInFavorites} color="error">
                                    <BookmarkBorderIcon
                                        onClick={() => {
                                            handleOpen();
                                            getFavorite();
                                        }}
                                    />
                                </Badge>
                            </IconButton>
                            <IconButton
                                onClick={() => navigate('/views')}
                                size="large"
                                aria-label="show 17 new notifications"
                                style={{ color: "rgba(102, 102, 102, 0.644)" }}
                            >
                                <Badge color="error">
                                    <HistoryIcon />
                                </Badge>
                            </IconButton>
                            <MenuItem onClick={() => {
                                navigate('/purchaseHistory')
                            }}>
                                <IconButton
                                    size="large"
                                    color="inherit"
                                    style={{ color: "rgba(102, 102, 102, 0.644)" }}

                                >
                                    <Badge color="error">
                                        <ListAltIcon />
                                    </Badge>
                                </IconButton>
                            </MenuItem>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                style={{ color: "rgba(102, 102, 102, 0.644)" }}
                            >
                                {currentUser ? (
                                    <>
                                        <p style={{ fontSize: '15px' }} className="text3">{currentUser.email}</p>
                                        <LogoutIcon onClick={() => {
                                            logout()
                                        }} />
                                    </>
                                ) : (
                                    <Link to="/register">

                                        <AccountCircle
                                            style={{ color: "rgba(169, 169, 169, 0.748)" }}
                                        />

                                    </Link>
                                )}
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                style={{ color: "rgba(102, 102, 102, 0.644)" }}
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
            <Favorites
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
            />
        </>
    );
}
