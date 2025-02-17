import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

const TWENTY_FOUR_HOURS = 24 * 60 * 60;

export async function GET() {
  try {
    const latest = await prisma.exchange_rates.findFirst({
      where: { id: 1 },
    });

    let record = latest;
    const now = Math.floor(Date.now() / 1000);

    if (!latest || now - Number(latest.fetched_at) > TWENTY_FOUR_HOURS) {
      const freshData = await fetchNewRates();
      record = await prisma.exchange_rates.update({
        where: { id: 1 },
        data: {
          rates: freshData.rates,
          fetched_at: freshData.timestamp,
        },
      });
    }
    return NextResponse.json({
      base_currency: record.base_currency,
      fetched_at: Number(record.fetched_at),
      rates: record.rates,
    });
  } catch (e) {
    console.error("Error in GET /api/exchange-rates:", e);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

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
