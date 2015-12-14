package dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.stockBuy;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

@SuppressWarnings("deprecation")
public class stockBuyDao {
	private SimpleJdbcTemplate jdbcTemplate;

	public stockBuyDao() {

	}

	public void setJdbcTemplate(SimpleJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public SimpleJdbcTemplate getJdbcTemplate() {
		return this.jdbcTemplate;
	}

	public void insert(stockBuy user) {
		String sql = "insert into stockBuy (customer, investmentMin, investmentMax, investmentTimeOut,"
				+ "investmentProportionMin, investmentProportionMax, investmentStage, fileProvideRequest, investmentRequest, postTime)"
				+ " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		jdbcTemplate.update(sql, user.getCustomer(), user.getInvestmentMin(),
				user.getInvestmentMax(), user.getInvestmentTimeOut(),
				user.getInvestmentProportionMin(),
				user.getInvestmentProportionMax(), user.getInvestmentStage(),
				user.getFileProvideRequest(), user.getInvestmentRequest(), user.getTime());
	}

	public ArrayList<stockBuy> getDebtUser() {
		String sql = "select customer, investmentMin, investmentMax, investmentTimeOut, investmentProportionMin,"
				+ "investmentProportionMax, investmentStage, fileProvideRequest, investmentRequest from stockBuy";
		ArrayList<stockBuy> list = (ArrayList<stockBuy>) jdbcTemplate.query(
				sql, new RowMapper<stockBuy>() {
					public stockBuy mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						stockBuy customer = new stockBuy();
						customer.setCustomer(rs.getString(1));
						customer.setInvestmentMin(Integer.parseInt(rs
								.getString(2)));
						customer.setInvestmentMax(Integer.parseInt(rs
								.getString(3)));
						customer.setInvestmentTimeOut(Integer.parseInt(rs
								.getString(4)));
						customer.setInvestmentProportionMin(Integer.parseInt(rs
								.getString(5)));
						customer.setInvestmentProportionMax(Integer.parseInt(rs
								.getString(6)));
						customer.setInvestmentStage(rs.getString(7));
						customer.setFileProvideRequest(rs.getString(8));
						customer.setInvestmentRequest(rs.getString(9));
						return customer;
					}

				}, "");
		return list;
	}

	public ArrayList<stockBuy> getDebtCustomerById(String customerId) {
		String sql = "select customer, investmentMin, investmentMax, investmentTimeOut,investmentProportionMin,"
				+ "investmentProportionMax, investmentStage, fileProvideRequest, investmentRequest from stockBuy where customer = ?";
		ArrayList<stockBuy> list = (ArrayList<stockBuy>) jdbcTemplate.query(
				sql, new RowMapper<stockBuy>() {
					public stockBuy mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						stockBuy customer = new stockBuy();
						customer.setCustomer(rs.getString(1));
						customer.setInvestmentMin(Integer.parseInt(rs
								.getString(2)));
						customer.setInvestmentMax(Integer.parseInt(rs
								.getString(3)));
						customer.setInvestmentTimeOut(Integer.parseInt(rs
								.getString(4)));
						customer.setInvestmentProportionMin(Integer.parseInt(rs
								.getString(5)));
						customer.setInvestmentProportionMax(Integer.parseInt(rs
								.getString(6)));
						customer.setInvestmentStage(rs.getString(7));
						customer.setFileProvideRequest(rs.getString(8));
						customer.setInvestmentRequest(rs.getString(9));
						return customer;
					}

				}, customerId);
		return list;

	}

}
