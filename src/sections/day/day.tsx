import InvitationCalender from "./invitation-calender";
import Timer from "./timer";
import DateTitle from "./date";
import "../../css/day.css";

const INVITATION_TIME = "2027-12-11T10:40:00";

export default function Day() {
  return (
    <section className="day-section font-ns">
      <div className="inner">
        <DateTitle INVITATION_TIME={INVITATION_TIME} />
        <div className="day-calendar">
          <InvitationCalender />
        </div>

        <div className="day-countdown">
          <p className="day-countdown-label">
            2027년 12월 11일 토요일 오전 10:40
          </p>
          <Timer INVITATION_TIME={INVITATION_TIME} />
        </div>
      </div>
    </section>
  );
}
