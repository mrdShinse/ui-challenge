import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.svg';

const Wrapper = styled.div`
  width: 480px;
  min-height: 400px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.45);
  border-radius: 5px;

  input {
    border: none;
  }

  textarea {
    border: none;
    resize: none;
  }

  *:focus {
    outline: none;
  }

  .header {
    height: 18px;
    width: 440px;
    padding: 11px 20px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #424242;
    display: inline-flex;
    flex-direction: row;

    i {
      font-size: 1em;
      color: #ffffff;
      margin-right: auto;
    }

    .header-actions {
      i {
        color: lightgray;
        margin-left: 10px;
      }
    }
  }

  .body {
    .address {
      height: 39px;
      border-bottom: 0.5px solid gray;
      display: flex;

      input {
        margin-left: 20px;
        width: 380px;
      }

      .display-detail-address {
        margin: auto 20px auto auto;
      }
    }

    .content-container {
      display: flex;
      flex-direction: column;
      padding: 0 20px;

      .title {
        padding: 20px 0;
        font-size: 13px;
      }

      .content {
        height: 300px;
      }

      input {
        width: 100%;
      }
    }
  }
`

const InboxNewMailPanel = () => {
  return (
    <Wrapper>
      <div className="header">
        <i className="fas fa-envelope-open"/>

        <div className="header-actions">
          <i className="far fa-window-minimize"/>
          <i className="fas fa-arrows-alt"/>
          <i className="fas fa-times"/>
        </div>
      </div>

      <div className="body">
        <div className="address">
          <input type="text" className="to" placeholder="To" />
          <div className="display-detail-address">
            <i className="fas fa-angle-down"/>
          </div>
        </div>

        <div className="content-container">
          <input type="text" className="title" placeholder="件名" />
          <textarea rows="30" cols="50" className="content" placeholder="本文を入力してください" />
        </div>

        <div className="actions">
        </div>
      </div>
    </Wrapper>
  )
};

export default InboxNewMailPanel;
