import * as THREE from "three";
import styles from "./index.module.less";
import { useEffect } from "react";
import { drawBox } from "./utils/drawBox";
export default function Three() {
  drawBox();
  return null;
}
