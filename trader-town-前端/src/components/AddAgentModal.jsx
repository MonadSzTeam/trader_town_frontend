import React, { useState } from 'react';
import { X, User, TrendingUp, Dice6 } from 'lucide-react';

const AddAgentModal = ({ onClose, onConfirm }) => {
  const [agentName, setAgentName] = useState('');
  const [agentType, setAgentType] = useState('value');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!agentName.trim()) {
      setShowError(true);
      return;
    }
    
    onConfirm({
      name: agentName.trim(),
      type: agentType
    });
  };

  const agentStyles = {
    value: {
      bgColor: 'bg-green-600',
      borderColor: 'border-green-400',
      textColor: 'text-green-400',
      icon: <TrendingUp size={24} />,
      description: '追求稳健增长，注重基本面分析'
    },
    gambler: {
      bgColor: 'bg-red-600',
      borderColor: 'border-red-400',
      textColor: 'text-red-400',
      icon: <Dice6 size={24} />,
      description: '高风险高回报，短线交易为主'
    }
  };

  return (
    <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
      <div className="bg-bg-dark border-2 border-tech-blue rounded-lg p-6 max-w-md w-full mx-4 pixel-border glow bounce-in">
        {/* 标题栏 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <User className="text-tech-blue" size={24} />
            <h2 className="text-xl font-bold pixel-font text-white">创建你的Agent</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-text-light hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Agent名称输入 */}
          <div className="mb-6">
            <label className="block text-sm font-bold pixel-font text-text-light mb-2">
              Agent名称
            </label>
            <input
              type="text"
              value={agentName}
              onChange={(e) => {
                setAgentName(e.target.value);
                setShowError(false);
              }}
              placeholder="请输入你的Agent名称"
              className={`w-full px-3 py-2 bg-bg-darker border-2 rounded pixel-font text-white placeholder-gray-400 focus:outline-none focus:border-tech-blue transition-colors ${
                showError ? 'border-pixel-red' : 'border-gray-600'
              }`}
              maxLength={20}
            />
            {showError && (
              <p className="text-pixel-red text-xs pixel-font mt-1">请输入Agent名称</p>
            )}
          </div>
          
          {/* Agent类型选择 */}
          <div className="mb-6">
            <label className="block text-sm font-bold pixel-font text-text-light mb-3">
              选择投资风格
            </label>
            
            <div className="grid grid-cols-2 gap-4">
              {/* 价值投资风格 */}
              <div 
                onClick={() => setAgentType('value')}
                className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                  agentType === 'value' 
                    ? `${agentStyles.value.bgColor} ${agentStyles.value.borderColor} glow` 
                    : 'bg-bg-darker border-gray-600 hover:border-green-400'
export default AddAgentModal;