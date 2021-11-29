import moment from "moment";
moment().format();

const intro =
  "Hi, my name is Daisy! I'm a sweet-hearted, sleepy tank of a pitbull loving life in the PNW.";

const today = moment();
const birthday = moment([2018, 3, 14]);
const adoptionDay = moment([2021, 2, 14]).format("MMMM Do YYYY");

const ageYears = today.diff(birthday, "years");
const ageMonths = today.diff(birthday, "months") % 12;

const details = {
  "Adoption Day": adoptionDay,
  "Estimated Age": `${ageYears} years, ${ageMonths} months`,
  Color: "Red and white with spots",
  Sex: "Female",
  Weight: "66 lbs",
};

const breeds = {
  Pitbull: 60,
  "Australian Cattle Dog": 15,
  "Border Collie": 14,
  Boxer: 11,
};

export { intro, details, breeds };
