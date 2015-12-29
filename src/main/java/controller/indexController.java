package controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;


@Controller
public class indexController {
	
	@RequestMapping("/")
	public String showIndex(HttpServletResponse res) {
		res.setHeader("Access-Control-Allow-Origin", "*");
		return "customer/index";
	}

}
