import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Preview.module.css';
import { sendCommand } from '../../utils';
import { videos } from '../Main/Main';

export default function Preview() {
  const navigate = useNavigate();

  // При монтировании все ролики выключаем
  useEffect(() => {
    videos.forEach((video) => {
      sendCommand(video.offCmd);
    });
  }, []);

  const handleClick = () => {
    navigate('/main');
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <video className={styles.video} src="/videos/start.mp4" autoPlay loop muted playsInline />
    </div>
  );
}
