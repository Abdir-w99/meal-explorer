export function formatMealName(name) {
  return name.trim();
}

export function shortenText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}
