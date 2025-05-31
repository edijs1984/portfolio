import styles from "./BasicInfoCard.module.scss";

export const BasicInfoCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.profileSection}>
          <div className={styles.avatar}>
            <div className={styles.avatarPlaceholder}>
              <img
                src="profile_photo.jpeg"
                alt="Your Name"
                className={styles.avatarImage}
              />
            </div>
          </div>
          <div className={styles.profileInfo}>
            <h2>Edijs Ziedins</h2>
            <p className={styles.title}> JS/TS Full Stack Developer</p>
            <a href="mailto:your.email@example.com" className={styles.email}>
              ziedins.edijs@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Status:</span>
            <span>Looking for projects</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Availability:</span>
            <span>Part-time • Full-time • Remote</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Programming since:</span>
            <span>May 2019 ({new Date().getFullYear() - 2019} years)</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Location:</span>
            <span>Riga, Latvia</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Languages:</span>
            <span>
              English (fluent), Latvian (native), Russian (fluent), Spanish
              (Conversational)
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Citizen:</span>
            <span>Latvian, EU</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>About me:</span>
            <span>
              I’m a curious and adaptable full-stack developer with 5+ years of
              experience. I’m very honest, direct, and loyal—someone who values
              trust and clear communication. I enjoy solving real problems with
              simple, effective solutions and take full ownership of my work.
              Whether solo or in a team, I focus on building products that
              matter.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
