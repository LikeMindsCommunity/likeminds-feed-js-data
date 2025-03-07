class CloseReportRequest {
    reportId: number;
  
    constructor(reportId: number) {
      this.reportId = reportId;
    }
  
    public static builder(): CloseReportRequestBuilder {
      return new CloseReportRequestBuilder();
    }
  }
  
  export class CloseReportRequestBuilder {
    private reportId!: number;
  
    public setReportId(reportId: number): CloseReportRequestBuilder {
      this.reportId = reportId;
      return this;
    }
  
    public build(): CloseReportRequest {
      return new CloseReportRequest(this.reportId);
    }
  }
  
  export default CloseReportRequest;