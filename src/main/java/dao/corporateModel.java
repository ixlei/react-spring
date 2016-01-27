package dao;

public class corporateModel {
	private String id;
	private String companyName;
	private String productType;
	private String registerAddress;
	private String moneyType;
	private int investmentMin;
	private int investmentMax;
	private String username;

	public void setcompanyName(String companyName) {
		this.companyName = companyName;
	}
	
	public String getcompanyName() {
		return this.companyName;
	}
	
	public void setid(String id) {
		this.id = id;
	}

	public String getid() {
		return this.id;
	}

	public void setproductType(String productType) {
		this.productType = productType;
	}

	public String getproductType() {
		return this.productType;
	}

	public void setregisterAddress(String registerAddress) {
		this.registerAddress = registerAddress;
	}

	public String getregisterAddress() {
		return this.registerAddress;
	}

	public void setmoneyType(String moneyType) {
		this.moneyType = moneyType;
	}

	public String getmoneyType() {
		return this.moneyType;
	}

	public void setinvestmentMin(int investmentMin) {
		this.investmentMin = investmentMin;
	}

	public int getinvestmentMin() {
		return this.investmentMin;
	}

	public void setinvestmentMax(int investmentMax) {
		this.investmentMax = investmentMax;
	}

	public int getinvestmentMax() {
		return this.investmentMax;
	}

	public void setusername(String username) {
		this.username = username;
	}
	
	public String getusername() {
		return this.username;
	}
}
