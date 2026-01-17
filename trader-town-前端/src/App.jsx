import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Settings, Activity } from 'lucide-react';
import TradingHall from './components/TradingHall';
import KLineChart from './components/KLineChart';
import ProfitBoard from './components/ProfitBoard';
import StatsPanel from './components/StatsPanel';
import ControlBar from './components/ControlBar';
import StatusBar from './components/StatusBar';
import AddAgentModal from './components/AddAgentModal';

const App = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [allAgents, setAllAgents] = useState([
    { 
      id: 1, 
      name: '赌徒Agent', 
      x: 150, 
      y: 200, 
      color: '#F44336', 
      direction: 'right',
      type: 'gambler',
      avatar: '🎲',
      profit: -5.23,
      isUser: false
    },
    { 
      id: 2, 
      name: '价值Agent', 
      x: 450, 
      y: 300, 
      color: '#4CAF50', 
      direction: 'left',
      type: 'value',
      avatar: '📈',
      profit: 23.45,
      isUser: false
    },
  ]);
  
  const [tradingData, setTradingData] = useState({
    totalTrades: 1247,
    activeAgents: 2,
    totalVolume: 2456789,
    marketSentiment: { bullish: 65, bearish: 35 }
  });

  const handleAddAgent = (agentData) => {
    const newAgent = {
      id: Date.now(),
      name: agentData.name,
      x: 300 + Math.random() * 200,
      y: 200 + Math.random() * 200,
      color: agentData.type === 'gambler' ? '#FF6B35' : '#2E7D32',
      direction: 'right',
      type: agentData.type,
      avatar: agentData.type === 'gambler' ? '👤🎲' : '👤📈',
      profit: 0,
      isUser: true
    };
    
    setAllAgents(prev => [...prev, newAgent]);
    setTradingData(prev => ({
      ...prev,
      activeAgents: prev.activeAgents + 1
    }));
    setShowAddModal(false);
  };
export default App;