import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Sparkles, Shield, Clock, Award, Heart, Wrench, 
  Diamond, CheckCircle, Star, Store, Receipt, Search, Zap,
  RefreshCw, Package, CreditCard, MapPin 
} from "lucide-react";

const LifetimeService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E8] to-[#FFF1D6]">
      {/* Decorative Background Elements */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-[#CBA135]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-[#08221B]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#CBA135]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-[#08221B] mb-8 hover:text-[#CBA135] transition-all duration-300 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-xl w-fit border border-[#CBA135]/20"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#08221B] via-[#1a3a30] to-[#08221B] rounded-3xl p-8 md:p-12 mb-12 overflow-hidden shadow-2xl">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 border-2 border-[#CBA135] rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 border-2 border-[#CBA135] rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            {/* Animated Icon */}
            <div className="relative">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#CBA135] to-[#DAA520] flex items-center justify-center shadow-2xl">
                <Sparkles size={60} className="text-[#08221B] animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[#CBA135]">
                <span className="text-[#08221B] font-bold text-sm">∞</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-[#CBA135] flex items-center justify-center animate-bounce">
                <Heart size={16} className="text-white" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-[#CBA135] mb-4">
                Lifetime Service
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                Complimentary cleaning, polishing, and maintenance for life. 
                Your jewelry deserves the best care, forever.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Clock size={24} />, label: "Service Duration", value: "Lifetime", color: "from-blue-500/20" },
            { icon: <Wrench size={24} />, label: "Services Included", value: "6+", color: "from-green-500/20" },
            { icon: <Shield size={24} />, label: "Warranty", value: "Lifetime", color: "from-purple-500/20" },
            { icon: <Award size={24} />, label: "Turnaround", value: "24-48h", color: "from-orange-500/20" },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-[#CBA135]/20 group"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${stat.color} to-transparent flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <div className="text-[#CBA135]">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-[#08221B]">{stat.value}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What's Included Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-[#CBA135]/20 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#CBA135] to-[#DAA520] flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h2 className="text-3xl font-cormorant font-bold text-[#08221B]">What's Included</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: <Sparkles size={18} />, text: "Free professional cleaning every 6 months", highlight: true },
                { icon: <Diamond size={18} />, text: "Complimentary polishing to restore shine", highlight: true },
                { icon: <Shield size={18} />, text: "Prong tightening to secure stones", highlight: true },
                { icon: <Award size={18} />, text: "Rhodium plating for white gold", highlight: true },
                { icon: <Wrench size={18} />, text: "Size adjustment (one time free)", highlight: true },
                { icon: <Star size={18} />, text: "Lifetime warranty against manufacturing defects", highlight: true },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                    item.highlight ? 'bg-gradient-to-r from-[#CBA135]/10 to-transparent border-l-4 border-[#CBA135]' : ''
                  }`}
                >
                  <span className={`${item.highlight ? 'text-[#CBA135]' : 'text-[#08221B]'} mt-0.5`}>
                    {item.icon}
                  </span>
                  <span className="text-gray-700">{item.text}</span>
                  {item.highlight && (
                    <span className="ml-auto text-xs bg-[#CBA135] text-white px-2 py-1 rounded-full">Free</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Card - LIFETIME SERVICE VERSION (Screenshot 1) */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-[#CBA135]/20 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#08221B] to-[#1a3a30] flex items-center justify-center text-[#CBA135] text-2xl shadow-lg group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h2 className="text-3xl font-cormorant font-bold text-[#08221B]">How It Works</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  step: "01", 
                  title: "Visit Any Store", 
                  desc: "Visit any G-Crown store with your jewelry", 
                  icon: <Store size={20} />, 
                  color: "from-[#CBA135]/20" 
                },
                { 
                  step: "02", 
                  title: "Show Receipt", 
                  desc: "Show your purchase receipt (digital or physical)", 
                  icon: <Receipt size={20} />, 
                  color: "from-[#08221B]/20" 
                },
                { 
                  step: "03", 
                  title: "Expert Inspection", 
                  desc: "Our expert jeweler will inspect your piece", 
                  icon: <Search size={20} />, 
                  color: "from-[#CBA135]/20" 
                },
                { 
                  step: "04", 
                  title: "Quick Service", 
                  desc: "Service completed within 24-48 hours", 
                  icon: <Zap size={20} />, 
                  color: "from-[#08221B]/20" 
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group/item">
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} to-transparent flex items-center justify-center font-bold text-[#08221B] shadow-md group-hover/item:scale-110 transition-transform border-2 border-[#CBA135]/30`}>
                      {item.step}
                    </div>
                    {i < 3 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#CBA135] to-transparent -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#CBA135]">{item.icon}</span>
                      <h3 className="font-bold text-[#08221B]">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terms & Conditions with Style */}
        <div className="relative bg-gradient-to-r from-[#08221B] via-[#1a3a30] to-[#08221B] rounded-3xl p-8 overflow-hidden shadow-xl mb-8">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CBA135] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CBA135] rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h3 className="text-2xl font-cormorant font-bold text-[#CBA135] mb-4 flex items-center gap-2">
              <Shield size={24} />
              Terms & Conditions
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Valid for all G-Crown jewelry with original purchase receipt. Excludes damage due to accidents, 
              misuse, or normal wear and tear. Services must be availed at authorized G-Crown stores only. 
              Lifetime warranty covers manufacturing defects only.
            </p>
            
            {/* Important Notes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#CBA135]/30">
              {[
                { icon: <CheckCircle size={16} />, text: "Original Receipt Required" },
                { icon: <CheckCircle size={16} />, text: "Valid at All Stores" },
                { icon: <CheckCircle size={16} />, text: "Non-Transferable" },
              ].map((note, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-[#CBA135]">{note.icon}</span>
                  <span className="text-sm text-white">{note.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => navigate("/collections")}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#08221B] to-[#1a3a30] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 border border-[#CBA135]/30"
          >
            <span>Explore Jewelry for Lifetime Care</span>
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
          </button>
          <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
            <Heart size={14} className="text-[#CBA135]" />
            Your jewelry, our commitment - forever
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifetimeService;