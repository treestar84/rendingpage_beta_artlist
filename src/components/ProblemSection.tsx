import styles from './ProblemSection.module.css';

export default function ProblemSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    사진은 수천 장인데 <br />
                    <span className={styles.highlight}>기억은 흐려지죠...</span>
                </h2>
                <p className={styles.description}>
                    아이의 성장은 눈 깜짝할 사이에 지나갑니다. <br />
                    핸드폰 속에 잠들어 있는 수만 장의 사진들, <br />
                    언제 다시 꺼내 보시나요?
                </p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>쌓여가는 데이터</h3>
                        <p>정리되지 않은 사진첩에서 소중한 순간을 찾기란 쉽지 않습니다.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>잊혀지는 감동</h3>
                        <p>사진만으로는 그 날의 분위기와 아이의 상상력을 담아내기 부족합니다.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>복잡한 편집 툴</h3>
                        <p>예쁘게 꾸미고 싶지만 포토샵은 어렵고 시간도 부족한 부모님들.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
