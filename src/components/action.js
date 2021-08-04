import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const ITEM_HEIGHT = 48;

export default function Actions({contact,options=[]}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
if(options.length===0){
  return "Options props missing"
}
  return (
    <div>
      <IconButton
      title="Actions"
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '7ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} title={option.title} onClick={()=>{
            option.click(contact)
              handleClose()
          }}>
            {option.icon}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
