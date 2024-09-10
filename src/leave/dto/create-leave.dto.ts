export class CreateLeaveDto {
  employeeName: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
  status?: string;
}
