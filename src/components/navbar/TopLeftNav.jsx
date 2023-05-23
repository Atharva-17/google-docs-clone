import { IconButton, Tooltip } from "@mui/material";
import "../../styles/navbar/TopLeftNav.css";
import logo from "../../assets/images/logo.png";
import UnStar from "@mui/icons-material/GradeOutlined";
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import { createRef, useEffect, useState } from "react";

const defaultTitle = "Untitled document";
const navBarOptions = [
  "File",
  "Edit",
  "View",
  "Insert",
  "Format",
  "Tools",
  "Extensions",
  "Help",
];

function TopLeftNav() {
    const spanRef = createRef();
    const [title, setTitle] = useState(defaultTitle);
    const [width, setWidth] = useState(
      spanRef.current?.offsetWidth
    );
  
    useEffect(() => {
      setWidth(title === defaultTitle ? 156 : spanRef.current?.offsetWidth);
    }, [title]);
  return (
    <>
    <section className="navbarTop__left">
      <div className="navbarTop__logo">
        <Tooltip title={"Docs home"} >
          <img src={logo} alt="logo" />
        </Tooltip>
      </div>
      <div className="navbarTop__title_and_tools">
        <div className="navbarTop__title">
          <span ref={spanRef} className="hide">
            {title}
          </span>
          <Tooltip title={"Rename"}>
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              style={{ width }}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={(_) => (title === "" ? setTitle(defaultTitle) : "")}
            />
          </Tooltip>
          <IconButton style={{ padding: 4 }}>
            <Tooltip title={"Star"}>
              <UnStar fontSize={"small"} style={{ color: "#444746" }} />
            </Tooltip>
          </IconButton>
          <IconButton style={{ padding: 4 }}>
          <Tooltip title={"Move"}>
          <DriveFileMoveOutlinedIcon fontSize={"small"} style={{ color: "#444746" }} />
          </Tooltip>
          </IconButton>
          <IconButton style={{ padding: 4 }}>
          <Tooltip title={"See document status"}>
          <CloudDoneOutlinedIcon fontSize={"small"} style={{ color: "#444746" }} />
          </Tooltip>
          </IconButton>
        </div>
        <div className="navbarTop__tools">
          {navBarOptions.map((navBarOption) => (
            <div className="navbarTop__tool">{navBarOption}</div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default TopLeftNav