import mensturalCycleUrl from "@/assets/HomePeriodTracker.svg";
import infoCenterUrl from "@/assets/home-info.svg";
import communityConnectionUrl from "@/assets/home-community.svg";
import bookAnAppointmentUrl from "@/assets/home-appointment.svg";
import reportAbuseReachForHelpUrl from "@/assets/home-sos.svg";
import rewardsUrl from "@/assets/home-rewards.svg";

const data = [
  {
    id: 1,
    bgColor: "teal",
    heading: "mensturalCycle",
    details: "mensturalCycleDetails",
    imgUrl: mensturalCycleUrl,
    detailsButtonText: "viewCalendar",
    link: "/menstrual-cycle",
  },
  {
    id: 2,
    bgColor: "yellow",
    heading: "infoCenter",
    details: "infoCenterDetails",
    imgUrl: infoCenterUrl,
    imgPosition: "right",
    detailsButtonText: "learnMore",
    link: "/information-center",
  },
  {
    id: 3,
    bgColor: "teal",
    heading: "communityConnection",
    details: "communityConnectionDetails",
    imgUrl: communityConnectionUrl,
    detailsButtonText: "explore",
    link: "/community-support",
  },
  {
    id: 4,
    bgColor: "yellow",
    heading: "bookAnAppointment",
    details: "bookAnAppointmentDetails",
    imgUrl: bookAnAppointmentUrl,
    imgPosition: "right",
    detailsButtonText: "exploreServices",
    link: "/book-appointment",
  },
  {
    id: 5,
    bgColor: "teal",
    heading: "reportAbuseReachForHelp",
    details: "reportAbuseReachForHelpDetails",
    imgUrl: reportAbuseReachForHelpUrl,
    detailsButtonText: "call",
  },
  {
    id: 6,
    bgColor: "yellow",
    heading: "rewards",
    details: "rewardDetails",
    imgUrl: rewardsUrl,
    imgPosition: "right",
    detailsButtonText: "checkRewards",
    link: "/rewards",
  },
];

export default data;
