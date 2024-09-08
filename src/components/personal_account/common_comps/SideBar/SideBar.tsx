import { useEffect, useState } from 'react';

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

import './SideBar.css';
import { Icon } from './SideBarComponents/Icon';
import { SidebarHeader } from './SideBarComponents/SidebarHeader';
import ToggleButton from './SideBarComponents/ToggleButton/ToggleButton';
import { Typography } from './SideBarComponents/Typography';
import { SideBarProps } from '../../../../utils/interfaces';

const SideBar: React.FC<SideBarProps> = ({
  menuItems,
  handleElementChoice,
  toggled,
  handleSideBarToggle,
  changeUserPassword,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedItemName, setSelectedItemName] = useState<string | null>(
    'Дэшборд',
  );

  const handleSelectedItemClick = (itemName: string) => {
    setSelectedItemName(itemName);
    handleElementChoice(itemName);
    handleSideBarToggle(!toggled);
  };
  const [toggledSideBar, setToggledSideBar] = useState(toggled);

  const handlePasswordChange = () => {
    console.log('clicked');
    changeUserPassword();
  };

  useEffect(() => {
    setToggledSideBar(toggled);
  }, [toggled]);

  return (
    <section
      style={{
        display: 'flex',
        height: '100vh',
        minHeight: '400px',
      }}
    >
      <Sidebar
        className="sidebar__general"
        backgroundColor="#f9f9f9"
        collapsed={collapsed}
        style={{ borderRadius: '5px' }}
        onBackdropClick={() => handleSideBarToggle(!toggled)}
        toggled={toggledSideBar}
        breakPoint="all"
      >
        <SidebarHeader
          rtl={false}
          style={{
            marginBottom: '24px',
            marginTop: '16px',
            paddingLeft: '10px',
          }}
        />
        <Menu>
          <div
            style={{
              padding: '0 24px',
              marginBottom: '8px',
              marginTop: '32px',
            }}
          >
            <Typography
              variant="body1"
              fontWeight={600}
              style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
            >
              Основное
            </Typography>
          </div>
          {menuItems.map((item, key) => (
            <MenuItem
              key={key}
              icon={<Icon name={item.icon}></Icon>}
              onClick={() => handleSelectedItemClick(item.label)}
              disabled={item.disabled}
            >
              {item.label}
            </MenuItem>
          ))}
          <div
            style={{
              padding: '0 24px',
              marginBottom: '8px',
              marginTop: '32px',
            }}
          >
            <Typography
              variant="body1"
              fontWeight={600}
              style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
            >
              Дополнительно
            </Typography>
          </div>
          <MenuItem disabled={true} icon={<Icon name="global" />}>
            Lichess
          </MenuItem>
          <MenuItem
            onClick={handlePasswordChange}
            disabled={false}
            icon={<Icon name="diamond" />}
          >
            Сменить пароль
          </MenuItem>
        </Menu>
        <ToggleButton handleClick={() => setCollapsed(!collapsed)} />
      </Sidebar>
    </section>
  );
};

export default SideBar;
