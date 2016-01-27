package dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.Investor;
import model.companyuser;
import model.stock;
import model.corporateModel;
import model.debt;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

@SuppressWarnings("deprecation")
public class companyuserDao {
	private SimpleJdbcTemplate jdbcTemplate;

	public void setJdbcTemplate(SimpleJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	private final static String SQL_INSERT = "insert into companyuser (email, password, companyName, code) "
			+ "values(?, ?, ?, ?)";

	public void insert(companyuser newUser) {
		jdbcTemplate.update(SQL_INSERT, newUser.getEmail(),
				newUser.getPassword(), newUser.getCompanyName(),
				newUser.getCode());
	}

	public void completeReg(companyuser newUser) {

	}

	public void updatePassword(companyuser newUser) {

		String sql = "update companyuser set password = ? where email = ?";
		jdbcTemplate.update(sql, newUser.getPassword(), newUser.getEmail());
	}

	public companyuser getCompanyUserByEmail(String email) {
		String sql = "select cid, email, password, companyName, code from companyuser where email = ?";

		ArrayList<companyuser> emailList = (ArrayList<companyuser>) jdbcTemplate
				.query(sql, new RowMapper<companyuser>() {
					public companyuser mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						companyuser user = new companyuser();
						user.setCid(rs.getString(1));
						user.setEmail(rs.getString(2));
						user.setPassword(rs.getString(3));
						user.setCompanyName(rs.getString(4));
						user.setCode(rs.getString(5));
						return user;
					}
				}, email);

		if (emailList.isEmpty()) {
			return null;
		}

		return emailList.get(0);
	}

	public companyuser getCompanyUserByCode(String code) {
		String sql = "select cid, email, password, companyName, code from companyuser where code = ?";
		ArrayList<companyuser> codeList = (ArrayList<companyuser>) jdbcTemplate
				.query(sql, new RowMapper<companyuser>() {

					public companyuser mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						companyuser user = new companyuser();
						user.setCid(rs.getString(1));
						user.setEmail(rs.getString(2));
						user.setPassword(rs.getString(3));
						user.setCompanyName(rs.getString(4));
						user.setCode(rs.getString(5));
						return user;
					}

				}, code);

		if (codeList.isEmpty()) {
			return null;
		}

