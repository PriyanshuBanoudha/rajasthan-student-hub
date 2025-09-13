import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Trophy, BookOpen, TrendingUp } from "lucide-react";

const currentSemesterResults = {
  semester: "6th Semester",
  cgpa: 8.5,
  sgpa: 8.7,
  totalCredits: 24,
  earnedCredits: 24,
  subjects: [
    { code: "CS301", name: "Data Structures & Algorithms", credits: 4, marks: 85, maxMarks: 100, grade: "A", gp: 9 },
    { code: "CS302", name: "Operating Systems", credits: 4, marks: 78, maxMarks: 100, grade: "B+", gp: 8 },
    { code: "CS303", name: "Database Management Systems", credits: 4, marks: 92, maxMarks: 100, grade: "A+", gp: 10 },
    { code: "CS304", name: "Computer Networks", credits: 4, marks: 88, maxMarks: 100, grade: "A", gp: 9 },
    { code: "CS305", name: "Software Engineering", credits: 4, marks: 81, maxMarks: 100, grade: "A-", gp: 8 },
    { code: "CS306", name: "Web Technologies Lab", credits: 2, marks: 95, maxMarks: 100, grade: "A+", gp: 10 },
    { code: "CS307", name: "DBMS Lab", credits: 2, marks: 89, maxMarks: 100, grade: "A", gp: 9 }
  ]
};

const semesterHistory = [
  { semester: "1st Semester", sgpa: 8.2, cgpa: 8.2, status: "completed" },
  { semester: "2nd Semester", sgpa: 8.1, cgpa: 8.15, status: "completed" },
  { semester: "3rd Semester", sgpa: 8.4, cgpa: 8.23, status: "completed" },
  { semester: "4th Semester", sgpa: 8.3, cgpa: 8.25, status: "completed" },
  { semester: "5th Semester", sgpa: 8.6, cgpa: 8.32, status: "completed" },
  { semester: "6th Semester", sgpa: 8.7, cgpa: 8.5, status: "current" }
];

const upcomingExams = [
  { subject: "Machine Learning", code: "CS401", date: "2024-04-15", time: "10:00 AM", duration: "3 hours" },
  { subject: "Compiler Design", code: "CS402", date: "2024-04-18", time: "2:00 PM", duration: "3 hours" },
  { subject: "Computer Graphics", code: "CS403", date: "2024-04-22", time: "10:00 AM", duration: "3 hours" }
];

export const StudentExams = () => {
  const handleDownloadMarksheet = () => {
    console.log("Downloading marksheet...");
  };

  const handleDownloadTranscript = () => {
    console.log("Downloading transcript...");
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-success/10 text-success';
    if (grade.startsWith('B')) return 'bg-warning/10 text-warning';
    if (grade.startsWith('C')) return 'bg-muted text-muted-foreground';
    return 'bg-destructive/10 text-destructive';
  };

  const totalMarks = currentSemesterResults.subjects.reduce((sum, subject) => sum + subject.marks, 0);
  const totalMaxMarks = currentSemesterResults.subjects.reduce((sum, subject) => sum + subject.maxMarks, 0);
  const percentage = ((totalMarks / totalMaxMarks) * 100).toFixed(2);

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
          <FileText className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Academic Records</h1>
          <p className="text-muted-foreground">View your examination results and academic performance</p>
        </div>
      </div>

      {/* Academic Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current CGPA</CardTitle>
            <Trophy className="w-4 h-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{currentSemesterResults.cgpa}</div>
            <p className="text-xs text-muted-foreground">Out of 10.0</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current SGPA</CardTitle>
            <TrendingUp className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{currentSemesterResults.sgpa}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Percentage</CardTitle>
            <BookOpen className="w-4 h-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{percentage}%</div>
            <p className="text-xs text-muted-foreground">Current semester</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Credits</CardTitle>
            <Calendar className="w-4 h-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{currentSemesterResults.earnedCredits}</div>
            <p className="text-xs text-muted-foreground">Credits earned</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Semester Results */}
        <div className="lg:col-span-2">
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Current Semester Results - {currentSemesterResults.semester}</CardTitle>
                <Button onClick={handleDownloadMarksheet} className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-medium text-muted-foreground">Subject</th>
                      <th className="text-center py-3 font-medium text-muted-foreground">Credits</th>
                      <th className="text-center py-3 font-medium text-muted-foreground">Marks</th>
                      <th className="text-center py-3 font-medium text-muted-foreground">Grade</th>
                      <th className="text-center py-3 font-medium text-muted-foreground">GP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSemesterResults.subjects.map((subject, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-3">
                          <div>
                            <p className="font-medium text-foreground">{subject.name}</p>
                            <p className="text-xs text-muted-foreground">{subject.code}</p>
                          </div>
                        </td>
                        <td className="py-3 text-center font-medium text-foreground">{subject.credits}</td>
                        <td className="py-3 text-center">
                          <p className="font-medium text-foreground">{subject.marks}</p>
                          <p className="text-xs text-muted-foreground">/{subject.maxMarks}</p>
                        </td>
                        <td className="py-3 text-center">
                          <Badge className={getGradeColor(subject.grade)}>
                            {subject.grade}
                          </Badge>
                        </td>
                        <td className="py-3 text-center font-medium text-primary">{subject.gp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-card-secondary rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">SGPA</p>
                    <p className="text-xl font-bold text-primary">{currentSemesterResults.sgpa}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">CGPA</p>
                    <p className="text-xl font-bold text-success">{currentSemesterResults.cgpa}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Credits</p>
                    <p className="text-xl font-bold text-accent">{currentSemesterResults.totalCredits}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Percentage</p>
                    <p className="text-xl font-bold text-warning">{percentage}%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Semester History */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Semester History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {semesterHistory.map((sem, index) => (
                  <div key={index} className={`p-3 rounded-lg ${
                    sem.status === 'current' ? 'bg-primary/10 border border-primary/20' : 'bg-card-secondary'
                  }`}>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-foreground">{sem.semester}</p>
                      <Badge className={`text-xs ${
                        sem.status === 'current' ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'
                      }`}>
                        {sem.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div>
                        <p className="text-xs text-muted-foreground">SGPA</p>
                        <p className="text-sm font-medium">{sem.sgpa}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">CGPA</p>
                        <p className="text-sm font-medium">{sem.cgpa}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Exams */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-warning" />
                <span>Upcoming Exams</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingExams.map((exam, index) => (
                  <div key={index} className="p-3 rounded-lg bg-card-secondary">
                    <p className="font-medium text-sm text-foreground">{exam.subject}</p>
                    <p className="text-xs text-muted-foreground">{exam.code}</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        {exam.date} at {exam.time}
                      </p>
                      <p className="text-xs text-muted-foreground">Duration: {exam.duration}</p>
                    </div>
                  </div>
                ))}
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={handleDownloadTranscript}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Transcript
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Grade Report
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Exam Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};