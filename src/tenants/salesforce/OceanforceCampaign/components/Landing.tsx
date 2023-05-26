import styles from './../styles/Landing.module.scss';
import TreeCounter from '../../TreeCounter/TreeCounter';

interface Props {
  tenantScore?: { total: number };
}
export default function Landing({ tenantScore }: Props) {
  const tenantScoreData = tenantScore ? tenantScore.total : '';
  return (
    <section className={styles.landingSection}>
      <div className={styles.landingContent}>
        <div className={styles.landingContentTop}>
          <h3>Planting Hope & Growing Resilience with Mangroves</h3>
          <TreeCounter target={100000000} planted={tenantScoreData || 0} />
        </div>
      </div>
    </section>
  );
}