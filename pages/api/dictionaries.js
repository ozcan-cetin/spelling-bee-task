import enDictionary from '../../public/dictionaries/en.json';
import trDictionary from '../../public/dictionaries/tr.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const lang = req.query.lang;

      let selectedDictionary;
      if (lang === 'en') {
        selectedDictionary = enDictionary;
      } else if (lang === 'tr') {
        selectedDictionary = trDictionary;
      } else {
        return res.status(400).json({ error: 'Unsupported language' });
      }

      res.status(200).json({ words: selectedDictionary.words });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch dictionary' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
