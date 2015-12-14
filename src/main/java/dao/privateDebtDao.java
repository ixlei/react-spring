package dao;


import model.privateDebt;

import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

@SuppressWarnings("deprecation")
public class privateDebtDao {
	private SimpleJdbcTemplate jdbcTemplate;
	
	public void setJdbcTemplate(SimpleJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public SimpleJdbcTemplate getJdbcTemplate() {
		return this.jdbcTemplate;
	}
	
	public privateDebtDao () {
		
	}
	
	public void insert(privateDebt customer) {
		String sql = "insert into privateEquity (publishMoneyMin, publishMoneyMax, publishFixedYesrs, publishFinsh, occupyMaxInterestMin "
				+ "occupyMaxInterestMax, netAsset, returnMoneyWay, turnover, riskCotrollRequest, netProfit, investmentMinRequest, "
				+ "bondsman, customer, time) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		jdbcTemplate.update(sql, customer.getPubMoneyMin(), customer.getPubMoneyMax(), customer.getPubFixedYesrs(),
				customer.getPubFinsh(), customer.getoccupyMaxInterestMin(), customer.getoccupyMaxInterestMax(), customer.getNetAsset(),
				customer.getReturnMoneyWay(), customer.getTurnover(), customer.getRiskControllReq(), customer.getNetProfit(),
				customer.getInvestmentReq(), customer.getbondsman(),customer.getCustomer(), customer.getTime());
	}
}
