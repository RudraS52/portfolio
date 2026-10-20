
const allowedOrigins = [
  "https://rudras52.github.io",
  "https://portfolio-jade-nine-36.vercel.app",
  "http://localhost:3000",
];

module.exports = async (req, res) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return res.status(500).json({
      error: "Visitor counter is not configured",
    });
  }

  try {
    const response = await fetch(
      `${redisUrl.replace(/\/+$/, "")}/incr/portfolio_visitors`,
      {
        headers: {
          Authorization: `Bearer ${redisToken}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok || data.error || typeof data.result !== "number") {
      throw new Error("Redis counter request failed");
    }

    return res.status(200).json({ count: data.result });
  } catch (error) {
    console.error("Visitor counter error:", error.message);

    return res.status(500).json({
      error: "Unable to retrieve visitor count",
    });
  }
};
