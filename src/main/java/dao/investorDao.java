package dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

import com.itextpdf.text.List;

import model.Investor;

@SuppressWarnings("deprecation")
public class investorDao {

	private SimpleJdbcTemplate jdbcTemplate;

	private static final String SQL_INSERT = " insert into investor (email, password, username, IdCard) "
			+ " values (?, ?, ?, ?) ";

	public void setJdbcTemplate(SimpleJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public void insert(Investor user) {
		jdbcTemplate.update(SQL_INSERT, user.getEmail(), user.getPassword(),
				user.getUsername(), user.getIdCard());
	}

	public void updatePassword(Investor user) {
		String sql = "update investor set password = ? where email = ?";
		jdbcTemplate.update(sql, user.getPassword(), user.getEmail());

	}

	public void update(Investor user) {
		String sql = "update investor set email = ?, password = ?, username = ?, IdCard = ? where uid = ?";

		jdbcTemplate.update(sql, user.getEmail(), user.getPassword(),
				user.getUsername(), user.getIdCard(), user.getUid());
	}

	public Investor getInvestorById(String uid) {
		String sql = "select uid, email, password, username, IdCard from investor where uid = ?";
		ArrayList<Investor> list = (ArrayList<Investor>) jdbcTemplate.query(
				sql, new RowMapper<Investor>() {

					public Investor mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						Investor user = new Investor();
						user.setUid(rs.getString(1));
						user.setEmail(rs.getString(2));
						user.setPassword(rs.getString(3));
						user.setUsername(rs.getString(4));
						return user;
					}

				}, uid);

		if (list.isEmpty()) {
			return null;
		}

		return list.get(0);
	}

	public Investor getInvestorByEmail(String email) {
		String sql = "select uid, email, password, username, IdCard from investor where email = ?";

		ArrayList<Investor> emailList = (ArrayList<Investor>) jdbcTemplate
				.query(sql, new RowMapper<Investor>() {
				
					public Investor mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						Investor user = new Investor();
						user.setUid(rs.getString(1));
						user.setEmail(rs.getString(2));
						user.setPassword(rs.getString(3));
						user.setUsername(rs.getString(4));
						return user;
					}
				}, email);

		if (emailList.isEmpty()) {
			return null;
		}

