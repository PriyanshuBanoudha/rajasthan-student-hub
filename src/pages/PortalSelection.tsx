import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, GraduationCap, Shield, Users } from "lucide-react";

const PortalSelection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card-secondary to-background flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <Building className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Student ERP System
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Government of Rajasthan - Directorate of Technical Education
          </p>
          <p className="text-muted-foreground">
            Choose your portal to access the system
          </p>
        </div>

        {/* Portal Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Admin Portal */}
          <Card className="shadow-strong hover:shadow-glow transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300">
                  <Shield className="w-8 h-8 text-secondary-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl text-foreground">Admin Portal</CardTitle>
              <p className="text-muted-foreground">
                Full administrative access to manage the institution
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>Student Management</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  <span>Admissions & Examinations</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Building className="w-4 h-4" />
                  <span>Fee & Hostel Management</span>
                </div>
              </div>
              <Link to="/admin" className="block">
                <Button className="w-full bg-gradient-secondary text-secondary-foreground shadow-medium hover:shadow-glow transition-all duration-200">
                  Access Admin Portal
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Student Portal */}
          <Card className="shadow-strong hover:shadow-glow transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl text-foreground">Student Portal</CardTitle>
              <p className="text-muted-foreground">
                Student access to personal information and services
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>Personal Profile</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Records</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Building className="w-4 h-4" />
                  <span>Fee Status & Hostel Info</span>
                </div>
              </div>
              <Link to="/student" className="block">
                <Button className="w-full bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-strong transition-all duration-200">
                  Access Student Portal
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-xs text-muted-foreground">
            © 2024 Government of Rajasthan - Directorate of Technical Education. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortalSelection;