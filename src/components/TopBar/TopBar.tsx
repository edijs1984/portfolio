import { useNavigation } from "../../context/NavigationContext";
import styles from "./TopBar.module.scss";

export const TopBar = () => {
  const { currentCard, setCurrentCard } = useNavigation();

  const menuItems = [
    { key: "basic-info", name: "General" },
    { key: "technologies", name: "Technologies" },
    { key: "projects", name: "Projects" },
  ] as const;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`${styles.navItem} ${
                currentCard === item.key ? styles.active : ""
              }`}
              onClick={() => setCurrentCard(item.key)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* ... rest of your top bar ... */}
    </header>
  );
};
