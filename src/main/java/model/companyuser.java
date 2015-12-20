package model;

public class companyuser {
	private String email;
	private String password;
	private String companyName;
	private String code;
	private String companyType;
	private int registerCapital;
	private String legalRepresentative;
	private String  businessLicence;
	private String createTime;
	private String registerAddress;
	private String headquartersAddress;
	private String phoneNumber;
	private String workField;
	private String mainField;
	private String earnPattern;
	private String logoUrl;
	private String cid;
	
	public companyuser() {
		
	}
	
	public companyuser(String email, String password, String companyName, String code) {
		this.email = email;
		this.password = password;
		this.companyName = companyName;
		this.code = code;
	}
	
	public void setCid(String cid) {
		this.cid = cid;
	}
	public String getCid() {
		return this.cid;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getEmail() {
		return this.email;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getPassword() {
		return this.password;
	}
	
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	
	public String getCompanyName() {
		return this.companyName;
	}
	
	public void setCode(String code) {
		this.code = code;
	}
	
	public String getCode() {
		return this.code;
	}
	
	public void setCompanyType(String companyType) {
		this.companyType = companyType;
	}
	
	public String getCompanyType() {
		return this.companyType;
	}
	
	public void setRegisterCapital(int registerCapital) {
		this.registerCapital = registerCapital;
	}
	
	public int getRegisterCapital() {
		return this.registerCapital;
	}
	
	public void setBusinessLicence(String businessLicence) {
		this.businessLicence = businessLicence;
	}
	
	public String getBusinessLicence() {
		return this.businessLicence;
	}
	
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	
	public String getCreateTime() {
		return this.createTime;
	}
	
	public void setRegisterAddress(String registerAddress) {
		this.registerAddress = registerAddress;
	}
	
	public String getRegisterAddress() {
		return this.registerAddress;
	}
	
	public void setHeadquartersAddress(String headquartersAddress) {
		this.headquartersAddress = headquartersAddress;
	}
	
	public String getHeadquartersAddress() {
		return this.headquartersAddress;
	}
	
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public String getPhoneNumber() {
		return this.phoneNumber;
	}
	
	public void setWorkField(String workField) {
		this.workField = workField;
	}
	
	public String getWorkField() {
		return this.workField;
	}
	
	public void setMainField(String mainField) {
		this.mainField = mainField;
	}
	
	public String getMainField() {
		return this.mainField;
	}
	
	public void setearnPattern(String earnPattern) {
		this.earnPattern = earnPattern;
	}
	
	public String getearnPattern() {
		return this.earnPattern;
	}
	
	public void setLogoUrl(String logoUrl) {
		this.logoUrl = logoUrl;
	}
	
	public String getLogoUrl() {
		return this.logoUrl;
	}
	
	public void setLegalRepresentative(String legalRepresentative) {
		this.legalRepresentative = legalRepresentative;
		
	}
	
	public String getLegalRepresentative() {
		return this.legalRepresentative;
	}
}
