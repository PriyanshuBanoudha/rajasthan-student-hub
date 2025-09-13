import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Users, Search, Eye, Edit, UserCheck, Mail, Phone, Calendar } from "lucide-react";

const allStudents = [
  {
    id: "STU001",
    name: "Rahul Sharma",
    email: "rahul.sharma@student.rajasthan.gov.in",
    phone: "+91 9876543210",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    semester: "6th Semester", 
    admissionDate: "2022-07-15",
    feeStatus: "paid",
    hostelStatus: "allocated",
    academicStatus: "active",
    cgpa: 8.5,
    attendance: 87
  },
  {
    id: "STU002",
    name: "Priya Patel",
    email: "priya.patel@student.rajasthan.gov.in", 
    phone: "+91 9876543211",
    course: "B.Tech Electronics & Communication",
    year: "2nd Year",
    semester: "4th Semester",
    admissionDate: "2023-07-20",
    feeStatus: "pending",
    hostelStatus: "waitlist",
    academicStatus: "active",
    cgpa: 8.1,
    attendance: 92
  },
  {
    id: "STU003",
    name: "Amit Kumar",
    email: "amit.kumar@student.rajasthan.gov.in",
    phone: "+91 9876543212",
    course: "Diploma Mechanical Engineering",
    year: "Final Year",
    semester: "6th Semester",
    admissionDate: "2021-07-10", 
    feeStatus: "overdue",
    hostelStatus: "allocated",
    academicStatus: "active",
    cgpa: 7.8,
    attendance: 78
  },
  {
    id: "STU004",
    name: "Sneha Singh",
    email: "sneha.singh@student.rajasthan.gov.in",
    phone: "+91 9876543213", 
    course: "B.Tech Civil Engineering",
    year: "1st Year",
    semester: "2nd Semester",
    admissionDate: "2024-07-25",
    feeStatus: "paid",
    hostelStatus: "not-applied",
    academicStatus: "active",
    cgpa: 9.2,
    attendance: 95
  }
];

export const StudentManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleViewProfile = (studentId: string) => {
    toast({
      title: "Profile Opened",
      description: `Viewing detailed profile for student ${studentId}`,
      duration: 3000,
    });
  };

  const handleEditProfile = (studentId: string) => {
    toast({
      title: "Edit Mode",
      description: `Opening edit form for student ${studentId}`,
      duration: 3000,
    });
  };

  const handleSendNotification = (studentId: string) => {
    toast({
      title: "Notification Sent",
      description: `Important notice sent to student ${studentId}`,
      duration: 3000,
    });
  };

  const filteredStudents = allStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = courseFilter === "all" || student.course.includes(courseFilter);
    const matchesYear = yearFilter === "all" || student.year.includes(yearFilter);
    const matchesStatus = statusFilter === "all" || student.academicStatus === statusFilter;
    return matchesSearch && matchesCourse && matchesYear && matchesStatus;
  });

  const averageCGPA = allStudents.reduce((sum, student) => sum + student.cgpa, 0) / allStudents.length;
  const averageAttendance = allStudents.reduce((sum, student) => sum + student.attendance, 0) / allStudents.length;
  const activeStudents = allStudents.filter(s => s.academicStatus === 'active').length;

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
          <Users className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Management</h1>
          <p className="text-muted-foreground">Comprehensive student information and management system</p>
        </div>
      </div>

      {/* Overview Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
            <Users className="w-4 h-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{allStudents.length}</div>
            <p className="text-xs text-muted-foreground">Enrolled students</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Students</CardTitle>
            <UserCheck className="w-4 h-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{activeStudents}</div>
            <p className="text-xs text-muted-foreground">Currently studying</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average CGPA</CardTitle>
            <Calendar className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{averageCGPA.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Academic performance</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Attendance</CardTitle>
            <Users className="w-4 h-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{averageAttendance.toFixed(0)}%</div>
            <p className="text-xs text-muted-foreground">Class attendance</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Student Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <Label htmlFor="search">Search Students</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Name, ID, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="course">Course</Label>
              <Select value={courseFilter} onValueChange={setCourseFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="B.Tech">B.Tech</SelectItem>
                  <SelectItem value="Diploma">Diploma</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="year">Year</Label>
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="1st">1st Year</SelectItem>
                  <SelectItem value="2nd">2nd Year</SelectItem>
                  <SelectItem value="3rd">3rd Year</SelectItem>
                  <SelectItem value="Final">Final Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="graduated">Graduated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Student Cards */}
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <Card key={student.id} className="shadow-medium">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Basic Information */}
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                        <span className="text-lg font-bold text-primary-foreground">
                          {student.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">{student.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{student.id}</p>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Mail className="w-3 h-3" />
                            <span>{student.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Phone className="w-3 h-3" />
                            <span>{student.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Academic Information */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{student.course}</p>
                        <p className="text-xs text-muted-foreground">{student.year} • {student.semester}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">CGPA</p>
                          <p className="text-sm font-medium text-primary">{student.cgpa}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Attendance</p>
                          <p className="text-sm font-medium text-warning">{student.attendance}%</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={`text-xs ${
                          student.feeStatus === 'paid' ? 'bg-success/10 text-success' :
                          student.feeStatus === 'pending' ? 'bg-warning/10 text-warning' :
                          'bg-destructive/10 text-destructive'
                        }`}>
                          Fee: {student.feeStatus}
                        </Badge>
                        <Badge className={`text-xs ${
                          student.hostelStatus === 'allocated' ? 'bg-success/10 text-success' :
                          student.hostelStatus === 'waitlist' ? 'bg-warning/10 text-warning' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          Hostel: {student.hostelStatus}
                        </Badge>
                        <Badge className="text-xs bg-accent/10 text-accent">
                          {student.academicStatus}
                        </Badge>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 lg:items-end">
                      <p className="text-xs text-muted-foreground">
                        Admitted: {new Date(student.admissionDate).toLocaleDateString()}
                      </p>
                      <div className="flex flex-col gap-2">
                        <Button 
                          size="sm"
                          onClick={() => handleViewProfile(student.id)}
                          className="flex items-center space-x-2"
                        >
                          <Eye className="w-3 h-3" />
                          <span>View Profile</span>
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditProfile(student.id)}
                          className="flex items-center space-x-2"
                        >
                          <Edit className="w-3 h-3" />
                          <span>Edit Details</span>
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          onClick={() => handleSendNotification(student.id)}
                          className="flex items-center space-x-2"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Send Notice</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};