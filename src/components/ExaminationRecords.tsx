import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FileText, Search, Download, Trophy, Calendar, BookOpen, GraduationCap } from "lucide-react";

const examinations = [
  {
    id: "EXAM001",
    name: "Mid-Term Examination",
    semester: "Semester 3",
    startDate: "2024-03-15",
    endDate: "2024-03-25",
    status: "upcoming",
    registrations: 2640,
    totalStudents: 2847
  },
  {
    id: "EXAM002", 
    name: "End-Term Examination",
    semester: "Semester 2",
    startDate: "2024-02-10",
    endDate: "2024-02-20",
    status: "completed",
    registrations: 2500,
    totalStudents: 2500
  }
];

const studentResults = [
  {
    id: "STU001",
    name: "Rahul Sharma",
    course: "B.Tech CSE",
    semester: "3rd Semester",
    subjects: [
      { code: "CS301", name: "Data Structures", marks: 85, maxMarks: 100, grade: "A" },
      { code: "CS302", name: "Operating Systems", marks: 78, maxMarks: 100, grade: "B+" },
      { code: "CS303", name: "Database Systems", marks: 92, maxMarks: 100, grade: "A+" },
      { code: "CS304", name: "Computer Networks", marks: 88, maxMarks: 100, grade: "A" }
    ],
    cgpa: 8.5,
    percentage: 85.75,
    status: "pass"
  },
  {
    id: "STU002",
    name: "Priya Patel", 
    course: "B.Tech ECE",
    semester: "2nd Semester", 
    subjects: [
      { code: "EC201", name: "Circuit Analysis", marks: 76, maxMarks: 100, grade: "B+" },
      { code: "EC202", name: "Electronics Devices", marks: 82, maxMarks: 100, grade: "A-" },
      { code: "EC203", name: "Signals & Systems", marks: 79, maxMarks: 100, grade: "B+" },
      { code: "EC204", name: "Digital Electronics", marks: 85, maxMarks: 100, grade: "A" }
    ],
    cgpa: 8.1,
    percentage: 80.5,
    status: "pass"
  }
];

export const ExaminationRecords = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [viewMode, setViewMode] = useState("examinations"); // examinations, results

  const handleGenerateResult = (studentId: string) => {
    toast({
      title: "Result Generated",
      description: `Marksheet generated for student ${studentId}`,
      duration: 3000,
    });
  };

  const handleExportResults = () => {
    toast({
      title: "Export Initiated", 
      description: "Results are being exported to PDF format",
      duration: 3000,
    });
  };

  const filteredResults = studentResults.filter(result => {
    const matchesSearch = result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = selectedSemester === "all" || result.semester.includes(selectedSemester);
    return matchesSearch && matchesSemester;
  });

  const averageCGPA = studentResults.reduce((sum, student) => sum + student.cgpa, 0) / studentResults.length;
  const passRate = (studentResults.filter(s => s.status === 'pass').length / studentResults.length) * 100;

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
          <FileText className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Examination Records</h1>
          <p className="text-muted-foreground">Manage examinations and student academic performance</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex space-x-2">
        <Button
          variant={viewMode === "examinations" ? "default" : "outline"}
          onClick={() => setViewMode("examinations")}
          className="flex items-center space-x-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Examinations</span>
        </Button>
        <Button
          variant={viewMode === "results" ? "default" : "outline"}
          onClick={() => setViewMode("results")}
          className="flex items-center space-x-2"
        >
          <Trophy className="w-4 h-4" />
          <span>Results</span>
        </Button>
      </div>

      {viewMode === "examinations" ? (
        <div className="space-y-6">
          {/* Examination Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Exams</CardTitle>
                <Calendar className="w-4 h-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">
                  {examinations.filter(e => e.status === 'upcoming').length}
                </div>
                <p className="text-xs text-muted-foreground">Scheduled examinations</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Registrations</CardTitle>
                <BookOpen className="w-4 h-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">2,640</div>
                <p className="text-xs text-muted-foreground">Students registered</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Registration Rate</CardTitle>
                <GraduationCap className="w-4 h-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">93%</div>
                <p className="text-xs text-muted-foreground">Completion rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Examination Schedule */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Examination Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {examinations.map((exam) => (
                  <div key={exam.id} className="p-4 border border-border rounded-lg bg-card-secondary">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{exam.name}</p>
                          <p className="text-xs text-muted-foreground">{exam.id}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-foreground">{exam.semester}</p>
                        <p className="text-xs text-muted-foreground">Academic term</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="text-sm font-medium text-foreground">
                          {exam.startDate} to {exam.endDate}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Registrations</p>
                        <p className="text-sm font-medium text-foreground">
                          {exam.registrations}/{exam.totalStudents}
                        </p>
                        <Badge className={`mt-1 ${
                          exam.status === 'completed' ? 'bg-success/10 text-success' :
                          exam.status === 'upcoming' ? 'bg-warning/10 text-warning' :
                          'bg-accent/10 text-accent'
                        }`}>
                          {exam.status}
                        </Badge>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                          View Details
                        </Button>
                        {exam.status === 'completed' && (
                          <Button size="sm" variant="outline" onClick={handleExportResults}>
                            <Download className="w-3 h-3 mr-1" />
                            Export
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
      ) : (
        <div className="space-y-6">
          {/* Results Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Average CGPA</CardTitle>
                <Trophy className="w-4 h-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">{averageCGPA.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">Class performance</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Pass Rate</CardTitle>
                <GraduationCap className="w-4 h-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">{passRate.toFixed(0)}%</div>
                <p className="text-xs text-muted-foreground">Success rate</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Results Published</CardTitle>
                <FileText className="w-4 h-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">{studentResults.length}</div>
                <p className="text-xs text-muted-foreground">Student records</p>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Student Results</CardTitle>
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
                  <Label htmlFor="semester">Filter by Semester</Label>
                  <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Semesters</SelectItem>
                      <SelectItem value="1st">1st Semester</SelectItem>
                      <SelectItem value="2nd">2nd Semester</SelectItem>
                      <SelectItem value="3rd">3rd Semester</SelectItem>
                      <SelectItem value="4th">4th Semester</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button variant="outline" onClick={handleExportResults} className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Export All</span>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {filteredResults.map((student) => (
                  <Card key={student.id} className="shadow-medium">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{student.name} ({student.id})</CardTitle>
                          <p className="text-muted-foreground">{student.course} - {student.semester}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">CGPA: {student.cgpa}</div>
                          <p className="text-sm text-muted-foreground">Percentage: {student.percentage}%</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        {student.subjects.map((subject, index) => (
                          <div key={index} className="p-3 bg-card-secondary rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-medium text-sm text-foreground">{subject.code}</p>
                              <Badge className={`text-xs ${
                                subject.grade.startsWith('A') ? 'bg-success/10 text-success' :
                                subject.grade.startsWith('B') ? 'bg-warning/10 text-warning' :
                                'bg-muted text-muted-foreground'
                              }`}>
                                {subject.grade}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-1">{subject.name}</p>
                            <p className="text-sm font-bold text-foreground">
                              {subject.marks}/{subject.maxMarks}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <Badge className={`${
                          student.status === 'pass' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                        }`}>
                          {student.status.toUpperCase()}
                        </Badge>
                        <Button 
                          size="sm" 
                          onClick={() => handleGenerateResult(student.id)}
                          className="flex items-center space-x-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>Generate Marksheet</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};