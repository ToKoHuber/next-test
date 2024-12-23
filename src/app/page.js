import Image from "next/image";
import styles from "./page.module.css";
import { NarutoCart } from "@/components/Cart";
import { SasukeCart } from "@/components/Cart";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello</h1>

        <NarutoCart />
        <SasukeCart />
      </div>
    </div>
  );
}
