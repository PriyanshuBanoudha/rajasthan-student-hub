import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Users, Bed, Search, UserCheck, UserX, Home } from "lucide-react";

const hostelData = [
  {
    id: "H001",
    name: "Rajasthan Hostel Block A",
    totalRooms: 50,
    occupiedRooms: 43,
    capacity: 100,
    currentOccupancy: 86,
    type: "Boys",
    warden: "Dr. R.K. Sharma"
  },
  {
    id: "H002", 
    name: "Rajasthan Hostel Block B",
    totalRooms: 40,
    occupiedRooms: 35,
    capacity: 80,
    currentOccupancy: 70,
    type: "Girls",
    warden: "Prof. S. Gupta"
  },
  {
    id: "H003",
    name: "Technical Hostel Block C",
    totalRooms: 30,
    occupiedRooms: 28,
    capacity: 60,
    currentOccupancy: 56,
    type: "Boys",
    warden: "Dr. M. Agarwal"
  }
];

const students = [
  {
    id: "STU001",
    name: "Rahul Sharma",
    course: "B.Tech CSE",
    year: "3rd Year",
    hostelStatus: "allocated",
    hostelBlock: "Block A",
    roomNumber: "A-204",
    checkInDate: "2024-01-15"
  },
  {
    id: "STU002",
    name: "Priya Patel", 
    course: "B.Tech ECE",
    year: "2nd Year",
    hostelStatus: "waitlist",
    hostelBlock: "-",
    roomNumber: "-",
    checkInDate: "-"
  },
  {
    id: "STU003",
    name: "Amit Kumar",
    course: "Diploma ME",
    year: "4th Year", 
    hostelStatus: "allocated",
    hostelBlock: "Block C",
    roomNumber: "C-105",
    checkInDate: "2024-02-01"
  }
];

export const HostelManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleAllocateRoom = (studentId: string) => {
    toast({
      title: "Room Allocated",
      description: `Room successfully allocated to student ${studentId}`,
      duration: 3000,
    });
  };

  const handleDeallocateRoom = (studentId: string) => {
    toast({
      title: "Room Deallocated", 
      description: `Room deallocated for student ${studentId}`,
      duration: 3000,
    });
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || student.hostelStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalCapacity = hostelData.reduce((sum, hostel) => sum + hostel.capacity, 0);
  const totalOccupancy = hostelData.reduce((sum, hostel) => sum + hostel.currentOccupancy, 0);
  const occupancyRate = Math.round((totalOccupancy / totalCapacity) * 100);

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
          <MapPin className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Hostel Management</h1>
          <p className="text-muted-foreground">Manage hostel allocation and occupancy tracking</p>
        </div>
      </div>

      {/* Hostel Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Capacity</CardTitle>
            <Home className="w-4 h-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{totalCapacity}</div>
            <p className="text-xs text-muted-foreground">Available beds</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Occupancy</CardTitle>
            <Users className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{totalOccupancy}</div>
            <p className="text-xs text-muted-foreground">Students residing</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Occupancy Rate</CardTitle>
            <Bed className="w-4 h-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{occupancyRate}%</div>
            <p className="text-xs text-muted-foreground">Utilization rate</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Available Beds</CardTitle>
            <UserCheck className="w-4 h-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{totalCapacity - totalOccupancy}</div>
            <p className="text-xs text-muted-foreground">Ready for allocation</p>
          </CardContent>
        </Card>
      </div>

      {/* Hostel Blocks Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hostelData.map((hostel) => (
          <Card key={hostel.id} className="shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{hostel.name}</CardTitle>
                <Badge className={`${
                  hostel.type === 'Boys' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                }`}>
                  {hostel.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Rooms</p>
                    <p className="text-xl font-bold text-foreground">{hostel.totalRooms}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Occupied</p>
                    <p className="text-xl font-bold text-primary">{hostel.occupiedRooms}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Occupancy</span>
                    <span className="text-sm font-medium">
                      {hostel.currentOccupancy}/{hostel.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(hostel.currentOccupancy / hostel.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">Warden</p>
                  <p className="text-sm font-medium text-foreground">{hostel.warden}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Student Allocation Management */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Student Allocation Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Label htmlFor="search">Search Student</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by name or student ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <div className="md:w-48">
              <Label htmlFor="status">Filter by Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="allocated">Allocated</SelectItem>
                  <SelectItem value="waitlist">Waitlist</SelectItem>
                  <SelectItem value="not-applied">Not Applied</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <div key={student.id} className="p-4 border border-border rounded-lg bg-card-secondary">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-xs text-muted-foreground">{student.id}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground">{student.course}</p>
                    <p className="text-xs text-muted-foreground">{student.year}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Hostel Block</p>
                    <p className="text-sm font-medium text-foreground">{student.hostelBlock}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Room Number</p>
                    <p className="text-sm font-medium text-foreground">{student.roomNumber}</p>
                  </div>

                  <div>
                    <Badge className={`${
                      student.hostelStatus === 'allocated' ? 'bg-success/10 text-success' :
                      student.hostelStatus === 'waitlist' ? 'bg-warning/10 text-warning' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {student.hostelStatus}
                    </Badge>
                    {student.checkInDate !== '-' && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Since: {student.checkInDate}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    {student.hostelStatus === 'allocated' ? (
                      <Button 
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeallocateRoom(student.id)}
                        className="flex items-center space-x-1"
                      >
                        <UserX className="w-3 h-3" />
                        <span>Deallocate</span>
                      </Button>
                    ) : (
                      <Button 
                        size="sm"
                        onClick={() => handleAllocateRoom(student.id)}
                        className="bg-gradient-success text-success-foreground flex items-center space-x-1"
                      >
                        <UserCheck className="w-3 h-3" />
                        <span>Allocate</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};