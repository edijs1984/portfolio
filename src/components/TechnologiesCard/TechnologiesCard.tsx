import styles from "./TechnologiesCard.module.scss";

export const TechnologiesCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Technologies</h3>
      <div className={styles.sections}>
        {/* Backend Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>🔧 Backend</h3>
          <div className={styles.category}>
            <h4>Languages & Runtime:</h4>
            <ul>
              <li>TypeScript (primary)</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Frameworks:</h4>
            <ul>
              <li>
                NestJS (modular architecture, decorators, DI, microservices)
              </li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Database:</h4>
            <ul>
              <li>MongoDB (including DigitalOcean Managed MongoDB)</li>
              <li>Mongoose (ODM)</li>
              <li>PostgreSQL (TypeOrm)</li>
              <li>Redis</li>
              <li>Redis Stack</li>
              <li>Neo4j</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Queue / Messaging / Streaming:</h4>
            <ul>
              <li>Redpanda (Kafka-compatible)</li>
              <li>BullMQ (Redis-based job queues)</li>
              <li>RabbitMQ (message broker for async communication)</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Blockchain:</h4>
            <ul>
              <li>Solana (Squads SDK for multisig)</li>
              <li>Ethereum & EVM chains (Viem, Safe/Gnosis Safe)</li>
              <li>Bitcoin (BitcoinJS - P2WPKH, P2WSH multisig)</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Blockchain:</h4>
            <ul>
              <li>Solana (Squads SDK for multisig)</li>
              <li>Ethereum & EVM chains (Viem, Safe/Gnosis Safe)</li>
              <li>Bitcoin (BitcoinJS - P2WPKH, P2WSH multisig)</li>
            </ul>
          </div>
          {/* Add other backend categories similarly */}
        </div>

        {/* Frontend Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>🎨 Frontend</h3>
          <div className={styles.category}>
            <h4>Mobile:</h4>
            <ul>
              <li>React Native (Expo)</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Web:</h4>
            <ul>
              <li>React</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Desktop</h4>
            <ul>
              <li>Electron</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Languages:</h4>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript (minimal)</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Frameworks:</h4>
            <ul>
              <li>Redux Toolkit (state management)</li>
              <li>Recoil (state management)</li>
              <li>Sass (CSS preprocessor)</li>
              <li>React with MUI (Material UI component library)</li>
              <li>
                React with Bootstrap (React-Bootstrap or Bootstrap with React)
              </li>
            </ul>
          </div>
        </div>

        {/* DevOps Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>⚙️ DevOps & Infrastructure</h3>
          <div className={styles.category}>
            <h4>Cloud Hosting:</h4>
            <ul>
              <li>DigitalOcean (multiple droplets, private networking)</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h4>Containerization:</h4>
            <ul>
              <li>Docker</li>
              <li>Docker Compose</li>
              <li>Docker Swarm (used to manage ~20–60 containers)</li>
              <li>Portainer (for managing Docker Swarm)</li>
              <li>Nginx (reverse proxy for routing)</li>
              <li>Prometheus & Grafana (monitoring)</li>
            </ul>
          </div>
          {/* Add other DevOps categories similarly */}
        </div>
      </div>
    </div>
  );
};
