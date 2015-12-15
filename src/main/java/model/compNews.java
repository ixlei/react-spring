package model;

public class compNews {
    private String nid;
    private String title;
    private String news;
    private String type;
    
    public void setNid(String nid) {
    	this.nid = nid;
    }
    
    public void setTitle(String title) {
    	this.title = title;
    }
    
    public void setNews(String news) {
    	this.news = news;
    }
    
    public void setType(String type) {
    	this.type = type;
    }
    
    public String getNid() {
    	return this.nid;
    }
    
    public String getTitle() {
    	return this.title;
    }
    
    public String getNews() {
    	return this.news;
    }
    
    public String getType() {
    	return this.type;
    }
}
