import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Search, Download, Receipt, DollarSign, Calendar, User } from "lucide-react";

const feeRecords = [
  {
    id: "STU001",
    name: "Rahul Sharma",
    course: "B.Tech CSE",
    semester: "3rd Semester",
    totalFee: 75000,
    paidFee: 75000,
    pendingFee: 0,
    status: "paid",
    dueDate: "2024-03-15",
    lastPayment: "2024-03-10"
  },
  {
    id: "STU002", 
    name: "Priya Patel",
    course: "B.Tech ECE",
    semester: "2nd Semester",
    totalFee: 75000,
    paidFee: 50000,
    pendingFee: 25000,
    status: "pending",
    dueDate: "2024-03-20",
    lastPayment: "2024-02-15"
  },
  {
    id: "STU003",
    name: "Amit Kumar", 
    course: "Diploma ME",
    semester: "4th Semester",
    totalFee: 45000,
    paidFee: 15000,
    pendingFee: 30000,
    status: "overdue",
    dueDate: "2024-03-01",
    lastPayment: "2024-01-20"
  }
];

export const FeeManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handlePayment = (studentId: string, amount: number) => {
    toast({
      title: "Payment Processed",
      description: `Payment of ₹${amount.toLocaleString()} received for ${studentId}`,
      duration: 4000,
    });
  };

  const handleGenerateReceipt = (studentId: string) => {
    toast({
      title: "Receipt Generated",
      description: `Digital receipt generated for student ${studentId}`,
      duration: 3000,
    });
  };

  const filteredRecords = feeRecords.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || record.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalCollection = feeRecords.reduce((sum, record) => sum + record.paidFee, 0);
  const totalPending = feeRecords.reduce((sum, record) => sum + record.pendingFee, 0);

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
          <CreditCard className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fee Management</h1>
          <p className="text-muted-foreground">Track and manage student fee collections</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Collection</CardTitle>
            <DollarSign className="w-4 h-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">₹{totalCollection.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This academic year</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Amount</CardTitle>
            <Calendar className="w-4 h-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">₹{totalPending.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all students</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Collection Rate</CardTitle>
            <Receipt className="w-4 h-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {Math.round((totalCollection / (totalCollection + totalPending)) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">Payment completion rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Fee Records</CardTitle>
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
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </Button>
            </div>
          </div>

          {/* Fee Records Table */}
          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <div key={record.id} className="p-4 border border-border rounded-lg bg-card-secondary">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{record.name}</p>
                      <p className="text-xs text-muted-foreground">{record.id}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground">{record.course}</p>
                    <p className="text-xs text-muted-foreground">{record.semester}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Total Fee</p>
                    <p className="text-sm font-medium text-foreground">₹{record.totalFee.toLocaleString()}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Paid</p>
                    <p className="text-sm font-medium text-success">₹{record.paidFee.toLocaleString()}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-sm font-medium text-warning">₹{record.pendingFee.toLocaleString()}</p>
                    <Badge className={`mt-1 ${
                      record.status === 'paid' ? 'bg-success/10 text-success' :
                      record.status === 'pending' ? 'bg-warning/10 text-warning' :
                      'bg-destructive/10 text-destructive'
                    }`}>
                      {record.status}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2">
                    {record.pendingFee > 0 && (
                      <Button 
                        size="sm"
                        onClick={() => handlePayment(record.id, record.pendingFee)}
                        className="bg-gradient-success text-success-foreground"
                      >
                        Collect Fee
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleGenerateReceipt(record.id)}
                      className="flex items-center space-x-1"
                    >
                      <Receipt className="w-3 h-3" />
                      <span>Receipt</span>
                    </Button>
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