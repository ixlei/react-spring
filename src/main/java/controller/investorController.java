package controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import model.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.appointmentDao;
import dao.companyuserDao;
import dao.debtBuyDao;
import dao.investorDao;
import dao.stockBuyDao;

@Controller
@RequestMapping("/investor")
public class investorController {

	private ApplicationContext context = new ClassPathXmlApplicationContext(
			"dataSource.xml");
	private investorDao newuser = (investorDao) context.getBean("investor");

	private stockBuyDao stockCus = (stockBuyDao) context.getBean("stockBuy");

	private debtBuyDao debtCus = (debtBuyDao) context.getBean("debtBuy");

	private appointmentDao appCus = (appointmentDao) context
			.getBean("appointment");
	private companyuserDao companyCusDao = (companyuserDao) context.getBean("companyuser");
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(HttpServletRequest req, HttpSession session,
			Map<String, String> model) {

		String username = req.getParameter("username");
		String password = req.getParameter("password");

		Investor checkauth = newuser.getInvestorByEmail(username);

		if (checkauth == null) {
			return "redirect:/investor/login";
		}

		if (checkauth.getPassword().equals(password)) {
			session.setAttribute("investor", checkauth);
			return "redirect:/investor/index";
		}
		return "redirect:/investor/login";
	}

	@RequestMapping("/logout")
	public String logout(HttpSession session, Map<String, Integer> model) {
		if (session.getAttribute("citiuser") != null) {
			session.setAttribute("citiuser", null);
		}
		model.put("flag", 0);
		return "redirect:/customer/index";
	}

	@RequestMapping("/investModel")
	@ResponseBody
	public Object investModel() {
		Map<String, Object> model = new HashMap<String, Object>();
		ArrayList<investModel> proList;
		try {
			proList = newuser.getInvestModel();
		} catch (Exception e) {
			e.printStackTrace();
			model.put("res", "error");
			return model;
		}
		model.put("res", "success");
		model.put("data", proList);

		return model;
	}

