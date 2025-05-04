import React from 'react';
import styles from './Main.module.css';
import axios from 'axios';

export default function Main() {
  const handleStartClick = async () => {
    try {
      // Формируем KE-команду для отправки
      const keCommand = 'KE start-video';

      // Шлём простым POST-запросом на второй сайт
      // Замените URL на адрес вашего второго приложения
      await axios.post(
        'http://localhost:3001/api/ke', // endpoint приёма команд
        keCommand, // тело запроса — строка с командой
        { headers: { 'Content-Type': 'text/plain' } }
      );
    } catch (error) {
      console.error('Ошибка отправки KE‑команды:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>видео-ролик</h1>
        <p className={styles.description}>
          «СПЕЦИАЛЬНАЯ ВОЕННАЯ <br /> ОПЕРАЦИЯ». ПРИЧИНЫ
        </p>
      </div>

      <button onClick={handleStartClick} className={styles.button}>
        Начать просмотр
      </button>
    </div>
  );
}
