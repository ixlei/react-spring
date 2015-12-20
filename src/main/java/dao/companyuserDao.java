package dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.Investor;
import model.companyuser;

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
}
