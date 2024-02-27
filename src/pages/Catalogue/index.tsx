import { ListItemText, List, ListItem, ListItemButton } from "@mui/material";
import styles from "./index.module.less";
import { useNavigate } from "react-router-dom";

export default function Catelogue() {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => nav("/gemini")}>
            <ListItemText primary="Gemini" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
