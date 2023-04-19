import styled from "styled-components"
import LoginForm from "./LogInForm";
import List from "./List";

const Login = (props) => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const maxItems = 3;
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/LinkedIn_Logo_2013.svg" alt="" />
        </a>

        <div className="icons">
          <Icon>
            <img src="/images/compass-2_icon-icons.com_64219.svg" alt="" />
            <small>Discover</small>
          </Icon>
          <Icon>
            <img src="/images/people_111145.svg" alt="" />
            <small>People</small>
          </Icon>
          <Icon>
            <img src="/images/videoplayminimono_105851.svg" alt="" />
            <small>Learning</small>
          </Icon>
          <Icon>
            <img src="/images/briefcase.png" alt="" />
            <small>Jobs</small>
          </Icon>
        </div>

        <div className="Register">
          <Join>Join now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>

          <Form>
            <LoginForm />
            <div class="horizontal-line">
              <span class="or">or</span>
            </div>
            <Google>
              <img src="/images/google_icon-icons.com_62736.svg" alt="" />
              Continue with Google
            </Google>

            <Google>New to LinkedIn? Join now</Google>
          </Form>
          <img id="hero-image" src="/images/hero.svg" alt="" />
        </Hero>
      </Section>
      <Topics>
        <div className="explore-topics">
          <p>Explore topics you are interested in</p>
          <List items={items} maxItems={maxItems} />
        </div>
        <div className="current-topics">
          <h1>content topics</h1>
          <div>
            <ul className="more-topics">
              <li>
                <a href="">See All Topics</a>{" "}
              </li>
              <li>
                <a href="">Workplace</a>
              </li>
              <li>
                <a href="">Job Search</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Interview</a>
              </li>
              <li>
                <a href="">Salary and Compensation</a>
              </li>
              <li>
                <a href="">Internships</a>
              </li>
              <li>
                <a href="">Employee Benefits</a>
              </li>
            </ul>
          </div>
        </div>
      </Topics>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  // max-width: 1128px;
  // margin: auto;
  // padding: 12px 0 16px;
  // display: flex;
  // align-items: center;
  // position: relative;
  // justify-content: space-between;
  // flex-wrap: wrap;


   max-width: 1128px;
    margin: auto;
    padding: 12px 0px 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
}

n
     
}

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      row-gap: 8px;
      width: 100px;
      padding: 0 5px;
     
    }
  }
`;

const Join = styled.a`
  min-height: 48px;
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 1rem;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }

  @media (max-width: 768px) {
     {
      font-size: 16px;
      width: 135px;
      height: 34px;
      padding: 12px 24px;
      margin-right: 8px;
    }
  }
`;

const SignIn = styled.a`
  min-height: 8px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 18px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    font-color: #0a66c2;
    text-decoration: none;
  }

  @media (max-width: 768px) {
     {
      font-size: 16px;
      width: 135px;
      height: 34px;
      padding: 12px 24px;
      margin-right: 8px;
    }
  }
`;

const Section = styled.section`
  display: flex;
  align-items: start;
  height: 40vh;
  padding-bottom: 138px;
  padding-top: 20px;
  padding: 60px 0;
  position: relative;
  flex-wrap: nowrap;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: 0;
    min-height: 560px;
    overflow: hidden;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 0;
  
  h1 {
   
    padding-bottom: 0;
    width: 50%;
    color: #8f5849;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans",
      Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial,
      sans-serif;
    font-size: 56px;
    font-weight: 200;
    

    @media (max-width: 768px) {
      width: 52%;
      margin-left: 0;
      font-size: 56px;
      font-weight: 200;
      text-align: left;
      // z-index: 1;
    }
  }

  #hero-image {
    display: block;
    width: 700px;
    height: 500px;
    position: relative;
    bottom: -2px;
    right: -38rem;
     top: -470px;
    
    

    @media (max-width: 768px) {
        display: block;
        top: 230px;
        max-width: 700px;
        position: relative;
        height: 560px;
        right: 0;
        top: -150px;
        left: 25rem;
        overflow-x: hidden;
       
        
       
}
    }

  
    }
  }
`;

const Icon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    // background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }

  img {
    width: 18px;
    height: 20px;
    fill: none;

     &:hover {
    // background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }

  
`;

const Form = styled.div`
  width: 50%;
  margin-top: 10px;
  width: 408px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 2.5rem;
  border-radius: 2rem;
  border: 1px solid #cacfcc;

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }

  img {
    width: 20px;
    height: 20px;
    padding-right: 5px;
  }
`;

const Topics = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20rem;
  width: 71.9%;
  display: flex;
`;

export default Login;




