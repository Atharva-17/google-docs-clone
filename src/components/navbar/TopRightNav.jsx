import React from 'react'
import { Avatar, IconButton, Tooltip } from "@mui/material";
import LockIcon from "@mui/icons-material/LockOutlined";
import "../../styles/navbar/TopRightNav.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MeetOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

function TopRightNav() {
  return (
   <>
    <div className="navbarTopRight">
      <Tooltip title="Open comment history (⌘+Option+Shift+A)">
        <IconButton style={{ marginRight: 8 }}>
          <CommentOutlinedIcon
            fontSize={"medium"}
            style={{ color: "#444746" }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Join a call here or present this tab to the call">
        <IconButton style={{ borderRadius: 21, marginRight: 10 }}>
          <MeetOutlinedIcon
            fontSize={"medium"}
            style={{ color: "#444746", fontSize: 30 }}
          />
          <ArrowDropDownIcon fontSize={"medium"} style={{ color: "#444746" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Private to only me">
        <button className="navbarTopRight__share">
          <LockIcon
            fontSize={"small"}
            style={{ fontSize: 18, marginRight: 8 }}
          />
          <p className="navbarTopRight__share_text">Share</p>
        </button>
      </Tooltip>
      <Tooltip title="username@gmail.com">
        <Avatar
          style={{ cursor: "pointer" }}
          sx={{ width: 36, height: 36 }}
          alt="User avatar"
          src="https://xp.io/storage/1i8WnXiE.png"
        />
      </Tooltip>
    </div>
   </>
  )
}

export default TopRightNav