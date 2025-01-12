"use client";

import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import styled from "styled-components";
import {MealReviewFormSchema} from "@/lib/schemas";
import {Section, SectionTitle} from "@/components/ui/Container";
import {Input} from "@/components/ui/Input";
import MealPng from "@/assets/meal.png";
import {Button} from "@/components/ui/Button";
import Link from "next/link";
import Image from 'next/image';
import {NicknameInput} from "@/components/NicknameInput";
import {Sora} from 'next/font/google'
import {Rating} from "@/components/Rating";
import {MealReviewCard} from "@/components/MealReviewCard";
import {Review} from "@/lib/types";
import {useRouter} from "next/navigation";
import {createReview, updateReview} from "@/lib/actions";

const sora = Sora({
  weight: '400',
  subsets: ['latin'],
})

// Styled Components

const MealComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const MealImage = styled(Image)`
    width: 72px;
    height: 72px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 15px;
`;

const MealName = styled.p`
    font-weight: bold;
    margin: 0;
    font-size: 14px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

const Checkbox = styled.input`
    margin-right: 10px;
    accent-color: #0A6629;
`;

const UnderlinedLink = styled(Link)`
    text-decoration: underline;
    color: #0A6629;
`;

const Label = styled.label`
    font-weight: 400;
    font-size: 12px;
`;

const ComponentInput = styled(Input)`
    padding: 13px;
    margin-left: 10px;

    &:focus {
        border-color: #666;
    }
`;

interface FormData {
  mealComponents: { name: string; feedback: string; rating: number }[];
  mealSummary: { content: string; rating: number };
  nickname: string;
  termsAccepted: boolean;
}

interface MealReviewFormProps {
  review?: Review;
}

// Component
export const MealReviewForm = ({review}: MealReviewFormProps) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(MealReviewFormSchema),
    defaultValues: {
      mealComponents: [
        {name: "Moroccan Chicken", feedback: "Test", rating: review?.rating || 3},
        {name: "Couscous Pilaf", feedback: "Test", rating: review?.rating || 3},
        {name: "Turkey Meatloaf", feedback: "Test", rating: review?.rating || 3},
      ],
      mealSummary: {content: review?.content || "", rating: review?.rating || 3},
      nickname: review?.author || "",
      termsAccepted: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    const newData: Omit<Review, 'id'> = {
      content: data.mealSummary.content,
      author: data.nickname,
      title: review?.title || data.mealSummary.content,
      rating: data.mealSummary.rating,
    }

    if (review) {
      await updateReview(review.id, newData)
    } else {
      await createReview(newData);
    }
    router.push("/");
  };

  return (
      <form className={sora.className + ' h-fit flex flex-col justify-between'} onSubmit={handleSubmit(onSubmit)}>

        <SectionTitle>Meal Components</SectionTitle>
        <Section>
          {["Moroccan Chicken", "Couscous Pilaf", "Turkey Meatloaf"].map(
              (meal, index) => (
                  <MealComponent key={index}>
                    <MealImage src={MealPng} alt={meal}/>
                    <div>
                      <MealName>{meal}</MealName>
                      <Rating value={review?.rating || 3} onChange={() => {
                      }}/>
                    </div>
                    <ComponentInput
                        {...register(`mealComponents.${index}.feedback` as const)}
                        placeholder="Your thoughts about the component"
                    />
                    {errors?.mealComponents?.[index]?.feedback && (
                        <p style={{color: "red"}}>
                          {errors.mealComponents[index].feedback.message}
                        </p>
                    )}
                  </MealComponent>
              )
          )}
        </Section>

        <hr className='my-3'/>

        <SectionTitle>Meal Review</SectionTitle>
        <Section>
          <Controller
              name="mealSummary"
              control={control}
              render={({field}) => (
                  <>
                    <MealReviewCard
                        rating={field.value.rating}
                        image={MealPng}
                        content={field.value.content}
                        title={review?.title || "My Meal Review"}
                        onReviewChange={field.onChange}
                    />
                    {errors.mealSummary && (
                        <p style={{color: "red"}}>{errors.mealSummary.message}</p>
                    )}
                  </>
              )}
          />
        </Section>

        <Section className='mt-10'>
          <NicknameInput register={register} name="nickname"/>
          {errors.nickname && (
              <p style={{color: "red"}}>{errors.nickname.message}</p>
          )}
        </Section>

        <CheckboxContainer>
          <Checkbox type="checkbox" {...register("termsAccepted")} />
          <Label>
            I confirm that I have read and accepted{" "}
            <UnderlinedLink href="/">Terms and Conditions</UnderlinedLink> and{" "}
            <UnderlinedLink href="/">Privacy Policy</UnderlinedLink>
          </Label>
        </CheckboxContainer>
        {errors.termsAccepted && (
            <p style={{color: "red"}}>{errors.termsAccepted.message}</p>
        )}

        <Button className='mt-5' type="submit">Submit Review</Button>
      </form>
  );
};