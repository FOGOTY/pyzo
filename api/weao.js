export default async function handler(req, res) {
  try {
    const response = await fetch("https://weao.xyz/api/status/exploits", {
      headers: {
        "User-Agent": "WEAO-3PService",
        "Accept": "application/json"
      }
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", details: err.toString() });
  }
}
