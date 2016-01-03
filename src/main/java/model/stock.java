package model;

public class stock extends stockBuy {
	private String companyName;
	private String productType;
	private String registerAddress;
	private String username;
	private String investorIndustry;
	private String investAddress;

	public void setcompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getcompanyName() {
		return this.companyName;
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

	public void setusername(String username) {
		this.username = username;
	}

	public String getusername() {
		return this.username;
	}

	public void setinvestorIndustry(String investorIndustry) {
		this.investorIndustry = investorIndustry;
	}

	public String getinvestorIndustry() {
		return this.investorIndustry;
	}

	public void setinvestAddress(String investAddress) {
		this.investAddress = investAddress;
	}

	public String getinvestAddress() {
		return this.investAddress;
	}
}
