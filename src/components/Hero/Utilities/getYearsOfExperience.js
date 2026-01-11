import { EXPERIENCE_START_MONTH, EXPERIENCE_START_YEAR, EXPERIENCE_START_DAY } from "../Constants/HeroConstants";


export function getYearsOfExperience() {
  const now = new Date();
  const startDate = new Date(EXPERIENCE_START_YEAR, EXPERIENCE_START_MONTH - 1, EXPERIENCE_START_DAY);

  let years = now.getFullYear() - startDate.getFullYear();
  let anniversary = new Date(startDate.getFullYear() + years, startDate.getMonth(), startDate.getDate());

  if (now < anniversary) {
    years--;
    anniversary = new Date(startDate.getFullYear() + years, startDate.getMonth(), startDate.getDate());
  }

  const halfAnniversary = new Date(anniversary.getFullYear(), anniversary.getMonth() + 6, anniversary.getDate());

  if (now < halfAnniversary) {
    return (years + 0.5).toFixed(1).replace('.0', ''); 
  } else {
    return (years + 1).toFixed(1).replace('.0', '');
  }
}
