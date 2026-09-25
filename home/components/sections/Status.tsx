import styles from '@/app/ryuislabs.module.css';
import { Reveal } from '@/components/common/Reveal';
import { STATUS_MODULES, TARGET_AUDIENCE, BUSINESS_TIERS } from '@/constants/company';

export function Status() {
  return (
    <section id="status" className={`${styles.wrap} ${styles.section}`}>
      <Reveal className={styles.sectionHead}>
        <div className={`${styles.eyebrow} ${styles.mono}`}>FLAGSHIP MODULE / RYUis : STATUS</div>
        <h2>
          감시 없이 증명하는,
          <br />
          프라이버시 보존형 상태창
        </h2>
        <p>
          온디바이스 AI 비전이 시선과 관절 움직임을 기기 안에서만 분석하고, 원본 영상은 즉시
          폐기합니다. 남는 건 조작 불가능한 암호화 스탯뿐 — 얼굴도, 방 안 풍경도 서버로 나가지
          않습니다.
        </p>
      </Reveal>

      <Reveal className={styles.moduleGrid}>
        {STATUS_MODULES.map((module) => (
          <div key={module.ref} className={styles.module}>
            <div className={`${styles.ref} ${styles.mono}`}>{module.ref}</div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className={styles.targetRow}>
        {TARGET_AUDIENCE.map((item) => (
          <div key={item.label} className={styles.target}>
            <div className={`${styles.label} ${styles.mono}`}>{item.label}</div>
            <h4>{item.role}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className={styles.tierList}>
        {BUSINESS_TIERS.map((tier) => (
          <div key={tier.tag} className={styles.tier}>
            <div className={`${styles.tag} ${styles.mono}`}>{tier.tag}</div>
            <div className={styles.desc}>
              <b>{tier.title}</b> — {tier.description}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Status;
