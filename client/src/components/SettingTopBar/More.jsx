import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SegmentIcon from '@mui/icons-material/Segment';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DarkOrWhite from "../DarkOrWhiteToggle/DarkOrWhite"
import StyleIcon from '@mui/icons-material/Style';

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
    color: 'rgb(55, 65, 81)',
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
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handle = () => {
    return 0;
  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        sx={{
            border:"solid 1px",
            padding:"6px 10px"
        }}
        // endIcon={<KeyboardArrowDownIcon />}
      >
        {/* Eto content */}
        <SegmentIcon sx={{
            width:"40px", 
            height:"40px"
            }}/>        
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
        <MenuItem onClick={handleClose} disableRipple >
          <StyleIcon sx={{width:"25px", height:"25px"}} />
          Ticket Journalier
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple >
          <SmartphoneIcon sx={{width:"25px", height:"25px"}} />
          Nous contacter ?
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handle} disableRipple>
          <DarkOrWhite ifClicked={false} />
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple disabled sx={{
            display:"flex", 
            flexDirection:"column", 
            alignItems:"center"}}>
          Version 1.0
          <span style={{fontSize:"12px"}}>
            catégorie : simple
          </span> 
          <span style={{fontSize:"12px"}}>
            abonnement restant: <strong>25j</strong>
          </span>
          <br /> 
          <span style={{fontSize:"12px"}}>
            Logiciel avec une license,  toute <strong>copie <br /> ou crack</strong> du logiciel est <strong>strictement <br /> interdite</strong>
          </span> 
          
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
