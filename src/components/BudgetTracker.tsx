import React, { useState } from 'react';
import { Wallet, TrendingDown, Plus, AlertCircle } from 'lucide-react';

interface BudgetTrackerProps {
  totalBudget: number;
  expenses: number;
  onExpenseUpdate: (newExpenses: number) => void;
}

function BudgetTracker({ totalBudget, expenses, onExpenseUpdate }: BudgetTrackerProps) {
  const [newExpense, setNewExpense] = useState<string>('');
  const [expenseCategory, setExpenseCategory] = useState<string>('food');

  const remaining = totalBudget - expenses;
  const usedPercentage = (expenses / totalBudget) * 100;

  const addExpense = () => {
    const amount = parseFloat(newExpense);
    if (amount > 0) {
      onExpenseUpdate(expenses + amount);
      setNewExpense('');
    }
  };

  const getProgressColor = () => {
    if (usedPercentage < 50) return 'bg-green-500';
    if (usedPercentage < 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStatusColor = () => {
    if (usedPercentage < 50) return 'text-green-600';
    if (usedPercentage < 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
          <Wallet className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Budget Tracker</h3>
      </div>

      {/* Budget Overview */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Total Budget</span>
          <span className="font-semibold text-gray-900">₹{totalBudget.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Spent</span>
          <span className="font-semibold text-red-600">₹{expenses.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Remaining</span>
          <span className={`font-bold text-lg ${getStatusColor()}`}>
            ₹{remaining.toLocaleString()}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Budget Usage</span>
            <span className={`text-xs font-medium ${getStatusColor()}`}>
              {usedPercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${getProgressColor()}`}
              style={{ width: `${Math.min(usedPercentage, 100)}%` }}
            />
          </div>
        </div>

        {remaining < 0 && (
          <div className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg border border-red-200">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span className="text-sm text-red-700 font-medium">Budget exceeded!</span>
          </div>
        )}
      </div>

      {/* Add Expense */}
      <div className="space-y-4 pt-4 border-t border-gray-100">
        <h4 className="font-semibold text-gray-900">Add Expense</h4>
        
        <div className="space-y-3">
          <select
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="food">Food & Dining</option>
            <option value="transport">Transportation</option>
            <option value="accommodation">Accommodation</option>
            <option value="activities">Activities</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>

          <div className="flex space-x-2">
            <input
              type="number"
              value={newExpense}
              onChange={(e) => setNewExpense(e.target.value)}
              placeholder="Amount spent"
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={addExpense}
              disabled={!newExpense || parseFloat(newExpense) <= 0}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Quick Add Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: '₹50', value: 50 },
            { label: '₹100', value: 100 },
            { label: '₹200', value: 200 }
          ].map((quick) => (
            <button
              key={quick.value}
              onClick={() => onExpenseUpdate(expenses + quick.value)}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              {quick.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BudgetTracker;