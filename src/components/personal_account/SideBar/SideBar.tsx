import { useState } from 'react';

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

import './SideBar.css';
import { Icon } from './SideBarComponents/Icon';
import { SidebarHeader } from './SideBarComponents/SidebarHeader';
import ToggleButton from './SideBarComponents/ToggleButton/ToggleButton';
import { Typography } from './SideBarComponents/Typography';
import { SidebarMainMenuItems } from '../../../utils/interfaces';

const SideBar: React.FC<{ menuItems: SidebarMainMenuItems[] }> = ({
  menuItems,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section
      style={{
        display: 'flex',
        height: '100vh',
        minHeight: '400px',
      }}
    >
      <Sidebar
        backgroundColor="#a2d6f9"
        collapsed={collapsed}
        style={{ borderRadius: '5px' }}
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
            <MenuItem key={key} icon={<Icon name={item.icon}></Icon>}>
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
          <MenuItem disabled icon={<Icon name="global" />}>
            Lichess
          </MenuItem>
          <MenuItem disabled icon={<Icon name="diamond" />}>
            Сменить пароль
          </MenuItem>
        </Menu>
        <ToggleButton handleClick={() => setCollapsed(!collapsed)} />
      </Sidebar>
    </section>
  );
};

export default SideBar;
