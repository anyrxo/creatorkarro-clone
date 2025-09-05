
import React, { useState, useEffect } from 'react';
import CompactTradingCalculator from './components/CompactTradingCalculator';
import { Calculator, TrendingUp, Shield, Target, Users, Star, BookOpen, GraduationCap, Brain, DollarSign, AlertTriangle, TrendingDown, BarChart3, Zap, Clock, Award, CheckCircle, Info, Newspaper } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Main Content with Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6 bg-slate-800 border-slate-700">
            <TabsTrigger value="calculator" className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Calculator className="h-4 w-4" />
              <span>Calculator</span>
            </TabsTrigger>
            <TabsTrigger value="charts" className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <BarChart3 className="h-4 w-4" />
              <span>Charts</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Newspaper className="h-4 w-4" />
              <span>News</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <BookOpen className="h-4 w-4" />
              <span>Education</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <CompactTradingCalculator />
          </TabsContent>

          <TabsContent value="charts">
            <TradingViewCharts />
          </TabsContent>

          <TabsContent value="news">
            <NewsSection />
          </TabsContent>

          <TabsContent value="education">
            <EducationSection />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/50 text-white py-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 MT5 Trading Calculator. Built by Anyro (@anyrxo) for professional traders.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Always verify prop firm rules and limits before trading. This calculator is for educational purposes.
          </p>
          <div className="mt-4">
            <a 
              href="https://www.iimagined.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
            >
              Learn more ways to make money at iimagined.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Education Section Component
