import { useState } from "react";
import { StudentNavbar } from "@/components/student/StudentNavbar";
import { StudentDashboard } from "@/components/student/StudentDashboard";
import { StudentProfile } from "@/components/student/StudentProfile";
import { StudentFees } from "@/components/student/StudentFees";
import { StudentHostel } from "@/components/student/StudentHostel";
import { StudentExams } from "@/components/student/StudentExams";

const StudentPortal = () => {
  const [currentModule, setCurrentModule] = useState("dashboard");

  const renderModule = () => {
    switch (currentModule) {
      case "dashboard":
        return <StudentDashboard />;
      case "profile":
        return <StudentProfile />;
      case "fees":
        return <StudentFees />;
      case "hostel":
        return <StudentHostel />;
      case "exams":
        return <StudentExams />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card-secondary to-background">
      <StudentNavbar currentModule={currentModule} onModuleChange={setCurrentModule} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderModule()}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">R</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Government of Rajasthan - Directorate of Technical Education
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-2 md:mt-0">
              © 2024 Student Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentPortal;