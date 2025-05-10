import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import axios from 'axios';

const videos = [
  {
    title: 'Главный',
    link: '/video/1',
    onCmd: 'http://192.168.0.10/cmd.cgi?cmd=OUT,10,1',
    offCmd: 'http://192.168.0.10/cmd.cgi?cmd=OUT,10,0',
  },
  {
    title: 'Хронология',
    link: '/video/2',
    onCmd: 'http://192.168.0.10/cmd.cgi?cmd=OUT,11,1',
    offCmd: 'http://192.168.0.10/cmd.cgi?cmd=OUT,11,0',
  },
  // можно добавить сколько угодно роликов
];

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Универсальная функция отправки KE‑команды
  const sendCommand = async (url) => {
    try {
      await axios.get(url, {
        headers: { 'Content-Type': 'text/plain' },
      });
    } catch (err) {
      console.error('Ошибка при отправке команды:', err);
    }
  };

  // Переключаем ролик: сначала отключаем старый, затем включаем новый
  const switchVideo = async (newIndex) => {
    // Отключаем предыдущий
    if (activeIndex !== null) {
      await sendCommand(videos[activeIndex].offCmd);
    }

    // Включаем новый
    await sendCommand(videos[newIndex].onCmd);

    // Сохраняем в state
    setActiveIndex(newIndex);
  };

  // При монтировании все ролики выключаем
  useEffect(() => {
    videos.forEach((video) => {
      sendCommand(video.offCmd);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.description}>
          ВЫБЕРИТЕ РОЛИК, <br /> ЧТОБЫ ЗАПУСТИТЬ ЕГО НА ЭКРАНЕ
        </p>
      </div>

      <div className={styles.videos}>
        {videos.map((video, idx) => (
          <button
            key={idx}
            onClick={() => switchVideo(idx)}
            className={`${styles.button} ${
              activeIndex === idx ? styles.active : ''
            }`}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
}
