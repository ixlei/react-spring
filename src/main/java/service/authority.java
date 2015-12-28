package service;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebFilter(filterName = "authority")
public class authority implements Filter {

	private FilterConfig fConfig;

	public authority() {

	}

	public void destroy() {
		this.fConfig = null;
	}

	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		HttpSession session = req.getSession(true);
		String loginPath = fConfig.getInitParameter("login");
		String servletPath = req.getServletPath();
		if (servletPath.equals("/")) {
			chain.doFilter(req, res);
		} else {
			String pathFirst = servletPath.split("/")[1];
			if (!pathFirst.equals("customer")
					&& !pathFirst.equals("webSocketServer")) {
				Object citiuser = session.getAttribute("citiuser");
				if (citiuser == null) {
					req.getRequestDispatcher(loginPath).forward(request,
							response);
				}
				String[] citiuserSplit = ((String) citiuser).split("=");
				if (pathFirst.equals("investor")) {
					if (citiuserSplit[0].equals("iid")
							&& citiuserSplit[1] != null) {
						res.setHeader("Access-Control-Allow-Origin", "*");
						chain.doFilter(request, res);
					} else {
						req.getRequestDispatcher(loginPath).forward(req, res);
					}
				}
				if (pathFirst.equals("company")) {
					if (citiuserSplit[0].equals("cid")
							&& citiuserSplit[1] != null) {
						chain.doFilter(req, res);
					} else {
						req.getRequestDispatcher(loginPath).forward(req, res);
					}
				}
			} else {
				chain.doFilter(request, response);
			}
		}

	}

	public void init(FilterConfig fConfig) throws ServletException {
		this.fConfig = fConfig;
	}

}
