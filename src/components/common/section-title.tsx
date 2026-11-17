import { motion } from "framer-motion";
interface HeaderProps {
  mainTitle: string;
  subTitle?: string;
}

export default function SectionTitle({ mainTitle, subTitle }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="main-title mb-[30px] pt-5 text-center text-[var(--point-color)]"
    >
      <h2 className="text-sm font-bold">{mainTitle}</h2>
      <p className="mt-2 text-lg">{subTitle}</p>
      <div className="mx-auto mt-5 h-px w-8 bg-stone-300" />
    </motion.div>
  );
}
