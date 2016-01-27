package controller;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import model.Investor;
import model.companyuser;
import model.privateDebt;
import model.privateEquity;
import model.corporateModel;
import model.debt;
import model.stock;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.socket.TextMessage;

import dao.companyuserDao;
import dao.investorDao;
import dao.privateDebtDao;
import dao.privateEquityDao;
import webSocket.webSocketServer;

@Controller
@RequestMapping("/company")
public class companyController {

	ApplicationContext context = new ClassPathXmlApplicationContext(
			"dataSource.xml");

	private companyuserDao customerDao = (companyuserDao) context
			.getBean("companyuser");

	private privateEquityDao privateCus = (privateEquityDao) context
			.getBean("privateEquity");

	private privateDebtDao privateDebtCus = (privateDebtDao) context
			.getBean("privateDebt");
	private investorDao investorD = (investorDao) context.getBean("investor");

	@RequestMapping({ "/", "/index" })
	public String getIndex(Map<String, Integer> model) {
		model.put("flag", 0);
		return "company/business-index";
	}

	@RequestMapping("/corporateModel")
	public String getCorporateModel(Map<String, Integer> model) {
		model.put("flag", 1);
		return "company/corporate-mode-finance-patch";
	}

	@RequestMapping("/manage")
	public String getManage(Map<String, Integer> model) {
		model.put("flag", 3);
		return "company/company-manage";
	}

	@RequestMapping("/appliedCompany")
	public String getAppliedCompany(Map<String, Integer> model) {
		model.put("flag", 1);
		return "company/check-finacing-sign";
	}

	@RequestMapping("/einquiryProtocol")
	public String getEinquiryProtocol(Map<String, Integer> model) {
		model.put("flag", 1);
		return "company/eletronic-contrating-inquiry-protocol";
	}

	@RequestMapping("/infoPublish")
	public String getInfoPublish(Map<String, Integer> model) {
		model.put("flag", 2);
		model.put("leftNav", 0);
		return "company/company-issue";
	}

	@RequestMapping("/ipublish")
	public String getIPublish(Map<String, Integer> model) {
		model.put("flag", 2);
		model.put("leftNav", 3);
		return "company/ipublish";
	}

	@RequestMapping("/creditRelease")
	public String getCreditRelease(Map<String, Integer> model) {
		model.put("flag", 2);
		model.put("leftNav", 2);
		return "company/info-credit-release";
	}

	@RequestMapping("/ifollow")
	public String getIFollw(Map<String, Integer> model) {
		return "company/personal-attiontion";
	}

	@RequestMapping("/inews")
	public String getINews() {
		return "company/private_center_my_news_directional";
	}

	@RequestMapping("/directionDown")
	public String getDirectionDown() {
		return "company/inews_direction_down";
	}

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	@ResponseBody
	public Object getpublish(HttpSession session) {
		String sessionId = (String) session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];
		Map<String, Object> model = new HashMap<String, Object>();
		companyuser user;
		try {
			user = customerDao.getCompanyUserForPrivateEquity(email);
		} catch (Exception e) {
			e.printStackTrace();
			model.put("res", "error");
			return model;
		}

