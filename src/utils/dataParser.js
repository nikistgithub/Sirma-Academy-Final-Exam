export default function parseDate(dateString) {
  if (!dateString) return null;

  if (dateString.includes("/")) {
    const parts = dateString.split("/");
    if (parts.length !== 3) return null;

    const [part1, part2, part3] = parts.map(Number);

    if (part3 > 31) {
      const [month, day, year] = parts;
      return new Date(`${year}-${month}-${day}`);
    }

    const [day, month, year] = parts;
    return new Date(`${year}-${month}-${day}`);
  }

  if (dateString.includes("-")) {
    const parts = dateString.split("-");
    if (parts.length !== 3) return null;

    const [part1, part2, part3] = parts.map(Number);

    if (part1 > 31) {
      const [year, month, day] = parts;
      return new Date(`${year}-${month}-${day}`);
    }

    const [day, month, year] = parts;
    return new Date(`${year}-${month}-${day}`);
  }

  return null; 
}