import styles from './FAQ.module.css';

export const faqData = [
    {
        question: "아이 사진을 AI로 변환하는 방법은 무엇인가요?",
        answer: "Artlist 앱을 설치하고 아이 사진을 업로드하세요. '동화 스타일', '수채화 스타일' 등 원하는 컨셉을 선택하면 나노바나나 AI가 3초 만에 변환해줍니다."
    },
    {
        question: "나노바나나 프롬프트 팁이 있나요?",
        answer: "복잡하게 입력할 필요 없습니다. '웃는 아이', '공룡과 함께' 처럼 단어만 입력해도 Artlist가 자동으로 최적의 프롬프트를 완성해줍니다."
    },
    {
        question: "AI 이미지 생성은 무료인가요?",
        answer: "기본적인 변환 기능은 매일 무료로 제공됩니다. 더 높은 해상도와 워터마크 제거를 위해서는 프리미엄 플랜을 이용하실 수 있습니다."
    },
    {
        question: "아이 얼굴이 유지되나요?",
        answer: "네, Artlist의 독자적인 Face Consistency 기술로 아이의 이목구비를 정확하게 인식하여 그림 속에서도 우리 아이임을 알아볼 수 있습니다."
    }
];

export default function FAQ() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>자주 묻는 질문</h2>
                <div className={styles.list}>
                    {faqData.map((item, index) => (
                        <details key={index} className={styles.item}>
                            <summary className={styles.question}>
                                {item.question}
                                <span className={styles.icon}>+</span>
                            </summary>
                            <div className={styles.answer}>
                                <p>{item.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
