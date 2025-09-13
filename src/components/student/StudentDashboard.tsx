import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, CreditCard, MapPin, Calendar, Bell, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const studentData = {
  name: "Rahul Sharma",
  id: "STU001",
  course: "B.Tech Computer Science Engineering",
  year: "3rd Year",
  semester: "6th Semester",
  cgpa: 8.5,
  attendance: 87
};

const quickStats = [
  {
    title: "Current CGPA",
    value: "8.5",
    change: "+0.3",
    icon: Trophy,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Attendance",
    value: "87%",
    change: "+2%",
    icon: Calendar,
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    title: "Fee Status",
    value: "Paid",
    change: "Current",
    icon: CreditCard,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Hostel Room",
    value: "A-204",
    change: "Block A",
    icon: MapPin,
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const recentNotifications = [
  { title: "Semester exam schedule released", time: "2 hours ago", type: "exam" },
  { title: "Library fine payment due", time: "1 day ago", type: "fee" },
  { title: "Hostel mess menu updated", time: "2 days ago", type: "hostel" },
];

const upcomingEvents = [
  { title: "Mid-term Examination", date: "Mar 15, 2024", type: "exam" },
  { title: "Fee payment deadline", date: "Mar 20, 2024", type: "fee" },
  { title: "Cultural fest registration", date: "Mar 25, 2024", type: "event" },
];

export const StudentDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, {studentData.name}!</h1>
          <p className="text-muted-foreground">{studentData.course} • {studentData.year}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Student ID</p>
          <p className="text-lg font-bold text-primary">{studentData.id}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="shadow-soft hover:shadow-medium transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-xs text-success font-medium">{stat.change}</span>
                  <span className="text-xs text-muted-foreground">this semester</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Notifications */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-warning" />
              <span>Recent Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentNotifications.map((notification, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card-secondary">
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                  <Badge className={`
                    ${notification.type === 'exam' ? 'bg-accent/10 text-accent' :
                      notification.type === 'fee' ? 'bg-warning/10 text-warning' :
                      'bg-success/10 text-success'}
                  `}>
                    {notification.type}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              View All Notifications
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card-secondary">
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                  <Badge className={`
                    ${event.type === 'exam' ? 'bg-destructive/10 text-destructive' :
                      event.type === 'fee' ? 'bg-warning/10 text-warning' :
                      'bg-success/10 text-success'}
                  `}>
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              View Academic Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="flex items-center space-x-2 bg-gradient-primary text-primary-foreground shadow-glow">
              <CreditCard className="w-4 h-4" />
              <span>Pay Fees</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Download Marksheet</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span>Course Registration</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};