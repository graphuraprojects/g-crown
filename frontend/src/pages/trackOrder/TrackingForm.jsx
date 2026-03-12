import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  Search,
  Package,
  AlertCircle,
  ArrowRight,
  HelpCircle,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
  ShoppingBag
} from "lucide-react";

const OrderTracking = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all orders when page loads
  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      setError("");
      
      try {
        // Get user token from localStorage/session
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        
        if (!token) {
          setError("Please login to view your orders");
          setIsLoading(false);
          return;
        }

        const res = await axios.get('/api/v1/customer/orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setOrders(res.data.orders || []);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch your orders. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Function to get status icon and color
  const getStatusDetails = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered':
        return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' };
      case 'shipped':
        return { icon: Truck, color: 'text-blue-600', bg: 'bg-blue-100' };
      case 'processing':
        return { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' };
      case 'cancelled':
        return { icon: XCircle, color: 'text-red-600', bg: 'bg-red-100' };
      default:
        return { icon: Clock, color: 'text-gray-600', bg: 'bg-gray-100' };
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <main className="bg-[#FFF9E9] min-h-screen antialiased selection:bg-[#1C3A2C] selection:text-white">

      {/* Dynamic Header Section */}
      <header className="relative bg-[#1C3A2C] pt-32 pb-40 px-6 overflow-hidden">
        {/* Subtle Texture Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#CBA135] uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Your Orders
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-amber-50 tracking-tight leading-tight">
              Track your <span className="italic font-serif">shipments</span>
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Orders List Section */}
      <section className="max-w-[1000px] mx-auto px-6 -mt-24 relative z-20 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl shadow-black/5 p-8 md:p-12 border border-[#E5DDCC]/50"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 bg-[#FFF9E9] rounded-full flex items-center justify-center text-[#1C3A2C]">
              <Package size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#08221B]">
                Your Orders
              </h2>
              <p className="text-gray-500 mt-1 text-sm">
                {orders.length} {orders.length === 1 ? 'order' : 'orders'} found
              </p>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="animate-spin text-[#CBA135]" size={48} />
              <p className="text-gray-500 mt-4">Fetching your orders...</p>
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-600 bg-red-50 p-6 rounded-lg border border-red-100 justify-center"
            >
              <AlertCircle size={24} />
              <span className="text-lg font-medium">{error}</span>
            </motion.div>
          )}

          {/* No Orders State */}
          {!isLoading && !error && orders.length === 0 && (
            <div className="text-center py-16">
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-serif text-[#08221B] mb-2">No orders yet</h3>
              <p className="text-gray-500 mb-6">Looks like you haven't placed any orders</p>
              <button
                onClick={() => navigate("/collections")}
                className="bg-[#08221B] text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors"
              >
                Start Shopping
              </button>
            </div>
          )}

          {/* Orders List */}
          {!isLoading && !error && orders.length > 0 && (
            <div className="space-y-6">
              {orders.map((order) => {
                const StatusIcon = getStatusDetails(order.status).icon;
                const statusColor = getStatusDetails(order.status).color;
                const statusBg = getStatusDetails(order.status).bg;

                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Order Header */}
                    <div className="bg-gray-50 p-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-full ${statusBg}`}>
                          <StatusIcon size={20} className={statusColor} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Order #{order.orderNumber}</p>
                          <p className="font-semibold text-[#08221B]">Placed on {formatDate(order.orderDate)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusBg} ${statusColor}`}>
                          {order.status || 'Processing'}
                        </span>
                        <button
                          onClick={() => navigate(`/track-order/${order.id}`)}
                          className="flex items-center gap-2 text-[#CBA135] hover:text-[#B49148] transition-colors"
                        >
                          View Details <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Order Items Preview */}
                    <div className="p-4">
                      <div className="flex gap-4 overflow-x-auto pb-2">
                        {order.items?.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                            <img 
                              src={item.image || '/placeholder.jpg'} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {order.items?.length > 3 && (
                          <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                            +{order.items.length - 3}
                          </div>
                        )}
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <p className="text-sm text-gray-600">
                          {order.items?.length} {order.items?.length === 1 ? 'item' : 'items'}
                        </p>
                        <p className="font-bold text-[#08221B]">₹{order.total?.toLocaleString()}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </section>
    </main>
  );
};
 
export default OrderTracking;