export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const body = req.body;

  try {
    const response = await fetch('https://n8n.svj305.cz/webhook/vagent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '@#k!*OY&%7wgnOwb'
      },
      body: JSON.stringify(body)
    });

    const data = await response.text();
    return res.status(200).json({ status: 'forwarded', response: data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

