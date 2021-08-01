import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
const options = [
  {title:"View",icon:<VisibilityIcon/>},
  {title:"Delete",icon:<DeleteIcon/>}
];

const ITEM_HEIGHT = 48;

export default function Actions({contact,handleDelete,handleView}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <MenuItem key={option} title={option.title} selected={option === 'Pyxis'} onClick={()=>{
              if(option.title==="View"){
                handleView(contact)
              }
              else if(option.title==="Delete"){
                  handleDelete(contact.name)
              }
              handleClose()
          }}>
            {option.icon}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
