import React, { useState } from 'react';
import { Star, Trophy, Gift, Crown, Sparkles, ArrowRight, Check } from 'lucide-react';

const NFTLoyalty: React.FC = () => {
  const [activeReward, setActiveReward] = useState(0);

  const rewards = [
    {
      tier: 'Bronze',
      icon: Star,
      color: 'from-orange-400 to-amber-500',
      requirement: 'First Purchase',
      benefits: ['5% discount on next purchase', 'Exclusive Bronze NFT badge', 'Early access to sales'],
      nft: '🥉',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      tier: 'Silver',
      icon: Trophy,
      color: 'from-gray-400 to-slate-500',
      requirement: '$500 Total Spent',
      benefits: ['10% discount on all purchases', 'Limited edition Silver NFT', 'VIP customer support'],
      nft: '🥈',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    {
      tier: 'Gold',
      icon: Crown,
      color: 'from-yellow-400 to-yellow-600',
      requirement: '$2000 Total Spent',
      benefits: ['15% discount + free shipping', 'Rare Gold NFT collectible', 'Exclusive virtual events'],
      nft: '🥇',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      tier: 'Diamond',
      icon: Sparkles,
      color: 'from-blue-400 to-purple-500',
      requirement: '$5000 Total Spent',
      benefits: ['20% discount + premium perks', 'Ultra-rare Diamond NFT', 'Personal shopping AI assistant'],
      nft: '💎',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    }
  ];

  return (
    <section id="nft-loyalty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Gift className="h-4 w-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Exclusive NFT Rewards</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Earn While You{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shop
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our revolutionary NFT loyalty program. Collect unique digital rewards, 
            unlock exclusive perks, and become part of an elite shopping community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Loyalty Tiers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Loyalty Tiers</h3>
            {rewards.map((reward, index) => {
              const IconComponent = reward.icon;
              const isActive = activeReward === index;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveReward(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? `${reward.bgColor} ${reward.borderColor} shadow-lg scale-105`
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${reward.color} shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className={`text-lg font-bold transition-colors duration-300 ${
                          isActive ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                          {reward.tier} Tier
                        </h4>
                        <span className="text-2xl">{reward.nft}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{reward.requirement}</p>
                      <div className="flex flex-wrap gap-2">
                        {reward.benefits.slice(0, 2).map((benefit, i) => (
                          <span key={i} className="text-xs bg-white text-gray-600 px-2 py-1 rounded-full border border-gray-200">
                            {benefit}
                          </span>
                        ))}
                        {reward.benefits.length > 2 && (
                          <span className="text-xs text-blue-600 font-medium">+{reward.benefits.length - 2} more</span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className={`h-5 w-5 transition-all duration-300 ${
                      isActive ? 'text-blue-600 translate-x-1' : 'text-gray-400'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Reward Details */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 sticky top-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${rewards[activeReward].color} rounded-2xl mb-4 shadow-xl`}>
                <span className="text-3xl">{rewards[activeReward].nft}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {rewards[activeReward].tier} NFT Collectible
              </h3>
              <p className="text-gray-600">{rewards[activeReward].requirement}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-gray-900">Exclusive Benefits:</h4>
              {rewards[activeReward].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Start Earning Rewards
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-gray-600">NFTs Minted</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Active Collectors</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">$2M+</div>
            <div className="text-gray-600">Rewards Value</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTLoyalty;