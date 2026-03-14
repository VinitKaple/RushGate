import React from 'react';
import {
  MoreHorizontal,
  Package,
  XCircle,
  DollarSign,
  TrendingUp,
} from 'lucide-react';

const formatNumber = (num) => {
  if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'k';
  return num.toString();
};

const Stats = () => {
  const avgProducts = 3245;
  const avgRejected = 187;
  const avgRevenue = 45600;
  const trafficPercent = 78.5;

  const cards = [
    {
      title: 'Products Ordered',
      value: formatNumber(avgProducts),
      icon: Package,
      color: 'blue',
    },
    {
      title: 'Rejected Orders',
      value: formatNumber(avgRejected),
      icon: XCircle,
      color: 'red',
    },
    {
      title: 'Revenue Average',
      value: `$${formatNumber(avgRevenue)}`,
      icon: DollarSign,
      color: 'green',
    },
    {
      title: 'Traffic Percentage',
      value: `${trafficPercent}%`,
      icon: TrendingUp,
      color: 'purple',
    },
  ];

  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    red: 'bg-red-100 text-red-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-500 text-sm font-medium">{card.title}</h3>
              <MoreHorizontal size={18} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{card.value}</h2>
                <p className="text-xs mt-1 text-green-500">+12% vs last period</p>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorMap[card.color]}`}>
                <Icon size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;