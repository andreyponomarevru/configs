# Setting up Nginx as HTTPS Web Server

![](./architecture.svg)

---

**NOTE:** THIS IS THE CONFIGURATION FOR LOCAL DEVELOPMENT ENVIRONMENT ONLY. The production config is more involved.

**NOTE:** the project contains only one container - `nginx`. `website` folder is outside of the container's folder just for convenience, it is mounted as a volume inside the container.

---

In this demo project, Nginx performs the role of a regular webserver (not (reverse)proxy as it usually does) with enabled SSL. 

It also redirects all HTTP (:80) (:8000 on our machine hosting Docker) requests to HTTPS (:443). 

You can verify that redirection happens by running `curl http://test.com:8000`. The response will be `301 Moved Permanently`, as expected (this behavior is defined in the Nginx config file). When you open the address in the browser, redirection happens too but silently. You can see the redirect if you enable "Preserver Log" options in Chrome Dev Tools on a  "Network" tab.

To verify the server is using SSL issue `curl -Ik --verbose https://test.com`. `-I` tells the cURL to send `HEAD` request retrieving only response headers. `-k` (`--insecure`) disables certificate validation. Omitting the`-k` flag will result in an `SSL certificate problem: self signed certificate` error. In the output you'll see the details related to SSL:
  
  ```shell
  ...
  * successfully set certificate verify locations:
  *   CAfile: /etc/ssl/certs/ca-certificates.crt
    CApath: /etc/ssl/certs
  * TLSv1.3 (OUT), TLS handshake, Client hello (1):
  * TLSv1.3 (IN), TLS handshake, Server hello (2):
  * TLSv1.2 (IN), TLS handshake, Certificate (11):
  * TLSv1.2 (IN), TLS handshake, Server key exchange (12):
  * TLSv1.2 (IN), TLS handshake, Server finished (14):
  * TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
  * TLSv1.2 (OUT), TLS change cipher, Change cipher spec (1):
  * TLSv1.2 (OUT), TLS handshake, Finished (20):
  * TLSv1.2 (IN), TLS handshake, Finished (20):
  * SSL connection using TLSv1.2 / ECDHE-RSA-AES256-GCM-SHA384
  * ALPN, server accepted to use h2
  * Server certificate:
  *  subject: CN=test.com
  *  start date: Oct 10 11:30:53 2020 GMT
  *  expire date: Oct  8 11:30:53 2030 GMT
  *  issuer: CN=test.com
  *  SSL certificate verify result: self signed certificate (18), continuing anyway.
  ...
  ```

To test the server in the browser, when you visit `http://test.com` and get `Invalid certificate` error, just click "Continue anyway". The website will be served through HTTPS. To verify this, open Chrome Dev Tools, "Network" tab and enable "Scheme" and "Protocol" columns. Then, reload the page. Also, note that our server uses HTTP/2. 

> Nginx config file `/conf.d/default.conf` contains some commented out PHP configuration directives, they are undrelated to the subject, I keep them for personal reference and will delete in the future
