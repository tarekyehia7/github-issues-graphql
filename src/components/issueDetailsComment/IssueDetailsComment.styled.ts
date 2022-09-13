import styled from 'styled-components';

export const Box = styled.div`
    color: #24292f;
    background-color: #ffffff;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    margin-bottom: 1rem;
    position: relative;
    margin: 4rem;
    &:before {
        position: absolute;
        top: 11px;
        right: 100%;
        left: -8px;
        display: block;
        width: 8px;
        height: 16px;
        pointer-events: none;
        content: " ";
        clip-path: polygon(0 50%, 100% 0, 100% 100%);
        background-color: #d0d7de;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    color: #57606a;
    background-color: #f6f8fa;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

export const Body = styled.div`
    padding: 16px;
    font-size: 14px;
    color: black;
`;

export const AvatarImg = styled.img`
    position: absolute;
    left: -53px;
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    background-color: #ffffff;
    border-radius: 6px;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px #1b1f2426;
    border-radius: 50% !important;
    width: 2.5rem;
    height: 2.5rem;
`;