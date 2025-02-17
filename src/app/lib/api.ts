export async function fetchNewRates() {
  const APP_ID = process.env.OPEN_EXCHANGE_API_KEY;
  const url = `https://openexchangerates.org/api/latest.json?app_id=${APP_ID}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch exchange rates");

  const data = await res.json();

  return {
    base: data.base,
    rates: data.rates,
    timestamp: data.timestamp, // in seconds
  };
}
