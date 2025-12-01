import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2>Artlist</h2>
                        <p>아이의 추억을 영원한 예술로.</p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h3>Product</h3>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Showcase</a>
                        </div>
                        <div className={styles.column}>
                            <h3>Company</h3>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                        </div>
                        <div className={styles.column}>
                            <h3>Legal</h3>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.businessInfo}>
                        <p className={styles.infoTitle}>사업자 정보</p>
                        <div className={styles.infoGrid}>
                            <p>‣ 상호명: 채하몰 | 대표자: 엄재영</p>
                            <p>‣ 사업자등록번호: 143-05-02300</p>
                            <p>‣ 주소: 성남시 분당구 판교원로 82번길</p>
                            <p>‣ 채널/브랜드: SOWN / Artlist 서비스 운영</p>
                            <p>‣ 이메일: angelyrlove@naver.com</p>
                        </div>
                        <p className={styles.disclaimer}>별도의 문구 SOWN(소운) 및 Artlist 서비스는 채하몰이 운영합니다.</p>
                    </div>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} Artlist AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
