import Share from "./share";
import finallyImg from "../../../public/images/gallery18.jpg";
import "../../css/footer.css";
import { motion, type Variants } from "framer-motion";

// 공통 애니메이션
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 순차적으로 등장하는 부모 애니메이션
const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="footer-section"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {/* ENDING IMAGE */}
      <motion.div className="footer-image" variants={fadeUp}>
        <img
          src={finallyImg}
          alt="신랑 신부"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </motion.div>

      {/* ENDING CREDITS */}
      <motion.div
        className="footer-credit"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="font-pds" variants={fadeUp}>
          OUR STORY
          <br />
          CONTINUES
        </motion.h2>

        <motion.p className="footer-message" variants={fadeUp}>
          저희의 소중한 날에
          <br />
          함께해주셔서 감사합니다.
        </motion.p>

        <motion.div className="footer-names" variants={fadeUp}>
          <span>한건구</span>
          <i>&amp;</i>
          <span>이은서</span>
        </motion.div>

        <motion.div className="footer-date font-pds" variants={fadeUp}>
          <span>2027.12.11</span>
          <span>AM 10:40</span>
        </motion.div>
      </motion.div>

      {/* SHARE */}
      <motion.div className="footer-share" variants={fadeUp}>
        <Share />
      </motion.div>

      {/* FINAL */}
      <motion.div className="footer-final" variants={fadeUp}>
        <p>© 2027 HANGUNGU & LEEEUNSEO</p>
      </motion.div>
    </motion.footer>
  );
}
