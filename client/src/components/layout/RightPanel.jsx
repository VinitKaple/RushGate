import {
  Rocket,
  TrendingUp,
  AlertTriangle,
  ShoppingBag,
  Clock,
  ExternalLink,
  Sparkles,
  Zap,
  Package,
  BarChart3
} from "lucide-react";
import { useEffect, useRef } from "react";

const RightPanel = () => {

  const notices = [
    {
      id: 1,
      type: "launch",
      title: "Nike Air Max Ltd Edition Drops at Midnight",
      description: "Only 500 pairs available. Prepare for heavy traffic – queue system enabled.",
      date: "2026-03-20",
      icon: Rocket,
      color: "text-purple-600",
      bg: "bg-purple-50",
      link: "#",
      new: true,
      priority: true
    },
    {
      id: 2,
      type: "trend",
      title: "Flash Sale Best Practices: Inventory Buffers",
      description: "Experts recommend overselling buffers of 5-10% to avoid negative stock.",
      date: "2026-03-22",
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50",
      link: "#",
      new: true
    },
    {
      id: 3,
      type: "alert",
      title: "Peak Traffic Expected – Server Scaling Advice",
      description: "AWS suggests auto-scaling groups to handle 10x normal load during flash events.",
      date: "2026-03-18",
      icon: AlertTriangle,
      color: "text-orange-600",
      bg: "bg-orange-50",
      link: "#"
    },
    {
      id: 4,
      type: "product",
      title: "Sony WH‑1000XM5 Restock Tomorrow 9 AM",
      description: "200 units available. Limit 1 per customer. Check your payment methods now.",
      date: "2026-03-19",
      icon: Package,
      color: "text-blue-600",
      bg: "bg-blue-50",
      link: "#"
    },
    {
      id: 5,
      type: "deadline",
      title: "Early Bird Deal Ends in 2 Hours",
      description: "Extra 15% off on electronics for the next 2 hours – act fast!",
      date: "2026-03-21",
      icon: Clock,
      color: "text-red-600",
      bg: "bg-red-50",
      link: "#",
      priority: true
    },
    {
      id: 6,
      type: "insight",
      title: "Conversion Rate Drops When Queue > 10k",
      description: "New study: users abandon carts if wait time exceeds 90 seconds.",
      date: "2026-03-24",
      icon: BarChart3,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      link: "#"
    },
    {
      id: 7,
      type: "launch",
      title: "PlayStation 5 Pro Surprise Drop",
      description: "Rumored midnight launch. Keep your one‑click purchase enabled.",
      date: "2026-03-26",
      icon: Zap,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      link: "#"
    },
  ];

  const scrollRef = useRef(null);

  // Auto scroll effect (optional – can be kept as is)
  useEffect(() => {
    // You can keep the auto-scroll or remove it. I'll leave it empty but functional.
    // If you want auto-scrolling, uncomment the interval logic.
    // For now, just a placeholder to avoid lint errors.
    const interval = setInterval(() => {}, 10000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  };

  return (
    <div className="w-80 h-full bg-white border-l p-6 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-indigo-600" />
          <h2 className="text-lg font-bold text-gray-800">
           Rush-Gate News
          </h2>
        </div>

        <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
          {notices.length}+
        </span>
      </div>

      {/* Notice List */}
      <div
        ref={scrollRef}
        className="flex flex-col gap-4 overflow-y-auto pr-1"
      >
        {notices.map((notice) => {
          const Icon = notice.icon;

          return (
            <div
              key={notice.id}
              className={`p-4 rounded-xl border transition-all hover:shadow-sm cursor-pointer
              ${notice.priority ? "bg-indigo-50 border-indigo-200" : "border-gray-100"}`}
            >
              <div className="flex gap-3">

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg ${notice.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={20} className={notice.color} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">

                  <div className="flex items-start justify-between gap-2">

                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                        {notice.title}
                      </h3>

                      {notice.new && (
                        <span className="text-[10px] px-2 py-0.5 bg-green-500 text-white rounded-full">
                          NEW
                        </span>
                      )}
                    </div>

                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {formatDate(notice.date)}
                    </span>

                  </div>

                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {notice.description}
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700">
                    <span>View details</span>
                    <ExternalLink size={12} />
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 text-center pt-4 border-t mt-4">
        Flash‑Sale Pulse • Real‑time market intelligence
      </div>

    </div>
  );
};

export default RightPanel;