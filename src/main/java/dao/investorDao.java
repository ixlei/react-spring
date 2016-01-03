package dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

import model.Investor;
import model.investModel;
import model.debtDetail;
import model.equity;

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

	public ArrayList<investModel> getInvestModel() {
		String sql = "select id, companyName,  productType, registerAddress, workField, publishMoneyMin, "
				+ "netProfit / turnover as turnRate, creditLevel from privateequity as pe, companyuser as c "
				+ "where pe.customer = c.email union all select id, companyName,  productType, registerAddress,"
				+ " workField, publishMoneyMin, netProfit / turnover as turnRate, creditLevel from privatedebt as pd, "
				+ "companyuser c where pd.customer = c.email";
		ArrayList<investModel> list = (ArrayList<investModel>) jdbcTemplate
				.query(sql, new RowMapper<investModel>() {

					public investModel mapRow(ResultSet rs, int RowNum)
							throws SQLException {
						investModel pro = new investModel();
						pro.setid(rs.getString(1));
						pro.setcompanyName(rs.getString(2));
						pro.setproductType(rs.getString(3));
						pro.setregisterAddress(rs.getString(4));
						pro.setWorkField(rs.getString(5));
						pro.setPublishMoneyMin(Double.parseDouble(rs
								.getString(6)));
						pro.setreturnRate(Double.parseDouble(rs.getString(7)));
						pro.setcreditLevel(rs.getString(8));
						return pro;
					}

				});
		return list;

	}

	public equity getequity(String pid) {
		String sql = "select companyName, workField, registerAddress, createTime, registerCapital, "
				+ "bondsman, turnover, netAsset, netProfit, publishMoneyMin, publishFixedYesrs, publishFinsh,"
				+ "productType, investmentMinRequest, minAddto, occupyPercentMin, occupyPercentMax, "
				+ "exitWay, exitMinTime, currentStage, id from privateequity as p, companyuser as c "
				+ "where id = ? and c.email = p.customer ";
		return jdbcTemplate.queryForObject(sql,
				new ParameterizedRowMapper<equity>() {
					public equity mapRow(ResultSet rs, int RowNum)
							throws SQLException {
						equity pro = new equity();

						pro.setcompanyName(rs.getString(1));
						pro.setWorkField(rs.getString(2));
						pro.setregisterAddress(rs.getString(3));
						pro.setcreateTime(rs.getString(4));
						pro.setregisterCapital(rs.getShort(5));
						pro.setbondsman(rs.getString(6));
						pro.setturnover(Double.parseDouble(rs.getString(7)));
						pro.setnetAsset(Double.parseDouble(rs.getString(8)));
						pro.setnetProfit(Double.parseDouble(rs.getString(9)));
						pro.setPublishMoneyMin(Double.parseDouble(rs
								.getString(10)));
						pro.setpublishFixedYesrs(Integer.parseInt(rs
								.getString(11)));
						pro.setpublishFinsh(rs.getString(12));
						pro.setproductType(rs.getString(13));
						pro.setinvestmentMinRequest(Double.parseDouble(rs
								.getString(14)));
						pro.setminAddto(Double.parseDouble(rs.getString(15)));
						pro.setoccupyPercentMin(Double.parseDouble(rs
								.getString(16)));
						pro.setoccupyPercentMax(Double.parseDouble(rs
								.getString(17)));
						pro.setexitWay(rs.getString(18));
						pro.setexitMinTime(Integer.parseInt(rs.getString(19)));
						pro.setcurrentStage(rs.getString(20));
						pro.setid(rs.getString(21));
						return pro;
					}

				}, pid);
	}

	public debtDetail getDebtDetail(String pid) {
		String sql = "select companyName, workField, registerAddress, createTime, registerCapital,"
				+ "bondsman, turnover, netAsset, netProfit, publishMoneyMin, publishFixedYesrs, publishFinsh,"
				+ "productType, returnMoneyWay, occupyMaxInterestMax, occupyTime, riskCotrollRequest, returnSource,"
				+ "id from privatedebt as p, companyuser as c where id = ? and c.email = p.customer";
		return jdbcTemplate.queryForObject(sql,
				new ParameterizedRowMapper<debtDetail>() {

					public debtDetail mapRow(ResultSet rs, int RowNum)
							throws SQLException {
						debtDetail pro = new debtDetail();
						pro.setcompanyName(rs.getString(1));
						pro.setWorkField(rs.getString(2));
						pro.setregisterAddress(rs.getString(3));
						pro.setcreateTime(rs.getString(4));
						pro.setregisterCapital(rs.getShort(5));
						pro.setbondsman(rs.getString(6));
						pro.setturnover(Double.parseDouble(rs.getString(7)));
						pro.setnetAsset(Double.parseDouble(rs.getString(8)));
						pro.setnetProfit(Double.parseDouble(rs.getString(9)));
						pro.setPublishMoneyMin(Double.parseDouble(rs
								.getString(10)));
						pro.setpublishFixedYesrs(Integer.parseInt(rs
								.getString(11)));
						pro.setpublishFinsh(rs.getString(12));
						pro.setproductType(rs.getString(13));
						pro.setreturnMoneyWay(rs.getString(14));
						pro.setoccupyMaxInterestMax(Double.parseDouble(rs
								.getString(15)));
						pro.setoccupyTime(rs.getString(16));
						pro.setriskCotrollRequest(rs.getString(17));
						pro.setreturnSource(rs.getString(18));
						pro.setid(rs.getString(19));
						return pro;
					}

				}, pid);
	}
}
