import axios from 'axios';

// Универсальная функция отправки KE‑команды
export const sendCommand = async (url) => {
  try {
    await axios.get(url, {
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (err) {
    console.error('Ошибка при отправке команды:', err);
  }
};
