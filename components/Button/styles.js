import styled from 'styled-components';

export const Container = styled.div`
  .button {
    display: inline-block;
    text-decoration: none;
    position: relative;
}

.button .bottom {
    position: absolute;
    left: 7px;
    top: 7px;
    width: 100%;
    height: 100%;
    background-color: #772ce8;
    display: block;
    transition: all .15s ease-out;
}

.button .top {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 24px 34px 22px 34px;
    border: 2px solid #ffffff;
}

.button .top .label {
    font-feature-settings: "salt" on;
    font-family: Prophet,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-weight: 600;
    color: #ffffff;
    font-size: 14px;
    line-height: 110%;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    transition: all .15s ease-out;
}

.button:hover .bottom {
    left: 0;
    top: 0;
    background-color: #772ce8;
}

.button:hover .top .label {
    color: #ffffff;
}

.button-border {
    position: absolute;
    background-color: #772ce8;
    transition: all .25s ease-out;
}

.button:hover .top .button-border-left,.button:hover .top .button-border-right {
    height: calc(100% + 2px);
}

.button:hover .top .button-border-top,.button:hover .top .button-border-bottom {
    width: calc(100% + 2px);
}

.button-border-left {
    left: -2px;
    bottom: -2px;
    width: 2px;
    height: 0;
}

.button-border-top {
    left: -2px;
    top: -2px;
    width: 0;
    height: 2px;
}

.button-border-right {
    right: -2px;
    top: -2px;
    width: 2px;
    height: 0;
}

.button-border-bottom {
    right: -2px;
    bottom: -2px;
    width: 0;
    height: 2px;
}
`;