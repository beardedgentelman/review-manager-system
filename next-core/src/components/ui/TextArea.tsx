import styled from "styled-components";

export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    font-size: 14px;
    border: 2px solid #ddd;
    border-radius: 4px;
    resize: none;
    padding: 10px;

    &:focus {
        outline: none;
        border-color: #666;
    }
`;