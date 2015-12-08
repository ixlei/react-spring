package model;

import java.io.Serializable;

public class redisUserStoreTest implements Serializable {
	private static final long serialVersionUID = -7898194272883238670L;
	  
    public static final String OBJECT_KEY = "USER";
    
    private String name;
    private String id;
    
    
    public redisUserStoreTest() {
    	
    }
    
    public redisUserStoreTest(String name, String id) {
    	this.name = name;
    	this.id = id;
    }
    
    public void setName(String name) {
    	this.name = name;
    }
    
    public void setId(String id) {
    	this.id = id;
    }
    
    public String getName() {
    	return this.name;
    }
    
    public String getId() {
    	return this.id;
    }
    
    public String getObjectKey() {  
        return OBJECT_KEY;  
    }  
    
    public String getKey() {  
        return getId();  
    }
    
    public String toString() {  
        return "User [id=" + id + ", name=" + name + "]";  
    }  
}
