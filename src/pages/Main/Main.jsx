import React, { useEffect } from 'react';
import styles from './Main.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Bottom from '../../components/Bottom/Bottom';

const videos = [
  {
    title: 'Главный',
    link: '/video/1',
    url: '/cmd.cgi?cmd=OUT,10,1',
    init: '/cmd.cgi?cmd=OUT,10,0',
  },
  {
    title: 'Хронология',
    link: '/video/2',
    url: '/cmd.cgi?cmd=OUT,11,1',
    init: '/cmd.cgi?cmd=OUT,11,0',
  },
];

export default function Main() {
  const initVideos = async () => {
    videos.forEach((video) => {
      handleStartClick(video.init);
    });
  };

  useEffect(() => {
    initVideos();
  }, []);

  const handleStartClick = async (url) => {
    try {
      await axios.get(url, {
        headers: { 'Content-Type': 'text/plain' },
      });
    } catch (error) {
      console.error('Ошибка отправки KE‑команды:', error);
    }
  };

  const navigate = useNavigate();

  const handleVideoClick = async (link, url) => {
    await handleStartClick(url);
    navigate(link); // Переход к странице с видео
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* <h1 className={styles.title}>видео-ролик</h1> */}
        <p className={styles.description}>
          ВЫБЕРИТЕ РОЛИК, <br /> ЧТОБЫ ЗАПУСТИТЬ ЕГО НА ЭКРАНЕ
        </p>
      </div>

      <div className={styles.videos}>
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => handleVideoClick(video.link, video.url)}
            className={styles.button}
          >
            {video.title}
          </button>
        ))}
      </div>

      {/* <button onClick={handleStartClick} className={styles.button}>
        Начать просмотр
      </button> */}
      {/* <Bottom backUrl={`/`} /> */}
    </div>
  );
}
