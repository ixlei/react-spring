package model;

public class equity  extends investModel{
	private String createTime;
	private int registerCapital;
	private String bondsman;
	private double turnover;
	private double netAsset;
	private double netProfit;
	private int publishFixedYesrs;
	private String publishFinsh;
	private double investmentMinRequest;
	private double minAddto;
	private double occupyPercentMin;
	private double occupyPercentMax;
	private String exitWay;
	private int exitMinTime;
	private String currentStage;
	
	public void setcreateTime(String createTime) {
		this.createTime = createTime;
	}
	
	public String getcreateTime() {
		return this.createTime;
	}
	
	public void setregisterCapital(int registerCapital) {
		this.registerCapital = registerCapital;
	}
	
	public int getregisterCapital() {
		return this.registerCapital;
	}
	
	public void setbondsman(String bondsman) {
		this.bondsman = bondsman;
	}
	
	public String getbondsman() {
		return this.bondsman;
	}
	
	public void setturnover(double turnover) {
		this.turnover = turnover;
	}
	
	public double getturnover() {
		return this.turnover;
	}
	
	public void setnetAsset(double netAsset) {
		this.netAsset = netAsset;
	}
	
	public double getnetAsset() {
		return this.netAsset;
	}
	
	public void setnetProfit(double netProfit) {
		this.netProfit = netProfit;
	}
	
	public double getnetProfit() {
		return this.netProfit;
	}
	
	public void setpublishFixedYesrs(int publishFixedYesrs) {
		this.publishFixedYesrs = publishFixedYesrs;
	}
	
	public String getpublishFinsh() {
		return this.publishFinsh;
	}
	
	public void setpublishFinsh(String publishFinsh) {
		this.publishFinsh = publishFinsh;
	}
	
	public int getpublishFixedYesrs() {
		return this.publishFixedYesrs;
	}
	
	public void setinvestmentMinRequest(double investmentMinRequest) {
		this.investmentMinRequest = investmentMinRequest;
	}
	
	public double getinvestmentMinRequest() {
		return this.investmentMinRequest;
	}
	
	public void setminAddto(double minAddto) {
		this.minAddto = minAddto;
	}
	
	public double getminAddto() {
		return this.minAddto;
	}
	
	public void setoccupyPercentMin(double occupyPercentMin) {
		this.occupyPercentMin = occupyPercentMin;
	}
	
	public double getoccupyPercentMin() {
		return this.occupyPercentMin;
	}
	
	public void setoccupyPercentMax(double occupyPercentMax) {
		this.occupyPercentMax = occupyPercentMax;
	}
	
	public double getoccupyPercentMax() {
		return this.occupyPercentMax;
	}
	
	public void setexitWay(String exitWay) {
		this.exitWay = exitWay;
	}
	
	public String getexitWay() {
		return this.exitWay;
	}
	
	public void setexitMinTime(int exitMinTime) {
		this.exitMinTime = exitMinTime;
	}
	
	public int getexitMinTime() {
		return this.exitMinTime;
	}
	
	public void setcurrentStage(String currentStage) {
		this.currentStage = currentStage;
	}
	
	public String getcurrentStage() {
		return this.currentStage;
	}
	
}

