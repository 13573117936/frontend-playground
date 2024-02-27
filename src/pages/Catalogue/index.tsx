import {
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import styles from "./index.module.less";
import { useNavigate } from "react-router-dom";
import { Send } from "@mui/icons-material";
export default function Catelogue() {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => nav("/gemini")}>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary="Gemini" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
