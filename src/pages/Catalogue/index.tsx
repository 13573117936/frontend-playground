import { Button } from "antd";
import styles from "./index.module.less";
import { useNavigate } from "react-router-dom";
export default function Catelogue() {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <Button onClick={() => nav("/gemini")}>nav</Button>
    </div>
  );
}
