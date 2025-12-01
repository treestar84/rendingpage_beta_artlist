import Image from 'next/image';
import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    아이의 하루를 <br />
                    <span className={styles.highlight}>작품으로 기록하는 AI</span> <br />
                    Artlist
                </h1>
                <p className={styles.subtitle}>
                    사진 한 장이 이야기로, AI와 함께 추억을 작품으로 남기세요.
                </p>
                <div className={styles.actions}>
                    <a href="https://artlist.store" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="lg">Artlist 공식 사이트로 이동하기</Button>
                    </a>
                    <Button variant="outline" size="lg">AI 이미지 생성해보기</Button>
                </div>
            </div>

            <div className={styles.visual}>
                {/* Placeholder for Hero Image - In real app, use local asset or optimized URL */}
                <div className={styles.imageWrapper}>
                    <video
                        src="/assets/hero-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.video}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    );
}
