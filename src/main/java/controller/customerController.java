package controller;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.mail.Multipart;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Investor;
import model.companyuser;

import org.apache.commons.collections.FactoryUtils;
import org.apache.commons.io.FileUtils;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import dao.companyuserDao;
import dao.investorDao;
import dao.compNewsDao;
import model.compNews;

@Controller
@RequestMapping("/customer")
public class customerController {

	private ApplicationContext context = new ClassPathXmlApplicationContext(
			"dataSource.xml");
	private investorDao newuser = (investorDao) context.getBean("investor");
	private companyuserDao newCompanyUser = (companyuserDao) context
			.getBean("companyuser");
    private compNewsDao compNews = (compNewsDao) context.getBean("compNews");
    
	@RequestMapping({ "/", "/index" })
	
	public Object showIndex() {
		return "customer/index";
	}

	@RequestMapping("/finance")
	public String showCompany(Map<String, Integer> model) {
		model.put("flag", 1);
		return "customer/finacing-company";
	}
	
	@ResponseBody
	@RequestMapping("/compNews")
	public Object getCompNews() {
		Map<String, Object> map = new HashMap<String, Object>();
		
		ArrayList<Double> rate = new ArrayList<Double>();
		rate.add(Double.parseDouble("12"));
		rate.add(Double.parseDouble("18"));
		rate.add(Double.parseDouble("15"));
		map.put("increaseRate", rate);
		map.put("number", 6276);
		
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/getCompNews") 
	public Object getNews() {
		ArrayList<compNews> list = compNews.getAllNews();
		ArrayList<compNews> policy = new ArrayList<compNews>();
		ArrayList<compNews> market = new ArrayList<compNews>();
		for(int i = 0, j = list.size(); i < j; i++) {
			if(list.get(i).getType().equals("policy")) {
				policy.add(list.get(i));
			} else {
				market.add(list.get(i));
			}
		}
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("policy", policy);
		map.put("market", market);
		return map;
	}
	
	@RequestMapping("/invest")
	public String showInvest(Map<String, Integer> model) {
		model.put("flag", 2);
		return "customer/customer-investment-hall";
	}

	@RequestMapping("/service")
	public String getService(Map<String, Integer> model) {
		model.put("flag", 3);
		return "customer/customer-business-service";
	}

	@RequestMapping("/infomore")
	public String getInfoMore(Map<String, Integer> model) {
		model.put("flag", 0);
		return "customer/customer-information-policy";
	}

	@RequestMapping("/policymore")
	public String getpolicyInfo(Map<String, Integer> model) {
		model.put("flag", 0);
		return "customer/customer-info-news";
	}

	@RequestMapping("/servicego")
	public String goService(Map<String, Integer> model) {
		model.put("flag", 3);
		return "customer/customer-service-asset";
	}

	@RequestMapping("/assetgo")
	public String goAsset(Map<String, Integer> model) {
		model.put("flag", 3);
		return "customer/customer-service-signature";
	}

	@RequestMapping("/investStock")
	public String getInvestStock(Map<String, Integer> model) {
		model.put("flag", 2);
		return "customer/customer-investment-stock";
	}

	@RequestMapping("/investdebt")
	public String getInvestDebt(Map<String, Integer> model) {
		model.put("flag", 2);
		return "customer/customer-investment-debt";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "customer/login";
	}

	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Object postLogin(HttpServletRequest req, HttpSession session) {

		Map<String, Object> map = new HashMap<String, Object>();
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		if (username.equals("")) {
			return map.put("post", "用户名不能为空");
		}

		if (password.equals("")) {
			return map.put("post", "密码不能为空");
		}

		Investor checkInvestorUser;
		if (req.getParameter("logintype").equals("investor")) {
			try {
				checkInvestorUser = newuser.getInvestorByEmail(username);
			} catch(Exception e) {
				e.printStackTrace();
				return map.put("post", "error");
			}

			if (checkInvestorUser == null) {
				return map.put("post", "此用户不存在");
			}

			if (checkInvestorUser.getPassword().equals(password)) {
				session.setAttribute("citiuser", "iid=" + username);
				return map.put("post", "success");
			}

			return map.put("post", "用户名或密码错误");

		} else {
			companyuser checkCompanyUser = newCompanyUser
					.getCompanyUserByEmail(username);
			if (checkCompanyUser == null) {
				return map.put("post", "此用户不存在");
			}

			if (checkCompanyUser.getPassword().equals(password)) {
				session.setAttribute("citiuser", "cid=" + username);
				return map.put("post", "success");
			}

			return map.put("post", "用户名或密码错误");
		}
	}

	@RequestMapping(value = "/login/{errorMessage}")
	public String feedback(@PathVariable("errorMessage") String errmsg,
			Map<String, String> model) {
		if (errmsg.equals("ue")) {
			model.put("errmsg", "用户名不能为空");
		}
		if (errmsg.endsWith("pe")) {
			model.put("errmsg", "密码不能为空");
		}

		if (errmsg.equals("ee")) {
			model.put("errmsg", "此用户不存在");
		}

		if (errmsg.equals("alle")) {
			model.put("errmsg", "用户名或密码错误");
		}
		return "customer/errlogin";
	}

	@RequestMapping(value = "/reg", method = RequestMethod.GET)
	public String reg(Model model) {
		model.addAttribute(new Investor());
		return "customer/reg";
	}

	@ResponseBody
	@RequestMapping(value = "/reg", method = RequestMethod.POST)
	public Object postReg(HttpServletRequest req, HttpSession session, HttpServletResponse res) {
        Map<String, Object> map = new HashMap<String, Object>();
        res.setHeader("Access-Control-Allow-Origin", "*");
		String userType = req.getParameter("type");
		try {
			if (userType.equals("investor")) {
				Investor newInvestor = new Investor();
				newInvestor.setEmail(req.getParameter("username"));
				newInvestor.setPassword(req.getParameter("password"));
				newInvestor.setUsername(req.getParameter("name"));
				newInvestor.setIdCard(req.getParameter("IdCard"));
				newuser.insert(newInvestor);
				session.setAttribute("citiuser", "iid=" + req.getParameter("username"));
				map.put("post", "success");
				return map;

			} else {
				companyuser newUser = new companyuser();
				newUser.setEmail(req.getParameter("username"));
				newUser.setPassword(req.getParameter("password"));
				newUser.setCompanyName(req.getParameter("companyName"));
				newUser.setCode(req.getParameter("code"));
				newCompanyUser.insert(newUser);
				session.setAttribute("citiuser", "cid=" + req.getParameter("username"));
				map.put("post", "success");
				return map;
			}

		} catch (Exception e) {
			e.printStackTrace();
			map.put("post", "error");
			return map;
		}

	}


	@ResponseBody
	@RequestMapping(value="/username", method = RequestMethod.POST)
	public Object checkUsername(HttpServletRequest req) {
		Map<String, String> map = new HashMap<String, String>();
		String username = req.getParameter("username");
		String userType = req.getParameter("userType");
		if(userType.equals("investor")) {
			try {
				if(newuser.getInvestorByEmail(username) == null) {
					map.put("check", "valid");
				} else {
					map.put("check", "invalid");
				}
			} catch(Exception e) {
				map.put("check", "error");
				e.printStackTrace();
			}
		} else {
			try {
				if (newCompanyUser.getCompanyUserByEmail(username) == null) {
					map.put("check", "valid");
				} else {
					map.put("check", "invalid");
				}
			}catch(Exception e) {
					map.put("check", "error");
					e.printStackTrace();
				}
			}
		return map;
		}


	@ResponseBody
	@RequestMapping(value = "/echeck", method = RequestMethod.POST)
	public Object checkEmail(HttpServletRequest req) {
		Map<String, String> map = new HashMap<String, String>();
		String data = req.getParameter("data");
		if (newuser.getInvestorByEmail(data) == null) {
			map.put("check", "valid");
		} else {
			map.put("check", "invalid");
		}

		return map;
	}

	@ResponseBody
	@RequestMapping(value = "/cecheck", method = RequestMethod.POST)
	public Object checkCEmail(HttpServletRequest req) {
		Map<String, String> map = new HashMap<String, String>();
		String data = req.getParameter("data");

		if (newCompanyUser.getCompanyUserByEmail(data) == null) {
			map.put("check", "valid");
		} else {
			map.put("check", "invalid");
		}
		return map;
	}

	@ResponseBody
	@RequestMapping(value = "/IdCard", method = RequestMethod.POST)
	public Object checkIdCard(HttpServletRequest req) {
		Map<String, String> map = new HashMap<String, String>();
		String data = req.getParameter("data");
		if (newuser.getInvestorByIdCard(data) == null) {
			map.put("check", "valid");
		} else {
			map.put("check", "invalid");
		}
		return map;
	}

	@ResponseBody
	@RequestMapping(value = "/cnameCheck", method = RequestMethod.POST)
	public Object checkCName(HttpServletRequest req) {
		Map<String, String> map = new HashMap<String, String>();
		String data = req.getParameter("data");
		if (newCompanyUser.getCompanyUserByName(data) == null) {
			map.put("check", "valid");
		} else {
			map.put("check", "invalid");
		}

		return map;
	}

	@ResponseBody
	@RequestMapping(value = "/cCode", method = RequestMethod.POST)
	public Object checkCode(HttpServletRequest req) {
		Map<String, String> map = new HashMap<String, String>();
		String data = req.getParameter("data");
		if (newCompanyUser.getCompanyUserByCode(data) == null) {
			map.put("check", "valid");
		} else {
			map.put("check", "invaid");
		}

		return map;
	}

	@ResponseBody
	@RequestMapping(value = "/investorNextStep", method = RequestMethod.POST)
	public Object investorNextStep(HttpServletRequest req, HttpSession session,
			@RequestParam(value = "image", required = false) MultipartFile image,
								   HttpServletResponse res) {
		Map<String, Object> map = new HashMap<String, Object>();
		res.setHeader("Access-Control-Allow-Origin", "*");
		String sessionChar = (String) session.getAttribute("citiuser");
		System.out.println(sessionChar);
		String[] splitSession = sessionChar.split("=");
		if (sessionChar == null || !splitSession[0].equals("iid")) {
			map.put("post", "error");
			return map;
		}

		try {
		String email = splitSession[1];
		Investor finshInvestor = new Investor();
		finshInvestor.setEmail(email);
		finshInvestor.setCompanyName(req.getParameter("companyName"));
		finshInvestor.setLegalRepresentative(req
				.getParameter("legalRepresentative"));
		finshInvestor.setLegalRepresentativewt(req
				.getParameter("legalRepresentativewt"));
		finshInvestor.setBusinesslicence(req.getParameter("businesslicence"));
		finshInvestor.setInvestAddress(req.getParameter("investAddress"));
		finshInvestor.setRegisterAddress(req.getParameter("registerAddress"));
		finshInvestor.setCompanyAddress(req.getParameter("companyAddress"));
		finshInvestor.setRegisterCapital(Integer.parseInt(req
				.getParameter("registerCapital")));
		finshInvestor.setInvestCycle(Integer.parseInt(req
				.getParameter("investCycle")));
		finshInvestor.setInvestFiled(req.getParameter("investFiled"));
		finshInvestor.setInvestStage(req.getParameter("investStage"));
		finshInvestor.setHeadquartersAddress(req
				.getParameter("headquartersAddress"));
		
		if(image != null && !image.isEmpty()) {
			String originalImageName = image.getOriginalFilename();
			Date now = new Date();
			int indexDot = originalImageName.lastIndexOf(".");
			String getImageType = originalImageName.substring(indexDot);
			String imageName = now.getTime() + getImageType;
			saveImage(imageName, image);
			finshInvestor.setLogoUrl(imageName);
		}
		newuser.updateOther(finshInvestor);
		} catch(Exception e) {
			e.printStackTrace();
			return map.put("post", "error");
		}
		map.put("post", "success");
		return map;

	}

	@RequestMapping(value = "/companyUserNextStep", method = RequestMethod.POST)
	public String getCompanyUserNextStep(HttpServletRequest req,
			HttpSession session,
			@RequestParam(value = "image", required = false) MultipartFile image) {

		companyuser user = new companyuser();
		String sessionChar = (String) session.getAttribute("citiuser");
		String[] sessionSplit = sessionChar.split("=");
		if (sessionChar == null || !sessionSplit[0].equals("cid")) {
			return "redirect:/customer/reg";
		}

		String email = sessionSplit[1];
		user.setEmail(email);
		user.setCompanyType(req.getParameter("companyType"));
		user.setLegalRepresentative(req.getParameter("legalRepresentative"));
		user.setRegisterCapital(Integer.parseInt(req
				.getParameter("registerCapital")));
		user.setBusinessLicence(req.getParameter("businessLicence"));
		user.setCreateTime(req.getParameter("createTime"));
		user.setRegisterAddress(req.getParameter("registerAddress"));
		user.setHeadquartersAddress(req.getParameter("headquartersAddress"));
		user.setPhoneNumber(req.getParameter("first") + "-"
				+ req.getParameter("second"));
		user.setWorkField(req.getParameter("workField"));
		user.setearnPattern(req.getParameter("earnPattern"));
		user.setMainField(req.getParameter("mainField"));

		if (!image.isEmpty()) {
			String originalImageName = image.getOriginalFilename();
			Date now = new Date();
			int subIndex = originalImageName.lastIndexOf(".");
			String imageType = originalImageName.substring(subIndex);
			String fileName = now.getTime() + imageType;
			this.saveImage(fileName, image);

			user.setLogoUrl(fileName);
		}

		newCompanyUser.update(user);

		return "redirect:/customer/finshCompanyReg";

	}

	@RequestMapping("/finshInvestorReg")
	public String finshInvestorReg() {
		return "customer/finsh-investor-reg";
	}

	@RequestMapping("/finshCompanyReg")
	public String finshCompanyReg() {
		return "customer/finsh-company-reg";
	}

	@RequestMapping("/asset")
	public String getAsset(Map<String, Integer> model) {
		model.put("flag", 3);
		return "customer/customer-service-asset";
	}

	@RequestMapping("/finacingmore/{index}")
	public String getfinacingMore(@PathVariable("index") Integer index) {
		String viewsFileName = "customer/finacing-more" + index;
		return viewsFileName;

	}

	public void saveImage(String fileName, MultipartFile image) {
		try {
			File file = new File(
					"D:/newJava/springmvc/resources/companyUploadImage/"
							+ fileName);
			FileUtils.writeByteArrayToFile(file, image.getBytes());

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("error");
		}
	}
	
	

}
