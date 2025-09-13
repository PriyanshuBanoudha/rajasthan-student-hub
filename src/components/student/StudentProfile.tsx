import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Calendar, Book, Edit } from "lucide-react";

const studentProfile = {
  personalInfo: {
    name: "Rahul Sharma",
    id: "STU001",
    email: "rahul.sharma@student.rajasthan.gov.in",
    phone: "+91 9876543210",
    dateOfBirth: "1999-05-15",
    fatherName: "Mr. Ravi Sharma",
    motherName: "Mrs. Sunita Sharma",
    address: "123, Gandhi Nagar, Jaipur, Rajasthan - 302015",
    admissionDate: "2022-07-15"
  },
  academicInfo: {
    course: "B.Tech Computer Science Engineering",
    year: "3rd Year",
    semester: "6th Semester",
    rollNumber: "22CSE001",
    cgpa: 8.5,
    credits: 142,
    status: "Regular"
  },
  documents: [
    { name: "10th Mark Sheet", status: "verified", uploadDate: "2022-07-10" },
    { name: "12th Mark Sheet", status: "verified", uploadDate: "2022-07-10" },
    { name: "Transfer Certificate", status: "verified", uploadDate: "2022-07-10" },
    { name: "Caste Certificate", status: "pending", uploadDate: "2022-07-12" }
  ]
};

export const StudentProfile = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
            <p className="text-muted-foreground">Manage your personal and academic information</p>
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <Edit className="w-4 h-4" />
          <span>Edit Profile</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="shadow-medium">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-3xl font-bold text-primary-foreground">
                  {studentProfile.personalInfo.name.charAt(0)}
                </span>
              </div>
            </div>
            <CardTitle className="text-xl">{studentProfile.personalInfo.name}</CardTitle>
            <p className="text-muted-foreground">{studentProfile.personalInfo.id}</p>
            <Badge className="bg-success/10 text-success mx-auto">
              {studentProfile.academicInfo.status}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{studentProfile.personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{studentProfile.personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">
                  DOB: {new Date(studentProfile.personalInfo.dateOfBirth).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Book className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">CGPA: {studentProfile.academicInfo.cgpa}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-accent" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                  <p className="text-foreground">{studentProfile.personalInfo.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                  <p className="text-foreground">
                    {new Date(studentProfile.personalInfo.dateOfBirth).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Father's Name</p>
                  <p className="text-foreground">{studentProfile.personalInfo.fatherName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Mother's Name</p>
                  <p className="text-foreground">{studentProfile.personalInfo.motherName}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">Address</p>
                  <p className="text-foreground">{studentProfile.personalInfo.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Information */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Book className="w-5 h-5 text-primary" />
                <span>Academic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Course</p>
                  <p className="text-foreground">{studentProfile.academicInfo.course}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Year</p>
                  <p className="text-foreground">{studentProfile.academicInfo.year}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Semester</p>
                  <p className="text-foreground">{studentProfile.academicInfo.semester}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Roll Number</p>
                  <p className="text-foreground">{studentProfile.academicInfo.rollNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">CGPA</p>
                  <p className="text-xl font-bold text-primary">{studentProfile.academicInfo.cgpa}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Credits Completed</p>
                  <p className="text-foreground">{studentProfile.academicInfo.credits}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Document Verification Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentProfile.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card-secondary">
                    <div>
                      <p className="font-medium text-sm text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className={`${
                      doc.status === 'verified' ? 'bg-success/10 text-success' :
                      doc.status === 'pending' ? 'bg-warning/10 text-warning' :
                      'bg-destructive/10 text-destructive'
                    }`}>
                      {doc.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};