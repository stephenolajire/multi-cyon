import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Users,
  DollarSign,
  Calendar,
  Activity,
  Heart,
} from "lucide-react";

import { type LucideIcon } from "lucide-react";

// StatCard Component
interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change?: number;
  delay?: number;
}

const StatCard = ({
  icon: Icon,
  title,
  value,
  change,
  delay = 0,
}: StatCardProps) => {
  return (
    <div
      className="bg-white rounded-lg border border-church-sec p-6 hover:shadow-lg transition-shadow duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8 text-church-primary" />
        {change && (
          <span
            className={`text-sm font-medium ${
              change > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {change > 0 ? "+" : ""}
            {change}%
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-church-accent mb-1">{value}</div>
      <div className="text-church-tertiary text-sm">{title}</div>
    </div>
  );
};

// AttendanceChart Component
const AttendanceChart = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = [320, 350, 380, 360, 420, 450, 480, 470, 500, 520, 490, 550];
  const maxValue = Math.max(...data);

  return (
    <div
      className="bg-white rounded-lg border border-church-sec p-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h3 className="text-lg font-semibold text-church-accent mb-6">
        Attendance Overview
      </h3>
      <div className="flex items-end justify-between gap-2 h-64">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full bg-church-sec rounded-t-lg relative group cursor-pointer hover:bg-church-primary transition-colors duration-300"
              style={{ height: `${(value / maxValue) * 100}%` }}
              data-aos="fade-up"
              data-aos-delay={300 + index * 50}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-church-accent text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {value}
              </div>
            </div>
            <span className="text-xs text-church-tertiary">
              {months[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// RecentActivities Component
const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      type: "service",
      title: "Sunday Service",
      time: "2 hours ago",
      attendees: 450,
    },
    {
      id: 2,
      type: "donation",
      title: "Donation Received",
      time: "5 hours ago",
      amount: "$2,500",
    },
    {
      id: 3,
      type: "event",
      title: "Youth Meeting",
      time: "1 day ago",
      attendees: 85,
    },
    {
      id: 4,
      type: "service",
      title: "Wednesday Prayer",
      time: "2 days ago",
      attendees: 120,
    },
    {
      id: 5,
      type: "donation",
      title: "Donation Received",
      time: "3 days ago",
      amount: "$1,200",
    },
  ];

  const getIcon = (type:any) => {
    switch (type) {
      case "service":
        return <Users className="w-5 h-5 text-church-primary" />;
      case "donation":
        return <DollarSign className="w-5 h-5 text-green-600" />;
      case "event":
        return <Calendar className="w-5 h-5 text-church-primary" />;
      default:
        return <Activity className="w-5 h-5 text-church-tertiary" />;
    }
  };

  return (
    <div
      className="bg-white rounded-lg border border-church-sec p-6"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h3 className="text-lg font-semibold text-church-accent mb-4">
        Recent Activities
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 pb-4 border-b border-church-sec last:border-b-0"
            data-aos="fade-left"
            data-aos-delay={500 + index * 100}
          >
            <div className="mt-1">{getIcon(activity.type)}</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-church-accent">
                {activity.title}
              </div>
              <div className="text-xs text-church-tertiary mt-1">
                {activity.time}
              </div>
            </div>
            <div className="text-sm font-semibold text-church-accent">
              {activity.attendees
                ? `${activity.attendees} people`
                : activity.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// UpcomingEvents Component
const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Jan 5, 2026",
      time: "9:00 AM",
      type: "Service",
    },
    {
      id: 2,
      title: "Bible Study",
      date: "Jan 7, 2026",
      time: "6:30 PM",
      type: "Study",
    },
    {
      id: 3,
      title: "Youth Camp",
      date: "Jan 10-12, 2026",
      time: "All Day",
      type: "Event",
    },
    {
      id: 4,
      title: "Prayer Meeting",
      date: "Jan 8, 2026",
      time: "7:00 PM",
      type: "Prayer",
    },
  ];

  return (
    <div
      className="bg-white rounded-lg border border-church-sec p-6"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <h3 className="text-lg font-semibold text-church-accent mb-4">
        Upcoming Events
      </h3>
      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="border border-church-sec rounded-lg p-4 hover:border-church-primary transition-colors duration-300 cursor-pointer"
            data-aos="fade-right"
            data-aos-delay={700 + index * 100}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm font-semibold text-church-accent">
                {event.title}
              </div>
              <span className="text-xs bg-church-sec text-church-tertiary px-2 py-1 rounded">
                {event.type}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-church-tertiary">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {event.date}
              </span>
              <span>{event.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// DonationsSummary Component
const DonationsSummary = () => {
  const donations = [
    { category: "Tithes", amount: 12500, percentage: 55 },
    { category: "Offerings", amount: 6800, percentage: 30 },
    { category: "Building Fund", amount: 2200, percentage: 10 },
    { category: "Missions", amount: 1100, percentage: 5 },
  ];

  return (
    <div
      className="bg-white rounded-lg border border-church-sec p-6"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      <h3 className="text-lg font-semibold text-church-accent mb-4">
        Donations Summary
      </h3>
      <div className="space-y-4">
        {donations.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={900 + index * 100}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-church-accent">
                {item.category}
              </span>
              <span className="text-sm font-semibold text-church-accent">
                ${item.amount.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-church-sec rounded-full h-2">
              <div
                className="bg-church-primary h-2 rounded-full transition-all duration-1000"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-church-sec">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-church-accent">
            Total This Month
          </span>
          <span className="text-xl font-bold text-church-primary">$22,600</span>
        </div>
      </div>
    </div>
  );
};

// Main Overview Component
const ChurchDashboardOverview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="py-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8" data-aos="fade-down">
        <h1 className="text-3xl font-bold text-church-accent mb-2">
          Dashboard Overview
        </h1>
        <p className="text-church-tertiary">
          Welcome back! Here's what's happening in your church.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Users}
          title="Total Members"
          value="1,234"
          change={5.2}
          delay={0}
        />
        <StatCard
          icon={Activity}
          title="Avg. Attendance"
          value="487"
          change={8.1}
          delay={100}
        />
        <StatCard
          icon={DollarSign}
          title="Monthly Donations"
          value="$22,600"
          change={12.3}
          delay={200}
        />
        <StatCard
          icon={Heart}
          title="Active Groups"
          value="24"
          change={4.5}
          delay={300}
        />
      </div>

      {/* Charts and Activities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>
        <div>
          <RecentActivities />
        </div>
      </div>

      {/* Events and Donations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingEvents />
        <DonationsSummary />
      </div>
    </div>
  );
};

export default ChurchDashboardOverview;
