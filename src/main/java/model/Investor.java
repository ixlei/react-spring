package model;

public class Investor {
	private String uid;
	private String email;
	private String password;
	private String username;
	private String IdCard;
	private String companyName;
	private String legalRepresentative;
	private String legalRepresentativewt;
	private String businesslicence;
	private String investAddress;
	private String companyAddress;
	private String registerAddress;
	private int registerCapital;
	private String investFiled;
	private String investStage;
	private int investCycle;
	private String headquartersAddress;
	private String logoUrl;
	private String contact;
	private String position;
	private double capitalFlow;
	private String investorScale;
	private double capital;
	private String shareholderBackground;
	private String manageFund;
	private String investorIndustry;
	private String investorType;
	private String successInvestor;
	private double intentionMoney;
	private String needResource;
	private boolean isFinsh;
	private String investorHistory;
	
	
	public Investor() {

	}
	
	public void setInvestorHistory(String investorHistory) {
		this.investorHistory = investorHistory;
	}
	
	public String getInvestorHistory() {
		return this.investorHistory;
	}
	
	public void setContact(String contact) {
		this.contact = contact;
	}
	
	public String getContact() {
		return this.contact;
	}
	
	public void setPosition (String position) {
		this.position = position;
	}
	
	public String getPosition() {
		return this.position;
	}
	
	public void setCapitalFlow(double capitalFolw) {
		this.capitalFlow = capitalFolw;
	}
	
	public double getCapitalFlow() {
		return this.capitalFlow;
	}
	
	public void setInvestorScale(String investorScale) {
		this.investorScale = investorScale;
	}
	
	public String getInvestorScale() {
		return this.investorScale;
	}
	
	public void setCapital(double capital) {
		this.capital = capital;
	}
	
	public double getCapital() {
		return this.capital;
	}
	
	public void setShareholderBackground(String shareholderBackground) {
		this.shareholderBackground = shareholderBackground;
	}
	
	public String getShareholderBackground() {
		return this.shareholderBackground;
	}
	
	public void setManageFund(String manageFund) {
		this.manageFund = manageFund;
	}
	
	public String getManageFund() {
		return this.manageFund;
	}
	
	public void setInvestorIndustry(String investorIndustry) {
		this.investorIndustry = investorIndustry;
	}
	
	public String getInvestorIndustry() {
		return this.investorIndustry;
	}
	
	public void setInvestorType(String investorType) {
		this.investorType = investorType;
	}
	
	public String getInvestorType() {
		return this.investorType;
	}
	
	public void setSuccessInvestor(String successInvestor) {
		this.successInvestor = successInvestor;
	}
	
	public String getSuccessInvestor() {
		return this.successInvestor;
	}
	
	public void setIntentionMoney(double intentionMoney) {
		this.intentionMoney = intentionMoney;
	}
	
	public double getIntentionMoney() {
		return this.intentionMoney;
	}
	
	public void setNeedResource(String needResource) {
		this.needResource = needResource;
	}
	
	public String getNeedResource() {
		return this.needResource;
	}
	
	public void setIsFinsh(boolean isFinsh) {
		this.isFinsh = isFinsh;
	}
	
	public boolean getISFinsh() {
		return this.isFinsh;
	}
	
 	public Investor(String email, String password, String username,
			String IdCard) {
		this.email = email;
		this.password = password;
		this.username = username;
		this.IdCard = IdCard;
	}

	public Investor(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public Investor(String uid, String email, String password, String username,
			String IdCard) {
		this.uid = uid;
		this.email = email;
		this.password = password;
		this.username = username;
		this.IdCard = IdCard;
	}

	public Investor(String uid, String companyName, String legalRepresentative,
			String legalRepresentativewt, String businesslicence,
			String investAddress, String companyAddress,
			String registerAddress, int registerCapital, String investFiled,
			String investStage, int investCycle, String headquartersAddress) {
		this.companyName = companyName;
		this.legalRepresentative = legalRepresentative;
		this.legalRepresentativewt = legalRepresentativewt;
		this.businesslicence = businesslicence;
		this.investAddress = investAddress;
		this.companyAddress = companyAddress;
		this.registerAddress = registerAddress;
		this.investFiled = investFiled;
		this.investStage = investStage;
		this.investCycle = investCycle;
		this.headquartersAddress = headquartersAddress;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setIdCard(String IdCard) {
		this.IdCard = IdCard;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public void setLegalRepresentative(String legalRep) {
		this.legalRepresentative = legalRep;
	}

	public void setLegalRepresentativewt(String legalRepOther) {
		this.legalRepresentativewt = legalRepOther;
	}

	public void setBusinesslicence(String businessLicence) {
		this.businesslicence = businessLicence;
	}

	public void setInvestAddress(String investorAddress) {
		this.investAddress = investorAddress;
	}

	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}

	public void setRegisterAddress(String registerAddress) {
		this.registerAddress = registerAddress;
	}

	public void setRegisterCapital(int registerCapital) {
		this.registerCapital = registerCapital;
	}

	public void setInvestFiled(String investFiled) {
		this.investFiled = investFiled;
	}

	public void setInvestStage(String investStage) {
		this.investStage = investStage;
	}

	public void setInvestCycle(int investCycle) {
		this.investCycle = investCycle;
	}

	public void setHeadquartersAddress(String headquartersAddress) {
		this.headquartersAddress = headquartersAddress;
	}

	public String getUid() {
		return this.uid;
	}

	public String getEmail() {
		return this.email;
	}

	public String getPassword() {
		return this.password;
	}

	public String getUsername() {
		return this.username;
	}

	public String getIdCard() {
		return this.IdCard;
	}

	public String getCompanyName() {
		return this.companyName;

	}

	public String getLegalRepresentative() {
		return this.legalRepresentative;
	}

	public String getLegalRepresentativewt() {
		return this.legalRepresentativewt;
	}

	public String getBusinessLicence() {
		return this.businesslicence;
	}

	public String getInvestAddress() {
		return this.investAddress;
	}

	public String getCompanyAddress() {
		return this.companyAddress;
	}

	public String getRegisterAddress() {
		return this.registerAddress;
	}

	public int getRegisterCapital() {
		return this.registerCapital;
	}

	public String getInvestFiled() {
		return this.investFiled;
	}

	public String getInvestStage() {
		return this.investStage;
	}

	public int getInvestCycle() {
		return this.investCycle;
	}

	public String getHeadquartersAddress() {
		return this.headquartersAddress;
	}
	
	public void setLogoUrl(String logoUrl) {
		this.logoUrl = logoUrl;
	}
	
	public String getLogoUrl() {
		return this.logoUrl;
	}
}
