import {act, fireEvent, render, waitFor} from "@testing-library/react";
import {reviews} from '@/__tests__/__fixtures__/reviews';
import {ReviewList} from '@/components/ReviewList';
import mockRouter from 'next-router-mock';
import {deleteReview} from "@/lib/actions";


describe('ReviewList component', () => {
  (window.confirm as jest.Mock).mockImplementation(() => true);

  it('should render all reviews correctly', async () => {
    const {container} = render(<ReviewList reviews={reviews}/>);

    await waitFor(() => {
      reviews.forEach(review => {
        expect(container).toHaveTextContent(review.title);
        expect(container).toHaveTextContent(review.content);
        expect(container).toHaveTextContent(review.author);
        expect(container).toHaveTextContent(review.rating.toString());
      });
    });
  });

  it('should navigate to edit page on edit button click', async () => {
    await mockRouter.push("/");
    const {getAllByTitle} = render(<ReviewList reviews={reviews}/>);

    const editButtons = getAllByTitle('Edit');
    await act(async () => {
      fireEvent.click(editButtons[0]);
    });

    expect(mockRouter).toMatchObject({asPath: `/reviews/${reviews[0].id}`})
  });

  it('should call delete function on delete button click', async () => {
    const {queryByText, rerender, getAllByTitle} = render(<ReviewList reviews={reviews}/>);
    const deleteButtons = getAllByTitle('Delete');

    await act(async () => {
      fireEvent.click(deleteButtons[0]);
    });

    rerender(
        <ReviewList reviews={reviews.filter(r => r.id !== reviews[0].id)}/>
    );

    await waitFor(() => {
      expect(deleteReview).toHaveBeenCalledWith(reviews[0].id);
      expect(queryByText(reviews[0].title.toString())).not.toBeInTheDocument();
    });
  });

  it('should display an alert when deleteReview fails', async () => {
    (deleteReview as jest.Mock).mockRejectedValueOnce(new Error());
    const {getAllByTitle} = render(<ReviewList reviews={reviews}/>);

    const deleteButtons = getAllByTitle('Delete');
    await act(async () => {
      fireEvent.click(deleteButtons[0]);
    });

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith('Failed to delete review');
      expect(alert).toHaveBeenCalledTimes(1);
    });

    expect.assertions(2);
  });
});