import styles from "./outer-spacing.module.css";

type myprops = {
  children: React.ReactNode;
  spacetype: string;
};

export default function Spacer({ children, spacetype }: myprops) {
  return (
    <div className={`${styles.spacer} ${styles[spacetype]}`}>{children}</div>
  );
}
