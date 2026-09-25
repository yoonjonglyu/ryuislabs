import styles from '@/app/ryuislabs.module.css';
import { Reveal } from '@/components/common/Reveal';
import { FOUNDER_PROFILE } from '@/constants/company';

export function Founder() {
  return (
    <section id="founder" className={`${styles.wrap} ${styles.section}`}>
      <Reveal className={styles.sectionHead}>
        <div className={`${styles.eyebrow} ${styles.mono}`}>OPERATOR PROFILE</div>
        <h2>혼자, 그러나 전부</h2>
        <p>RyuisLabs는 아이디어 설계부터 구현까지 한 사람이 수행하는 1인 시스템입니다.</p>
      </Reveal>

      <Reveal className={styles.founderCard}>
        <div className={styles.founderTop}>
          <span className={`${styles.founderBadge} ${styles.mono}`}>{FOUNDER_PROFILE.role}</span>
          <span className={`${styles.founderBadge} ${styles.mono}`}>{FOUNDER_PROFILE.location}</span>
        </div>
        <h3>{FOUNDER_PROFILE.name}</h3>
        <p className={styles.bio}>{FOUNDER_PROFILE.bio}</p>

        <div className={styles.systemList}>
          {FOUNDER_PROFILE.systems.map((system) => (
            <a
              key={system.name}
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.sysRow} ${styles.linkable}`}
            >
              <div>
                <div className={`${styles.name} ${styles.mono}`}>{system.name}</div>
                <div className={styles.desc}>{system.desc}</div>
              </div>
              <div className={`${styles.arrow} ${styles.mono}`}>→</div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Founder;
