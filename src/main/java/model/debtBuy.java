package model;

public class debtBuy {
	private String customer;
	private int investmentMin;
	private int investmentMax;
	private int investmentTimeOut;
	private int returnRateMin;
	private int returnRateMax;
	private String riskControllRequest;
	private String fileProvideRequest;
	private String investmentRequest;
	private String time;
	public debtBuy() {
		
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
	
	public void setReturnRateMin(int returnRateMin) {
		this.returnRateMin = returnRateMin;
	}
	
	public void setReturnRateMax(int returnRateMax) {
		this.returnRateMax = returnRateMax;
	}
	
	public void setRiskControllRequest(String riskControllRequest) {
		this.riskControllRequest = riskControllRequest;
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
	
	public int getReturnRateMin() {
		return this.returnRateMin;
	}
	
	public int getreturnRateMax() {
		return this.returnRateMax;
	}
	
	public String getriskControllRequest() {
		return this.riskControllRequest;
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
