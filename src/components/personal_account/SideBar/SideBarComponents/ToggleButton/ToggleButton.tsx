import { useState } from 'react';

import './ToggleButton.css';

export default function ToggleButton({
  handleClick,
}: {
  handleClick: () => void;
}) {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
    handleClick();
  };

  return (
    <button
      onClick={handleChange}
      className={`toggle-button ${isToggled ? 'on' : 'off'}`}
    >
      {isToggled ? '-->' : 'Свернуть'}
    </button>
  );
}
