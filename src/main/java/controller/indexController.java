package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class indexController {
	
	@RequestMapping("/")
	public String showIndex(HttpServletRequest req, Map<String, Integer> Model) {
		Model.put("flag", 0);
		return "customer/customer-index";
	}

}
