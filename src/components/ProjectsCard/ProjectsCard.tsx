import { projectsData } from "./Projects";
import styles from "./ProjectsCard.module.scss";

export const ProjectsCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>My Projects</h3>

      <div className={styles.projectsList}>
        {projectsData.projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectName}>{project.name}</h3>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit Project
                </a>
              )}
            </div>

            <p className={styles.projectDescription}>{project.description}</p>

            {project.technologies && project.technologies.length > 0 && (
              <div className={styles.technologies}>
                <h4 className={styles.techHeading}>Technologies:</h4>
                <div className={styles.techList}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.divider} />
          </div>
        ))}
      </div>
    </div>
  );
};
