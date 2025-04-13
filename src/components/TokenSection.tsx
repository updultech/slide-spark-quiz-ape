
import { Coins, Trophy, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const TokenSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-ape-purple/5 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-ape-purple/20 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-ape-purple/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-ape-purple/5 rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                ApeToken Rewards
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-ape-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Coins className="h-5 w-5 text-ape-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quiz Completion Rewards</h4>
                    <p className="text-gray-600 mt-1">
                      Earn 5-20 ApeTokens for every quiz you complete based on quiz length and difficulty.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-ape-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Trophy className="h-5 w-5 text-ape-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Bonuses</h4>
                    <p className="text-gray-600 mt-1">
                      Get bonus tokens for achieving high scores, maintaining streaks, and ranking in the top performers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-ape-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-5 w-5 text-ape-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Token Utility</h4>
                    <p className="text-gray-600 mt-1">
                      Use your tokens to mint certificate NFTs, unlock premium features, or trade on supported exchanges.
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="bg-ape-purple hover:bg-ape-dark-purple">
                    Learn More About Tokens
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Earn While You Learn with <span className="text-ape-purple">ApeTokens</span>
            </h2>
            <p className="text-gray-600">
              Our blockchain-based rewards system gives you tangible benefits for your study efforts. 
              Earn ApeTokens for every quiz you complete and use them to mint verifiable certificates or 
              unlock premium features.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Quiz Completion</span>
                <span className="text-ape-purple font-semibold">5-20 tokens</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Perfect Score Bonus</span>
                <span className="text-ape-purple font-semibold">+10 tokens</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Daily Streak (7 days)</span>
                <span className="text-ape-purple font-semibold">+25 tokens</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Certificate Minting</span>
                <span className="text-ape-purple font-semibold">100 tokens</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-500">
              * Token values subject to change. Tokens are stored on ApeChain blockchain and can be viewed in your wallet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
