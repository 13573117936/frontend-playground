import { useEffect, useState } from "react";

import styles from "./index.module.less";
import { Button, Input, Space } from "antd";
import model from "./model";
import {
  GoogleCircleFilled,
  LoadingOutlined,
  RobotOutlined,
  SendOutlined,
} from "@ant-design/icons";
import theme from "../../theme";

export default function Gemini() {
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatList, setChatList] = useState([]);
  const run = async () => {
    try {
      setText("");
      setAnswer("");
      setLoading(true);
      const parts = [{ text: text }];
      const result = await model.generateContentStream({
        contents: [{ role: "user", parts }],
      });
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        console.log(chunkText);
        setAnswer((v) => (v += chunkText));
      }
    } catch (error) {
      console.log(error?.messags);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // run();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Gemini-Pro</div>
      <div className={styles.chat}>
        <div className={styles.chatItem}>
          <GoogleCircleFilled style={{ color: theme.color_8, fontSize: 32 }} />
          <div className={styles.content}>
            <div className={styles.name}>Gemini</div>
            {(loading || answer) && (
              <div className={styles.text}>
                {answer}
                {loading && <span className={styles.blinking}></span>}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className={styles.input}
            onPressEnter={run}
          />
          <Button
            onClick={run}
            icon={<SendOutlined />}
            className={styles.btn}
            type="primary"
          >
            Send
          </Button>
        </Space.Compact>
      </div>
    </div>
  );
}
