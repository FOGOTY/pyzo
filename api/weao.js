export default async function handler(req, res) {
  try {
    const r = await fetch("https://weao.xyz/api/status/exploits", {
      headers: { "User-Agent": "Pyzo-Shop" }
    });

    if (!r.ok) {
      return res.status(r.status).json({ error: "WEAO error" });
    }

    const data = await r.json();

    // Allow your site to read the response
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy failure", details: err.toString() });
  }
}
