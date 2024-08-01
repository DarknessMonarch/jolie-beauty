import styles from "@/app/style/pageLayout.module.css";
import Navbar from "@/app/components/navbar";
export default function PageLayout({ children }) {
  return (
    <div className={styles.pageLayout}>
      <Navbar />
      <div className={styles.pageContentLayout}>{children}</div>
    </div>
  );
}
