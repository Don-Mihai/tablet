import styles from './Bottom.module.css';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import { useNavigate } from 'react-router-dom';

const Bottom = ({ backUrl }) => {
  const navigate = useNavigate();
  const handleBack = async () => {
    navigate(backUrl ? backUrl : '/main');
  };

  return (
    <div className={styles.buttons}>
      <OutlinedButton customClass={styles.backButton} onClick={handleBack} text={'Назад'} />
    </div>
  );
};

export default Bottom;