		return codeList.get(0);
	}

	public companyuser getCompanyUserByName(String name) {
		String sql = "select cid, email, password, companyName, code from companyuser where companyName = ?";
		ArrayList<companyuser> companyNameList = (ArrayList<companyuser>) jdbcTemplate
				.query(sql, new RowMapper<companyuser>() {

					public companyuser mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						companyuser user = new companyuser();
						user.setCid(rs.getString(1));
						user.setEmail(rs.getString(2));
						user.setPassword(rs.getString(3));
						user.setCompanyName(rs.getString(4));
						user.setCode(rs.getString(5));
						return user;
					}

				}, name);

		if (companyNameList.isEmpty()) {
			return null;
		}
		return companyNameList.get(0);
	}

	public void deleteByEmail(String email) {
		String sql = "delete from companyuser where email = ?";
		jdbcTemplate.update(sql, email);
	}

	public void update(companyuser user) {
		String sql = "update companyuser set companyType = ?, registerCapital = ?,  businessLicence = ?, "
				+ "legalRepresentative = ?, createTime = ?, registerAddress = ?, headquartersAddress = ?, phoneNumber = ?, "
				+ "workField = ?, mainField = ?, earnPattern = ?, logoUrl = ? where email = '"
				+ user.getEmail() + "'";
		jdbcTemplate.update(sql, user.getCompanyType(),
				user.getRegisterCapital(), user.getBusinessLicence(),
				user.getLegalRepresentative(), user.getCreateTime(),
				user.getRegisterAddress(), user.getHeadquartersAddress(),
				user.getPhoneNumber(), user.getWorkField(),
				user.getMainField(), user.getearnPattern(), user.getLogoUrl());
	}

	public companyuser getCompanyUserForPrivateEquity(String email) {

		String sql = "select companyName, registerAddress, createTime, registerCapital,"
				+ "workField from companyuser where email = ?";
		return jdbcTemplate.queryForObject(sql,
				new ParameterizedRowMapper<companyuser>() {

					public companyuser mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						companyuser user = new companyuser();
						user.setCompanyName(rs.getString(1));
						user.setRegisterAddress(rs.getString(2));
						user.setCreateTime(rs.getString(3));
						user.setRegisterCapital(Integer.parseInt(rs
								.getString(4)));
						user.setWorkField(rs.getString(5));
						return user;
					}

				}, email);
	}
	
	public ArrayList<companyuser> getCompanyUserAll() {
		String sql = "select companyName, email from companyuser";
		
		return (ArrayList<companyuser>) jdbcTemplate.query(sql, new RowMapper<companyuser>() {

			public companyuser mapRow(ResultSet rs, int RowNum)
					throws SQLException {
				companyuser user = new companyuser();
				user.setCompanyName(rs.getString(1));
				user.setEmail("cid=" + rs.getString(2));
				return user;
			}
			
		});
	}

	public ArrayList<corporateModel> getCorporateModel() {
		String sql = "select id, companyName, registerAddress, investmentMin, investmentMax, productType, moneyType,"
				+ "username from stockbuy as s, investor as i where s.customer = i.email union all select id, companyName,"
				+ "registerAddress, investmentMin, investmentMax, productType, moneyType,username from debtbuy as d, investor as "
				+ "i where d.customer = i.email limit 0, 10";
		ArrayList<corporateModel> list = (ArrayList<corporateModel>) jdbcTemplate
				.query(sql, new RowMapper<corporateModel>() {

					public corporateModel mapRow(ResultSet rs, int RowNum)
							throws SQLException {
						corporateModel pro = new corporateModel();
						pro.setid(rs.getString(1));
						pro.setcompanyName(rs.getString(2));
						pro.setregisterAddress(rs.getString(3));
						pro.setinvestmentMin(Integer.parseInt(rs.getString(4)));
						pro.setinvestmentMax(Integer.parseInt(rs.getString(5)));
						pro.setproductType(rs.getString(6));
						pro.setmoneyType(rs.getString(7));
						pro.setusername(rs.getString(8));
						return pro;
					}

				});
		return list;
	}

	public stock getstock(String id) {
		String sql = "select username, registerAddress, investorIndustry, investAddress, companyName,"
				+ "investmentMin, investmentMax, investmentTimeOut, investmentProportionMin, "
				+ "investmentProportionMax, investmentStage, fileProvideRequest, investmentRequest from"
				+ " stockbuy as s, investor as i where s.id = ? and i.email = s.customer limit 0, 10";
		ArrayList<stock> list = (ArrayList<stock>) jdbcTemplate.query(sql,
				new RowMapper<stock>() {

					public stock mapRow(ResultSet rs, int RowNum)
							throws SQLException {
						stock s = new stock();
						s.setusername(rs.getString(1));
						s.setregisterAddress(rs.getString(2));
						s.setinvestorIndustry(rs.getString(3));
						s.setinvestAddress(rs.getString(4));
						s.setcompanyName(rs.getString(5));
						s.setInvestmentMin(Integer.parseInt(rs.getString(6)));
						s.setInvestmentMax(Integer.parseInt(rs.getString(7)));
						s.setInvestmentTimeOut(Integer.parseInt(rs.getString(8)));
						s.setInvestmentProportionMin(Integer.parseInt(rs
								.getString(9)));
						s.setInvestmentProportionMax(Integer.parseInt(rs
								.getString(10)));
						s.setInvestmentStage(rs.getString(11));
						s.setFileProvideRequest(rs.getString(12));
						s.setInvestmentRequest(rs.getString(13));
						return s;
					}

				}, id);
		return list.get(0);
	}

	public debt getdebt(String id) {
		String sql = "select username, registerAddress, investorIndustry, investAddress, companyName,"
				+ "investmentMin, investmentMax, investmentTimeOut, returnRateMin, returnRateMax, "
				+ "fileProvideRequest, investmentRequest, riskControllRequest from debtbuy as d, "
				+ "investor as i where d.id = ? and i.email = d.customer";
		return jdbcTemplate.queryForObject(sql,
				new ParameterizedRowMapper<debt>() {

					public debt mapRow(ResultSet rs, int RowNum)
							throws SQLException {
						debt s = new debt();
						s.setusername(rs.getString(1));
						s.setregisterAddress(rs.getString(2));
						s.setinvestorIndustry(rs.getString(3));
						s.setinvestAddress(rs.getString(4));
						s.setcompanyName(rs.getString(5));
						s.setInvestmentMin(Integer.parseInt(rs.getString(6)));
						s.setInvestmentMax(Integer.parseInt(rs.getString(7)));
						s.setInvestmentTimeOut(Integer.parseInt(rs.getString(8)));
						s.setReturnRateMin(Integer.parseInt(rs.getString(9)));
						s.setReturnRateMax(Integer.parseInt(rs.getString(10)));
						s.setFileProvideRequest(rs.getString(11));
						s.setInvestmentRequest(rs.getString(12));
						s.setRiskControllRequest(rs.getString(13));
						return s;
					}

				}, id);
	}
}
