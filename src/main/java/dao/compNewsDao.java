package dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcTemplate;

import model.compNews;

@SuppressWarnings("deprecation")
public class compNewsDao {
	
	private SimpleJdbcTemplate jdbcTemplate;
	
	public void setJdbcTemplate(SimpleJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public SimpleJdbcTemplate getJdbcTemplate() {
		return this.jdbcTemplate;
	}
	
	public  ArrayList<compNews> getAllNews() {
		String sql = "select nid, title, news, type from compNews";
		
		return (ArrayList<compNews>) jdbcTemplate.query(sql, new RowMapper<compNews>() {

			public compNews mapRow(ResultSet rs, int RowNum)
					throws SQLException {
				compNews news = new compNews();
				news.setNid(rs.getString(1));
				news.setTitle(rs.getString(2));
				news.setNews(rs.getString(3));
				news.setType(rs.getString(4));
				return news;
			}
			
		});
	}
	

}
