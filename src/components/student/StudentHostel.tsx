import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, User, Calendar, Phone, Wifi, Car, Utensils, Shield } from "lucide-react";

const hostelInfo = {
  studentStatus: "allocated",
  block: "Rajasthan Hostel Block A",
  roomNumber: "A-204",
  roomType: "Double Sharing",
  checkInDate: "2024-01-15",
  warden: {
    name: "Dr. R.K. Sharma",
    phone: "+91 9876543210",
    email: "warden.blocka@rajasthan.gov.in"
  },
  roommate: {
    name: "Arjun Patel",
    id: "STU045",
    course: "B.Tech CSE",
    year: "3rd Year"
  }
};

const hostelFacilities = [
  { name: "24/7 WiFi", icon: Wifi, status: "available" },
  { name: "Mess Facility", icon: Utensils, status: "available" },
  { name: "Security", icon: Shield, status: "available" },
  { name: "Parking", icon: Car, status: "available" }
];

const messMenu = [
  { day: "Monday", breakfast: "Poha, Tea/Coffee", lunch: "Dal, Rice, Roti, Sabzi", dinner: "Rajma, Rice, Roti" },
  { day: "Tuesday", breakfast: "Upma, Tea/Coffee", lunch: "Sambar, Rice, Roti, Sabzi", dinner: "Chole, Rice, Roti" },
  { day: "Wednesday", breakfast: "Paratha, Tea/Coffee", lunch: "Dal, Rice, Roti, Sabzi", dinner: "Paneer Curry, Rice, Roti" },
  { day: "Thursday", breakfast: "Idli Sambhar, Tea/Coffee", lunch: "Rasam, Rice, Roti, Sabzi", dinner: "Mixed Dal, Rice, Roti" },
  { day: "Friday", breakfast: "Aloo Paratha, Tea/Coffee", lunch: "Dal, Rice, Roti, Sabzi", dinner: "Egg Curry, Rice, Roti" }
];

export const StudentHostel = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
          <MapPin className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Hostel Information</h1>
          <p className="text-muted-foreground">Your accommodation details and hostel facilities</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Room Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Room Allocation Details</CardTitle>
                <Badge className="bg-success/10 text-success">
                  {hostelInfo.studentStatus}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hostel Block</p>
                  <p className="text-lg font-bold text-primary">{hostelInfo.block}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Room Number</p>
                  <p className="text-lg font-bold text-primary">{hostelInfo.roomNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Room Type</p>
                  <p className="text-foreground">{hostelInfo.roomType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Check-in Date</p>
                  <p className="text-foreground">{hostelInfo.checkInDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roommate Info */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-accent" />
                <span>Roommate Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-secondary-foreground">
                    {hostelInfo.roommate.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{hostelInfo.roommate.name}</p>
                  <p className="text-sm text-muted-foreground">{hostelInfo.roommate.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {hostelInfo.roommate.course} • {hostelInfo.roommate.year}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Facilities */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Hostel Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hostelFacilities.map((facility, index) => {
                  const Icon = facility.icon;
                  return (
                    <div key={index} className="text-center p-4 rounded-lg bg-card-secondary">
                      <div className="flex justify-center mb-2">
                        <div className="p-3 bg-gradient-primary rounded-full">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <p className="font-medium text-sm text-foreground">{facility.name}</p>
                      <Badge className="mt-1 bg-success/10 text-success text-xs">
                        {facility.status}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Warden Contact */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Warden Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{hostelInfo.warden.name}</p>
                    <p className="text-xs text-muted-foreground">Block Warden</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{hostelInfo.warden.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="w-4 h-4 text-center">@</span>
                    <span className="text-foreground text-xs">{hostelInfo.warden.email}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full">
                  Report Issue
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Request Maintenance
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Gate Pass Request
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Visitor Registration
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mess Menu */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Utensils className="w-5 h-5 text-warning" />
            <span>This Week's Mess Menu</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-medium text-muted-foreground">Day</th>
                  <th className="text-left py-3 font-medium text-muted-foreground">Breakfast</th>
                  <th className="text-left py-3 font-medium text-muted-foreground">Lunch</th>
                  <th className="text-left py-3 font-medium text-muted-foreground">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {messMenu.map((menu, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 font-medium text-foreground">{menu.day}</td>
                    <td className="py-3 text-sm text-muted-foreground">{menu.breakfast}</td>
                    <td className="py-3 text-sm text-muted-foreground">{menu.lunch}</td>
                    <td className="py-3 text-sm text-muted-foreground">{menu.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};