package dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.appointment;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

@SuppressWarnings("deprecation")
public class appointmentDao {
	private SimpleJdbcTemplate jdbcTemplate;

	public appointmentDao() {

	}

	public void setJdbcTemplate(SimpleJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public SimpleJdbcTemplate getJdbcTemplate() {
		return this.jdbcTemplate;
	}

	public void insert(appointment app) {
		String sql = "insert into appointment (appFromId, appFromName, appTo, postTime, phoneNumber, "
				+ "isFinsh, reservationTime) values (?, ?, ?, ?, ?, ?,?)";
		jdbcTemplate.update(sql, app.getFrom(), app.getFromName(), app.getTo(),
				app.getPostTime(), app.getPhoneNumber(), app.getIsFinsh(),
				app.getReservationTime());
	}

	public ArrayList<appointment> getAppointmentByFinshState(String finshState) {
		String sql = "select appFromName, phoneNumber, reservationTime, postTime from appointment where isFinsh = ?";
		ArrayList<appointment> list = (ArrayList<appointment>) jdbcTemplate
				.query(sql, new RowMapper<appointment>() {

					public appointment mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						appointment app = new appointment();
						app.setFrom(rs.getString(1));
						app.setPhoneNumber(rs.getString(2));
						app.setReservationTime(rs.getString(3));
						app.setPostTime(rs.getString(4));
						return app;
					}

				}, finshState);
		return list;

	}
	

	public void updateFinshState(String to, String time) {
		String sql = "update set isFinsh = ?, finshTime = ? where appointmentTo = '" + to
				+ "'";
		jdbcTemplate.update(sql, "true", time);
	}

	public void del(String to) {
		String sql = "delete from appointment where appointmentTo = ?";
		jdbcTemplate.update(sql, to);
	}
}
