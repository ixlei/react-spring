package dao;

import model.privateEquity;

import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

@SuppressWarnings("deprecation")
public class privateEquityDao {
	
	private SimpleJdbcTemplate jdbcTemplate;
	
	public privateEquityDao() {
		
	}
	
	public void setJdbcTemplate(SimpleJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public void insert(privateEquity customer) {
		String sql = "insert into privateEquity (publishMonyMin, publishMoneyMax, publishFixedYesrs, publishFinsh, occupyPercentMin, "
				+ "occupyPercentMax, netAsset, exitWay, turnover, currentStage, netProfit, exitMinTime, investmentMinRequest, "
				+ "bondsman, minAddto,  customer, time) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		jdbcTemplate.update(sql, customer.getPubMoneyMin(), customer.getPubMoneyMax(), customer.getPubFixedYesrs(),
				customer.getPubFinsh(), customer.getOccupyPercentMin(), customer.getOccupyPercentMax(), customer.getNetAsset(),
				customer.getExitWay(), customer.getTurnover(), customer.getCurrentStage(), customer.getNetProfit(), customer.getexitMintime(),
				customer.getInvestmentReq(), customer.getbondsman(), customer.getMinAddto(), customer.getCustomer(), 
				customer.getTime());
	}
	
	/*public ArrayList<privateEquity> getPrivateEquity() {
		String sql = "select ";
	}*/
}
