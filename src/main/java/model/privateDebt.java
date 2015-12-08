package model;

public final class privateDebt {
	private double publishMoneyMin;
	private double publishMonyMax;
	private String returnMoneyWay;
	private int publishFixedYesrs;
	private String publishFinsh;
	private double occupyMaxInterestMin;
	private double occupyMaxInterestMax;
	private String occupyTime;
	private double netAsset;
	private String riskCotrollRequest;
	private String returnSource;
	private double turnover;
	private String investmentMinRequest;
	private String bondsman;
	private String customer;
	private String time;
	private double netProfit;
	
	public privateDebt() {
		
	}
	
	public void setPubMoneyMin(double publishMoneyMin) {
		this.publishMoneyMin = publishMoneyMin;
	}
	
	public void setPubMoneyMax(double publishMoneyMax) {
		this.publishMonyMax = publishMoneyMax;
	}
	
	public void setReturnMoneyWay(String returnMoneyWay) {
		this.returnMoneyWay = returnMoneyWay;
	}
	
	public String getReturnMoneyWay() {
		return this.returnMoneyWay;
	}
	
	public void setPubFixedYears(int publishFixedYears) {
		this.publishFixedYesrs = publishFixedYears;
	}
	
	public void setPubFinsh(String publishFinsh) {
		this.publishFinsh = publishFinsh;
	}
	
	public void setOccupyTime(String occupyTime) {
		this.occupyTime = occupyTime;
	}
	
	public String getOccupyTime() {
		return this.occupyTime;
	}
	
	public void setoccupyMaxInterestMin(double occupyMaxInterestMin) {
		this.occupyMaxInterestMin = occupyMaxInterestMin;
	}
	
	public void setoccupyMaxInterestMax(double occupyMaxInterestMax) {
		this.occupyMaxInterestMax = occupyMaxInterestMax;
	}
	
	public void setNetAsset(double netAsset) {
		this.netAsset = netAsset;
	}
	
	public void setRiskCotrollReq(String riskControllRequest) {
		this.riskCotrollRequest = riskControllRequest;
	}
	
	public String getRiskControllReq() {
		return this.riskCotrollRequest;
	}
	
	public void setReturnSource(String returnSource) {
		this.returnSource = returnSource;
	}
	
	public String getReturnSource() {
		return this.returnSource;
	}
	
	public void setInvestmentMinRequest(String investmentMinRequest) {
		this.investmentMinRequest = investmentMinRequest;
	}
	
	public void setBondsman(String bondsman) {
		this.bondsman = bondsman;
	}
	
	
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	
	public void setTime(String time) {
		this.time = time;
	}
	
	public double getPubMoneyMin() {
		return this.publishMoneyMin;
	}
	
	public double getPubMoneyMax() {
		return this.publishMonyMax;
	}
	
	public int getPubFixedYesrs() {
		return this.publishFixedYesrs;
	}
	
	public String getPubFinsh() {
		return this.publishFinsh;
	}
	
	public double getoccupyMaxInterestMin() {
		return this.occupyMaxInterestMin;
	}
	
	public double getoccupyMaxInterestMax() {
		return this.occupyMaxInterestMax;
	}
	
	public double getNetAsset() {
		return this.netAsset;
	}
	
	public void setTurnover(double turnover) {
		this.turnover = turnover;
	}
	
	public double getTurnover() {
		return this.turnover;
	}

	public String getInvestmentReq() {
		return this.investmentMinRequest;
	}
	
	public String getbondsman() {
		return this.bondsman;
	}
	
	public String getCustomer() {
		return this.customer;
	}

	public String getTime() {
		return this.time;
	}
	
	public void setNetProfit(double netProfit) {
		this.netProfit = netProfit;
	}
	
	public double getNetProfit() {
		return this.netProfit;
	}
}
