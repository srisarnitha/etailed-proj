import React, { useContext } from 'react';
import InfoCards from '../components/InfoCards';
import { UserContext } from '../context/UserContext';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

import '../styles/Dashboard.css';

const weeklyData = [
  { day: 'Mon', progress: 30 },
  { day: 'Tue', progress: 45 },
  { day: 'Wed', progress: 60 },
  { day: 'Thu', progress: 50 },
  { day: 'Fri', progress: 70 },
  { day: 'Sat', progress: 80 },
  { day: 'Sun', progress: 90 },
];

const Dashboard = () => {
  const { userData } = useContext(UserContext);
  const { theme = 'light', layout = 'grid' } = userData || {};

  return (
    <div className={`dashboard-container ${theme} ${layout}`}>
      <h1>Welcome, {userData?.name || 'User'}!</h1>

       
<InfoCards
  teamCount={12}
  activeProjects={5}
  notifications={3}
  theme={theme}
  layout={layout}
/>

      <div className="chart-wrapper">
        <h2>Weekly Progress</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              data={weeklyData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              style={{
                background: theme === 'dark' ? '#2e2e3a' : theme === 'colorful' ? '#fff2e0' : '#fff',
                borderRadius: '12px',
                padding: '10px',
              }}
            >
              <XAxis dataKey="day" stroke={theme === 'dark' ? '#ccc' : '#333'} />
              <YAxis stroke={theme === 'dark' ? '#ccc' : '#333'} />
              <Tooltip />
              <Line type="monotone" dataKey="progress" stroke="#4f46e5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
