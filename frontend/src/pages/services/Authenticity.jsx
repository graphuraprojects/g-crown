import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle, Award, QrCode, Diamond, Sparkles } from "lucide-react";

const Authenticity = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E8] to-[#FFF1D6]">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#CBA135]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#08221B]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        {/* Back Button with style */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-[#08221B] mb-8 hover:text-[#CBA135] transition-all duration-300 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-xl w-fit"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#08221B] to-[#1a3a30] rounded-3xl p-8 md:p-12 mb-12 overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 border-2 border-[#CBA135] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 border-2 border-[#CBA135] rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#CBA135] to-[#DAA520] flex items-center justify-center shadow-2xl animate-pulse">
              <Shield size={60} className="text-[#08221B]" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-[#CBA135] mb-4">
                Certified Authentic
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                Every piece comes with BIS hallmark and authenticity guarantee. 
                Your trust is our most precious gem.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Award size={24} />, label: "BIS Hallmarked", value: "100%" },
            { icon: <Diamond size={24} />, label: "Certified Diamonds", value: "IGI/GIA" },
            { icon: <QrCode size={24} />, label: "QR Verified", value: "Unique" },
            { icon: <CheckCircle size={24} />, label: "Lifetime Guarantee", value: "∞" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[#CBA135]/20">
              <div className="text-[#CBA135] mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#08221B]">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What's Included Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-[#CBA135]/20 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#CBA135] to-[#DAA520] flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
                ✓
              </div>
              <h2 className="text-3xl font-cormorant font-bold text-[#08221B]">What's Included</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: <CheckCircle size={18} />, text: "BIS Hallmark certified gold (916, 22K)", highlight: true },
                { icon: <Diamond size={18} />, text: "Diamond certification from independent labs (IGI, GIA)", highlight: true },
                { icon: <QrCode size={18} />, text: "Unique authentication QR code on each piece", highlight: true },
                { icon: <Award size={18} />, text: "Lifetime authenticity guarantee", highlight: true },
                { icon: <Sparkles size={18} />, text: "Detailed gemstone report included", highlight: false },
                { icon: <Shield size={18} />, text: "Metal purity tested and verified", highlight: false },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                    item.highlight ? 'bg-gradient-to-r from-[#CBA135]/10 to-transparent' : ''
                  }`}
                >
                  <span className={`${item.highlight ? 'text-[#CBA135]' : 'text-[#08221B]'} mt-0.5`}>
                    {item.icon}
                  </span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-[#CBA135]/20 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#08221B] to-[#1a3a30] flex items-center justify-center text-[#CBA135] text-2xl shadow-lg group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h2 className="text-3xl font-cormorant font-bold text-[#08221B]">How It Works</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { step: "01", title: "Certificate Included", desc: "Comprehensive certificate with every purchase", icon: "📄" },
                { step: "02", title: "Scan QR Code", desc: "Instant online verification with unique QR code", icon: "📱" },
                { step: "03", title: "Register Your Piece", desc: "Extended warranty and ownership registration", icon: "✍️" },
                { step: "04", title: "24/7 Verification", desc: "Verify authenticity anytime on our website", icon: "🌐" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group/item">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#08221B] text-[#CBA135] flex items-center justify-center font-bold text-lg shadow-md group-hover/item:scale-110 transition-transform">
                      {item.step}
                    </div>
                    {i < 3 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#CBA135] to-transparent -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
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
        <div className="relative bg-gradient-to-r from-[#08221B] to-[#1a3a30] rounded-3xl p-8 overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#CBA135]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#CBA135]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative">
            <h3 className="text-2xl font-cormorant font-bold text-[#CBA135] mb-4 flex items-center gap-2">
              <Shield size={24} />
              Terms & Conditions
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Certificates are non-transferable and serve as proof of authenticity. 
              Replacement certificate available at nominal cost with original purchase proof. 
              QR code verification is unique to each piece and cannot be replicated.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-[#CBA135]/30">
              {["BIS Hallmark", "IGI Certified", "GIA Certified", "QR Verified"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle size={16} className="text-[#CBA135]" />
                  <span className="text-sm text-white">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/collections")}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#08221B] to-[#1a3a30] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
          >
            <span>Explore Our Collection</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Every piece is verified and certified for your peace of mind
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authenticity;