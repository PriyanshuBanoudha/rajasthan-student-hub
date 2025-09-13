import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, CreditCard, MapPin, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    title: "New Admissions",
    value: "342",
    change: "+8.2%",
    icon: GraduationCap,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Fee Collection",
    value: "₹18.5L",
    change: "+15.3%",
    icon: CreditCard,
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    title: "Hostel Occupancy",
    value: "87%",
    change: "+5.1%",
    icon: MapPin,
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const recentActivities = [
  { action: "New admission application", student: "Rahul Sharma", time: "2 minutes ago", status: "pending" },
  { action: "Fee payment received", student: "Priya Patel", time: "15 minutes ago", status: "completed" },
  { action: "Hostel allocation", student: "Amit Kumar", time: "1 hour ago", status: "completed" },
  { action: "Examination form submitted", student: "Sneha Singh", time: "2 hours ago", status: "pending" },
];

const upcomingTasks = [
  { task: "Review admission applications", deadline: "Today, 5:00 PM", priority: "high" },
  { task: "Generate monthly fee report", deadline: "Tomorrow", priority: "medium" },
  { task: "Update hostel allocation", deadline: "Mar 15", priority: "low" },
];

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to the Student Management System</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-strong transition-all duration-200">
          Generate Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
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
                  <TrendingUp className="w-3 h-3 text-success" />
                  <span className="text-xs text-success font-medium">{stat.change}</span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card-secondary">
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.student}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'completed' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-warning/10 text-warning'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Upcoming Tasks</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card-secondary">
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">{task.task}</p>
                    <p className="text-xs text-muted-foreground">{task.deadline}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'high' ? 'bg-destructive/10 text-destructive' :
                    task.priority === 'medium' ? 'bg-warning/10 text-warning' :
                    'bg-success/10 text-success'
                  }`}>
                    {task.priority}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Monthly Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Admission Target</span>
                <span className="font-medium">342/400</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Fee Collection</span>
                <span className="font-medium">₹18.5L/₹20L</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Examination Forms</span>
                <span className="font-medium">2,640/2,847</span>
              </div>
              <Progress value={93} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};