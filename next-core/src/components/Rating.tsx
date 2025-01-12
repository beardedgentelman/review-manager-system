import {useState} from "react";
import styled from "styled-components";
import {Star} from "lucide-react";

interface RatingProps {
  value: number;
  onChange: (rating: number) => void;
}

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const StarIcon = styled(Star)<{ $active: boolean }>`
    fill: ${(props) => (props.$active ? "#FFA500" : "#ddd")};
    color: ${(props) => (props.$active ? "#FFA500" : "#ddd")};
    margin-right: 5px;
    transition: fill 0.3s;

    &:hover {
        color: #ffa500;
    }
`;

export const Rating = ({value, onChange}: RatingProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleClick = (index: number) => {
    onChange(index);
  };

  return (
      <RatingContainer>
        {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon
                $active={hovered ? index <= hovered : index <= value}
                key={index}
                size={24}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
            />
        ))}
      </RatingContainer>
  );
};