	@RequestMapping(value = "/releaseTender", method = RequestMethod.GET)
	public String releaseTender(HttpSession session, Map<String, Object> model) {
		model.put("flag", 1);
		String sessionId = (String) session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];
		Investor customer = newuser.getInvestorForDebt(email);
		model.put("username", customer.getUsername());
		model.put("investorAddress", customer.getInvestAddress());
		model.put("companyAddress", customer.getCompanyAddress());
		model.put("legalRepresentative", customer.getLegalRepresentative());
		model.put("investFiled", customer.getInvestFiled());
		return "investor/release_tender_offers";
	}

	@ResponseBody
	@RequestMapping(value = "/releaseTender", method = RequestMethod.POST)
	public Object releaseTender(HttpServletRequest req) {
		Map<String, String> map = new HashMap<String, String>();
		HttpSession session = req.getSession();
		String citiuser = (String) session.getAttribute("citiuser");

		stockBuy customer = new stockBuy();
		customer.setCustomer(citiuser.split("=")[1]);
		
		try {
			customer.setInvestmentMin(Integer.parseInt(req
					.getParameter("investmentMin")));
			customer.setInvestmentMax(Integer.parseInt(req
					.getParameter("investmentMax")));
		} catch (Exception e) {
			map.put("res", "投资金额错误");
			return map;
		}

		try {
			customer.setInvestmentTimeOut(Integer.parseInt(req
					.getParameter("investmentTimeOut")));

		} catch (Exception e) {
			map.put("res", "投资年限错误");
			return map;
		}

		try {
			customer.setInvestmentProportionMin(Integer.parseInt(req
					.getParameter("investmentProportionMin")));
			customer.setInvestmentProportionMax(Integer.parseInt(req
					.getParameter("investmentProportionMax")));
		} catch (Exception e) {
			map.put("res", "投资比例错误");
			return map;
		}

		customer.setInvestmentStage(req.getParameter("investmentStage"));
		customer.setFileProvideRequest(req.getParameter("fileProvideRequest"));
		String investmentRequest = req.getParameter("investmentRequest");
		if (investmentRequest.equals("")) {
			map.put("res", "投资要求不能为空");
		}
		customer.setInvestmentRequest(investmentRequest);
		String timestamp = new Timestamp(System.currentTimeMillis()).toString();
		int times = timestamp.lastIndexOf(".");
		String time = timestamp.substring(0, times);
		customer.setTime(time);
		try {
			stockCus.insert(customer);
		} catch (Exception e) {
			map.put("res", "提交失败，待会儿再试");
			e.printStackTrace();
			return map;
		}
		map.put("res", "发布成功");
		return map;
	}

	@RequestMapping("/appliedInvest")
	public String appliedInvest(Map<String, Integer> model) {
		model.put("flag", 1);
		return "investor/applied-investment-sign";
	}

	@RequestMapping("/infoCenter")
	public String getInfoCenter(Map<String, Integer> model) {
		model.put("flag", 2);
		model.put("leftOn", 0);

		return "investor/info-center";
	}

	@RequestMapping("/infoRecords")
	public String getInfoRecords(Map<String, Integer> model) {
		model.put("flag", 2);
		model.put("leftOn", 2);

		return "investor/info-records";
	}

	@RequestMapping("/infoTransform")
	public String getInfoTransform(Map<String, Integer> model) {
		model.put("flag", 2);
		model.put("leftOn", 3);

		return "investor/info-transform";
	}

	@RequestMapping("/infoCredit")
	public String getInfoCredit(Map<String, Integer> model) {
		model.put("flag", 2);
		model.put("leftOn", 6);

		return "investor/info-credit";
	}

	@RequestMapping("/infoTemporary")
	public String getInfoTemporary(Map<String, Integer> model) {
		model.put("flag", 2);
		model.put("leftOn", 5);

		return "investor/info-temporary";
	}

	@RequestMapping("/infoRegular")
	public String getInfoRegular(Map<String, Integer> model) {
		model.put("flag", 2);
		model.put("leftOn", 4);

		return "investor/info-regular";
	}

	@RequestMapping("/resourceAsset")
	public String getResourceAsset(HttpServletRequest req, Model model) {
		HttpSession session = req.getSession();
		String sessionId = (String) session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];
		List<Object> user = newuser.getInvestorAll(email);
		model.addAttribute("investor", user);
		return "investor/personal_center_assets_management";
	}

	@RequestMapping("/inews")
	public String inews() {
		return "investor/private_center_my_news_directional";
	}

	@RequestMapping("/directionDown")
	public String getDirectionDown() {
		return "investor/inews-message-direction-down";
	}

	@RequestMapping("/ifollow")
	public String getIFollow() {
		return "investor/personal-attiontion";
	}

	@RequestMapping("/moreInvestor")
	public String getMoreInvestor(Map<String, Integer> model) {
		model.put("flag", 1);
		return "investor/moreInvestor";
	}

	@RequestMapping(value = "/debtPurchase", method = RequestMethod.GET)
	public String getDebtPurchase(HttpSession session, Map<String, Object> model) {
		String sessionId = (String) session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];
		Investor customer = newuser.getInvestorForDebt(email);
		model.put("username", customer.getUsername());
		model.put("investAddress", customer.getInvestAddress());
		model.put("companyAddress", customer.getCompanyAddress());
		model.put("legalRepresentative", customer.getLegalRepresentative());
		model.put("investFiled", customer.getInvestFiled());
		return "investor/release_debt_purchase";
	}

	@ResponseBody
	@RequestMapping(value = "/debtPurchase", method = RequestMethod.POST)
	public Object postDebtPurchase(HttpServletRequest req) {

		Map<String, String> map = new HashMap<String, String>();
		HttpSession session = req.getSession(true);
		String email = (String) session.getAttribute("citiuser");
		String customerId = email.split("=")[1];
		debtBuy customer = new debtBuy();
		customer.setCustomer(customerId);

		try {
			customer.setInvestmentMin(Integer.parseInt(req
					.getParameter("investmentMin")));
			customer.setInvestmentMax(Integer.parseInt(req
					.getParameter("investmentMax")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的投资比例");
			return map;
		}

		try {
			customer.setInvestmentTimeOut(Integer.parseInt(req
					.getParameter("investmentTimeOut")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的年限");
			return map;
		}

		try {
			customer.setReturnRateMin(Integer.parseInt(req
					.getParameter("returnRateMin")));
			customer.setReturnRateMax(Integer.parseInt(req
					.getParameter("returnRateMax")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "输入正确的回报率");
			return map;
		}

		customer.setFileProvideRequest(req.getParameter("fileProviderRequest"));
		customer.setInvestmentRequest(req.getParameter("investmentRequest"));
		customer.setRiskControllRequest(req.getParameter("riskControllRequest"));
		String timestamp = new Timestamp(System.currentTimeMillis()).toString();
		int times = timestamp.lastIndexOf(".");
		String time = timestamp.substring(0, times);
		customer.setTime(time);

		try {
			debtCus.insert(customer);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "发布失败!");
			return map;
		}

		map.put("res", "发布成功!");
		return map;

	}

	@RequestMapping("/consulting")
	public String getConsulting() {
		return "investor/consulting";
	}

	@RequestMapping("/infoPolicy")
	public String getInoPolicy(Map<String, Integer> model) {
		model.put("flag", 0);
		return "investor/info-policy";
	}

	@RequestMapping("/infoMarket")
	public String getInfoMarket(Map<String, Integer> model) {
		model.put("falg", 0);
		return "investor/info-market";
	}

	@RequestMapping("/manage")
	public String getManage(Map<String, Integer> model) {
		model.put("flag", 3);
		return "investor/investorpatten_survey_of_investment";
	}

	@RequestMapping("/stockManage")
	public String getStockManage(Map<String, Integer> model) {
		model.put("flag", 3);
		return "investor/stock-manage";
	}

	@RequestMapping("/stockRightManage")
	public String getStockRightManage(Map<String, Integer> model) {
		model.put("flag", 3);
		return "investor/stockright-manage";
	}

	@RequestMapping("/einquiryProtocol")
	public String getEInquiryProTocol(Map<String, Integer> model) {
		model.put("flag", 1);
		return "investor/eletronic-contrating-inquiry-protocol";
	}

	@RequestMapping("/investorChat")
	public String getInvestorChat(HttpSession session, Model model) {
		model.addAttribute("flag", (Integer) 1);
		ArrayList<companyuser> user = companyCusDao.getCompanyUserAll();
		model.addAttribute("friendList", user);
		String sessionChar = (String) session.getAttribute("citiuser");
		String[] email = sessionChar.split("=");
		model.addAttribute("username", newuser.getInvestorByEmail(email[1]).getUsername());
		
		model.addAttribute("session", sessionChar);
		return "investor/investor-chat";
	}

	@RequestMapping(value = "/resavation", method = RequestMethod.GET)
	public String getResavation(HttpServletRequest req,
			Map<String, Object> model) {
		model.put("flag", 1);

		String to = req.getParameter("to");
		model.put("email", to);

		return "investor/service-chat-resavation";
	}

	@ResponseBody
	@RequestMapping(value = "/appointment", method = RequestMethod.POST)
	public Object postResavation(HttpServletRequest req) {
		HttpSession session = req.getSession();
		String sessionId = (String) session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];
		appointment app = new appointment();
		Map<String, String> map = new HashMap<String, String>();

		app.setFrom(email);
		app.setTo(req.getParameter("to"));

		String resavationTime = req.getParameter("resavationTime");
		String name = req.getParameter("name");
		String phoneNumber = req.getParameter("phoneNumber");
		System.out.print(resavationTime);
		if (resavationTime.equals("")) {
			map.put("res", "预约时间不能为空");
			return map;
		}

		if (name.equals("")) {
			map.put("res", "请输入你的姓名");
			return map;
		}

		if (phoneNumber.equals("")) {
			map.put("res", "你的联系方式不能为空");
			return map;
		}
		app.setReservationTime(resavationTime);
		app.setFromName(name);
		app.setPhoneNumber(phoneNumber);

		String timestamp = new Timestamp(System.currentTimeMillis()).toString();
		int times = timestamp.lastIndexOf(".");
		String time = timestamp.substring(0, times);
		app.setIsFinsh("false");
		app.setPostTime(time);
		try {
			appCus.insert(app);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "预约失败，稍后再试");
			return map;
		}

		map.put("res", "预约成功，稍后会有人和你联系");
		return map;

	}

	@RequestMapping("/privateNews")
	public String getPrivateNews(Map<String, Integer> model) {
		return "investor/private-news";
	}

	@RequestMapping("/newsManagment")
	public String getNewsManagment(HttpSession session, Model model) {
		String sessionId = (String)session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];
		List<Object> list = newuser.getInvestorAll(email);
		model.addAttribute("investor", list);
		return "investor/inews-managment";
	}
	
	@ResponseBody
	@RequestMapping(value = "/toPerfectReg", method = RequestMethod.POST)
	public Object toPerfect(HttpServletRequest req) {
		Map<String, Object> map = new HashMap<String, Object>();
		Investor newCustomer = new Investor();
		
		HttpSession session = req.getSession();
		String sessionId = (String) session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];
		newCustomer.setEmail(email);
		
		newCustomer.setContact(req.getParameter("contact"));
		newCustomer.setPosition(req.getParameter("position"));
		try {
			newCustomer.setCapitalFlow(Double.parseDouble(req.getParameter("capitalFlow")));
		}catch(Exception e) {
			e.printStackTrace();
			System.out.println(req.getParameter("capitalFlow"));
			map.put("res", "请输入正确的资金额，只能为数字");
			return map;
		}
		
		newCustomer.setRegisterAddress(req.getParameter("registerAddress"));
		newCustomer.setInvestFiled(req.getParameter("investFiled"));
		newCustomer.setInvestStage(req.getParameter("investStage"));
		newCustomer.setInvestorScale(req.getParameter("investScale"));
		newCustomer.setInvestCycle(Integer.parseInt(req.getParameter("investCycle")));
		newCustomer.setInvestAddress(req.getParameter("investAddress"));
		newCustomer.setCompanyName(req.getParameter("companyName"));
		newCustomer.setCompanyAddress(req.getParameter("companyAddress"));
		
		
		newCustomer.setLegalRepresentative(req.getParameter("legalRepresentative"));
		newCustomer.setLegalRepresentativewt(req.getParameter("legalRepresentativewt"));
		newCustomer.setShareholderBackground(req.getParameter("shareholderBackground"));
		newCustomer.setManageFund(req.getParameter("manageFund"));
		newCustomer.setInvestorHistory(req.getParameter("investorIndustry"));
		newCustomer.setInvestorType(req.getParameter("investorType"));
		newCustomer.setSuccessInvestor(req.getParameter("successInvestor"));
		try {
			newCustomer.setIntentionMoney(Double.parseDouble(req.getParameter("intentionMoney")));
		} catch(Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的意向金额");
			return map;
		}
		
		newCustomer.setNeedResource(req.getParameter("needResource"));
		newCustomer.setInvestorHistory(req.getParameter("investorHistory"));
		
		try {
			newuser.toPerfect(newCustomer);
		} catch(Exception e) {
			e.printStackTrace();
			map.put("res", "提交失败，稍后重试");
			return map;
		}
		
		map.put("res", "提交成功");
		return map;
	}
	
	@RequestMapping("/privateDebtList")
	public String getPrivateDebtList(Map<String, Integer> model) {
		model.put("leftOn", 1);
		return "investor/private-debt-list";
	}
	
	@RequestMapping("/queryProtocol")
	public String getQueryProtocol() {
		return "investor/search-protocol";
	}
	
	@RequestMapping(value = "/investSituation", method = RequestMethod.GET)
	public String getSituation() {
		return "investor/socket-manage";
	}
	
	@RequestMapping("/modifyContract")
	public String getmodifyContract() {
		return "investor/modify-contract";
	}
	
	@RequestMapping("/historyInquiry")
	public String getHistoryInquiry() {
		return "investor/history-inquiry";
	}
	
	@RequestMapping("/push")
	public String getPush() {
		return "investor/push";
	}

	@ResponseBody
	@RequestMapping("/equity/{pid}")
	public Object getEquity(@PathVariable String pid) {
		Map<String, Object> model = new HashMap<String, Object>();
		equity pro;
		try {
			pro = newuser.getequity(pid);
		} catch (Exception e) {
			e.printStackTrace();
			model.put("error", "error");
			return model;
		}
		model.put("equ", pro);
		return model;

	}

	@ResponseBody
	@RequestMapping("/debtDetail/{pid}")
	public Object getdebtDetail(@PathVariable String pid) {
		Map<String, Object> model = new HashMap<String, Object>();
		debtDetail pro;
		try {
			pro = newuser.getDebtDetail(pid);
		} catch (Exception e) {
			e.printStackTrace();
			model.put("error", "err");
			return model;
		}

		model.put("debt", pro);
		return model;
	}
}
