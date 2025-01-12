import * as yup from "yup";

export const MealReviewFormSchema = yup.object().shape({
  mealComponents: yup
      .array()
      .of(
          yup.object().shape({
            feedback: yup.string().required("Feedback is required"),
            name: yup.string().required("Name is required"),
            rating: yup.number().required("Rating is required").min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
          })
      )
      .required(),
  mealSummary: yup.object().shape({
    content: yup.string().required("Meal summary is required"),
    rating: yup.number().required("Rating is required").min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
  }).required(),
  nickname: yup.string().required("Nickname is required"),
  termsAccepted: yup.boolean().required().oneOf([true], "You must accept the terms"),
}).required();