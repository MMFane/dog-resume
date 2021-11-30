import moment from "moment";
moment().format();

const intro =
  "Hi, my name is Daisy! I'm a sweet-hearted, sleepy, tank of a Pit Bull loving life in the PNW.";

const today = moment();
const birthday = moment([2018, 2, 14]);
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
  "American Pit Bull Terrier": 45.9,
  "American Staffordshire Terrier": 17.5,
  "Australian Cattle Dog": 14.9,
  "Border Collie": 11.5,
  Boxer: 10.2,
};

export { intro, details, breeds };
