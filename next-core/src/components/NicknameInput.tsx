import React from "react";
import styled from "styled-components";
import {Edit3} from "lucide-react";
import {Input} from "@/components/ui/Input";

interface NicknameInputProps {
  register: any;
  name: string;
}

const NicknameInputWrapper = styled.div`
    position: relative;
    margin-top: 20px;
`;

const NicknameInputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
    position: relative;

    &:focus-within {
        border-color: #666;
    }
`;

const NicknameLabel = styled.label`
    position: absolute;
    top: -10px;
    left: 10px;
    background: white;
    font-size: 12px;
    color: #666;
    padding: 0 5px;
    font-weight: bold;
    z-index: 99;
`;

const NicknameInputField = styled(Input)`
    border: none;
`;

const EditIcon = styled(Edit3)`
    margin-left: 10px;
    margin-right: 10px;
    color: #0A6629;
    cursor: pointer;

    &:hover {
        color: #05431a;
    }
`;

export const NicknameInput = ({register, name}: NicknameInputProps) => {
  return (
      <NicknameInputWrapper>
        <NicknameLabel>Your Nickname (other users will see this)</NicknameLabel>
        <NicknameInputContainer>
          <NicknameInputField
              {...register(name)}
              placeholder="Enter your nickname"
          />
          <EditIcon size={24}/>
        </NicknameInputContainer>
      </NicknameInputWrapper>
  );
};