const EducationSection = () => {
  const [educationLevel, setEducationLevel] = useState('beginner');

  return (
    <div className="space-y-6">
      {/* Education Level Selection */}
      <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center text-white">
            <GraduationCap className="mr-3 h-6 w-6 text-purple-400" />
            Trading Education Center
          </CardTitle>
          <CardDescription className="text-purple-300">
            Choose your learning path to master prop firm trading
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <Button
              variant={educationLevel === 'beginner' ? 'default' : 'outline'}
              onClick={() => setEducationLevel('beginner')}
              className={`flex items-center space-x-2 ${
                educationLevel === 'beginner' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' 
                  : 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Beginner</span>
            </Button>
            <Button
              variant={educationLevel === 'pro' ? 'default' : 'outline'}
              onClick={() => setEducationLevel('pro')}
              className={`flex items-center space-x-2 ${
                educationLevel === 'pro' 
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600' 
                  : 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
              }`}
            >
              <Brain className="h-4 w-4" />
              <span>Pro</span>
            </Button>
          </div>

          {educationLevel === 'beginner' ? <BeginnerContent /> : <ProContent />}
        </CardContent>
      </Card>
    </div>
  );
};

// Beginner Content Component
const BeginnerContent = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Introduction', icon: '🎯' },
    { id: 'propfirms', title: 'Understanding Prop Firms', icon: '🏦' },
    { id: 'platforms', title: 'Trading Platforms', icon: '💻' },
    { id: 'setup', title: 'MT5 Setup Guide', icon: '⚙️' },
    { id: 'instruments', title: 'Trading Instruments', icon: '📊' },
    { id: 'orders', title: 'Placing Orders', icon: '📝' },
    { id: 'rules', title: 'Challenge Rules', icon: '📋' },
    { id: 'risk', title: 'Risk Management', icon: '🛡️' },
    { id: 'journey', title: 'Your Trading Journey', icon: '🚀' },
    { id: 'mistakes', title: 'Common Mistakes', icon: '⚠️' },
    { id: 'success', title: 'Success Formula', icon: '🏆' }
  ];

  const renderSectionContent = () => {
    switch(activeSection) {
      case 'intro':
        return (
          <div className="space-y-6">
            <Alert className="border-blue-500/50 bg-blue-900/20">
              <Info className="h-4 w-4 text-blue-400" />
              <AlertDescription className="text-blue-200">
                <strong>Welcome to Prop Trading!</strong> This comprehensive guide will take you from complete beginner to challenge-ready trader.
              </AlertDescription>
            </Alert>
            
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🎯 What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-400">Fundamentals</h4>
                    <ul className="text-sm space-y-1">
                      <li>• How prop firms actually work</li>
                      <li>• Different challenge types</li>
                      <li>• Platform setup (MT5/cTrader)</li>
                      <li>• Trading instruments explained</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-400">Practical Skills</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Placing and managing orders</li>
                      <li>• Risk management strategies</li>
                      <li>• Challenge rules and compliance</li>
                      <li>• Path to consistent payouts</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <p className="text-sm text-yellow-300">
                    <strong>Important:</strong> This is not a get-rich-quick scheme. Prop trading requires discipline, 
                    patience, and consistent risk management. 90% of traders fail because they lack these qualities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'propfirms':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🏦 What Are Prop Firms?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  A proprietary trading firm provides capital to skilled traders. Instead of risking your own $10,000-$50,000, 
                  you pay a small challenge fee ($100-$500) to prove your skills.
                </p>
                
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-green-400 mb-2">The Business Model</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-blue-400">How They Profit:</h5>
                      <ul className="space-y-1 mt-1">
                        <li>• Challenge fees (most traders fail)</li>
                        <li>• Profit splits from successful traders</li>
                        <li>• Data/flow from trading activity</li>
                        <li>• Monthly fees (some programs)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-400">Why It Works:</h5>
                      <ul className="space-y-1 mt-1">
                        <li>• 90% of retail traders lose money</li>
                        <li>• Firms profit from failures</li>
                        <li>• Small % of winners generate revenue</li>
                        <li>• Scalable business model</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h4 className="font-semibold text-blue-400 mb-2">One-Step Challenges</h4>
                    <p className="text-sm mb-2">Example: The5%ers HyperGrowth</p>
                    <ul className="text-xs space-y-1">
                      <li>• Single profit target (+10%)</li>
                      <li>• No time limit</li>
                      <li>• Lower initial split (50%)</li>
                      <li>• Scaling opportunities</li>
                      <li>• Account doubles every +10%</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                    <h4 className="font-semibold text-green-400 mb-2">Two-Step Challenges</h4>
                    <p className="text-sm mb-2">Example: FTMO, The5%ers High Stakes</p>
                    <ul className="text-xs space-y-1">
                      <li>• Phase 1: +8% target</li>
                      <li>• Phase 2: +5% target</li>
                      <li>• Higher initial split (80%+)</li>
                      <li>• More rigorous testing</li>
                      <li>• Faster to high splits</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="font-semibold text-purple-400 mb-2">Subscription Models</h4>
                    <p className="text-sm mb-2">Example: TopstepX</p>
                    <ul className="text-xs space-y-1">
                      <li>• Monthly fee ($100-$200)</li>
                      <li>• Futures trading (NQ, ES)</li>
                      <li>• Reset monthly if needed</li>
                      <li>• Lower upfront cost</li>
                      <li>• Beginner-friendly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'platforms':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">💻 Trading Platforms Explained</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-blue-400 mb-3">MT5 (MetaTrader 5)</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Most Popular Choice</strong></p>
                      <div className="space-y-1">
                        <p className="text-green-400">✅ Pros:</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Used by most prop firms</li>
                          <li>• Supports Forex, indices, commodities</li>
                          <li>• Fast and lightweight</li>
                          <li>• Extensive indicator library</li>
                          <li>• Mobile app available</li>
                        </ul>
                      </div>
                      <div className="space-y-1">
                        <p className="text-red-400">❌ Cons:</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Outdated interface</li>
                          <li>• Limited order book view</li>
                          <li>• No advanced charting</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">cTrader</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Modern Alternative</strong></p>
                      <div className="space-y-1">
                        <p className="text-green-400">✅ Pros:</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Clean, modern interface</li>
                          <li>• Better order book view</li>
                          <li>• Advanced charting tools</li>
                          <li>• Level II pricing</li>
                          <li>• Better execution</li>
                        </ul>
                      </div>
                      <div className="space-y-1">
                        <p className="text-red-400">❌ Cons:</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Fewer prop firms support it</li>
                          <li>• Smaller community</li>
                          <li>• Limited broker options</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-purple-400 mb-3">Futures Platforms</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Professional Trading</strong></p>
                      <div className="space-y-1">
                        <p className="text-green-400">✅ Examples:</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• NinjaTrader</li>
                          <li>• TradingView (with broker)</li>
                          <li>• TopstepX platform</li>
                          <li>• Sierra Chart</li>
                        </ul>
                      </div>
                      <div className="space-y-1">
                        <p className="text-blue-400">📊 Features:</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Direct market access</li>
                          <li>• Advanced order types</li>
                          <li>• Professional tools</li>
                          <li>• Real market data</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-orange-400 mb-3">Which to Choose?</h4>
                    <div className="space-y-2 text-sm">
                      <div className="space-y-1">
                        <p className="text-yellow-400">🎯 Recommendations:</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• <strong>Beginners:</strong> Start with MT5</li>
                          <li>• <strong>Forex/Indices:</strong> MT5 or cTrader</li>
                          <li>• <strong>Futures:</strong> NinjaTrader/TopstepX</li>
                          <li>• <strong>Advanced:</strong> Multiple platforms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'setup':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">⚙️ MT5 Setup Guide (Step-by-Step)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-6">
                <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="font-semibold text-orange-400 mb-2">📧 What You'll Receive</h4>
                  <p className="text-sm mb-2">After purchasing a challenge, you'll get an email with:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Account Number:</strong> Your login ID</li>
                    <li>• <strong>Trader Password:</strong> Your password</li>
                    <li>• <strong>Server Name:</strong> Exact server to connect to</li>
                    <li>• <strong>Platform:</strong> MT5 or cTrader</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-400">Step 1: Download & Install</h4>
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 text-sm space-y-2">
                      <p>1. Go to <span className="text-blue-400">mql5.com</span> or your prop firm's link</p>
                      <p>2. Download MT5 for your OS (Windows/Mac/Mobile)</p>
                      <p>3. Install and launch the application</p>
                      <p>4. You'll see the login screen</p>
                    </div>

                    <h4 className="font-semibold text-green-400">Step 2: Login</h4>
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 text-sm space-y-2">
                      <p>1. Click <strong>"File → Login to Trade Account"</strong></p>
                      <p>2. Enter your <strong>Login ID</strong></p>
                      <p>3. Enter your <strong>Password</strong></p>
                      <p>4. Enter the exact <strong>Server Name</strong></p>
                      <p>5. Click <strong>"Login"</strong></p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-purple-400">Step 3: Verify Connection</h4>
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 text-sm space-y-2">
                      <p>Check bottom-right corner:</p>
                      <p>• <span className="text-green-400">Green bars</span> = Connected ✅</p>
                      <p>• <span className="text-red-400">Red bars</span> = Disconnected ❌</p>
                      <p>• <span className="text-yellow-400">Yellow bars</span> = Connecting ⏳</p>
                    </div>

                    <h4 className="font-semibold text-cyan-400">Step 4: Show All Symbols</h4>
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 text-sm space-y-2">
                      <p>1. Press <strong>Ctrl+M</strong> (Market Watch)</p>
                      <p>2. Right-click in Market Watch</p>
                      <p>3. Select <strong>"Show All"</strong></p>
                      <p>4. You'll now see all available instruments</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-yellow-400 mb-3">Step 5: Open Your First Chart</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium mb-2">Method 1: Drag & Drop</p>
                      <ul className="space-y-1">
                        <li>1. Find NAS100 in Market Watch</li>
                        <li>2. Drag it to the chart area</li>
                        <li>3. Chart opens automatically</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Method 2: Double-Click</p>
                      <ul className="space-y-1">
                        <li>1. Double-click NAS100 in Market Watch</li>
                        <li>2. Chart opens in new window</li>
                        <li>3. Resize as needed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Alert className="border-green-500/50 bg-green-900/20">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <AlertDescription className="text-green-200">
                    <strong>Success!</strong> You're now set up and ready to start analyzing the markets.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        );

      case 'instruments':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">📊 Trading Instruments Explained</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  Understanding the different types of trading instruments is crucial for any trader. Each has unique characteristics, volatility, and trading hours.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-blue-400 mb-3">Forex (Foreign Exchange)</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Currency Pairs:</strong> Trading one currency against another.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Majors:** EUR/USD, GBP/USD, USD/JPY (most liquid)</li>
                        <li>• **Minors:** EUR/GBP, AUD/JPY (less liquid, higher volatility)</li>
                        <li>• **Exotics:** USD/TRY, EUR/ZAR (very high volatility, wide spreads)</li>
                      </ul>
                      <p className="text-yellow-400">Key Features:</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• 24/5 market</li>
                        <li>• High liquidity</li>
                        <li>• Influenced by economic data, interest rates</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">Indices</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Stock Market Barometers:</strong> Represent the performance of a basket of stocks.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **NAS100 (NASDAQ 100):** Tech-heavy US index</li>
                        <li>• **US30 (Dow Jones Industrial Average):** 30 large US companies</li>
                        <li>• **SPX500 (S&P 500):** 500 large US companies</li>
                        <li>• **GER40 (DAX 40):** German stock market index</li>
                      </ul>
                      <p className="text-yellow-400">Key Features:</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Reflects overall market sentiment</li>
                        <li>• Influenced by corporate earnings, economic news</li>
                        <li>• Can be highly volatile</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-purple-400 mb-3">Commodities</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Raw Materials:</strong> Traded globally, often influenced by supply/demand and geopolitics.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Gold (XAU/USD):** Safe-haven asset, inflation hedge</li>
                        <li>• **Silver (XAG/USD):** Industrial and precious metal</li>
                        <li>• **Crude Oil (WTI/Brent):** Energy market, highly volatile</li>
                      </ul>
                      <p className="text-yellow-400">Key Features:</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Sensitive to global events</li>
                        <li>• Can be highly cyclical</li>
                        <li>• Often used for diversification</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-orange-400 mb-3">Cryptocurrencies</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Digital Assets:</strong> Decentralized, highly volatile, 24/7 trading.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Bitcoin (BTC/USD):** Largest cryptocurrency by market cap</li>
                        <li>• **Ethereum (ETH/USD):** Second largest, smart contract platform</li>
                      </ul>
                      <p className="text-yellow-400">Key Features:</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Extreme volatility</li>
                        <li>• Influenced by adoption, regulation, tech news</li>
                        <li>• 24/7 trading</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">📝 Placing Orders on MT5</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  Understanding how to place different types of orders is fundamental to executing your trading strategy. MT5 offers various order types to help you manage your entries and exits.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-blue-400 mb-3">Market Order</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> An order to buy or sell immediately at the current market price.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Use Case:** When you want to enter a trade instantly.</li>
                        <li>• **Pros:** Immediate execution.</li>
                        <li>• **Cons:** Price might be slightly different due to slippage, especially in volatile markets.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">Pending Orders</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> An order to buy or sell at a predetermined price in the future.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Use Case:** When you want to enter a trade at a specific price without constant monitoring.</li>
                        <li>• **Pros:** Allows for precise entry, good for setting traps or waiting for pullbacks.</li>
                        <li>• **Cons:** May not get filled if price doesn't reach your level.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-purple-400 mb-3">Buy Limit</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> An order to buy at or below a specified price.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Use Case:** To buy a falling market at a support level.</li>
                        <li>• **Example:** Current price 1.2000, set Buy Limit at 1.1950.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-orange-400 mb-3">Sell Limit</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> An order to sell at or above a specified price.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Use Case:** To sell a rising market at a resistance level.</li>
                        <li>• **Example:** Current price 1.2000, set Sell Limit at 1.2050.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-cyan-400 mb-3">Buy Stop</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> An order to buy at or above a specified price.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Use Case:** To buy a rising market at a breakout level.</li>
                        <li>• **Example:** Current price 1.2000, set Buy Stop at 1.2050.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-yellow-400 mb-3">Sell Stop</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> An order to sell at or below a specified price.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Use Case:** To sell a falling market at a breakout level.</li>
                        <li>• **Example:** Current price 1.2000, set Sell Stop at 1.1950.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-green-400 mb-2">Stop Loss & Take Profit</h4>
                  <p className="text-sm">
                    These are crucial for risk management and profit taking. They can be attached to any order type.
                  </p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• **Stop Loss (SL):** Automatically closes your trade if the market moves against you to limit losses.</li>
                    <li>• **Take Profit (TP):** Automatically closes your trade when it reaches a predetermined profit level.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'rules':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">📋 Understanding Prop Firm Challenge Rules</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  Prop firm challenges come with strict rules designed to test your discipline and risk management. Failing to adhere to these rules will result in immediate termination of your account.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">Daily Drawdown Limit</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> The maximum amount your account equity can drop from its starting balance for the day (or from the highest point reached during the day).</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Typically 5% of initial balance.</li>
                        <li>• Calculated based on closed trades AND open floating losses.</li>
                        <li>• Resets daily.</li>
                      </ul>
                      <p className="text-yellow-400">Example:</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• $100,000 account, 5% daily drawdown = $5,000.</li>
                        <li>• If account starts at $100k, cannot drop below $95k.</li>
                        <li>• If account reaches $102k, cannot drop below $97k (trailing drawdown).</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">Maximum Drawdown Limit</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> The maximum amount your account equity can drop from its initial balance or peak equity at any point during the challenge.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Typically 10-12% of initial balance.</li>
                        <li>• Does NOT reset.</li>
                        <li>• Can be static (from initial balance) or trailing (from peak equity).</li>
                      </ul>
                      <p className="text-yellow-400">Example:</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• $100,000 account, 10% max drawdown = $10,000.</li>
                        <li>• Account cannot drop below $90,000 EVER.</li>
                        <li>• If account reaches $105k, trailing drawdown means it cannot drop below $95k.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">Profit Target</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> The percentage of profit you need to achieve to pass a phase of the challenge.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Phase 1: Typically 8% (e.g., $8,000 on $100k account).</li>
                        <li>• Phase 2: Typically 5% (e.g., $5,000 on $100k account).</li>
                        <li>• Can be higher for one-step challenges.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-blue-400 mb-3">Minimum Trading Days</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> The minimum number of days you must place a trade to be eligible to pass.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Typically 5-10 days.</li>
                        <li>• Does not mean you have to trade every day.</li>
                        <li>• Just means you need to have at least one trade open on that many separate days.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-purple-400 mb-3">Prohibited Strategies</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> Strategies that are not allowed by the prop firm, often due to their nature or risk to the firm.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Arbitrage:** Exploiting price differences between brokers.</li>
                        <li>• **HFT (High-Frequency Trading):** Extremely fast, automated trading.</li>
                        <li>• **Tick Scalping:** Profiting from tiny price movements.</li>
                        <li>• **Reverse Trading:** Trading against another account.</li>
                        <li>• **Copy Trading:** Copying trades from another trader (unless explicitly allowed).</li>
                      </ul>
                      <p className="text-orange-400">Always read the fine print! These rules are crucial.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'risk':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🛡️ Essential Risk Management for Prop Firms</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  Risk management is the cornerstone of successful trading, especially with prop firms where strict drawdown rules apply. Master these concepts to protect your capital and pass challenges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">The 1% Rule</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> Never risk more than 1% of your account balance on a single trade.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• For a $100,000 account, max loss per trade = $1,000.</li>
                        <li>• This helps prevent large drawdowns and emotional decisions.</li>
                        <li>• Many prop firms recommend 0.5% or less during challenges.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-blue-400 mb-3">Position Sizing</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> Calculating the correct lot size for your trade based on your risk tolerance, stop loss distance, and instrument's pip value.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Crucial for managing risk per trade.</li>
                        <li>• This calculator automates this for you!</li>
                        <li>• Incorrect sizing leads to over-leveraging or under-leveraging.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">Stop Loss Placement</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> A predetermined price level where you will exit a losing trade to limit your losses.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Never trade without one!**</li>
                        <li>• Place based on technical analysis (support/resistance, structure).</li>
                        <li>• Avoid placing too tight (gets hit easily) or too wide (large losses).</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-purple-400 mb-3">Risk-Reward Ratio (RRR)</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> The ratio of your potential profit to your potential loss on a trade.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Aim for at least 1:2 (risk $1 to make $2).</li>
                        <li>• Higher RRR means you can have a lower win rate and still be profitable.</li>
                        <li>• Example: 1:3 RRR, 40% win rate = profitable.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-orange-400 mb-3">Daily & Max Drawdown Management</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Definition:</strong> Actively monitoring your account to stay within prop firm drawdown limits.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Know your limits before you trade.</li>
                        <li>• Stop trading for the day if close to daily drawdown.</li>
                        <li>• Avoid overtrading to recover losses.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'journey':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🚀 Your Prop Trading Journey: A Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  Embarking on a prop trading journey requires a structured approach. Follow this roadmap to increase your chances of success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-blue-400 mb-3">Phase 1: Education & Practice</h4>
                    <div className="space-y-2 text-sm">
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Master the basics (this guide!)</li>
                        <li>• Choose a trading strategy (e.g., supply/demand, trend following)</li>
                        <li>• Practice on a demo account for at least 3-6 months</li>
                        <li>• Develop a robust trading plan</li>
                        <li>• Understand risk management deeply</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">Phase 2: Challenge & Verification</h4>
                    <div className="space-y-2 text-sm">
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Select a reputable prop firm (The5ers, Topstep)</li>
                        <li>• Purchase a challenge account</li>
                        <li>• Adhere strictly to all rules (drawdowns, profit targets)</li>
                        <li>• Focus on consistency, not quick profits</li>
                        <li>• Pass the verification phase (if two-step)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-purple-400 mb-3">Phase 3: Funded Trader</h4>
                    <div className="space-y-2 text-sm">
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Receive your funded account credentials</li>
                        <li>• Continue to follow your trading plan and risk rules</li>
                        <li>• Focus on consistent monthly profits</li>
                        <li>• Request payouts regularly</li>
                        <li>• Scale your account as per firm's scaling plan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'mistakes':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">⚠️ Common Mistakes & How to Avoid Them</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  Many aspiring prop traders make similar mistakes that lead to failing challenges. Learn from these common pitfalls to increase your chances of success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">1. Overtrading</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Description:</strong> Taking too many trades, often out of boredom, impatience, or a desire to make up for losses.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Impact:** Increases exposure to risk, leads to higher commissions, and often results in poor quality trades.</li>
                        <li>• **Solution:** Stick to your trading plan, only take high-probability setups, and set daily trade limits.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">2. Poor Risk Management</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Description:</strong> Risking too much per trade, not using stop losses, or failing to adhere to drawdown limits.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Impact:** Leads to rapid account depletion, especially with prop firm rules.</li>
                        <li>• **Solution:** Implement the 1% rule, use proper position sizing (this calculator helps!), and always set a stop loss.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">3. Emotional Trading</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Description:</strong> Letting emotions like fear, greed, or revenge dictate trading decisions.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Impact:** Leads to impulsive entries, premature exits, and breaking rules.</li>
                        <li>• **Solution:** Develop a strong trading psychology, stick to your plan, and take breaks when emotions run high.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">4. Lack of a Trading Plan</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Description:</strong> Trading without a clear strategy, entry/exit rules, or risk parameters.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Impact:** Inconsistent results, confusion, and inability to learn from mistakes.</li>
                        <li>• **Solution:** Create a detailed trading plan and follow it religiously.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">5. Ignoring News Events</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Description:</strong> Trading through high-impact news releases without understanding their potential effect.</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• **Impact:** Sudden, unpredictable price swings that can trigger stop losses or exceed drawdown limits.</li>
                        <li>• **Solution:** Check an economic calendar daily and avoid trading during major news events unless your strategy specifically accounts for it.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'success':
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🏆 The Formula for Prop Trading Success</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  Success in prop trading isn't about luck; it's about a combination of consistent effort, continuous learning, and disciplined execution. Here's a summary of what it takes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">1. Solid Education</h4>
                    <div className="space-y-2 text-sm">
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Understand market fundamentals and technical analysis.</li>
                        <li>• Learn from experienced traders and reliable sources.</li>
                        <li>• Continuously expand your knowledge base.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-blue-400 mb-3">2. Robust Trading Plan</h4>
                    <div className="space-y-2 text-sm">
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Define your strategy, entry/exit rules, and risk parameters.</li>
                        <li>• Include daily routines, pre-market analysis, and post-market review.</li>
                        <li>• Stick to your plan, even when emotions run high.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-purple-400 mb-3">3. Strict Risk Management</h4>
                    <div className="space-y-2 text-sm">
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Never risk more than 1% per trade.</li>
                        <li>• Always use a stop loss.</li>
                        <li>• Understand and adhere to prop firm drawdown limits.</li>
                        <li>• Use proper position sizing (this calculator helps!).</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-orange-400 mb-3">4. Emotional Discipline</h4>
                    <div className="space-y-2 text-sm">
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Control fear, greed, and impatience.</li>
                        <li>• Avoid revenge trading or overtrading.</li>
                        <li>• Develop a detached, objective approach to the markets.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-cyan-400 mb-3">5. Consistent Journaling & Review</h4>
                    <div className="space-y-2 text-sm">
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Log every trade (entry, exit, reason, emotions).</li>
                        <li>• Review your trades regularly to identify patterns and mistakes.</li>
                        <li>• Learn from both wins and losses.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-yellow-400 mb-3">6. Patience & Persistence</h4>
                    <div className="space-y-2 text-sm">
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Trading success is a marathon, not a sprint.</li>
                        <li>• Don't get discouraged by setbacks; learn from them.</li>
                        <li>• Stay persistent in your learning and practice.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return <div className="text-white">Section content coming soon...</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Pro Introduction Alert */}
      <Alert className="border-purple-500/50 bg-purple-900/20">
        <Brain className="h-4 w-4 text-purple-400" />
        <AlertDescription className="text-purple-200">
          <strong>Advanced Trading Concepts:</strong> These strategies require solid fundamentals and risk management skills.
        </AlertDescription>
      </Alert>

      {/* Navigation */}
      <Card className="bg-slate-800/50 border-slate-600">
        <CardHeader>
          <CardTitle className="text-white">🧠 Advanced Trading Handbook</CardTitle>
          <CardDescription className="text-gray-300">
            Click any section below to deepen your understanding
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'outline'}
                onClick={() => setActiveSection(section.id)}
                className={`text-xs p-2 h-auto flex flex-col items-center space-y-1 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'
                    : 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="text-center leading-tight">{section.title}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Area */}
      {renderSectionContent()}
    </div>
  );
};

