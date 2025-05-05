import React from 'react';
import styles from './Main.module.css';
import axios from 'axios';

export default function Main() {
  const handleStartClick = async () => {
    try {
      await axios.get(
        'http://192.168.0.10:2424/cmd.cgi?user=admin&psw=Jerome&cmd=KE,10,1',
        {
          headers: { 'Content-Type': 'text/plain' },
        }
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
