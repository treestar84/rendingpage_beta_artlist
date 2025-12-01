import Image from 'next/image';
import styles from './Features.module.css';

export default function Features() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Artlist가 만드는 마법</h2>
                    <p className={styles.subtitle}>최첨단 AI 기술로 아이의 추억을 예술로 만듭니다.</p>
                </div>

                <div className={styles.featureList}>
                    <div className={styles.feature}>
                        <div className={styles.content}>
                            <h3>아이 사진을 AI로 그림처럼 변환</h3>
                            <p>
                                단순한 필터가 아닙니다. 아이의 얼굴 특징은 그대로 유지하면서,
                                동화 속 주인공처럼 자연스럽게 변환합니다.
                                얼굴 일관성 보존 기술(Face Consistency)이 적용되었습니다.
                            </p>
                        </div>
                        <div className={styles.visual}>
                            <Image
                                src="/assets/feature-transform.png"
                                alt="AI Transform Before After"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.content}>
                            <h3>AI 스토리북 자동 생성</h3>
                            <p>
                                사진 한 장만 있으면 AI가 상황에 맞는 이야기를 지어줍니다.
                                "공룡과 노는 아이", "우주비행사가 된 아이" 등
                                상상 속 이야기를 현실로 만들어보세요.
                            </p>
                        </div>
                        <div className={styles.visual}>
                            <Image
                                src="/assets/feature-storybook.png"
                                alt="Storybook UI"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.content}>
                            <h3>나노바나나 프롬프트 완벽 지원</h3>
                            <p>
                                복잡한 명령어 없이도 전문가급 퀄리티를 냅니다.
                                2025년 최신 나노바나나 프롬프트 엔진이 탑재되어
                                누구나 쉽게 고퀄리티 이미지를 생성할 수 있습니다.
                            </p>
                        </div>
                        <div className={styles.visual}>
                            <Image
                                src="/assets/feature-prompt.png"
                                alt="Prompt Interface"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
