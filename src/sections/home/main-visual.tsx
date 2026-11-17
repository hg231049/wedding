import openingImage from "../../../public/images/gallery1.jpg";
import { motion } from "framer-motion";

export default function MainVisual() {
  return (
    <div className="main-opening">
      {/* 배경 이미지: 확대(1.25) 되었다가 원본(1)으로 돌아오는 모션 */}
      <motion.img
        src={openingImage}
        alt="오프닝 사진"
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 3.5, // 인트로 페이드아웃 직전에 시작
          duration: 1.6, // 부드럽게 줌인(스케일 다운)되는 시간
          ease: [0.25, 1, 0.5, 1],
        }}
      />

      <div className="inside-overlay" />

      {/* 메인 텍스트: 이미지가 원본 크기로 돌아온 직후 등장 */}
      <motion.div
        className="inside-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 5.0, // 이미지 복원이 끝나는 시점에 글자 렌더링
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="poster-title main-typing">
          <h1 className="font-pds">
            WE'RE GETTING <br />
            MARRIED
          </h1>
          {/* 가장 마지막에 등장 */}
          <motion.div
            className="save-date"
            initial={{
              opacity: 0,
              y: 10,
              rotate: 360,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 353,
            }}
            transition={{
              delay: 6.0,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Save the Date
          </motion.div>
        </div>

        <div className="poster-info main-typing">
          <div>
            <span>신부</span>
            이은서
          </div>
          <div>
            <span>신랑</span>
            한건구
          </div>
        </div>
        <div className="poster-date main-typing">2027.12.11 SAT AM 10:40</div>
      </motion.div>
    </div>
  );
}
