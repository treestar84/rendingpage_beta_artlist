import styles from './BrandStory.module.css';

export default function BrandStory() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h3 className={styles.brandTitle}>Artlist</h3>
                    <p className={styles.brandDesc}>채하몰이 운영하는 AI 이미지 생성 SaaS</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.card}>
                    <h3 className={styles.brandTitle}>SOWN</h3>
                    <p className={styles.brandDesc}>
                        채하몰, Artlist의 소식을 가장 빠르게 받을 수 있는 소통 채널 <br />
                        <span className={styles.meaning}>: some where only we know (우리만 아는 어딘가)</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
