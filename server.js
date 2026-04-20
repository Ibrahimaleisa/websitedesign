const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Claude AI chat proxy — keeps API key server-side
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'No message' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        messages: [{ role: 'user', content: message }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic error:', err);
      return res.status(500).json({ text: 'شكراً لسؤالك. للحصول على رد قانوني دقيق، ننصحك بحجز موعد مع أحد مستشاري المكتب.' });
    }

    const data = await response.json();
    res.json(data);
  } catch (e) {
    console.error('Chat error:', e);
    res.status(500).json({ text: 'شكراً لسؤالك. للحصول على رد قانوني دقيق، ننصحك بحجز موعد مع أحد مستشاري المكتب.' });
  }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`AL-Eissa Law Firm running on port ${PORT}`));
