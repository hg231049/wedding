import SectionTitle from "@/components/common/section-title";
import Map from "./map";

export default function Location() {
  return (
    <section className="point-section">
      <div className="inner point-inner">
        <SectionTitle mainTitle="Location" subTitle="오시는 길" />
        <Map />
      </div>
    </section>
  );
}
