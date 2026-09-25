import styles from '@/app/ryuislabs.module.css';
import { Reveal } from '@/components/common/Reveal';
import { COMPANY_INFO } from '@/constants/company';

export function Contact() {
  return (
    <section id="contact" className={styles.wrap}>
      <Reveal className={styles.contactBox}>
        <div>
          <h3>
            제도권 결합, 기술 협력,
            <br />
            사업 문의를 기다립니다.
          </h3>
          <p>공공·민간 프로젝트 협업, B2B 라이선스, 투자 및 멘토링 문의 모두 환영합니다.</p>
        </div>
        <a href={`mailto:${COMPANY_INFO.email}`} className={`${styles.contactEmail} ${styles.mono}`}>
          {COMPANY_INFO.email}
        </a>
      </Reveal>
    </section>
  );
}

export default Contact;
