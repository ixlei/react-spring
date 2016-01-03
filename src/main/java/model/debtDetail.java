package model;

public class debtDetail extends investModel{
	private String createTime;
	private int registerCapital;
	private String bondsman;
	private double turnover;
	private double netAsset;
	private double netProfit;
	private int publishFixedYesrs;
	private String publishFinsh;
	private String returnMoneyWay;
	private double occupyMaxInterestMax;
	private String occupyTime;
	private String riskCotrollRequest;
	private String returnSource;
	
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
	
	public void setreturnMoneyWay(String returnMoneyWay) {
		this.returnMoneyWay = returnMoneyWay;
	}
	
	public String getreturnMoneyWay() {
		return this.returnMoneyWay;
	}
	
	public void setoccupyMaxInterestMax(double occupyMaxInterestMax) {
		this.occupyMaxInterestMax = occupyMaxInterestMax;
	}
	
	public double getoccupyMaxInterestMax() {
		return this.occupyMaxInterestMax;
	}
	
	public void setoccupyTime(String occupyTime) {
		this.occupyTime = occupyTime;
	}
	
	public String getoccupyTime() {
		return this.occupyTime;
	}
	
	public void setriskCotrollRequest(String riskCotrollRequest) {
		this.riskCotrollRequest = riskCotrollRequest;
	}
	
	public String getriskCotrollRequest() {
		return this.riskCotrollRequest;
	}
	
	public void setreturnSource(String returnSource) {
		this.returnSource = returnSource;
	}
	
	public String getreturnSource() {
		return this.returnSource;
	}
	
}