		model.put("data", user);
		user.setEmail(email);
		model.put("res", "success");
		return model;
	}

	@ResponseBody
	@RequestMapping(value = "/financepublish", method = RequestMethod.POST)
	public Object postPublish(HttpServletRequest req) {
		Map<String, String> map = new HashMap<String, String>();
		HttpSession session = req.getSession();
		String sessionId = (String) session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];

		privateEquity customer = new privateEquity();

		customer.setCustomer(email);

		try {
			customer.setPubMoneyMin(Double.parseDouble(req
					.getParameter("publishMoneyMin")));
			customer.setPubMoneyMax(Double.parseDouble(req
					.getParameter("publishMoneyMax")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "输入正确的发行金额");
			return map;
		}

		try {
			customer.setPubFixedYears(Integer.parseInt(req
					.getParameter("publishFixedYesrs")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的年限");
			return map;
		}

		customer.setPubFinsh(req.getParameter("publishFinsh"));

		try {
			customer.setOccupyPercentMin(Double.parseDouble(req
					.getParameter("occupyPercentMin")));
			customer.setOccupyPercentMax(Double.parseDouble(req
					.getParameter("occupyPercentMax")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的占股比例");
			return map;
		}

		try {
			customer.setNetAsset(Double.parseDouble(req
					.getParameter("netAsset")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的净资产");
			return map;
		}

		customer.setExitWay(req.getParameter("exitWay"));

		try {
			customer.setTurnover(Double.parseDouble(req
					.getParameter("turnover")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的营业额");
			return map;
		}

		customer.setCurrentStage(req.getParameter("currentStage"));
		try {
			customer.setNetProfit(Double.parseDouble(req
					.getParameter("netProfit")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的利润");
			return map;
		}

		try {
			customer.setExitMintime(Integer.parseInt(req
					.getParameter("exitMinTime")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "输入正确的最低退出时间");
			return map;
		}

		try {
			customer.setInvestmentMinRequest(Double.parseDouble(req
					.getParameter("investmentMinRequest")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "输入正确的投资门槛");
			return map;
		}

		customer.setBondsman(req.getParameter("bondsman"));

		try {
			customer.setMinAddTo(Double.parseDouble(req
					.getParameter("minAddto")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "输入正确的追加金额");
			return map;
		}

		String timestamp = new Timestamp(System.currentTimeMillis()).toString();
		int times = timestamp.lastIndexOf(".");
		String time = timestamp.substring(0, times);
		customer.setTime(time);

		try {
			privateCus.insert(customer);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "发布失败，稍后再试");
			return map;
		}

		map.put("res", "发布成功");
		return map;
	}

	@RequestMapping("/chat")
	public String getChat(HttpSession session, Model model) {
		String sessionChar = (String) session.getAttribute("citiuser");
		ArrayList<Investor> friendList = investorD.getInvestorAll();
		model.addAttribute("friendList", friendList);
		String[] email = sessionChar.split("=");
	
		model.addAttribute("companyname", customerDao.getCompanyUserByEmail(email[1]).getCompanyName());
		model.addAttribute("session", sessionChar);
		return "company/company-chat";
	}

	@RequestMapping("/resavation")
	public String getResavation() {
		return "company";
	}

	@RequestMapping("/privateList")
	public String getPrivateList() {
		return "company/publish-private-list";
	}

	@RequestMapping("/modifyContract")
	public String getmodifyContract() {
		return "company/modify-contract";
	}

	@RequestMapping(value = "/raisedbonds", method = RequestMethod.GET)
	public String getRaisedBonds(HttpSession session, Map<String, Object> model) {
		String sessionId = (String) session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];
		companyuser user = customerDao.getCompanyUserForPrivateEquity(email);
		model.put("companyName", user.getCompanyName());
		model.put("registerAddress", user.getRegisterAddress());
		model.put("createTime", user.getCreateTime());
		model.put("registerCapital", user.getRegisterCapital());
		model.put("workField", user.getWorkField());
		return "company/privately-raised-bonds";
	}

	@ResponseBody
	@RequestMapping(value = "/raisedbonds", method = RequestMethod.POST)
	public Object postRaiseBonds(HttpServletRequest req) {
		HttpSession session = req.getSession();
		String sessionId = (String) session.getAttribute("citiuser");
		String email = sessionId.split("=")[1];
		Map<String, String> map = new HashMap<String, String>();
		privateDebt customer = new privateDebt();

		customer.setCustomer(email);
		try {
			customer.setPubMoneyMin(Double.parseDouble(req
					.getParameter("publishMoneyMin")));
			customer.setPubMoneyMax(Double.parseDouble(req
					.getParameter("publishMoneyMax")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的发行金额，必须为数字");
			return map;
		}

		String returnMoneyWay = req.getParameter("returnMoneyWay");
		if (returnMoneyWay.equals("")) {
			map.put("res", "还款方式不能为空");
			return map;
		}

		if (returnMoneyWay.length() > 120) {
			map.put("res", "字数不能超过120");
			return map;
		}

		customer.setReturnMoneyWay(returnMoneyWay);

		try {
			customer.setoccupyMaxInterestMin(Double.parseDouble(req
					.getParameter("occupyMaxInterestMin")));
			customer.setoccupyMaxInterestMax(Double.parseDouble(req
					.getParameter("occupyMaxInterestMax")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "输入正确的可承担利息");
			return map;
		}

		String occupyTime = req.getParameter("occupyTime");

		if (occupyTime.equals("") || occupyTime.length() > 60) {
			map.put("res", "输入正确的资金占用时常，且不能超过60字");
			return map;
		}

		customer.setOccupyTime(occupyTime);

		try {
			customer.setPubFixedYears(Integer.parseInt(req
					.getParameter("publishFixedYears")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "输入正确的年限，只能为数字");
			return map;
		}

		String publishFinsh = req.getParameter("publishFinsh");
		if (publishFinsh.equals("") || publishFinsh.length() > 120) {
			map.put("res", "请输入正确的发行完成，不能超过120字");
			return map;
		}

		customer.setPubFinsh(publishFinsh);

		try {
			customer.setNetAsset(Double.parseDouble(req
					.getParameter("netAsset")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "输入正确的营收");
			return map;
		}

		customer.setRiskCotrollReq(req.getParameter("riskControllRequest"));

		try {
			customer.setTurnover(Double.parseDouble(req
					.getParameter("turnover")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "输入正确的营收");
			return map;
		}

		String bondsman = req.getParameter("bondsman");
		if (bondsman.equals("")) {
			map.put("res", "担保人不能为空");
			return map;
		}
		customer.setBondsman(bondsman);

		String returnSource = req.getParameter("returnSource");
		if (returnSource.equals("")) {
			map.put("res", "还款来源不能为空");
			return map;
		}
		customer.setReturnSource(returnSource);

		try {
			customer.setNetProfit(Double.parseDouble(req
					.getParameter("netProfit")));
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "请输入正确的纯利润");
			return map;
		}

		try {
			privateDebtCus.insert(customer);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("res", "发布失败，稍后再试");
			return map;
		}
		map.put("res", "发布成功");
		return map;
	}

	@RequestMapping("/communicationHistory")
	public String getCommunicationHistory() {
		return "company/communication-history";
	}

	@RequestMapping("/currentReservation")
	public String getCurrentReservation() {
		return "company/current-reservation";
	}

	@RequestMapping("/finishedReservation")
	public String getFinishedReservation() {
		return "company/finished-reservation";
	}

	public webSocketServer getWebSocketServer() {
		return new webSocketServer();
	}
	
	@ResponseBody
	@RequestMapping(value = "/chatMsg", method = RequestMethod.POST)
	public Object getUnReadMessage(HttpServletRequest req) throws IOException {
		Map<String, String> map = new HashMap<String, String>();
		String toEmail = req.getParameter("to");
		String data = req.getParameter("data");
		if(data.equals("")) {
			map.put("res", "");
			return map;
		}
		try {
			getWebSocketServer().sendMessageToUSer(toEmail,
					new TextMessage(data));
		} catch(Exception e) {
			e.printStackTrace();
			map.put("res", "error");
		}
		
		map.put("connect", "success");
		return map;
	}

	@RequestMapping("/logout")
	public String logout(HttpSession session) {

		if (session.getAttribute("citiuser") instanceof companyuser) {
			session.setAttribute("citiuser", null);
			return "redirect:/customer/index";
		}

		return "redirect:/customer/index";
	}
	
	@RequestMapping("/isource")
	public String getIsource() {
		return "company/isource";
	}
	
	@RequestMapping("/isourceEdit")
	public String getIsourceEdit() {
		return "company/sourceEdit";
	}

	@ResponseBody
	@RequestMapping("/corporateModel/{type}")
	public Object getCorporateModel(@PathVariable String type) {
		Map<String, Object> model = new HashMap<String, Object>();
		ArrayList<corporateModel> cor;

		try {
			cor = customerDao.getCorporateModel();
		} catch (Exception e) {
			e.printStackTrace();
			model.put("res", "error");
			return model;
		}

		model.put("data", cor);
		model.put("res", "success");
		return model;

	}

	@ResponseBody
	@RequestMapping("/stock/{id}")
	public Object getstock(@PathVariable String id) {
		Map<String, Object> model = new HashMap<String, Object>();
		stock s;
		try {
			s = customerDao.getstock(id);
		} catch (Exception e) {
			e.printStackTrace();
			model.put("error", "error");
			return model;
		}

		model.put("stock", s);
		return model;
	}

	@ResponseBody
	@RequestMapping("/debt/{id}")
	public Object getDebt(@PathVariable String id) {
		Map<String, Object> model = new HashMap<String, Object>();
		debt d;

		try {
			d = customerDao.getdebt(id);
		} catch (Exception e) {
			e.printStackTrace();
			model.put("debt", "error");
			return model;
		}

		model.put("debt", d);
		return model;
	}


}
