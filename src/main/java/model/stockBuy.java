package model;

public class stockBuy {
	private String customer;
	private int investmentMin;
	private int investmentMax;
	private int investmentTimeOut;
	private int investmentProportionMin;
	private int investmentProportionMax;
	private String investmentStage;
	private String fileProvideRequest;
	private String investmentRequest;
	private String time;
	
	public stockBuy() {
		
	}
	
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	
	public void setInvestmentMin(int investmentMin) {
		this.investmentMin = investmentMin;
	}
	
	public void setInvestmentMax(int investmentMax) {
		this.investmentMax = investmentMax;
	}
	
	public void setInvestmentTimeOut(int investmentTimeOut) {
		this.investmentTimeOut = investmentTimeOut;
	}
	
	public void setInvestmentProportionMin(int investmentProportionMin) {
		this.investmentProportionMin = investmentProportionMin;
	}
	
	public void setInvestmentProportionMax(int investmentProportionMax) {
		this.investmentProportionMax = investmentProportionMax;
	}
	
	public void setInvestmentStage(String investmentStage) {
		this.investmentStage = investmentStage;
	}
	
	public void setFileProvideRequest(String fileProvideRequest) {
		this.fileProvideRequest = fileProvideRequest;
	}
	
	public void setInvestmentRequest(String investmentRequest) {
		this.investmentRequest = investmentRequest;
	}
	
	public String getCustomer() {
		return this.customer;
	}
	
	public int getInvestmentMin() {
		return this.investmentMin;
	}
	
	public int getInvestmentMax() {
		return this.investmentMax;
	}
	
	public int getInvestmentTimeOut() {
		return this.investmentTimeOut;
	}
	
	public int getInvestmentProportionMin() {
		return this.investmentProportionMin;
	}
	
	public int getInvestmentProportionMax() {
		return this.investmentProportionMax;
	}
	
	public String getInvestmentStage() {
		return this.investmentStage;
	}
	
	public String getFileProvideRequest() {
		return this.fileProvideRequest;
	}
	
	public String getInvestmentRequest() {
		return this.investmentRequest;
	}
	
	public void setTime(String time) {
		this.time = time;
	}
	
	public String getTime() {
		return this.time;
	}
	
}
