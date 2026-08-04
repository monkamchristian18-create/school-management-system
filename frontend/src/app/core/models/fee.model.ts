/**
 * Fee Type
 */
export enum FeeType {


  TUITION = 'TUITION',

  REGISTRATION = 'REGISTRATION',

  TRANSPORT = 'TRANSPORT',

  LIBRARY = 'LIBRARY',

  HOSTEL = 'HOSTEL',

  EXAMINATION = 'EXAMINATION',

  OTHER = 'OTHER'

}


/**
 * Payment Status
 */
export enum PaymentStatus {


  PAID = 'PAID',

  PARTIAL = 'PARTIAL',

  PENDING = 'PENDING',

  OVERDUE = 'OVERDUE',

  CANCELLED = 'CANCELLED'

}


/**
 * Payment Method
 */
export enum PaymentMethod {


  CASH = 'CASH',

  BANK = 'BANK',

  MOBILE_MONEY = 'MOBILE_MONEY',

  CARD = 'CARD',

  ONLINE = 'ONLINE'

}


/**
 * Fee Interface
 */
export interface Fee {


  id: number;


  studentId: number;


  feeType: FeeType;


  title: string;


  description?: string;


  amount: number;


  paidAmount: number;


  remainingAmount: number;


  paymentStatus: PaymentStatus;


  paymentMethod?: PaymentMethod;


  paymentDate?: Date;


  dueDate: Date;


  academicYear: string;


  semester?: string;


  receiptNumber?: string;


  collectedBy?: number;


  createdAt: Date;


  updatedAt: Date;

}


/**
 * Create Fee Request
 */
export interface CreateFeeRequest {


  studentId: number;


  feeType: FeeType;


  title: string;


  description?: string;


  amount: number;


  dueDate: Date;


  academicYear: string;


  semester?: string;

}


/**
 * Payment Request
 */
export interface PaymentRequest {


  feeId: number;


  amount: number;


  paymentMethod: PaymentMethod;


  paymentDate: Date;


  notes?: string;

}


/**
 * Fee Update Request
 */
export interface UpdateFeeRequest {


  title?: string;


  description?: string;


  amount?: number;


  dueDate?: Date;


  paymentStatus?: PaymentStatus;

}


/**
 * Fee Statistics
 */
export interface FeeStatistics {


  totalFees: number;


  totalPaid: number;


  totalPending: number;


  totalOverdue: number;


  collectionPercentage: number;

}


/**
 * Fee Filter
 */
export interface FeeFilter {


  studentId?: number;


  feeType?: FeeType;


  paymentStatus?: PaymentStatus;


  academicYear?: string;


  startDate?: Date;


  endDate?: Date;

}