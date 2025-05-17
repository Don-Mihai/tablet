import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import Bottom from '../../components/Bottom/Bottom';
import { sendCommand } from '../../utils';

export const videos = [
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
  {
    title: 'Главный цикл',
    link: '/video/2',
    onCmd: 'http://192.168.0.10/cmd.cgi?cmd=OUT,12,1',
    offCmd: 'http://192.168.0.10/cmd.cgi?cmd=OUT,12,0',
  },
  {
    title: 'Хронология цикл',
    link: '/video/2',
    onCmd: 'http://192.168.0.10/cmd.cgi?cmd=OUT,13,1',
    offCmd: 'http://192.168.0.10/cmd.cgi?cmd=OUT,13,0',
  },
  // можно добавить сколько угодно роликов
];

export default function Main() {
  // Хранит индекс кнопки, которую сейчас нужно дизейблить
  const [disabledIndex, setDisabledIndex] = useState(null);

  // Переключаем ролик: сначала отключаем старый, затем включаем новый
  const switchVideo = async (newIndex) => {
    setDisabledIndex(newIndex);

    if (newIndex === 0) {
      await sendCommand(videos[1].offCmd);
      await sendCommand(videos[2].offCmd);
      await sendCommand(videos[3].offCmd);

      // Включаем новый
      await sendCommand(videos[0].onCmd);
    }

    if (newIndex === 1) {
      await sendCommand(videos[0].offCmd);
      await sendCommand(videos[2].offCmd);
      await sendCommand(videos[3].offCmd);

      // Включаем новый
      await sendCommand(videos[1].onCmd);
    }

    if (newIndex === 2) {
      await sendCommand(videos[1].offCmd);
      await sendCommand(videos[0].offCmd);
      await sendCommand(videos[3].offCmd);

      // Включаем новый
      await sendCommand(videos[2].onCmd);
    }

    if (newIndex === 3) {
      await sendCommand(videos[1].offCmd);
      await sendCommand(videos[2].offCmd);
      await sendCommand(videos[0].offCmd);

      // Включаем новый
      await sendCommand(videos[3].onCmd);
    }

    // Через 2 секунды разрешаем снова нажимать
    setTimeout(() => {
      setDisabledIndex(null);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.description}>
          ВЫБЕРИТЕ РОЛИК, <br /> ЧТОБЫ ЗАПУСТИТЬ ЕГО НА ЭКРАНЕ
        </p>
      </div>

      <div className={styles.videos}>
        {videos.map((video, idx) => (
          <button key={idx} onClick={() => switchVideo(idx)} className={`${styles.button}`} disabled={disabledIndex === idx}>
            {video.title}
          </button>
        ))}
      </div>
      <Bottom backUrl={`/`} />
    </div>
  );
}
