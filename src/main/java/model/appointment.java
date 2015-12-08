package model;

public class appointment {
	private String from;
	private String fromName;
	private String to;
	private String phoneNumber;
	private String postTime;
	private String finshTime;
	private String isFinsh;
	private String reservationTime;
	
	public appointment() {
		
	}
	
	public void setFrom(String from) {
		this.from = from;
	}
	
	public void setTo(String to) {
		this.to = to;
	}
	
	public void setFromName(String name) {
		this.fromName = name;
	}
	
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public void setPostTime(String postTime) {
		this.postTime = postTime;
	}
	
	public void setFinshTime(String finshTime) {
		this.finshTime = finshTime;
	}
	
	public void setIsFinsh(String isFinsh) {
		this.isFinsh = isFinsh;
	}
	
	public void setReservationTime(String reservationTime) {
		this.reservationTime = reservationTime;
	}
	
	public String getFrom() {
		return this.from;
	}
	
	public String getTo() {
		return this.to;
	}
	
	public String getPhoneNumber() {
		return this.phoneNumber;
	}
	
	public String getPostTime() {
		return this.postTime;
	}
	
	public String getFinshTime() {
		return this.finshTime;
	}
	
	public String getIsFinsh() {
		return this.isFinsh;
	}
	
	public String getReservationTime() {
		return this.reservationTime;
	}
	
	public String getFromName() {
		return this.fromName;
	}
}
