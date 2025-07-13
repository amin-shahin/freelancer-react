export default function convertDateToLocalDate(date) {
  return new Date(date).toLocaleDateString("fa-IR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
