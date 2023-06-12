import React from "react";

function Test() {
  return (
    <div>
      <div class="row h-100 justify-content-center">
        <div class="col-xl-4 col-md-8 col-sm-10 col-xs-10 align-self-center">
          <div>
            <form method="post">
              <h2>Create new account</h2>
              <div class="form-floating">
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  autocomplete="username"
                  maxlength="60"
                  required=""
                />
                <label for="email">Email</label>
              </div>
              <div class="form-floating">
                <input
                  name="password"
                  type="password"
                  minlength="8"
                  class="form-control"
                  id="password"
                  placeholder="Strong Randomized Password"
                  autocomplete="current-password"
                  required=""
                />
                <label for="password">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  name="name"
                  type="text"
                  maxlength="60"
                  class="form-control"
                  id="name"
                  placeholder="Your full name"
                  required=""
                />
                <label for="name">Full name</label>
              </div>
              <div
                class="g-recaptcha mb-3"
                data-sitekey="6Let0WQjAAAAAJkSIT5KDiG7oJYldMA3w2-UwIxU"
              >
                <div>
                  <div>
                    <iframe
                      title="reCAPTCHA"
                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Let0WQjAAAAAJkSIT5KDiG7oJYldMA3w2-UwIxU&amp;co=aHR0cHM6Ly9hcHAubmV3c2NhdGNoZXJhcGkuY29tOjQ0Mw..&amp;hl=en&amp;v=sNQO7xVld1CuA2hfFHvkpVL-&amp;size=normal&amp;cb=k44rpy5qed0b"
                      width="304"
                      height="78"
                      role="presentation"
                      name="a-4yivxq17qjmw"
                      frameborder="0"
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                    ></iframe>
                  </div>
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    class="g-recaptcha-response"
                  ></textarea>
                </div>
                <iframe></iframe>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <a href="/auth/forgot_password">Forgot password?</a>
                <button class="btn btn-lg btn-success" type="submit">
                  Create account
                </button>
              </div>
            </form>
          </div>
          <div class="mt-5">
            <hr />
            <p>
              Already have an account? <br />
              Go back to
              <a href="/auth/login">login</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;