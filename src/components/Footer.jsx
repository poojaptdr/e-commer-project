import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-sort">
        <div className="grid">
          <div>
            <h3>Ready To Get Started</h3>
            <h3>Talk To Us Today</h3>
          </div>

          <div>
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grids">
          {/* 1st column */}
          <div className="footer-about">
            <h3>Pooja Patidar</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
              ab.
            </p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="email"
              />

              <input
                type="submit"
                required
                autoComplete="off"
                value="subscribe"
              />
            </form>
          </div>

          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social-icons">
              <div>
                <a href="">
                  <FaDiscord className="icon" />
                </a>
              </div>

              <div>
                <a href="">
                  <FaInstagram className="icon" />
                </a>
              </div>

              <div>
                <a href="https://www.youtube.com/" target="_blank">
                  <FaYoutube className="icon" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <p>9876543210</p>
          </div>
        </div>

        {/* bottom section */}

        <div className="footer-bottom-section">
        <hr/>

        <div className="container grid1">
          <p>@{new Date().getFullYear()} PoojaPatidar. All Rights Reserved</p>

        <div>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
     </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-sort {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-content: end;
      align-self: center;
    }
  }

  .grids {
    display: flex;
    justify-content: center;
    gap: 3.5rem;
  }

  footer {
    padding: 10rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social-icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 0.7rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icon {
          color: ${({ theme }) => theme.colors.white};
          font-size: 1.5rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom-section{
      padding-top: 9rem;

      hr{
        margin-bottom: 2rem;
        color: ${({theme})=> theme.colors.hr};
        height: .1px
      }

      .grid1{
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media(max-width: ${({theme})=> theme.media.mobile}){
  .contact-sort{
       max-width: 95vw;
       padding: 2rem 0;
       text-align: center;
  }
  .grids{
    flex-wrap: wrap;
    width: 50vw;
    padding: 0;
  }

  .grid{
       flex-direction: column;
  }

  .grid1{
        flex-direction: column;
        gap: 2rem;
      }
  
}
`;

export default Footer;
