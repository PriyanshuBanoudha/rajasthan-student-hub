import { Building, Users, GraduationCap, CreditCard, MapPin, FileText, Settings, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";

interface NavbarProps {
  currentModule: string;
  onModuleChange: (module: string) => void;
}

const modules = [
  { id: "dashboard", label: "Dashboard", icon: Building },
  { id: "admissions", label: "Admissions", icon: GraduationCap },
  { id: "fees", label: "Fee Management", icon: CreditCard },
  { id: "hostel", label: "Hostel", icon: MapPin },
  { id: "examinations", label: "Examinations", icon: FileText },
  { id: "students", label: "Students", icon: Users },
];

export const Navbar = ({ currentModule, onModuleChange }: NavbarProps) => {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-gradient-secondary shadow-medium border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Building className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary-foreground">Admin Portal</h1>
                <p className="text-xs text-secondary-foreground/70">Govt. of Rajasthan - DTE</p>
              </div>
            </div>
          </div>

          {/* Navigation Modules */}
          <div className="hidden md:flex items-center space-x-2">
            {modules.map((module) => {
              const Icon = module.icon;
              const isActive = currentModule === module.id;
              return (
                <Button
                  key={module.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onModuleChange(module.id)}
                  className={`
                    flex items-center space-x-2 transition-all duration-200
                    ${isActive 
                      ? "bg-primary text-primary-foreground shadow-glow" 
                      : "text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/5"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{module.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-secondary-foreground/80 hover:text-secondary-foreground relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-warning">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="sm" className="text-secondary-foreground/80 hover:text-secondary-foreground">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <span className="text-secondary-foreground/90">{user?.name}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={logout} className="text-secondary-foreground/80 hover:text-secondary-foreground">
              <LogOut className="w-5 h-5" />
            </Button>
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-sm font-bold text-primary-foreground">{user?.name?.[0] || 'A'}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};