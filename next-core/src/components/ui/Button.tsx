"use client"

import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    background-color: #0A6629;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #055a22;
    }
`;
