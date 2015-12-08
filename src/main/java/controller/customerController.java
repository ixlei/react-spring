package controller;

import java.io.File;
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

@Controller
@RequestMapping("/customer")
public class customerController {

	private ApplicationContext context = new ClassPathXmlApplicationContext(
			"dataSource.xml");
	private investorDao newuser = (investorDao) context.getBean("investor");
	private companyuserDao newCompanyUser = (companyuserDao) context
			.getBean("companyuser");

	@RequestMapping({ "/", "/index" })
	
	public Object showIndex(Map<String, Integer> model) {
		model.put("flag", 0);
		
		return "customer/customer-index";
	}

	@RequestMapping("/finance")
	public String showCompany(Map<String, Integer> model) {
		model.put("flag", 1);
		return "customer/finacing-company";
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

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String postLogin(HttpServletRequest req, HttpSession session) {
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		if (username == "") {
			return "redirect:/customer/login/ue";
		}

		if (password == "") {
			return "redirect:/customer/login/pe";
		}

		if (req.getParameter("logintype").equals("投资者")) {
			Investor checkInvestorUser = newuser.getInvestorByEmail(username);
			if (checkInvestorUser == null) {
				return "redirect:/customer/login/ee";
			}

			if (checkInvestorUser.getPassword().equals(password)) {
				session.setAttribute("citiuser", "iid=" + username);
				return "redirect:/investor/index";
			}

			return "redirect:/customer/login/alle";

		} else {
			companyuser checkCompanyUser = newCompanyUser
					.getCompanyUserByEmail(username);
			if (checkCompanyUser == null) {
				return "redirect:/customer/index/ee";
			}

			if (checkCompanyUser.getPassword().equals(password)) {
				session.setAttribute("citiuser", "cid=" + username);
				return "redirect:/company/index";
			}

			return "redirect:/customer/login/alle";
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

	@RequestMapping(value = "/reg", method = RequestMethod.POST)
	public String postReg(HttpServletRequest req, HttpSession session) {

		String userType = req.getParameter("type");

		if (userType.equals("投资者")) {
			Investor newInvestor = new Investor();
			newInvestor.setEmail(req.getParameter("email"));
			newInvestor.setPassword(req.getParameter("password"));
			newInvestor.setUsername(req.getParameter("username"));
			newInvestor.setIdCard(req.getParameter("IdCard"));
			newuser.insert(newInvestor);
			session.setAttribute("citiuser", "iid=" + req.getParameter("email"));
			return "customer/investor-nextstep-reg";

		} else {
			companyuser newUser = new companyuser();
			newUser.setEmail(req.getParameter("email"));
			newUser.setPassword(req.getParameter("password"));
			newUser.setCompanyName(req.getParameter("companyName"));
			newUser.setCode(req.getParameter("code"));
			newCompanyUser.insert(newUser);
			session.setAttribute("citiuser", "cid=" + req.getParameter("email"));
			return "customer/complete-company-reg";
		}

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
	@RequestMapping(value = "/IdCardCheck", method = RequestMethod.POST)
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

	@RequestMapping(value = "/investorNextStep", method = RequestMethod.POST)
	public String investorNextStep(HttpServletRequest req, HttpSession session,
			@RequestParam(value = "image", required = false) MultipartFile image) {
		
		String sessionChar = (String) session.getAttribute("citiuser");
		String[] splitSession = sessionChar.split("=");
		if (sessionChar == null || !splitSession[0].equals("iid")) {
			return "redirect:/customer/reg";
		}

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
		return "redirect:/customer/finshInvestorReg";

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
