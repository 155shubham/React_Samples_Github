import styled from "styled-components";

export const Styles = styled.div`
  .center {
    line-height: 24px;
    left-padding: 10px;
    text-align: center;
  }

  .right {
    position: absolute;
    right: 50px;
    top: 0px;
    width: 50px;
    padding-top: 1px;
    margin-top: 25px;
    background-color: rgb(250, 250, 0);
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
  }

  h1 {
    border-bottom: 1px solid white;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  h2 {
    border-bottom: 1px solid white;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  form {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }

  label {
    color: #3d3d3d;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .error {
    color: red;
    font-family: sans-serif;
    font-size: 12px;
    height: 30px;
  }

  .submitButton {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 50%;
    background-color: rgb(0, 0, 205);
  }

  .cancelButton {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 50%;
    background-color: rgb(0, 0, 205);
  }

  .submitButton:hover {
    background-color: rgb(0, 0, 230);
  }

  .divCss {
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
  }

  .login-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