		return emailList.get(0);
	}

	public Investor getInvestorByIdCard(String IdCard) {
		String sql = "select uid, email, password, IdCard from investor where IdCard = ?";

		ArrayList<Investor> UidList = (ArrayList<Investor>) jdbcTemplate.query(
				sql, new RowMapper<Investor>() {
					public Investor mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						Investor user = new Investor();
						user.setUid(rs.getString(1));
						user.setEmail(rs.getString(2));
						user.setPassword(rs.getString(3));
						user.setIdCard(rs.getString(4));
						return user;
					}
				}, IdCard);
		if (UidList.isEmpty()) {
			return null;
		}

		return UidList.get(0);
	}

	public void deleteInvestorById(String uid) {
		String sql = "delete from investor where uid = ?";
		jdbcTemplate.update(sql, uid);
	}

	public void updateOther(Investor user) {
		String sql = "update investor set companyName = ?, legalRepresentative = ?, "
				+ " legalRepresentativewt = ?, businesslicence = ?, investAddress = ?,companyAddress = ?, "
				+ "registerAddress = ?, investFiled = ?, investStage = ?, investCycle = ?,"
				+ " headquartersAddress = ?, logoUrl = ? where email = '"
				+ user.getEmail() + "'";
		jdbcTemplate.update(sql, user.getCompanyName(),
				user.getLegalRepresentative(), user.getLegalRepresentativewt(),
				user.getBusinessLicence(), user.getInvestAddress(),
				user.getCompanyAddress(), user.getRegisterAddress(),
				user.getInvestFiled(), user.getInvestStage(),
				user.getInvestCycle(), user.getHeadquartersAddress(),
				user.getLogoUrl());

	}

	public Investor getInvestorForDebt(String email) {
		String sql = "select username, investAddress,  registerAddress, legalRepresentative, investFiled, companyAddress from investor "
				+ "where email = ?";
		return jdbcTemplate.queryForObject(sql,
				new ParameterizedRowMapper<Investor>() {

		
					public Investor mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						Investor user = new Investor();
						user.setUsername(rs.getString(1));
						user.setInvestAddress(rs.getString(2));
						user.setRegisterAddress(rs.getString(3));
						user.setLegalRepresentative(rs.getString(4));
						user.setInvestFiled(rs.getString(5));
						user.setCompanyAddress(rs.getString(6));
						return user;
					}

				}, email);
	}

	public ArrayList<Object> getInvestorAll(String email) {
		String sql = "select username, contact, position, capitalFlow, registerAddress,"
				+ "investFiled,  investStage, investCycle, investorScale, investAddress, "
				+ "companyName, companyAddress, capital, legalRepresentative, legalRepresentativewt, shareholderBackground,"
				+ "manageFund, investorIndustry, investorType, successInvestor, intentionMoney, needResource, investorHistory"
				+ ", isFinsh from investor where email = ?";
		ArrayList<Object> list = new ArrayList<Object>();

		Investor user = jdbcTemplate.queryForObject(sql,
				new ParameterizedRowMapper<Investor>() {

				
					public Investor mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						Investor user = new Investor();
						user.setUsername(rs.getString(1));
						user.setContact(rs.getString(2));
						user.setPosition(rs.getString(3));
						user.setCapitalFlow(Double.parseDouble(rs.getString(4)));
						user.setRegisterAddress(rs.getString(5));
						user.setInvestFiled(rs.getString(6));
						user.setInvestStage(rs.getString(7));
						user.setInvestCycle(Integer.parseInt(rs.getString(8)));
						user.setInvestorScale(rs.getString(9));
						user.setInvestAddress(rs.getString(10));
						user.setCompanyName(rs.getString(11));
						user.setCompanyAddress(rs.getString(12));
						user.setCapital(Double.parseDouble(rs.getString(13)));
						user.setLegalRepresentative(rs.getString(14));
						user.setLegalRepresentativewt(rs.getString(15));
						user.setShareholderBackground(rs.getString(16));
						user.setManageFund(rs.getString(17));
						user.setInvestorIndustry(rs.getString(18));
						user.setInvestorType(rs.getString(19));
						user.setSuccessInvestor(rs.getString(20));
						user.setIntentionMoney(Double.parseDouble(rs
								.getString(21)));
						user.setNeedResource(rs.getString(22));
						user.setInvestorHistory(rs.getString(23));
						user.setIsFinsh(Boolean.parseBoolean(rs.getString(24)));
						return user;
					}
				}, email);
		list.add(user);
		return list;
	}

	public void toPerfect(Investor user) {
		String sql = "update investor set contact = ?, position = ?, capitalFlow = ?, registerAddress = ?,"
				+ "investFiled = ?, investStage = ?, investCycle = ?, investorScale = ?, investAddress = ?,"
				+ "companyName = ?, companyAddress = ?, legalRepresentative = ?, legalRepresentativewt = ?,"
				+ "shareholderBackground = ?, manageFund = ?, investorIndustry = ?, investorType = ?, successInvestor =?,"
				+ "intentionMoney = ?, needResource = ?, investorHistory = ? where email = '"
				+ user.getEmail() + "'";

		jdbcTemplate.update(sql, user.getContact(), user.getPosition(),
				user.getCapitalFlow(), user.getRegisterAddress(),
				user.getInvestFiled(), user.getInvestStage(),
				user.getInvestCycle(), user.getInvestorScale(),
				user.getInvestAddress(), user.getCompanyName(),
				user.getCompanyAddress(), user.getLegalRepresentative(),
				user.getLegalRepresentativewt(),
				user.getShareholderBackground(), user.getManageFund(),
				user.getInvestorIndustry(), user.getInvestorType(),
				user.getSuccessInvestor(), user.getIntentionMoney(),
				user.getNeedResource(), user.getInvestorHistory());
	}
	
	public ArrayList<Investor> getInvestorAll() {
		String sql = "select username, email from investor";
		return (ArrayList<Investor>)jdbcTemplate.query(sql, new RowMapper<Investor>() {

			public Investor mapRow(ResultSet rs, int RowNum)
					throws SQLException {
				Investor user = new Investor();
				user.setUsername(rs.getString(1));
				user.setEmail("iid=" + rs.getString(2));
				return user;
			}
			
		});
	}

}
