import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.svg';

const Wrapper = styled.li`
  border: 0.5px solid #ddd;
  border-radius: 5px;
  width: 15em;
  height: 100%;
  display: block;
  padding: 15px;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Lucida Grande,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Emoji,Segoe UI Symbol,Hiragino Kaku Gothic Pro,Meiryo,Hiragino Sans GB W3,Noto Naskh Arabic,Droid Arabic Naskh,Geeza Pro,Simplified Arabic,Noto Sans Thai,Thonburi,Dokchampa,Droid Sans Thai,Droid Sans Fallback,'.SFNSDisplay-Regular',Heiti SC,Microsoft Yahei;

  .content {
    .position {
      h3 {
        margin: 5px 0 0;
        font-weight: 550;
      }
    }

    .companyname {
      h4 {
        margin: 5px 0 0;
      }
    }

    .address {
      h5 {
        margin: 5px 0;
        font-size: 0.8em;
        font-weight: 400;
        line-height: 1.7em;
        color: rgba(0,0,0,.6);
      }
    }

    .relation {
      i {
        margin: 5px 0;
        font-size: 0.8em;
        padding: 5px;
        border-radius: 3px;
        background: #1792C8;
        color: #96CEE6;
      }
      span {
        color: rgba(0,0,0,.6);
        font-size: 0.8em;
        padding: 0 7px;
        vertical-align: middle;
      }
    }
  }

  .footer {
    color: rgba(0,0,0,.6);
    font-size: 0.7em;
    vertical-align: middle;
    line-height: 1em;

    .footer-border {
      content: '';
      width: 40px;
      height: 0;
      border-bottom: 1px solid #cdcfd2;
      margin: 8px 0;
      order: -1;
    }

    .notification {
      display: inline-block;

      i {
        font-size: 1.4em;
        padding: 0 5px;
        color: #0C6195;
      }
    }
  }
`

const LinkedinJobPosting = () => {
  return (
    <Wrapper>
      <div className="cover">
        <img src={logo} alt="logo"/>
      </div>

      <div className="content">
        <div className="position">
          <h3>Product Manager</h3>
        </div>

        <div className="companyname">
          <h4>Kanpaniii</h4>
        </div>

        <div className="address">
          <h5>Within 23 wards, Tokyo, Japan</h5>
        </div>

        <div className="relation">
          <i class="fas fa-university"/>
          <span>14人の卒業生</span>
        </div>
      </div>

      <div className="footer">
        <div className="footer-border"/>
        <time>
          <span>1週間前</span>
        </time>
        <div className="notification">
          <i class="fab fa-linkedin"/>
          <span>Easy応募</span>
        </div>
      </div>
    </Wrapper>
  )
};

export default LinkedinJobPosting;
