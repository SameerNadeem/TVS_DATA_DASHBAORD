import * as React from 'react';
import { styled, Theme, CSSObject, useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NextLink from "next/link";
import Drawer from '@mui/material/Drawer';
import scss from'./SideMenu.module.scss';

import Person2Icon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { signOut } from 'next-auth/react';
import HomeIcon from "@mui/icons-material/Home"
const drawerWidth = 240;


const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const menuRouteList = ["",'data', 'profile', ''];
  const menuListTranslations = ["Home",'Data', 'Profile', 'Sign Out'];
  const menuListIcons = [
    <HomeIcon />,
    <EqualizerIcon />,
    <Person2Icon />,
    <ExitToAppIcon />,
  ];


  const SideMenu = () => {
    const theme = useTheme();
    const mobileCheck = useMediaQuery('(min-width: 600px)');

    const [open, setOpen] = React.useState(false);
  

  
const handleDrawerToggle = () => {
      setOpen(!open);
    };

    const handlerListItemButtonClick= (text:string)=>{
      text =="Sign Out" ? signOut():null;
      setOpen(false) ;
    }
    return (
<Drawer variant="permanent" anchor='left' open={open} sx={{
        width: drawerWidth,

        ['& .MuiDrawer-paper']:{
            left:0,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            top: mobileCheck ? 64 :57,
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
              }),
              ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
              }),
        },

}}>
        <div className={scss.drawerHeader}>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <Divider />
        <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <NextLink
            className={scss.link}
            href={`/dashboard/${menuRouteList[index]}`} passHref>
            <ListItemButton
            component="a"
            onClick={()=> handlerListItemButtonClick(text)}
            title={text}
            aria-label={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {menuListIcons[index]}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ 
                color : theme.palette.text.primary,
                opacity: open ? 1 : 0 }} />{" "}
            </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;