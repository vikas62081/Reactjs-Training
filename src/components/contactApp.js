import React, { useState } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Grid, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Actions from './action';

export default function Carddetail({ contactList,handleDelete,handleView }) {

    return (
        <div>
            {contactList.map((userinfo,index) => (
                <div key={index}>
                    <List className="contactInfo">
                        <ListItem>
                            <ListItemAvatar> 
                                <Avatar/>
                            </ListItemAvatar>
                            <ListItemText primary={userinfo.name} secondary={userinfo.email} />
                            <Grid align="right" className="action" >
                                {/* <IconButton><MoreVertIcon/></IconButton> */}
                                <Actions contact={userinfo} handleDelete={handleDelete} handleView={handleView}/>
                                {/* <button onClick={()=>handleView(userinfo)}>View</button>
                                <button onClick={()=>handleDelete(userinfo.name)}>Delete User</button> */}
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider variant="inset" />
                </div>
            ))}
        </div>
    )
}