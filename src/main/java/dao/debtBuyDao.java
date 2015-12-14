package dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.debtBuy;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

@SuppressWarnings("deprecation")
public class debtBuyDao {
	private SimpleJdbcTemplate jdbcTemplate;

	public debtBuyDao() {

	}

	public void setJdbcTemplate(SimpleJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public SimpleJdbcTemplate getJdbcTemplate() {
		return this.jdbcTemplate;
	}

	public void insert(debtBuy user) {
		String sql = "insert into debtbuy (customer, investmentMin, investmentMax, investmentTimeOut,"
				+ "returnRateMin, returnRateMax, riskControllRequest, fileProvideRequest, investmentRequest, postTime) "
				+ "values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		jdbcTemplate.update(sql, user.getCustomer(), user.getInvestmentMin(),
				user.getInvestmentMax(), user.getInvestmentTimeOut(),
				user.getReturnRateMin(), user.getreturnRateMax(),
				user.getriskControllRequest(), user.getFileProvideRequest(),
				user.getInvestmentRequest(),user.getTime());
	}

	public ArrayList<debtBuy> getDebtUser() {
		String sql = "select customer, investmentMin, investmentMax, investmentTimeOut, returnRateMin,"
				+ "returnRateMax, riskControllRequest, fileProvideRequest, investmentRequest from debtbuy";
		ArrayList<debtBuy> list = (ArrayList<debtBuy>) jdbcTemplate.query(sql,
				new RowMapper<debtBuy>() {
					public debtBuy mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						debtBuy customer = new debtBuy();
						customer.setCustomer(rs.getString(1));
						customer.setInvestmentMin(Integer.parseInt(rs
								.getString(2)));
						customer.setInvestmentMax(Integer.parseInt(rs
								.getString(3)));
						customer.setInvestmentTimeOut(Integer.parseInt(rs
								.getString(4)));
						customer.setReturnRateMin(Integer.parseInt(rs
								.getString(5)));
						customer.setReturnRateMax(Integer.parseInt(rs
								.getString(6)));
						customer.setRiskControllRequest(rs.getString(7));
						customer.setFileProvideRequest(rs.getString(8));
						customer.setInvestmentRequest(rs.getString(9));
						return customer;
					}

				}, "");
		return list;
	}

	public ArrayList<debtBuy> getDebtCustomerById(String customerId) {
		String sql = "select customer, investmentMin, investmentMax, investmentTimeOut, returnRateMin,"
				+ "returnRateMax, riskControllRequest, fileProvideRequest, investmentRequest from debtbuy where customer = ?";
		ArrayList<debtBuy> list = (ArrayList<debtBuy>) jdbcTemplate.query(sql,
				new RowMapper<debtBuy>() {
					public debtBuy mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						debtBuy customer = new debtBuy();
						customer.setCustomer(rs.getString(1));
						customer.setInvestmentMin(Integer.parseInt(rs
								.getString(2)));
						customer.setInvestmentMax(Integer.parseInt(rs
								.getString(3)));
						customer.setInvestmentTimeOut(Integer.parseInt(rs
								.getString(4)));
						customer.setReturnRateMin(Integer.parseInt(rs
								.getString(5)));
						customer.setReturnRateMax(Integer.parseInt(rs
								.getString(6)));
						customer.setRiskControllRequest(rs.getString(7));
						customer.setFileProvideRequest(rs.getString(8));
						customer.setInvestmentRequest(rs.getString(9));
						return customer;
					}

				}, customerId);
		return list;

	}

}
