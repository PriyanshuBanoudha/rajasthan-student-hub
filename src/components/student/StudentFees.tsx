import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download, Receipt, Calendar, CheckCircle, Clock } from "lucide-react";

const feeStructure = {
  tuitionFee: 60000,
  examFee: 5000,
  libraryFee: 2000,
  hostelFee: 25000,
  miscFee: 3000,
  total: 95000
};

const paymentHistory = [
  {
    id: "PAY001",
    description: "Semester 6 - Tuition Fee",
    amount: 30000,
    dueDate: "2024-01-15",
    paidDate: "2024-01-10",
    status: "paid",
    receiptNo: "REC001"
  },
  {
    id: "PAY002", 
    description: "Semester 6 - Hostel Fee",
    amount: 12500,
    dueDate: "2024-01-15",
    paidDate: "2024-01-10",
    status: "paid",
    receiptNo: "REC002"
  },
  {
    id: "PAY003",
    description: "Semester 6 - Examination Fee",
    amount: 2500,
    dueDate: "2024-03-15",
    paidDate: null,
    status: "pending",
    receiptNo: null
  }
];

const currentSemesterFee = {
  totalFee: 47500,
  paidAmount: 42500,
  pendingAmount: 5000,
  dueDate: "2024-03-15"
};

export const StudentFees = () => {
  const handlePayNow = (paymentId: string) => {
    console.log("Processing payment for:", paymentId);
  };

  const handleDownloadReceipt = (receiptNo: string) => {
    console.log("Downloading receipt:", receiptNo);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
          <CreditCard className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fee Status</h1>
          <p className="text-muted-foreground">Track your fee payments and download receipts</p>
        </div>
      </div>

      {/* Current Semester Summary */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Current Semester Fee Status</span>
            <Badge className={`${
              currentSemesterFee.pendingAmount > 0 ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
            }`}>
              {currentSemesterFee.pendingAmount > 0 ? 'Partial Payment' : 'Fully Paid'}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Total Fee</p>
              <p className="text-2xl font-bold text-foreground">₹{currentSemesterFee.totalFee.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Paid Amount</p>
              <p className="text-2xl font-bold text-success">₹{currentSemesterFee.paidAmount.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Pending Amount</p>
              <p className="text-2xl font-bold text-warning">₹{currentSemesterFee.pendingAmount.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Due Date</p>
              <p className="text-lg font-medium text-destructive">{currentSemesterFee.dueDate}</p>
            </div>
          </div>
          
          {currentSemesterFee.pendingAmount > 0 && (
            <div className="mt-6">
              <Button className="w-full md:w-auto bg-gradient-primary text-primary-foreground shadow-glow">
                Pay Pending Amount - ₹{currentSemesterFee.pendingAmount.toLocaleString()}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Fee Structure */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Annual Fee Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-card-secondary">
                <span className="text-foreground">Tuition Fee</span>
                <span className="font-medium">₹{feeStructure.tuitionFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-card-secondary">
                <span className="text-foreground">Examination Fee</span>
                <span className="font-medium">₹{feeStructure.examFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-card-secondary">
                <span className="text-foreground">Library Fee</span>
                <span className="font-medium">₹{feeStructure.libraryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-card-secondary">
                <span className="text-foreground">Hostel Fee</span>
                <span className="font-medium">₹{feeStructure.hostelFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-card-secondary">
                <span className="text-foreground">Miscellaneous Fee</span>
                <span className="font-medium">₹{feeStructure.miscFee.toLocaleString()}</span>
              </div>
            </div>
            <div className="border-t border-border pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-foreground">Total Annual Fee</span>
                <span className="text-primary">₹{feeStructure.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentHistory.map((payment) => (
              <div key={payment.id} className="p-4 border border-border rounded-lg bg-card-secondary">
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        payment.status === 'paid' ? 'bg-success/10' : 'bg-warning/10'
                      }`}>
                        {payment.status === 'paid' ? 
                          <CheckCircle className="w-4 h-4 text-success" /> :
                          <Clock className="w-4 h-4 text-warning" />
                        }
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{payment.description}</p>
                        <p className="text-sm text-muted-foreground">
                          Due: {payment.dueDate} 
                          {payment.paidDate && ` • Paid: ${payment.paidDate}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">₹{payment.amount.toLocaleString()}</p>
                      <Badge className={`${
                        payment.status === 'paid' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                      }`}>
                        {payment.status}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      {payment.status === 'paid' ? (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleDownloadReceipt(payment.receiptNo!)}
                          className="flex items-center space-x-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>Receipt</span>
                        </Button>
                      ) : (
                        <Button 
                          size="sm"
                          onClick={() => handlePayNow(payment.id)}
                          className="bg-gradient-success text-success-foreground"
                        >
                          Pay Now
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Payment Schedule</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Receipt className="w-4 h-4" />
              <span>All Receipts</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Fee Certificate</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};