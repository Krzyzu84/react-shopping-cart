export default function formatCurrenct(num) {
  return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}
