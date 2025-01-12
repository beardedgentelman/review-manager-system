"use client"

import styled from "styled-components";

export const Container = styled.div`
    min-width: 750px;
    max-width: 750px;
    width: 750px;
    height: max-content;
    margin: 0 auto;
    padding: 36px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 24px;
`;

export const Section = styled.div`
    margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
    text-align: left;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 16px;
    color: #333;
`;