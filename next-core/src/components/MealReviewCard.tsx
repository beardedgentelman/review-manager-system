import styled from 'styled-components';
import {Rating} from "@/components/Rating";
import {TextArea} from "@/components/ui/TextArea";
import Image, {StaticImageData} from "next/image";

const Flex = styled.div`
    display: flex;
    justify-content: start;
    gap: 10px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 280px;
    width: 235px;
    padding: 10px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const MealImage = styled(Image)`
    width: 200px;
    height: 150px;
    border-radius: 4px;
    place-self: center;
    object-fit: cover;
`;

const ContentSection = styled.div`
    flex: 1;
`;

const Title = styled.h3`
    margin: 0 0 10px 0;
    font-size: 14px;
    font-weight: bold;
`;

const RatingText = styled.span`
    color: #6B7280;
    font-size: 14px;
    margin-left: 4px;
`;

interface MealReviewCardProps {
  image: StaticImageData;
  title: string;
  content: string;
  rating: number;
  onReviewChange?: (value: { content: string; rating: number }) => void;
}

export const MealReviewCard = ({
                                 image,
                                 title,
                                 rating,
                                 content,
                                 onReviewChange
                               }: MealReviewCardProps) => {


  return (
      <Flex>
        <Card>
          <MealImage src={image} alt={title}/>
          <Title>{title}</Title>
          <Flex>
            <Rating value={rating} onChange={(num) => onReviewChange?.({content, rating: num})}/>
            <RatingText>{rating}/5</RatingText>
          </Flex>
        </Card>
        <ContentSection>
          <TextArea
              placeholder="Meal Summary Review"
              value={content}
              onChange={(e) => onReviewChange?.({content: e.target.value, rating})}
          />
        </ContentSection>
      </Flex>
  );
};