// TradingView Charts Component
const TradingViewCharts = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('NASDAQ:AAPL');
  const [customSymbol, setCustomSymbol] = useState('');
  const [chartType, setChartType] = useState('advanced');

  const popularSymbols = [
    { symbol: 'OANDA:EURUSD', name: 'EUR/USD', category: 'Forex' },
    { symbol: 'OANDA:GBPUSD', name: 'GBP/USD', category: 'Forex' },
    { symbol: 'OANDA:USDJPY', name: 'USD/JPY', category: 'Forex' },
    { symbol: 'OANDA:AUDUSD', name: 'AUD/USD', category: 'Forex' },
    { symbol: 'OANDA:USDCAD', name: 'USD/CAD', category: 'Forex' },
    { symbol: 'TVC:NDX', name: 'NAS100', category: 'Indices' },
    { symbol: 'CME:ES1!', name: 'S&P 500', category: 'Indices' },
    { symbol: 'CBOT:YM1!', name: 'Dow Jones', category: 'Indices' },
    { symbol: 'EUREX:FDAX1!', name: 'DAX 40', category: 'Indices' },
    { symbol: 'LSE:UKX', name: 'FTSE 100', category: 'Indices' },
    { symbol: 'TVC:GOLD', name: 'Gold', category: 'Commodities' },
    { symbol: 'TVC:SILVER', name: 'Silver', category: 'Commodities' },
    { symbol: 'NYMEX:CL1!', name: 'Crude Oil', category: 'Commodities' },
    { symbol: 'NASDAQ:AAPL', name: 'Apple', category: 'Stocks' },
    { symbol: 'NASDAQ:TSLA', name: 'Tesla', category: 'Stocks' },
    { symbol: 'BINANCE:BTCUSDT', name: 'Bitcoin', category: 'Crypto' },
    { symbol: 'BINANCE:ETHUSDT', name: 'Ethereum', category: 'Crypto' }
  ];

  const symbolsByCategory = popularSymbols.reduce((acc, symbol) => {
    if (!acc[symbol.category]) acc[symbol.category] = [];
    acc[symbol.category].push(symbol);
    return acc;
  }, {});

  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: selectedSymbol,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      backgroundColor: "rgba(19, 23, 34, 1)",
      gridColor: "rgba(42, 46, 57, 0.06)",
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      container_id: "tradingview_chart"
    });

    const container = document.getElementById('tradingview_chart');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [selectedSymbol]);

  return (
    <div className="flex h-screen bg-slate-900">
      {/* Left Sidebar - Instrument Selection */}
      <div className="w-80 bg-slate-800/50 border-r border-slate-700 flex flex-col">
        <div className="p-4 border-b border-slate-700">
          <h2 className="text-lg font-bold text-white mb-2">Trading Instruments</h2>
          <p className="text-sm text-gray-400">Select any instrument to view its chart</p>
        </div>
        
        {/* Custom Symbol Search */}
        <div className="p-4 border-b border-slate-700">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Custom Symbol</label>
            <div className="flex space-x-2">
              <Input
                type="text"
                value={customSymbol}
                onChange={(e) => setCustomSymbol(e.target.value)}
                placeholder="e.g., NASDAQ:AAPL, OANDA:EURUSD"
                className="flex-1 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              />
              <Button
                onClick={() => setSelectedSymbol(customSymbol)}
                disabled={!customSymbol.trim()}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Load
              </Button>
            </div>
          </div>
        </div>

        {/* Popular Instruments by Category */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {Object.entries(symbolsByCategory).map(([category, symbols]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">{category}</h3>
                <div className="space-y-1">
                  {symbols.map((symbol) => (
                    <Button
                      key={symbol.symbol}
                      variant={selectedSymbol === symbol.symbol ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedSymbol(symbol.symbol)}
                      className={`w-full justify-start text-left ${
                        selectedSymbol === symbol.symbol
                          ? 'bg-purple-600 hover:bg-purple-700 text-white'
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {symbol.name}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="flex-1 flex flex-col">
        {/* Chart Header */}
        <div className="p-4 border-b border-slate-700 bg-slate-800/30">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">Live Trading Chart</h1>
              <p className="text-sm text-gray-400">
                Currently viewing: <span className="text-purple-400 font-medium">{selectedSymbol}</span>
              </p>
            </div>
            <div className="text-xs text-gray-500">
              Powered by TradingView
            </div>
          </div>
        </div>

        {/* TradingView Chart */}
        <div className="flex-1 p-4">
          <div 
            id="tradingview_chart" 
            className="w-full h-full bg-slate-900 rounded-lg border border-slate-700"
          />
        </div>
      </div>
    </div>
  );
};

// Pro Content Component
const ProContent = () => {
  const [activeSection, setActiveSection] = useState("advanced_risk");

  const sections = [
    { id: "advanced_risk", title: "Advanced Risk Management", icon: "🛡️" },
    { id: "market_structure", title: "Market Structure Analysis", icon: "📈" },
    { id: "profit_optimization", title: "Profit Optimization", icon: "💰" },
    { id: "chart_analysis", title: "Advanced Chart Analysis", icon: "📉" },
    { id: "strategies", title: "Professional Strategies", icon: "🧠" },
    { id: "psychology", title: "Psychology & Discipline", icon: "🧘" },
    { id: "prop_optimization", title: "Prop Firm Optimization", icon: "🏆" },
    { id: "trading_plan", title: "Developing a Trading Plan", icon: "📝" },
    { id: "journaling", title: "Trade Journaling & Review", icon: "✍️" },
    { id: "news_trading", title: "News Trading & Events", icon: "📰" },
    { id: "automation", title: "Automation & EAs", icon: "🤖" },
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case "advanced_risk":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🛡️ Advanced Risk Management</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-red-400 mb-2">Position Sizing Formula</h4>
                  <div className="bg-slate-900 p-3 rounded text-sm font-mono text-green-400 border border-slate-600">
                    Position Size = Risk Amount ÷ (Stop Loss Distance × Pip Value)
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    This calculator automates this formula for you
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-orange-400 mb-2">Kelly Criterion</h4>
                  <p className="text-sm">
                    Optimal position sizing: <span className="font-mono text-blue-400">f = (bp - q) / b</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Where b = odds, p = win rate, q = loss rate
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-purple-400 mb-2">Risk Scaling Strategies</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Reduce risk after losses (0.5% → 0.25%)</li>
                    <li>• Increase risk after wins (1% → 1.5%)</li>
                    <li>• Use volatility-adjusted position sizing</li>
                    <li>• Implement maximum daily risk limits</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "market_structure":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">📈 Market Structure Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-blue-400 mb-2">Key Levels to Watch</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Previous day high/low</li>
                    <li>• Weekly/monthly pivots</li>
                    <li>• Institutional order blocks</li>
                    <li>• Fair value gaps (FVG)</li>
                    <li>• Liquidity pools and sweeps</li>
                  </ul>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-green-400 mb-2">Session Analysis</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Asian session: Range-bound, low volatility</li>
                    <li>• London session: Breakouts, trend starts</li>
                    <li>• New York session: Momentum, reversals</li>
                    <li>• Overlap periods: Highest volatility</li>
                  </ul>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-purple-400 mb-2">Trend Identification</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Higher Highs/Higher Lows (HH/HL) for uptrends</li>
                    <li>• Lower Highs/Lower Lows (LH/LL) for downtrends</li>
                    <li>• Break of Structure (BOS) and Change of Character (CHoCH)</li>
                    <li>• Internal vs. External Liquidity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "profit_optimization":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">💰 Profit Optimization</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-green-400 mb-2">Scaling Techniques</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Partial profit taking at 1:1 RR</li>
                    <li>• Trail stops to breakeven</li>
                    <li>• Pyramid into trending moves</li>
                    <li>• Time-based exits</li>
                    <li>• Volume-based profit taking</li>
                  </ul>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-blue-400 mb-2">Multi-Timeframe Analysis</h4>
                  <p className="text-sm">
                    Use higher timeframes for bias, lower for entries. 
                    Daily for trend, 4H for structure, 15M for precision.
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-purple-400 mb-2">Trade Management</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Move SL to BE at 1:1 RR</li>
                    <li>• Take 25% at 1:1, 50% at 2:1</li>
                    <li>• Let 25% run to major levels</li>
                    <li>• Use trailing stops on trends</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "chart_analysis":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">📉 Advanced Chart Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-purple-400 mb-2">Volume Profile</h4>
                  <p className="text-sm">
                    Identify high-volume nodes as support/resistance. 
                    Look for volume imbalances for breakout targets.
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-orange-400 mb-2">Order Flow Analysis</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Absorption at key levels</li>
                    <li>• Iceberg orders detection</li>
                    <li>• Delta divergence signals</li>
                    <li>• Cumulative volume delta</li>
                  </ul>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h4 className="font-semibold text-cyan-400 mb-2">Market Microstructure</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Bid-ask spread analysis</li>
                    <li>• Time and sales patterns</li>
                    <li>• Institutional footprints</li>
                    <li>• Algorithmic trading detection</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "strategies":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🧠 Professional Trading Strategies</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                      <h4 className="font-semibold text-yellow-400 mb-3">ICT Concepts (Inner Circle Trader)</h4>
                      <ul className="text-sm space-y-2">
                        <li>• Market maker models and algorithms</li>
                        <li>• Liquidity sweeps and raids</li>
                        <li>• Order block trading (OB)</li>
                        <li>• Breaker blocks and mitigation</li>
                        <li>• Optimal trade entry (OTE) - 62-79% retracement</li>
                        <li>• Fair value gaps (FVG) and imbalances</li>
                        <li>• Institutional order flow</li>
                        <li>• Kill zones and time-based entries</li>
                      </ul>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                      <h4 className="font-semibold text-green-400 mb-3">Smart Money Concepts (SMC)</h4>
                      <ul className="text-sm space-y-2">
                        <li>• Break of structure (BOS)</li>
                        <li>• Change of character (CHoCH)</li>
                        <li>• Inducement and manipulation</li>
                        <li>• Equal highs/lows targeting</li>
                        <li>• Displacement and rebalance</li>
                        <li>• Premium and discount zones</li>
                        <li>• Market structure shifts</li>
                        <li>• Liquidity grab patterns</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                      <h4 className="font-semibold text-blue-400 mb-3">Algorithmic Trading Concepts</h4>
                      <ul className="text-sm space-y-2">
                        <li>• VWAP and TWAP strategies</li>
                        <li>• Mean reversion algorithms</li>
                        <li>• Momentum and trend following</li>
                        <li>• Statistical arbitrage</li>
                        <li>• High-frequency trading patterns</li>
                        <li>• Machine learning applications</li>
                        <li>• Backtesting and optimization</li>
                        <li>• Risk management automation</li>
                      </ul>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                      <h4 className="font-semibold text-purple-400 mb-3">Institutional Trading Methods</h4>
                      <ul className="text-sm space-y-2">
                        <li>• Block trading and dark pools</li>
                        <li>• Iceberg order strategies</li>
                        <li>• Cross-asset correlation</li>
                        <li>• Macro economic analysis</li>
                        <li>• Central bank policy impact</li>
                        <li>• Intermarket relationships</li>
                        <li>• Sentiment analysis tools</li>
                        <li>• Risk parity approaches</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "psychology":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🧘 Trading Psychology & Discipline</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">Common Psychological Traps</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Revenge trading after losses</li>
                      <li>• Overconfidence after wins</li>
                      <li>• FOMO (Fear of Missing Out)</li>
                      <li>• Analysis paralysis</li>
                      <li>• Confirmation bias</li>
                      <li>• Anchoring to past prices</li>
                      <li>• Loss aversion behavior</li>
                      <li>• Overtrading tendencies</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">Professional Mindset</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Treat trading as a business</li>
                      <li>• Focus on process over profits</li>
                      <li>• Maintain detailed trading journal</li>
                      <li>• Regular performance reviews</li>
                      <li>• Continuous education and improvement</li>
                      <li>• Stress management techniques</li>
                      <li>• Work-life balance maintenance</li>
                      <li>• Long-term perspective</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "prop_optimization":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🏆 Prop Firm Optimization Strategies</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-cyan-400 mb-3">Challenge Phase Strategy</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Start with 0.5-1% risk per trade</li>
                      <li>• Focus on high-probability setups only</li>
                      <li>• Aim for 2:1 minimum risk-reward</li>
                      <li>• Trade during high-volume sessions</li>
                      <li>• Avoid news events initially</li>
                      <li>• Don't rush to meet profit targets</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">Funded Phase Strategy</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Maintain consistent risk management</li>
                      <li>• Focus on steady monthly returns</li>
                      <li>• Request payouts regularly</li>
                      <li>• Follow the firm's scaling plan</li>
                      <li>• Avoid large drawdowns</li>
                      <li>• Treat it like a long-term business</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "trading_plan":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">📝 Developing a Trading Plan</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  A trading plan is your roadmap to success. It should be a written document that outlines your trading strategy, risk management rules, and goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-blue-400 mb-3">Key Components</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Trading goals (e.g., monthly profit target)</li>
                      <li>• Trading strategy (e.g., supply/demand, trend following)</li>
                      <li>• Entry and exit rules</li>
                      <li>• Risk management rules (e.g., max risk per trade)</li>
                      <li>• Daily routine and pre-market analysis</li>
                      <li>• Post-market review and journaling</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">Example Trading Plan</h4>
                    <ul className="text-sm space-y-2">
                      <li>• **Strategy:** London session breakouts on GBP/USD</li>
                      <li>• **Entry:** 15-minute candle close above/below Asian session high/low</li>
                      <li>• **Stop Loss:** 20 pips below/above entry</li>
                      <li>• **Take Profit:** 1:3 risk-reward ratio</li>
                      <li>• **Risk:** 0.5% per trade</li>
                      <li>• **Max Trades:** 2 per day</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "journaling":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">✍️ Trade Journaling & Review</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  A trading journal is a powerful tool for self-improvement. It helps you identify patterns, learn from mistakes, and track your progress over time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-purple-400 mb-3">What to Record</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Date and time of trade</li>
                      <li>• Instrument traded</li>
                      <li>• Entry and exit prices</li>
                      <li>• Stop loss and take profit levels</li>
                      <li>• Reason for taking the trade</li>
                      <li>• Screenshot of the chart</li>
                      <li>• Emotions during the trade</li>
                      <li>• Outcome (win/loss)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-orange-400 mb-3">Review Process</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Review your trades weekly</li>
                      <li>• Identify common mistakes and patterns</li>
                      <li>• Look for ways to improve your strategy</li>
                      <li>• Track your performance metrics (win rate, RRR, etc.)</li>
                      <li>• Adjust your trading plan based on your findings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "news_trading":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">📰 News Trading & Events</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  High-impact news events can cause extreme volatility in the markets. Understanding how to navigate these events is crucial for risk management.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">High-Impact News Events</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Non-Farm Payroll (NFP)</li>
                      <li>• Consumer Price Index (CPI)</li>
                      <li>• Federal Open Market Committee (FOMC) meetings</li>
                      <li>• Gross Domestic Product (GDP) releases</li>
                      <li>• Retail sales data</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-green-400 mb-3">Strategies for News Trading</h4>
                    <ul className="text-sm space-y-2">
                      <li>• **Avoidance:** Close all trades before major news releases.</li>
                      <li>• **Straddle:** Place buy and sell stop orders on either side of the current price.</li>
                      <li>• **Fade:** Trade against the initial price spike after the news release.</li>
                      <li>• **Trend Following:** Wait for the news to create a new trend and trade in that direction.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "automation":
        return (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">🤖 Automation & EAs (Expert Advisors)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-sm">
                  Expert Advisors (EAs) are programs that run on MT5 and can automate your trading strategy. They can be powerful tools, but also come with risks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-blue-400 mb-3">Pros of Using EAs</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Removes emotion from trading</li>
                      <li>• Can trade 24/7 without fatigue</li>
                      <li>• Backtesting capabilities</li>
                      <li>• Can execute trades faster than humans</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-semibold text-red-400 mb-3">Cons of Using EAs</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Can be expensive to purchase or develop</li>
                      <li>• Requires extensive backtesting and optimization</li>
                      <li>• Can be vulnerable to market changes</li>
                      <li>• Many prop firms have strict rules about EA usage</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return <div className="text-white">Section content coming soon...</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Pro Introduction Alert */}
      <Alert className="border-purple-500/50 bg-purple-900/20">
        <Brain className="h-4 w-4 text-purple-400" />
        <AlertDescription className="text-purple-200">
          <strong>Advanced Trading Concepts:</strong> These strategies require solid fundamentals and risk management skills.
        </AlertDescription>
      </Alert>

      {/* Navigation */}
      <Card className="bg-slate-800/50 border-slate-600">
        <CardHeader>
          <CardTitle className="text-white">🧠 Advanced Trading Handbook</CardTitle>
          <CardDescription className="text-gray-300">
            Click any section below to deepen your understanding
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'outline'}
                onClick={() => setActiveSection(section.id)}
                className={`text-xs p-2 h-auto flex flex-col items-center space-y-1 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'
                    : 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="text-center leading-tight">{section.title}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Area */}
      {renderSectionContent()}
    </div>
  );
};



// News Section Component
const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/news');
        const data = await response.json();
        
        if (data.status === 'success' || data.status === 'limited') {
          // Transform the news data to match our component structure
          const transformedNews = data.news.map((article, index) => ({
            id: index + 1,
            headline: article.title,
            summary: article.summary,
            source: article.source,
            category: article.related_symbol ? 'stocks' : 'general',
            time: new Date(article.timestamp).toLocaleString(),
            impact: 'medium', // Default impact level
            url: article.url || '#'
          }));
          
          setNewsData(transformedNews);
        } else {
          // Fallback to mock data if API fails
          setNewsData([
            {
              id: 1,
              headline: "Market Analysis System Active",
              summary: "Real-time market data and analysis is now available for trading decisions",
              source: "Trading Calculator",
              category: "general",
              time: new Date().toLocaleString(),
              impact: "medium",
              url: "#"
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback to mock data
        setNewsData([
          {
            id: 1,
            headline: "Market Analysis System Active",
            summary: "Real-time market data and analysis is now available for trading decisions",
            source: "Trading Calculator",
            category: "general",
            time: new Date().toLocaleString(),
            impact: "medium",
            url: "#"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    
    // Refresh news every 5 minutes
    const interval = setInterval(fetchNews, 300000);
    
    return () => clearInterval(interval);
  }, []);

  // Mock news data for demonstration (fallback)
  const mockNewsData = [
    {
      id: 1,
      headline: "Federal Reserve Signals Potential Rate Cut in December",
      summary: "Fed Chair Jerome Powell hints at monetary policy adjustments amid economic uncertainty",
      source: "Reuters",
      category: "monetary",
      time: "2 hours ago",
      impact: "high",
      url: "#"
    },
    {
      id: 2,
      headline: "US Dollar Strengthens Against Major Currencies",
      summary: "Dollar index rises to 3-month high as investors seek safe haven assets",
      source: "Bloomberg",
      category: "forex",
      time: "4 hours ago",
      impact: "medium",
      url: "#"
    },
    {
      id: 3,
      headline: "Oil Prices Surge on OPEC+ Production Cut Announcement",
      summary: "Crude oil futures jump 3% following unexpected production reduction",
      source: "MarketWatch",
      category: "commodities",
      time: "6 hours ago",
      impact: "high",
      url: "#"
    },
    {
      id: 4,
      headline: "Tech Stocks Rally on AI Investment Optimism",
      summary: "NASDAQ leads gains as major tech companies announce AI infrastructure spending",
      source: "CNBC",
      category: "stocks",
      time: "8 hours ago",
      impact: "medium",
      url: "#"
    },
    {
      id: 5,
      headline: "European Central Bank Maintains Hawkish Stance",
      summary: "ECB officials emphasize commitment to fighting inflation despite economic slowdown",
      source: "Financial Times",
      category: "monetary",
      time: "10 hours ago",
      impact: "high",
      url: "#"
    },
    {
      id: 6,
      headline: "Gold Reaches New Monthly High Amid Market Volatility",
      summary: "Precious metals gain as investors hedge against currency fluctuations",
      source: "Yahoo Finance",
      category: "commodities",
      time: "12 hours ago",
      impact: "medium",
      url: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: '📰' },
    { id: 'monetary', name: 'Monetary Policy', icon: '🏦' },
    { id: 'forex', name: 'Forex', icon: '💱' },
    { id: 'stocks', name: 'Stocks', icon: '📈' },
    { id: 'commodities', name: 'Commodities', icon: '🛢️' }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Newspaper className="h-6 w-6 text-purple-400" />
            <span>Real-Time Financial News</span>
          </CardTitle>
          <CardDescription className="text-slate-300">
            Stay updated with the latest market-moving news and economic events
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Category Filter */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* News Feed */}
      <div className="space-y-4">
        {loading ? (
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <span className="ml-3 text-white">Loading latest news...</span>
              </div>
            </CardContent>
          </Card>
        ) : (
          filteredNews.map((news) => (
            <Card key={news.id} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={`${getImpactColor(news.impact)} text-white text-xs`}>
                        {news.impact.toUpperCase()} IMPACT
                      </Badge>
                      <span className="text-slate-400 text-sm">{news.source}</span>
                      <span className="text-slate-500 text-sm">•</span>
                      <span className="text-slate-400 text-sm">{news.time}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 hover:text-purple-400 cursor-pointer">
                      {news.headline}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {news.summary}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-4 bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Economic Calendar Preview */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Clock className="h-5 w-5 text-purple-400" />
            <span>Upcoming Economic Events</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
              <div>
                <span className="text-white font-medium">US Non-Farm Payrolls</span>
                <p className="text-slate-400 text-sm">Expected: 180K | Previous: 150K</p>
              </div>
              <div className="text-right">
                <Badge className="bg-red-500 text-white">HIGH</Badge>
                <p className="text-slate-400 text-sm mt-1">Tomorrow 8:30 AM</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
              <div>
                <span className="text-white font-medium">EUR CPI Flash Estimate</span>
                <p className="text-slate-400 text-sm">Expected: 2.4% | Previous: 2.6%</p>
              </div>
              <div className="text-right">
                <Badge className="bg-yellow-500 text-white">MEDIUM</Badge>
                <p className="text-slate-400 text-sm mt-1">Friday 10:00 AM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};







export default App;

