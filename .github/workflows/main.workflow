action "Run deploy script"{
	uses = "maddox/actions/ssh@master"
	args = "whoami"
	secrets = [
		"MIIEowIBAAKCAQEAwMCuS9flwAoR7/btrEegUDC9vyt7D7+t3AYorxPwylwexDnhfFDZiFIyIZAO
		iRkSQ4v7/x8jbpM+FGYZ28Zgvf2s6PpvdMPj7AhtpN+eau+40rjLJktTxMWGZRI+wMXGm0XKDR4x
		pLE37h4X5wioq8AzHrU2kpAMf7doN3RYsKVSO2hCz8SQRp/CFZ4zkhUjMtCMqNKBcxWzH8myr40x
		3n4wD48MsR1DPAHtsvTjcsEwuRDI/OoyeQJXbNIBlugMVFHI8LW6Ohq5/tUVI9XALHYyLLDuutpU
		fa2p2NS4IQ3B+7L5qMvBcO4ftiGM9y6RE2IiNJmiax2z37tJk/BMJwIDAQABAoIBADoa22/piUy2
		vGmGGmeQv/bseoaiaNp6gcKN6L2+WRvnYS7t89cx2CGMBaiwcHFLqYHLNQ/XJysyH8iubqUdzBP5
		4KHqvKaKVq7Ua5kEABFkama7ZiIJGxt6H+Vf9qLN++zawOnrbDOlaKLTV4lBxvbfXYmoPuc3nUzy
		0OvGmuXEqe6F2JhH8kJ1vKqrmI62qNpU+HdAzD+q812D5SH9QLRJpW7jArmxJYMLE0g8XOQLuqgg
		5ERm2UetDjKh34jPqHxC36ySGwNaTVZGIAlR/pTdbBblaon2+LOzy9gRkkNQE13QxlUBaaSdcTgU
		nFq2DOSxdngSSgK/pQV9ouNyTEECgYEA8p3ouyYT0h0ANUInyx2w4EHNI2A2w/hP+jYK8UwR+mnb
		mT3lmbqp1U75Jk3W3xgCF/g6h2LY7yWtyaSAnjjRaTUK1FJwITkgkujkaFJWG/cJe/sscPgp6EuF
		hbUZ5OQhcXCSp3rCZb0cIByvIDr5tns8HjdynYf/G2VaE1o7Gk8CgYEAy2KelsU01KBsTJm3x1Rr
		1ap/aOr7laqSeP9rr4iqgTFuD4eWdSFr7IzGJOjT7xkRHL8HVhxVZpczThWmn9I0D6kBCNcOm+M1
		VhcWYQvwbg8ETxhBdBNspKiWV7bqU0Cf7kvw1zXd1ifvxzznCrqezelkHyEP+oHcThV6wqAPsqkC
		gYEAjznbZ4guEU8fjVFVrpoDjhAqayTkj8IqbLq0sQhIYL1Xb1rUDXHdythJS2yOWbuRmNborn4T
		NPLYan6bk0xVi7dNglR8b5CLA09Lb66TuQSYa8G21aYbD1BuLaXg+HgYqiBb41UcJ/WBAhAM7okC
		W9Dah7gSCJ99YY3upBgTZg8CgYBluabOjEZXTwG78mqMJTpmPQfK5zT8b7shD8fBnR6CzcFZvRxQ
		6216fBKi5V0TSrtXYGh/9l30mQ2NMaEMcOufJY2h6UaiS6siqxuDYKBZu+MQ2HXsY8bEOJoxtwhO
		qZUUcCE+0u9orMLuKRT6Ncs1/FUaiMPgLNGOsImdDMetOQKBgCnGrRPJhG8fkEn/5/WlDSwlidA8
		xAQ+gUwFXWNLsa2Chv0TAzk61Q5opXdm/4xl059ErufIUeT5Z7z43f4lgxf2rkLrXubZVTMM8P60
		4pRcQxjnT7d/LgBwVqU1xVWm/lq2PLqE0j0pPBERCyjm7HxlfnpAgTsPZ7OqYJuLLBjS", # Private Key
		"ec2-13-209-41-76.ap-northeast-2.compute.amazonaws.com", # Host
		"ubuntu" # User
	]
}