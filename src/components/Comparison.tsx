import styles from './Comparison.module.css';

export default function Comparison() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>왜 Artlist인가요?</h2>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>기능</th>
                                <th className={styles.highlight}>Artlist</th>
                                <th>일반 AI 서비스</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>부모 친화적 인터페이스</td>
                                <td className={styles.highlight}>⭐⭐⭐⭐⭐</td>
                                <td>⭐⭐</td>
                            </tr>
                            <tr>
                                <td>아이 얼굴 정확도</td>
                                <td className={styles.highlight}>99.9% (Face ID)</td>
                                <td>랜덤 생성</td>
                            </tr>
                            <tr>
                                <td>프롬프트 난이도</td>
                                <td className={styles.highlight}>자동 완성 (나노바나나)</td>
                                <td>복잡한 영어 입력</td>
                            </tr>
                            <tr>
                                <td>결과물 자연스러움</td>
                                <td className={styles.highlight}>스튜디오급 퀄리티</td>
                                <td>인위적인 느낌</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
