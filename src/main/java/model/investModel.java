package model;

public class investModel {
	private String id;
	private String companyName;
	private String registerAddress;
	private String workField;
	private double publishMoneyMin;
	private String creditLevel;
	private String productType;
	public double returnRate;
	
	public void setregisterAddress(String registerAddress) {
		this.registerAddress = registerAddress;
	}
	
	public String getregisterAddress() {
		return this.registerAddress;
	}
	
	public void setid(String cid) {
		this.id = cid;
	}
	
	public String getid() {
		return this.id;
	}
	
	public void setWorkField(String workField) {
		this.workField = workField;
	}
	
	public String getWorkField() {
		return this.workField;
	}
	
	public void setPublishMoneyMin(double publishMoneyMin) {
		this.publishMoneyMin = publishMoneyMin;
	}
	
	public double getpublishMoneyMin() {
	      return this.publishMoneyMin;
	}
	
	public void setcompanyName(String name) {
		this.companyName = name;
	}
	
	public String getcompanyName() {
		return this.companyName;
	}
	
	public void setcreditLevel(String creditLevel) {
		this.creditLevel = creditLevel;
	}
	
	public String getcreditLevvel() {
		return this.creditLevel;
	}
	
	public void setproductType(String productType) {
		this.productType = productType;
	}
	
	public String getproductType() {
		return this.productType;
	}
	
	public void setreturnRate(double returnRate) {
		this.returnRate = returnRate;
	}
	
	public double getreturnRate() {
		return this.returnRate;
	}
}
